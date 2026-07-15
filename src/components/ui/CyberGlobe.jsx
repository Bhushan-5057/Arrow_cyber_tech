"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
const GLOBE_RADIUS = 92;
const MAP_RADIUS = 93.4;
const ATMOSPHERE_RADIUS = 106;
const TECH_HUBS = [
    { name: "San Francisco", lat: 37.7749, lon: -122.4194, size: 1.2 },
    { name: "New York", lat: 40.7128, lon: -74.006, size: 1.08 },
    { name: "London", lat: 51.5074, lon: -0.1278, size: 1.1 },
    { name: "Frankfurt", lat: 50.1109, lon: 8.6821 },
    { name: "Tel Aviv", lat: 32.0853, lon: 34.7818 },
    { name: "Bengaluru", lat: 12.9716, lon: 77.5946, size: 1.1 },
    { name: "Singapore", lat: 1.3521, lon: 103.8198, size: 1.12 },
    { name: "Tokyo", lat: 35.6762, lon: 139.6503, size: 1.12 },
    { name: "Sydney", lat: -33.8688, lon: 151.2093 },
    { name: "Sao Paulo", lat: -23.5558, lon: -46.6396 },
];
const CONNECTIONS = [
    { from: TECH_HUBS[0], to: TECH_HUBS[2], color: "#38bdf8", speed: 0.115, offset: 0.05 },
    { from: TECH_HUBS[0], to: TECH_HUBS[7], color: "#6366f1", speed: 0.09, offset: 0.22 },
    { from: TECH_HUBS[1], to: TECH_HUBS[4], color: "#06b6d4", speed: 0.105, offset: 0.47 },
    { from: TECH_HUBS[2], to: TECH_HUBS[5], color: "#2563eb", speed: 0.098, offset: 0.31 },
    { from: TECH_HUBS[3], to: TECH_HUBS[6], color: "#0891b2", speed: 0.092, offset: 0.63 },
    { from: TECH_HUBS[5], to: TECH_HUBS[6], color: "#38bdf8", speed: 0.14, offset: 0.12 },
    { from: TECH_HUBS[6], to: TECH_HUBS[7], color: "#6366f1", speed: 0.13, offset: 0.78 },
    { from: TECH_HUBS[7], to: TECH_HUBS[8], color: "#0ea5e9", speed: 0.102, offset: 0.38 },
    { from: TECH_HUBS[2], to: TECH_HUBS[9], color: "#2563eb", speed: 0.086, offset: 0.7 },
];
const LAND_POLYGONS = [
    [
        [-168, 72], [-145, 70], [-126, 58], [-118, 48], [-108, 32], [-96, 20], [-84, 15],
        [-74, 8], [-60, 12], [-53, 30], [-62, 45], [-75, 55], [-95, 65], [-128, 73],
    ],
    [
        [-82, 13], [-70, 8], [-57, -5], [-45, -18], [-37, -36], [-52, -55], [-66, -48],
        [-76, -28], [-81, -8],
    ],
    [
        [-18, 36], [6, 37], [30, 32], [42, 13], [51, -10], [34, -35], [18, -35],
        [3, -22], [-12, 6], [-18, 22],
    ],
    [
        [-10, 72], [20, 70], [58, 63], [96, 63], [135, 52], [154, 38], [142, 20],
        [111, 8], [80, 6], [58, 22], [31, 31], [9, 42], [-9, 43],
    ],
    [
        [68, 25], [86, 27], [97, 20], [93, 8], [78, 7], [70, 16],
    ],
    [
        [101, 23], [122, 22], [124, 7], [108, -7], [96, 6],
    ],
    [
        [112, -11], [132, -10], [154, -25], [146, -43], [119, -38], [111, -24],
    ],
    [
        [-52, 61], [-35, 72], [-22, 78], [-31, 82], [-54, 76], [-62, 67],
    ],
    [
        [130, 45], [142, 45], [146, 34], [136, 31],
    ],
    [
        [-8, 58], [2, 58], [2, 50], [-7, 50],
    ],
];
function createScene() {
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0xffffff, 330, 620);
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xdbeafe, 2.1);
    scene.add(hemiLight);
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.6);
    keyLight.position.set(-120, 180, 160);
    scene.add(keyLight);
    const rimLight = new THREE.DirectionalLight(0x67e8f9, 1.35);
    rimLight.position.set(180, 40, -180);
    scene.add(rimLight);
    return scene;
}
function createCamera(width, height) {
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
    camera.position.set(0, 8, getCameraDistance(width));
    return camera;
}
function createRenderer(width, height) {
    const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setClearColor(0xffffff, 0);
    return renderer;
}
function createGlobe() {
    const geometry = new THREE.SphereGeometry(GLOBE_RADIUS, 96, 96);
    const material = new THREE.MeshPhysicalMaterial({
        color: 0xf8fbff,
        roughness: 0.55,
        metalness: 0.02,
        transmission: 0.08,
        transparent: true,
        opacity: 0.38,
        depthWrite: false,
        side: THREE.FrontSide,
        clearcoat: 0.35,
        clearcoatRoughness: 0.7,
    });
    const globe = new THREE.Mesh(geometry, material);
    const equator = createLatitudeRing(0, GLOBE_RADIUS + 0.28, "#7dd3fc", 0.18);
    const tropicNorth = createLatitudeRing(28, GLOBE_RADIUS + 0.22, "#a5b4fc", 0.1);
    const tropicSouth = createLatitudeRing(-28, GLOBE_RADIUS + 0.22, "#a5b4fc", 0.1);
    const rings = new THREE.Group();
    rings.add(equator, tropicNorth, tropicSouth);
    return { globe, rings };
}
function createAtmosphere() {
    const geometry = new THREE.SphereGeometry(ATMOSPHERE_RADIUS, 96, 96);
    const material = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        side: THREE.BackSide,
        blending: THREE.NormalBlending,
        uniforms: {
            uColor: { value: new THREE.Color("#60a5fa") },
            uAlpha: { value: 0.1 },
        },
        vertexShader: `
      varying vec3 vNormal;
      varying vec3 vWorldPosition;

      void main() {
        vNormal = normalize(normalMatrix * normal);
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
        fragmentShader: `
      uniform vec3 uColor;
      uniform float uAlpha;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;

      void main() {
        vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
        float rim = 1.0 - max(dot(vNormal, viewDirection), 0.0);
        float glow = smoothstep(0.18, 1.0, rim);
        gl_FragColor = vec4(uColor, glow * uAlpha);
      }
    `,
    });
    return new THREE.Mesh(geometry, material);
}
function createParticles(texture) {
    const count = 260;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const colorA = new THREE.Color("#93c5fd");
    const colorB = new THREE.Color("#c4b5fd");
    for (let i = 0; i < count; i += 1) {
        const point = randomSpherePoint(130 + Math.random() * 45);
        positions.set([point.x, point.y, point.z], i * 3);
        const color = colorA.clone().lerp(colorB, Math.random());
        colors.set([color.r, color.g, color.b], i * 3);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const material = new THREE.PointsMaterial({
        size: 1.7,
        map: texture,
        transparent: true,
        opacity: 0.32,
        vertexColors: true,
        depthWrite: false,
        blending: THREE.NormalBlending,
    });
    return new THREE.Points(geometry, material);
}
function createWorldMapDots(texture) {
    const points = createLandPoints();
    const positions = new Float32Array(points.length * 3);
    const colors = new Float32Array(points.length * 3);
    const base = new THREE.Color("#2563eb");
    const highlight = new THREE.Color("#22d3ee");
    points.forEach((point, index) => {
        const position = latLonToVector3(point.lat, point.lon, MAP_RADIUS);
        positions.set([position.x, position.y, position.z], index * 3);
        const color = base.clone().lerp(highlight, point.weight);
        colors.set([color.r, color.g, color.b], index * 3);
    });
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const material = new THREE.PointsMaterial({
        size: 2.05,
        map: texture,
        transparent: true,
        opacity: 0.92,
        vertexColors: true,
        depthWrite: false,
        blending: THREE.NormalBlending,
        sizeAttenuation: true,
    });
    return new THREE.Points(geometry, material);
}
function createConnections(texture) {
    const arcs = [];
    const arcPulses = [];
    const geometries = [];
    const materials = [];
    CONNECTIONS.forEach((connection) => {
        const curve = createArcCurve(connection.from, connection.to);
        const geometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(56));
        const material = new THREE.LineBasicMaterial({
            color: connection.color,
            transparent: true,
            opacity: 0.28,
            depthWrite: false,
            blending: THREE.NormalBlending,
        });
        const arc = new THREE.Line(geometry, material);
        arcs.push(arc);
        geometries.push(geometry);
        materials.push(material);
        const pulseGeometry = new THREE.SphereGeometry(1.9, 16, 16);
        const pulseMaterial = new THREE.MeshBasicMaterial({
            color: connection.color,
            transparent: true,
            opacity: 0.9,
            map: texture,
            depthWrite: false,
        });
        const pulse = new THREE.Mesh(pulseGeometry, pulseMaterial);
        arcPulses.push({
            mesh: pulse,
            curve,
            speed: connection.speed,
            offset: connection.offset,
        });
        geometries.push(pulseGeometry);
        materials.push(pulseMaterial);
    });
    return { arcs, arcPulses, geometries, materials };
}
function createHubMarkers(texture) {
    const markers = [];
    const geometries = [];
    const materials = [];
    TECH_HUBS.forEach((hub) => {
        const position = latLonToVector3(hub.lat, hub.lon, GLOBE_RADIUS + 3.1);
        const normal = position.clone().normalize();
        const marker = new THREE.Group();
        marker.position.copy(position);
        marker.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal);
        const dotGeometry = new THREE.CircleGeometry(2.2 * (hub.size || 1), 24);
        const dotMaterial = new THREE.MeshBasicMaterial({
            color: "#0284c7",
            transparent: true,
            opacity: 0.95,
            map: texture,
            depthWrite: false,
            blending: THREE.NormalBlending,
        });
        const dot = new THREE.Mesh(dotGeometry, dotMaterial);
        const ringGeometry = new THREE.RingGeometry(3.4 * (hub.size || 1), 5.1 * (hub.size || 1), 32);
        const ringMaterial = new THREE.MeshBasicMaterial({
            color: "#38bdf8",
            transparent: true,
            opacity: 0.32,
            side: THREE.DoubleSide,
            depthWrite: false,
        });
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        marker.add(ring, dot);
        marker.userData.phase = Math.random() * Math.PI * 2;
        markers.push(marker);
        geometries.push(dotGeometry, ringGeometry);
        materials.push(dotMaterial, ringMaterial);
    });
    return { markers, geometries, materials };
}
function animate(objects, pointer, startTime, render) {
    const now = performance.now();
    const elapsed = (now - startTime) / 1000;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reducedMotion) {
        objects.root.rotation.y += 0.0018 + pointer.velocityX;
        objects.root.rotation.x += pointer.velocityY;
        objects.root.rotation.x = THREE.MathUtils.clamp(objects.root.rotation.x, -0.62, 0.62);
        pointer.velocityX *= pointer.isDragging ? 0.88 : 0.94;
        pointer.velocityY *= pointer.isDragging ? 0.88 : 0.94;
        const parallaxY = pointer.pointerX * 0.08;
        const parallaxX = pointer.pointerY * 0.04;
        objects.root.position.x += (parallaxY - objects.root.position.x) * 0.035;
        objects.root.position.y += (-parallaxX - objects.root.position.y) * 0.035;
        objects.root.position.z = Math.sin(elapsed * 0.72) * 2.2;
        objects.atmosphere.scale.setScalar(1 + Math.sin(elapsed * 1.25) * 0.018);
        objects.mapDots.rotation.y = Math.sin(elapsed * 0.35) * 0.006;
        objects.ambientParticles.rotation.y -= 0.00055;
        objects.arcPulses.forEach((pulse) => {
            const progress = (elapsed * pulse.speed + pulse.offset) % 1;
            pulse.mesh.position.copy(pulse.curve.getPointAt(progress));
            pulse.mesh.scale.setScalar(0.82 + Math.sin((progress + elapsed) * Math.PI * 2) * 0.14);
        });
        objects.hubMarkers.forEach((marker, index) => {
            const ring = marker.children[0];
            const dot = marker.children[1];
            const pulse = 1 + Math.sin(elapsed * 2.25 + marker.userData.phase) * 0.2;
            ring.scale.setScalar(pulse);
            ring.material.opacity = 0.2 + Math.sin(elapsed * 2.1 + index) * 0.08;
            dot.scale.setScalar(0.94 + Math.sin(elapsed * 1.6 + index) * 0.07);
        });
    }
    objects.renderer.render(objects.scene, objects.camera);
    render();
}
function latLonToVector3(lat, lon, radius) {
    const phi = THREE.MathUtils.degToRad(90 - lat);
    const theta = THREE.MathUtils.degToRad(lon + 180);
    return new THREE.Vector3(-(radius * Math.sin(phi) * Math.cos(theta)), radius * Math.cos(phi), radius * Math.sin(phi) * Math.sin(theta));
}
function createArcCurve(from, to) {
    const start = latLonToVector3(from.lat, from.lon, GLOBE_RADIUS + 4);
    const end = latLonToVector3(to.lat, to.lon, GLOBE_RADIUS + 4);
    const distance = start.distanceTo(end);
    const midpoint = start.clone().add(end).normalize().multiplyScalar(GLOBE_RADIUS + 16 + distance * 0.18);
    return new THREE.CatmullRomCurve3([start, midpoint, end]);
}
function createLatitudeRing(lat, radius, color, opacity) {
    const points = [];
    for (let lon = -180; lon <= 180; lon += 3) {
        points.push(latLonToVector3(lat, lon, radius));
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
        color,
        transparent: true,
        opacity,
        depthWrite: false,
    });
    return new THREE.Line(geometry, material);
}
function createLandPoints() {
    const points = [];
    const spacing = 3.2;
    for (let lat = -56; lat <= 76; lat += spacing) {
        for (let lon = -178; lon <= 178; lon += spacing) {
            const jitterLat = lat + seededNoise(lat, lon) * 0.82;
            const jitterLon = lon + seededNoise(lon, lat) * 0.82;
            if (isLand(jitterLat, jitterLon)) {
                const equatorBias = 1 - Math.min(Math.abs(jitterLat) / 92, 1);
                points.push({
                    lat: jitterLat,
                    lon: jitterLon,
                    weight: 0.25 + equatorBias * 0.65 + seededNoise(jitterLon, jitterLat) * 0.12,
                });
            }
        }
    }
    return points;
}
function isLand(lat, lon) {
    return LAND_POLYGONS.some((polygon) => pointInPolygon([lon, lat], polygon));
}
function pointInPolygon(point, polygon) {
    const [x, y] = point;
    let inside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i, i += 1) {
        const xi = polygon[i][0];
        const yi = polygon[i][1];
        const xj = polygon[j][0];
        const yj = polygon[j][1];
        const intersect = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
        if (intersect)
            inside = !inside;
    }
    return inside;
}
function seededNoise(a, b) {
    const value = Math.sin(a * 12.9898 + b * 78.233) * 43758.5453;
    return (value - Math.floor(value)) * 2 - 1;
}
function randomSpherePoint(radius) {
    const u = Math.random();
    const v = Math.random();
    const theta = u * Math.PI * 2;
    const phi = Math.acos(2 * v - 1);
    return new THREE.Vector3(radius * Math.sin(phi) * Math.cos(theta), radius * Math.sin(phi) * Math.sin(theta), radius * Math.cos(phi));
}
function createSoftDotTexture(size = 64) {
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext("2d");
    if (context) {
        const center = size / 2;
        const gradient = context.createRadialGradient(center, center, 0, center, center, center);
        gradient.addColorStop(0, "rgba(255,255,255,1)");
        gradient.addColorStop(0.32, "rgba(255,255,255,0.92)");
        gradient.addColorStop(0.72, "rgba(255,255,255,0.24)");
        gradient.addColorStop(1, "rgba(255,255,255,0)");
        context.fillStyle = gradient;
        context.fillRect(0, 0, size, size);
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
}
function getCameraDistance(width) {
    if (width < 430)
        return 310;
    if (width < 768)
        return 285;
    return 265;
}
function disposeObjects(objects) {
    objects.renderer.dispose();
    objects.geometries.forEach((geometry) => geometry.dispose());
    objects.materials.forEach((material) => material.dispose());
    objects.textures.forEach((texture) => texture.dispose());
    objects.scene.traverse((object) => {
        const mesh = object;
        if (mesh.geometry && !objects.geometries.includes(mesh.geometry)) {
            mesh.geometry.dispose();
        }
        const material = mesh.material;
        if (Array.isArray(material)) {
            material.forEach((item) => {
                if (!objects.materials.includes(item))
                    item.dispose();
            });
        }
        else if (material && !objects.materials.includes(material)) {
            material.dispose();
        }
    });
}
export default function CyberGlobe() {
    const containerRef = useRef(null);
    useEffect(() => {
        const container = containerRef.current;
        if (!container)
            return;
        const width = container.clientWidth || 520;
        const height = container.clientHeight || 520;
        const scene = createScene();
        const camera = createCamera(width, height);
        const renderer = createRenderer(width, height);
        const root = new THREE.Group();
        const textures = [createSoftDotTexture()];
        const materials = [];
        const geometries = [];
        root.rotation.set(-0.18, -0.55, 0.08);
        scene.add(root);
        container.appendChild(renderer.domElement);
        const { globe, rings } = createGlobe();
        const atmosphere = createAtmosphere();
        const mapDots = createWorldMapDots(textures[0]);
        const ambientParticles = createParticles(textures[0]);
        const connections = createConnections(textures[0]);
        const hubs = createHubMarkers(textures[0]);
        root.add(globe, rings, atmosphere, mapDots, ambientParticles);
        connections.arcs.forEach((arc) => root.add(arc));
        connections.arcPulses.forEach((pulse) => root.add(pulse.mesh));
        hubs.markers.forEach((marker) => root.add(marker));
        materials.push(globe.material, atmosphere.material, mapDots.material, ambientParticles.material, ...connections.materials, ...hubs.materials);
        geometries.push(globe.geometry, atmosphere.geometry, mapDots.geometry, ambientParticles.geometry, ...connections.geometries, ...hubs.geometries);
        const objects = {
            scene,
            camera,
            renderer,
            root,
            globe,
            atmosphere,
            mapDots,
            ambientParticles,
            arcs: connections.arcs,
            arcPulses: connections.arcPulses,
            hubMarkers: hubs.markers,
            textures,
            materials,
            geometries,
        };
        const pointer = {
            isDragging: false,
            lastX: 0,
            lastY: 0,
            velocityX: 0,
            velocityY: 0,
            pointerX: 0,
            pointerY: 0,
        };
        const bounds = () => container.getBoundingClientRect();
        const onPointerDown = (event) => {
            pointer.isDragging = true;
            pointer.lastX = event.clientX;
            pointer.lastY = event.clientY;
            container.setPointerCapture(event.pointerId);
        };
        const onPointerMove = (event) => {
            const rect = bounds();
            pointer.pointerX = ((event.clientX - rect.left) / Math.max(rect.width, 1) - 0.5) * 2;
            pointer.pointerY = ((event.clientY - rect.top) / Math.max(rect.height, 1) - 0.5) * 2;
            if (!pointer.isDragging)
                return;
            const deltaX = event.clientX - pointer.lastX;
            const deltaY = event.clientY - pointer.lastY;
            pointer.velocityX = deltaX * 0.00045;
            pointer.velocityY = deltaY * 0.00034;
            pointer.lastX = event.clientX;
            pointer.lastY = event.clientY;
        };
        const onPointerUp = (event) => {
            pointer.isDragging = false;
            if (container.hasPointerCapture(event.pointerId)) {
                container.releasePointerCapture(event.pointerId);
            }
        };
        container.addEventListener("pointerdown", onPointerDown);
        container.addEventListener("pointermove", onPointerMove);
        container.addEventListener("pointerup", onPointerUp);
        container.addEventListener("pointerleave", onPointerUp);
        let frameId = 0;
        let isDisposed = false;
        const renderLoop = () => {
            if (isDisposed)
                return;
            frameId = requestAnimationFrame(() => animate(objects, pointer, startTime, renderLoop));
        };
        const startTime = performance.now();
        renderLoop();
        const resizeObserver = new ResizeObserver((entries) => {
            const entry = entries[0];
            if (!entry)
                return;
            const nextWidth = Math.max(entry.contentRect.width, 1);
            const nextHeight = Math.max(entry.contentRect.height, 1);
            camera.aspect = nextWidth / nextHeight;
            camera.position.z = getCameraDistance(nextWidth);
            camera.updateProjectionMatrix();
            renderer.setSize(nextWidth, nextHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, nextWidth < 640 ? 1.45 : 1.8));
        });
        resizeObserver.observe(container);
        return () => {
            isDisposed = true;
            cancelAnimationFrame(frameId);
            resizeObserver.disconnect();
            container.removeEventListener("pointerdown", onPointerDown);
            container.removeEventListener("pointermove", onPointerMove);
            container.removeEventListener("pointerup", onPointerUp);
            container.removeEventListener("pointerleave", onPointerUp);
            if (renderer.domElement.parentElement === container) {
                container.removeChild(renderer.domElement);
            }
            disposeObjects(objects);
        };
    }, []);
    return (<div ref={containerRef} aria-label="Interactive global cyber security network visualization" className="relative h-full min-h-[350px] w-full cursor-grab touch-none select-none overflow-hidden active:cursor-grabbing"/>);
}

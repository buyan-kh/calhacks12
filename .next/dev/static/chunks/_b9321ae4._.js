(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/getBookmarkPreview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBookmarkPreview",
    ()=>getBookmarkPreview
]);
async function getBookmarkPreview(url) {
    try {
        const response = await fetch(`/api/unfurl?url=${encodeURIComponent(url)}`);
        const data = await response.json();
        return {
            id: url,
            typeName: 'asset',
            type: 'bookmark',
            meta: {},
            props: {
                src: url,
                description: data.description ?? '',
                image: data.image ?? '',
                favicon: data.favicon ?? '',
                title: data.title ?? url
            }
        };
    } catch (error) {
        console.error('Error fetching bookmark preview:', error);
        return {
            id: url,
            typeName: 'asset',
            type: 'bookmark',
            meta: {},
            props: {
                src: url,
                description: '',
                image: '',
                favicon: '',
                title: url
            }
        };
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/multiplayerAssetStore.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "multiplayerAssetStore",
    ()=>multiplayerAssetStore
]);
const multiplayerAssetStore = {
    async upload (_asset, file) {
        const formData = new FormData();
        formData.append('file', file);
        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData
        });
        if (!response.ok) {
            throw new Error('Failed to upload asset');
        }
        const data = await response.json();
        return data.url;
    },
    resolve (asset) {
        return asset.props.src;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/RoomCanvas.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RoomCanvas",
    ()=>RoomCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tldraw$2f$sync$2f$dist$2d$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tldraw/sync/dist-esm/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tldraw$2f$sync$2f$dist$2d$esm$2f$useSync$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tldraw/sync/dist-esm/useSync.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tldraw$2f$dist$2d$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/tldraw/dist-esm/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tldraw$2f$dist$2d$esm$2f$lib$2f$Tldraw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tldraw/dist-esm/lib/Tldraw.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$getBookmarkPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/getBookmarkPreview.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$multiplayerAssetStore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/multiplayerAssetStore.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function RoomCanvas({ roomId }) {
    _s();
    // Create a store connected to multiplayer.
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tldraw$2f$sync$2f$dist$2d$esm$2f$useSync$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSync"])({
        // We need to know the websockets URI...
        uri: `${("TURBOPACK compile-time truthy", 1) ? window.location.origin : "TURBOPACK unreachable"}/api/connect/${roomId}`,
        // ...and how to handle static assets like images & videos
        assets: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$multiplayerAssetStore$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["multiplayerAssetStore"]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RoomWrapper, {
        roomId: roomId,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tldraw$2f$dist$2d$esm$2f$lib$2f$Tldraw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tldraw"], {
            // we can pass the connected store into the Tldraw component which will handle
            // loading states & enable multiplayer UX like cursors & a presence menu
            store: store,
            onMount: (editor)=>{
                // when the editor is ready, we need to register our bookmark unfurling service
                editor.registerExternalAssetHandler('url', __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$getBookmarkPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBookmarkPreview"]);
            }
        }, void 0, false, {
            fileName: "[project]/components/RoomCanvas.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/RoomCanvas.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(RoomCanvas, "usjSxsiv3RDV+bMLjs2Zznz01hY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tldraw$2f$sync$2f$dist$2d$esm$2f$useSync$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSync"]
    ];
});
_c = RoomCanvas;
function RoomWrapper({ children, roomId }) {
    _s1();
    const [didCopy, setDidCopy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RoomWrapper.useEffect": ()=>{
            if (!didCopy) return;
            const timeout = setTimeout({
                "RoomWrapper.useEffect.timeout": ()=>setDidCopy(false)
            }["RoomWrapper.useEffect.timeout"], 3000);
            return ({
                "RoomWrapper.useEffect": ()=>clearTimeout(timeout)
            })["RoomWrapper.useEffect"];
        }
    }["RoomWrapper.useEffect"], [
        didCopy
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "RoomWrapper",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "RoomWrapper-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WifiIcon, {}, void 0, false, {
                        fileName: "[project]/components/RoomCanvas.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: roomId
                    }, void 0, false, {
                        fileName: "[project]/components/RoomCanvas.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "RoomWrapper-copy",
                        onClick: ()=>{
                            if ("TURBOPACK compile-time truthy", 1) {
                                navigator.clipboard.writeText(window.location.href);
                                setDidCopy(true);
                            }
                        },
                        "aria-label": "copy room link",
                        children: [
                            "Copy link",
                            didCopy && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "RoomWrapper-copied",
                                children: "Copied!"
                            }, void 0, false, {
                                fileName: "[project]/components/RoomCanvas.tsx",
                                lineNumber: 63,
                                columnNumber: 23
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RoomCanvas.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RoomCanvas.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "RoomWrapper-content",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/RoomCanvas.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/RoomCanvas.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s1(RoomWrapper, "LBX9CJcfZymzN04BE7OPlXvDTyw=");
_c1 = RoomWrapper;
function WifiIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: "1.5",
        stroke: "currentColor",
        width: 16,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z"
        }, void 0, false, {
            fileName: "[project]/components/RoomCanvas.tsx",
            lineNumber: 81,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/RoomCanvas.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_c2 = WifiIcon;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "RoomCanvas");
__turbopack_context__.k.register(_c1, "RoomWrapper");
__turbopack_context__.k.register(_c2, "WifiIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/[roomId]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RoomPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoomCanvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/RoomCanvas.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function RoomPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const roomId = params.roomId;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoomCanvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomCanvas"], {
        roomId: roomId
    }, void 0, false, {
        fileName: "[project]/app/[roomId]/page.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
_s(RoomPage, "+jVsTcECDRo3yq2d7EQxlN9Ixog=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = RoomPage;
var _c;
__turbopack_context__.k.register(_c, "RoomPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_b9321ae4._.js.map
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/Tldraw.tsx
import "@fontsource/caveat-brush";
import "@fontsource/crimson-pro";
import "@fontsource/recursive";
import "@fontsource/source-code-pro";
import "@fontsource/source-sans-pro";
import { Renderer } from "@tldraw/core";
import * as React47 from "react";
import { ErrorBoundary as _Errorboundary } from "react-error-boundary";
import { IntlProvider } from "react-intl";

// src/components/ContextMenu/ContextMenu.tsx
import * as RadixContextMenu from "@radix-ui/react-context-menu";
import {
  AlignBottomIcon,
  AlignCenterHorizontallyIcon,
  AlignCenterVerticallyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  AlignTopIcon,
  SpaceEvenlyHorizontallyIcon,
  SpaceEvenlyVerticallyIcon,
  StretchHorizontallyIcon,
  StretchVerticallyIcon
} from "@radix-ui/react-icons";
import * as React9 from "react";
import { FormattedMessage, useIntl } from "react-intl";

// src/styles/stitches.config.ts
import { createStitches, defaultThemeMap } from "@stitches/react";
var { styled, createTheme } = createStitches({
  themeMap: __spreadValues({}, defaultThemeMap),
  theme: {
    colors: {
      bounds: "rgba(65, 132, 244, 1.000)",
      boundsBg: "rgba(65, 132, 244, 0.05)",
      hover: "#ececec",
      overlay: "rgba(0, 0, 0, 0.15)",
      overlayContrast: "rgba(255, 255, 255, 0.15)",
      panel: "#fefefe",
      panelContrast: "#ffffff",
      selected: "rgba(66, 133, 244, 1.000)",
      selectedContrast: "#fefefe",
      text: "#333333",
      tooltip: "#1d1d1d",
      tooltipContrast: "#ffffff",
      warn: "rgba(255, 100, 100, 1)",
      canvas: "rgb(248, 249, 250)"
    },
    shadows: {
      2: "0px 1px 1px rgba(0, 0, 0, 0.14)",
      3: "0px 2px 3px rgba(0, 0, 0, 0.14)",
      4: "0px 4px 5px -1px rgba(0, 0, 0, 0.14)",
      8: "0px 12px 17px rgba(0, 0, 0, 0.14)",
      12: "0px 12px 17px rgba(0, 0, 0, 0.14)",
      24: "0px 24px 38px rgba(0, 0, 0, 0.14)",
      key: "1px 1px rgba(0,0,0,1)",
      panel: `0px 0px 16px -1px rgba(0, 0, 0, 0.05), 
        0px 0px 16px -8px rgba(0, 0, 0, 0.05), 
        0px 0px 16px -12px rgba(0, 0, 0, 0.12),
        0px 0px 2px 0px rgba(0, 0, 0, 0.08)`
    },
    space: {
      0: "2px",
      1: "3px",
      2: "4px",
      3: "8px",
      4: "12px",
      5: "16px",
      6: "32px",
      7: "48px"
    },
    fontSizes: {
      0: "10px",
      1: "12px",
      2: "13px",
      3: "16px",
      4: "18px"
    },
    fonts: {
      ui: '"Recursive", system-ui, sans-serif',
      body: '"Recursive", system-ui, sans-serif',
      mono: '"Recursive Mono", monospace'
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {
      0: "$1"
    },
    borderStyles: {},
    radii: {
      0: "2px",
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px"
    },
    zIndices: {},
    transitions: {}
  },
  media: {
    micro: "(max-width: 370px)",
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)"
  },
  utils: {
    zStrokeWidth: () => (value) => {
      if (Array.isArray(value)) {
        return {
          strokeWidth: `calc(${value[0]}px / var(--camera-zoom))`
        };
      }
      return {
        strokeWidth: `calc(${value}px / var(--camera-zoom))`
      };
    }
  }
});
var dark = createTheme({
  colors: {
    bounds: "rgba(38, 150, 255, 1.000)",
    boundsBg: "rgba(38, 150, 255, 0.05)",
    hover: "#444A50",
    overlay: "rgba(0, 0, 0, 0.15)",
    overlayContrast: "rgba(255, 255, 255, 0.15)",
    panel: "#363D44",
    panelContrast: "#49555f",
    selected: "rgba(38, 150, 255, 1.000)",
    selectedContrast: "#fefefe",
    text: "#f8f9fa",
    tooltip: "#1d1d1d",
    tooltipContrast: "#ffffff",
    canvas: "#212529"
  },
  shadows: {
    2: "0px 1px 1px rgba(0, 0, 0, 0.24)",
    3: "0px 2px 3px rgba(0, 0, 0, 0.24)",
    4: "0px 4px 5px -1px rgba(0, 0, 0, 0.24)",
    8: "0px 12px 17px rgba(0, 0, 0, 0.24)",
    12: "0px 12px 17px rgba(0, 0, 0, 0.24)",
    24: "0px 24px 38px rgba(0, 0, 0, 0.24)",
    panel: `0px 0px 16px -1px rgba(0, 0, 0, 0.05), 
      0px 0px 16px -8px rgba(0, 0, 0, 0.09), 
      0px 0px 16px -12px rgba(0, 0, 0, 0.2)`
  }
});

// src/components/Primitives/Divider/Divider.tsx
var Divider = styled("hr", {
  height: 0,
  paddingTop: 1,
  width: "calc(100%+8px)",
  backgroundColor: "$hover",
  border: "none",
  margin: "$2 -4px"
});

// src/components/Primitives/MenuContent/MenuContent.ts
var MenuContent = styled("div", {
  position: "relative",
  overflow: "hidden",
  userSelect: "none",
  WebkitUserSelect: "none",
  display: "flex",
  flexDirection: "column",
  zIndex: 99997,
  minWidth: 180,
  pointerEvents: "all",
  backgroundColor: "$panel",
  border: "1px solid $panelContrast",
  boxShadow: "$panel",
  padding: "$2 $2",
  borderRadius: "$3",
  font: "$ui",
  maxHeight: "100vh",
  overflowY: "auto",
  overflowX: "hidden",
  "&::webkit-scrollbar": {
    display: "none"
  },
  "-ms-overflow-style": "none",
  scrollbarWidth: "none",
  variants: {
    size: {
      small: {
        minWidth: 72
      }
    },
    overflow: {
      true: {
        maxHeight: "60vh"
      }
    }
  }
});

// src/components/Primitives/RowButton/RowButton.tsx
import { ItemIndicator } from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import * as React from "react";

// src/components/Primitives/Kbd/Kbd.tsx
import { Utils } from "@tldraw/core";
import { jsx } from "react/jsx-runtime";
var commandKey = () => Utils.isDarwin() ? "\u2318" : "Ctrl";
function Kbd({ variant, children }) {
  return /* @__PURE__ */ jsx(StyledKbd, {
    variant,
    children: children.split("").map((k, i) => {
      return /* @__PURE__ */ jsx("span", {
        children: k.replace("#", commandKey())
      }, i);
    })
  });
}
var StyledKbd = styled("kbd", {
  marginLeft: "$3",
  textShadow: "$2",
  textAlign: "center",
  fontSize: "$0",
  fontFamily: "$ui",
  color: "$text",
  background: "none",
  fontWeight: 400,
  gap: "$1",
  display: "flex",
  alignItems: "center",
  "& > span": {
    padding: "$0",
    borderRadius: "$0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  variants: {
    variant: {
      tooltip: {
        "& > span": {
          color: "$tooltipContrast",
          background: "$overlayContrast",
          boxShadow: "$key",
          width: "20px",
          height: "20px"
        }
      },
      menu: {}
    }
  }
});

// src/components/Primitives/SmallIcon/SmallIcon.tsx
var SmallIcon = styled("div", {
  height: "100%",
  borderRadius: "4px",
  marginRight: "1px",
  width: "fit-content",
  display: "grid",
  alignItems: "center",
  justifyContent: "center",
  outline: "none",
  border: "none",
  pointerEvents: "all",
  cursor: "pointer",
  color: "currentColor",
  "& svg": {
    height: 16,
    width: 16,
    strokeWidth: 1
  },
  "& > *": {
    gridRow: 1,
    gridColumn: 1
  }
});

// src/components/breakpoints.tsx
var breakpoints = {
  "@initial": "mobile",
  "@micro": "micro",
  "@sm": "small",
  "@md": "medium",
  "@lg": "large"
};

// src/components/Primitives/RowButton/RowButton.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var RowButton = React.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      onClick,
      isActive = false,
      isWarning = false,
      hasIndicator = false,
      hasArrow = false,
      disabled = false,
      variant,
      kbd,
      children
    } = _b, rest = __objRest(_b, [
      "onClick",
      "isActive",
      "isWarning",
      "hasIndicator",
      "hasArrow",
      "disabled",
      "variant",
      "kbd",
      "children"
    ]);
    return /* @__PURE__ */ jsx2(StyledRowButton, __spreadProps(__spreadValues({
      ref,
      bp: breakpoints,
      isWarning,
      isActive,
      disabled,
      onClick,
      variant
    }, rest), {
      children: /* @__PURE__ */ jsxs(StyledRowButtonInner, {
        children: [
          children,
          kbd ? /* @__PURE__ */ jsx2(Kbd, {
            variant: "menu",
            children: kbd
          }) : void 0,
          hasIndicator && /* @__PURE__ */ jsx2(ItemIndicator, {
            dir: "ltr",
            children: /* @__PURE__ */ jsx2(SmallIcon, {
              children: /* @__PURE__ */ jsx2(CheckIcon, {})
            })
          }),
          hasArrow && /* @__PURE__ */ jsx2(SmallIcon, {
            children: /* @__PURE__ */ jsx2(ChevronRightIcon, {})
          })
        ]
      })
    }));
  }
);
var StyledRowButtonInner = styled("div", {
  height: "100%",
  width: "100%",
  backgroundColor: "$panel",
  borderRadius: "$2",
  display: "flex",
  gap: "$1",
  flexDirection: "row",
  alignItems: "center",
  padding: "0 $3",
  justifyContent: "space-between",
  border: "1px solid transparent",
  "& svg": {
    position: "relative",
    stroke: "$overlay",
    strokeWidth: 1,
    zIndex: 1
  },
  [`& > ${SmallIcon}`]: {
    paddingLeft: "$3"
  }
});
var StyledRowButton = styled("button", {
  position: "relative",
  width: "100%",
  background: "none",
  border: "none",
  cursor: "pointer",
  height: 32,
  minHeight: 32,
  outline: "none",
  color: "$text",
  fontFamily: "$ui",
  fontWeight: 400,
  fontSize: "$1",
  borderRadius: 4,
  userSelect: "none",
  WebkitUserSelect: "none",
  margin: 0,
  padding: "0 0",
  "&[data-disabled]": {
    opacity: 0.3
  },
  "&:disabled": {
    opacity: 0.3
  },
  [`&:focus:not(:disabled) ${StyledRowButtonInner}`]: {
    backgroundColor: "$hover"
  },
  "& a": {
    textDecoration: "none",
    color: "$text"
  },
  variants: {
    bp: {
      mobile: {},
      small: {}
    },
    variant: {
      styleMenu: {
        margin: "$1 0 $1 0"
      },
      wide: {
        gridColumn: "1 / span 4"
      }
    },
    size: {
      icon: {
        padding: "4px ",
        width: "auto"
      }
    },
    isWarning: {
      true: {
        color: "$warn"
      }
    },
    isActive: {
      true: {
        backgroundColor: "$hover"
      },
      false: {}
    }
  }
});

// src/components/Primitives/ToolButton/ToolButton.tsx
import * as React8 from "react";

// src/components/Primitives/Tooltip/Tooltip.tsx
import * as RadixTooltip from "@radix-ui/react-tooltip";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function Tooltip({ children, label, kbd: kbdProp, id, side = "top" }) {
  return /* @__PURE__ */ jsx3("span", {
    id,
    children: /* @__PURE__ */ jsx3(RadixTooltip.Provider, {
      children: /* @__PURE__ */ jsxs2(RadixTooltip.Root, {
        children: [
          /* @__PURE__ */ jsx3(RadixTooltip.Trigger, {
            dir: "ltr",
            asChild: true,
            children: /* @__PURE__ */ jsx3("span", {
              children
            })
          }),
          /* @__PURE__ */ jsxs2(StyledContent, {
            dir: "ltr",
            side,
            sideOffset: 8,
            children: [
              label,
              kbdProp ? /* @__PURE__ */ jsx3(Kbd, {
                variant: "tooltip",
                children: kbdProp
              }) : null,
              /* @__PURE__ */ jsx3(StyledArrow, {})
            ]
          })
        ]
      })
    })
  });
}
var StyledContent = styled(RadixTooltip.Content, {
  borderRadius: 3,
  padding: "$3 $3 $3 $3",
  fontSize: "$1",
  backgroundColor: "$tooltip",
  color: "$tooltipContrast",
  boxShadow: "$3",
  display: "flex",
  alignItems: "center",
  fontFamily: "$ui",
  userSelect: "none",
  WebkitUserSelect: "none"
});
var StyledArrow = styled(RadixTooltip.Arrow, {
  fill: "$tooltip",
  margin: "0 8px"
});

// src/hooks/useFileSystem.ts
import * as React2 from "react";
function useFileSystem() {
  const onNewProject = React2.useCallback(
    (app, openDialog) => __async(this, null, function* () {
      openDialog(
        app.fileSystemHandle ? "saveFirstTime" : "saveAgain",
        () => __async(this, null, function* () {
          try {
            yield app.saveProject();
            app.newProject();
          } catch (e) {
          }
        }),
        () => __async(this, null, function* () {
          app.newProject();
        }),
        () => __async(this, null, function* () {
        })
      );
    }),
    []
  );
  const onOpenProject = React2.useCallback(
    (app, openDialog) => __async(this, null, function* () {
      openDialog(
        app.fileSystemHandle ? "saveFirstTime" : "saveAgain",
        () => __async(this, null, function* () {
          try {
            yield app.saveProject();
            yield app.openProject();
          } catch (e) {
          }
        }),
        () => __async(this, null, function* () {
          app.openProject();
        }),
        () => __async(this, null, function* () {
        })
      );
    }),
    []
  );
  const onSaveProject = React2.useCallback((app) => {
    app.saveProject();
  }, []);
  const onSaveProjectAs = React2.useCallback((app) => {
    app.saveProjectAs();
  }, []);
  const onOpenMedia = React2.useCallback((app) => __async(this, null, function* () {
    var _a;
    (_a = app.openAsset) == null ? void 0 : _a.call(app);
  }), []);
  return {
    onNewProject,
    onSaveProject,
    onSaveProjectAs,
    onOpenProject,
    onOpenMedia
  };
}

// src/hooks/useFileSystemHandlers.ts
import * as React3 from "react";
function useFileSystemHandlers() {
  const app = useTldrawApp();
  const { openDialog } = useDialog();
  const onNewProject = React3.useCallback(
    (e) => __async(this, null, function* () {
      var _a, _b;
      if (e && app.callbacks.onOpenProject)
        e.preventDefault();
      (_b = (_a = app.callbacks).onNewProject) == null ? void 0 : _b.call(_a, app, openDialog);
    }),
    [app, openDialog]
  );
  const onSaveProject = React3.useCallback(
    (e) => {
      var _a, _b;
      if (e && app.callbacks.onOpenProject)
        e.preventDefault();
      (_b = (_a = app.callbacks).onSaveProject) == null ? void 0 : _b.call(_a, app);
    },
    [app]
  );
  const onSaveProjectAs = React3.useCallback(
    (e) => {
      var _a, _b;
      if (e && app.callbacks.onOpenProject)
        e.preventDefault();
      (_b = (_a = app.callbacks).onSaveProjectAs) == null ? void 0 : _b.call(_a, app);
    },
    [app]
  );
  const onOpenProject = React3.useCallback(
    (e) => __async(this, null, function* () {
      var _a, _b;
      if (e && app.callbacks.onOpenProject)
        e.preventDefault();
      (_b = (_a = app.callbacks).onOpenProject) == null ? void 0 : _b.call(_a, app, openDialog);
    }),
    [app, openDialog]
  );
  const onOpenMedia = React3.useCallback(
    (e) => __async(this, null, function* () {
      var _a, _b;
      if (e && app.callbacks.onOpenMedia)
        e.preventDefault();
      (_b = (_a = app.callbacks).onOpenMedia) == null ? void 0 : _b.call(_a, app);
    }),
    [app]
  );
  return {
    onNewProject,
    onSaveProject,
    onSaveProjectAs,
    onOpenProject,
    onOpenMedia
  };
}

// src/hooks/useKeyboardShortcuts.tsx
import * as React4 from "react";
import { useHotkeys } from "react-hotkeys-hook";

// src/types.ts
var TDEventHandler = class {
  constructor() {
    __publicField(this, "onPinchStart");
    __publicField(this, "onPinchEnd");
    __publicField(this, "onPinch");
    __publicField(this, "onKeyDown");
    __publicField(this, "onKeyUp");
    __publicField(this, "onPointerMove");
    __publicField(this, "onPointerUp");
    __publicField(this, "onPan");
    __publicField(this, "onZoom");
    __publicField(this, "onPointerDown");
    __publicField(this, "onPointCanvas");
    __publicField(this, "onDoubleClickCanvas");
    __publicField(this, "onRightPointCanvas");
    __publicField(this, "onDragCanvas");
    __publicField(this, "onReleaseCanvas");
    __publicField(this, "onPointShape");
    __publicField(this, "onDoubleClickShape");
    __publicField(this, "onRightPointShape");
    __publicField(this, "onDragShape");
    __publicField(this, "onHoverShape");
    __publicField(this, "onUnhoverShape");
    __publicField(this, "onReleaseShape");
    __publicField(this, "onPointBounds");
    __publicField(this, "onDoubleClickBounds");
    __publicField(this, "onRightPointBounds");
    __publicField(this, "onDragBounds");
    __publicField(this, "onHoverBounds");
    __publicField(this, "onUnhoverBounds");
    __publicField(this, "onReleaseBounds");
    __publicField(this, "onPointBoundsHandle");
    __publicField(this, "onDoubleClickBoundsHandle");
    __publicField(this, "onRightPointBoundsHandle");
    __publicField(this, "onDragBoundsHandle");
    __publicField(this, "onHoverBoundsHandle");
    __publicField(this, "onUnhoverBoundsHandle");
    __publicField(this, "onReleaseBoundsHandle");
    __publicField(this, "onPointHandle");
    __publicField(this, "onDoubleClickHandle");
    __publicField(this, "onRightPointHandle");
    __publicField(this, "onDragHandle");
    __publicField(this, "onHoverHandle");
    __publicField(this, "onUnhoverHandle");
    __publicField(this, "onReleaseHandle");
    __publicField(this, "onShapeBlur");
    __publicField(this, "onShapeClone");
  }
};
var TDUserStatus = /* @__PURE__ */ ((TDUserStatus2) => {
  TDUserStatus2["Idle"] = "idle";
  TDUserStatus2["Connecting"] = "connecting";
  TDUserStatus2["Connected"] = "connected";
  TDUserStatus2["Disconnected"] = "disconnected";
  return TDUserStatus2;
})(TDUserStatus || {});
var SessionType = /* @__PURE__ */ ((SessionType2) => {
  SessionType2["Transform"] = "transform";
  SessionType2["Translate"] = "translate";
  SessionType2["TransformSingle"] = "transformSingle";
  SessionType2["Brush"] = "brush";
  SessionType2["Arrow"] = "arrow";
  SessionType2["Draw"] = "draw";
  SessionType2["Erase"] = "erase";
  SessionType2["Rotate"] = "rotate";
  SessionType2["Handle"] = "handle";
  SessionType2["Grid"] = "grid";
  SessionType2["Edit"] = "edit";
  return SessionType2;
})(SessionType || {});
var TDStatus = /* @__PURE__ */ ((TDStatus2) => {
  TDStatus2["Idle"] = "idle";
  TDStatus2["PointingHandle"] = "pointingHandle";
  TDStatus2["PointingBounds"] = "pointingBounds";
  TDStatus2["PointingBoundsHandle"] = "pointingBoundsHandle";
  TDStatus2["TranslatingLabel"] = "translatingLabel";
  TDStatus2["TranslatingHandle"] = "translatingHandle";
  TDStatus2["Translating"] = "translating";
  TDStatus2["Transforming"] = "transforming";
  TDStatus2["Rotating"] = "rotating";
  TDStatus2["Pinching"] = "pinching";
  TDStatus2["Brushing"] = "brushing";
  TDStatus2["Creating"] = "creating";
  TDStatus2["EditingText"] = "editing-text";
  return TDStatus2;
})(TDStatus || {});
var MoveType = /* @__PURE__ */ ((MoveType2) => {
  MoveType2["Backward"] = "backward";
  MoveType2["Forward"] = "forward";
  MoveType2["ToFront"] = "toFront";
  MoveType2["ToBack"] = "toBack";
  return MoveType2;
})(MoveType || {});
var AlignType = /* @__PURE__ */ ((AlignType3) => {
  AlignType3["Top"] = "top";
  AlignType3["CenterVertical"] = "centerVertical";
  AlignType3["Bottom"] = "bottom";
  AlignType3["Left"] = "left";
  AlignType3["CenterHorizontal"] = "centerHorizontal";
  AlignType3["Right"] = "right";
  return AlignType3;
})(AlignType || {});
var StretchType = /* @__PURE__ */ ((StretchType3) => {
  StretchType3["Horizontal"] = "horizontal";
  StretchType3["Vertical"] = "vertical";
  return StretchType3;
})(StretchType || {});
var DistributeType = /* @__PURE__ */ ((DistributeType3) => {
  DistributeType3["Horizontal"] = "horizontal";
  DistributeType3["Vertical"] = "vertical";
  return DistributeType3;
})(DistributeType || {});
var FlipType = /* @__PURE__ */ ((FlipType2) => {
  FlipType2["Horizontal"] = "horizontal";
  FlipType2["Vertical"] = "vertical";
  return FlipType2;
})(FlipType || {});
var TDShapeType = /* @__PURE__ */ ((TDShapeType2) => {
  TDShapeType2["Sticky"] = "sticky";
  TDShapeType2["Ellipse"] = "ellipse";
  TDShapeType2["Rectangle"] = "rectangle";
  TDShapeType2["Triangle"] = "triangle";
  TDShapeType2["Draw"] = "draw";
  TDShapeType2["Arrow"] = "arrow";
  TDShapeType2["Line"] = "line";
  TDShapeType2["Text"] = "text";
  TDShapeType2["Group"] = "group";
  TDShapeType2["Image"] = "image";
  TDShapeType2["Video"] = "video";
  return TDShapeType2;
})(TDShapeType || {});
var Decoration = /* @__PURE__ */ ((Decoration2) => {
  Decoration2["Arrow"] = "arrow";
  return Decoration2;
})(Decoration || {});
var ColorStyle = /* @__PURE__ */ ((ColorStyle3) => {
  ColorStyle3["White"] = "white";
  ColorStyle3["LightGray"] = "lightGray";
  ColorStyle3["Gray"] = "gray";
  ColorStyle3["Black"] = "black";
  ColorStyle3["Green"] = "green";
  ColorStyle3["Cyan"] = "cyan";
  ColorStyle3["Blue"] = "blue";
  ColorStyle3["Indigo"] = "indigo";
  ColorStyle3["Violet"] = "violet";
  ColorStyle3["Red"] = "red";
  ColorStyle3["Orange"] = "orange";
  ColorStyle3["Yellow"] = "yellow";
  return ColorStyle3;
})(ColorStyle || {});
var SizeStyle = /* @__PURE__ */ ((SizeStyle2) => {
  SizeStyle2["Small"] = "small";
  SizeStyle2["Medium"] = "medium";
  SizeStyle2["Large"] = "large";
  return SizeStyle2;
})(SizeStyle || {});
var DashStyle = /* @__PURE__ */ ((DashStyle2) => {
  DashStyle2["Draw"] = "draw";
  DashStyle2["Solid"] = "solid";
  DashStyle2["Dashed"] = "dashed";
  DashStyle2["Dotted"] = "dotted";
  return DashStyle2;
})(DashStyle || {});
var FontSize = /* @__PURE__ */ ((FontSize2) => {
  FontSize2["Small"] = "small";
  FontSize2["Medium"] = "medium";
  FontSize2["Large"] = "large";
  FontSize2["ExtraLarge"] = "extraLarge";
  return FontSize2;
})(FontSize || {});
var AlignStyle = /* @__PURE__ */ ((AlignStyle2) => {
  AlignStyle2["Start"] = "start";
  AlignStyle2["Middle"] = "middle";
  AlignStyle2["End"] = "end";
  AlignStyle2["Justify"] = "justify";
  return AlignStyle2;
})(AlignStyle || {});
var FontStyle = /* @__PURE__ */ ((FontStyle2) => {
  FontStyle2["Script"] = "script";
  FontStyle2["Sans"] = "sans";
  FontStyle2["Serif"] = "serif";
  FontStyle2["Mono"] = "mono";
  return FontStyle2;
})(FontStyle || {});
var TDAssetType = /* @__PURE__ */ ((TDAssetType2) => {
  TDAssetType2["Image"] = "image";
  TDAssetType2["Video"] = "video";
  return TDAssetType2;
})(TDAssetType || {});
var TDExportType = /* @__PURE__ */ ((TDExportType2) => {
  TDExportType2["PNG"] = "png";
  TDExportType2["JPG"] = "jpeg";
  TDExportType2["WEBP"] = "webp";
  TDExportType2["SVG"] = "svg";
  TDExportType2["JSON"] = "json";
  return TDExportType2;
})(TDExportType || {});
var TDExportBackground = /* @__PURE__ */ ((TDExportBackground2) => {
  TDExportBackground2["Transparent"] = "transparent";
  TDExportBackground2["Auto"] = "auto";
  TDExportBackground2["Light"] = "light";
  TDExportBackground2["Dark"] = "dark";
  return TDExportBackground2;
})(TDExportBackground || {});

// src/hooks/useKeyboardShortcuts.tsx
function useKeyboardShortcuts(ref) {
  const app = useTldrawApp();
  const canHandleEvent = React4.useCallback(
    (ignoreMenus = false) => {
      const elm = ref.current;
      if (ignoreMenus && (app.isMenuOpen || app.settings.keepStyleMenuOpen))
        return true;
      return elm && (document.activeElement === elm || elm.contains(document.activeElement));
    },
    [ref]
  );
  React4.useEffect(() => {
    if (!app)
      return;
    const handleCut = (e) => {
      if (!canHandleEvent(true))
        return;
      if (app.readOnly) {
        app.copy(void 0, e);
        return;
      }
      app.cut(void 0, e);
    };
    const handleCopy = (e) => {
      if (!canHandleEvent(true))
        return;
      app.copy(void 0, e);
    };
    const handlePaste = (e) => {
      if (!canHandleEvent(true))
        return;
      if (app.readOnly)
        return;
      app.paste(void 0, e);
    };
    document.addEventListener("cut", handleCut);
    document.addEventListener("copy", handleCopy);
    document.addEventListener("paste", handlePaste);
    return () => {
      document.removeEventListener("cut", handleCut);
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("paste", handlePaste);
    };
  }, [app]);
  useHotkeys(
    "v,1",
    () => {
      if (!canHandleEvent(true))
        return;
      app.selectTool("select");
    },
    [app, ref.current]
  );
  useHotkeys(
    "d,p,2",
    () => {
      if (!canHandleEvent(true))
        return;
      app.selectTool("draw" /* Draw */);
    },
    void 0,
    [app]
  );
  useHotkeys(
    "e,3",
    () => {
      if (!canHandleEvent(true))
        return;
      app.selectTool("erase");
    },
    void 0,
    [app]
  );
  useHotkeys(
    "r,4",
    () => {
      if (!canHandleEvent(true))
        return;
      app.selectTool("rectangle" /* Rectangle */);
    },
    void 0,
    [app]
  );
  useHotkeys(
    "o,5",
    () => {
      if (!canHandleEvent(true))
        return;
      app.selectTool("ellipse" /* Ellipse */);
    },
    void 0,
    [app]
  );
  useHotkeys(
    "g,6",
    () => {
      if (!canHandleEvent())
        return;
      app.selectTool("triangle" /* Triangle */);
    },
    void 0,
    [app]
  );
  useHotkeys(
    "l,7",
    () => {
      if (!canHandleEvent(true))
        return;
      app.selectTool("line" /* Line */);
    },
    void 0,
    [app]
  );
  useHotkeys(
    "a,8",
    () => {
      if (!canHandleEvent(true))
        return;
      app.selectTool("arrow" /* Arrow */);
    },
    void 0,
    [app]
  );
  useHotkeys(
    "t,9",
    () => {
      if (!canHandleEvent(true))
        return;
      app.selectTool("text" /* Text */);
    },
    void 0,
    [app]
  );
  useHotkeys(
    "s,0",
    () => {
      if (!canHandleEvent(true))
        return;
      app.selectTool("sticky" /* Sticky */);
    },
    void 0,
    [app]
  );
  useHotkeys(
    "ctrl+shift+d,\u2318+shift+d",
    (e) => {
      if (!canHandleEvent(true))
        return;
      app.toggleDarkMode();
      e.preventDefault();
    },
    void 0,
    [app]
  );
  useHotkeys(
    "ctrl+.,\u2318+.",
    () => {
      if (!canHandleEvent(true))
        return;
      app.toggleFocusMode();
    },
    void 0,
    [app]
  );
  useHotkeys(
    "ctrl+shift+g,\u2318+shift+g",
    () => {
      if (!canHandleEvent(true))
        return;
      app.toggleGrid();
    },
    void 0,
    [app]
  );
  const { onNewProject, onOpenProject, onSaveProject, onSaveProjectAs, onOpenMedia } = useFileSystemHandlers();
  useHotkeys(
    "ctrl+n,\u2318+n",
    (e) => {
      e.preventDefault();
      if (!canHandleEvent())
        return;
      onNewProject(e);
    },
    void 0,
    [app]
  );
  useHotkeys(
    "ctrl+s,\u2318+s",
    (e) => {
      if (!canHandleEvent())
        return;
      onSaveProject(e);
    },
    void 0,
    [app]
  );
  useHotkeys(
    "ctrl+shift+s,\u2318+shift+s",
    (e) => {
      if (!canHandleEvent())
        return;
      onSaveProjectAs(e);
    },
    void 0,
    [app]
  );
  useHotkeys(
    "ctrl+alt+1,\u2318+alt+1",
    (e) => {
      if (!canHandleEvent())
        return;
      app.exportImage("svg" /* SVG */, { scale: 2, quality: 1 });
    },
    void 0,
    [app]
  );
  useHotkeys(
    "ctrl+alt+2,\u2318+alt+2",
    (e) => {
      if (!canHandleEvent())
        return;
      app.exportImage("png" /* PNG */, { scale: 2, quality: 1 });
    },
    void 0,
    [app]
  );
  useHotkeys(
    "ctrl+alt+3,\u2318+alt+3",
    (e) => {
      if (!canHandleEvent())
        return;
      app.exportImage("jpeg" /* JPG */, { scale: 2, quality: 1 });
    },
    void 0,
    [app]
  );
  useHotkeys(
    "ctrl+alt+4,\u2318+alt+4",
    (e) => {
      if (!canHandleEvent())
        return;
      app.exportImage("webp" /* WEBP */, { scale: 2, quality: 1 });
    },
    void 0,
    [app]
  );
  useHotkeys(
    "ctrl+alt+5,\u2318+alt+5",
    (e) => {
      if (!canHandleEvent())
        return;
      app.exportJson();
    },
    void 0,
    [app]
  );
  useHotkeys(
    "ctrl+o,\u2318+o",
    (e) => {
      if (!canHandleEvent())
        return;
      onOpenProject(e);
    },
    void 0,
    [app]
  );
  useHotkeys(
    "ctrl+u,\u2318+u",
    (e) => {
      if (!canHandleEvent())
        return;
      onOpenMedia(e);
    },
    void 0,
    [app]
  );
  useHotkeys(
    "\u2318+z,ctrl+z",
    (e) => {
      e.preventDefault();
      if (!canHandleEvent(true))
        return;
      if (app.session) {
        app.cancelSession();
      } else {
        app.undo();
      }
    },
    void 0,
    [app]
  );
  useHotkeys(
    "ctrl+shift+z,\u2318+shift+z",
    () => {
      if (!canHandleEvent(true))
        return;
      if (app.session) {
        app.cancelSession();
      } else {
        app.redo();
      }
    },
    void 0,
    [app]
  );
  useHotkeys(
    "\u2318+u,ctrl+u",
    () => {
      if (!canHandleEvent())
        return;
      app.undoSelect();
    },
    void 0,
    [app]
  );
  useHotkeys(
    "ctrl+shift-u,\u2318+shift+u",
    () => {
      if (!canHandleEvent())
        return;
      app.redoSelect();
    },
    void 0,
    [app]
  );
  useHotkeys(
    "ctrl+=,\u2318+=,ctrl+num_add,\u2318+num_add",
    (e) => {
      if (!canHandleEvent(true))
        return;
      app.zoomIn();
      e.preventDefault();
    },
    void 0,
    [app]
  );
  useHotkeys(
    "ctrl+-,\u2318+-,ctrl+num_subtract,\u2318+num_subtract",
    (e) => {
      if (!canHandleEvent(true))
        return;
      app.zoomOut();
      e.preventDefault();
    },
    void 0,
    [app]
  );
  useHotkeys(
    "shift+0,ctrl+numpad_0,\u2318+numpad_0",
    () => {
      if (!canHandleEvent(true))
        return;
      app.resetZoom();
    },
    void 0,
    [app]
  );
  useHotkeys(
    "shift+1",
    () => {
      if (!canHandleEvent(true))
        return;
      app.zoomToFit();
    },
    void 0,
    [app]
  );
  useHotkeys(
    "shift+2",
    () => {
      if (!canHandleEvent(true))
        return;
      app.zoomToSelection();
    },
    void 0,
    [app]
  );
  useHotkeys(
    "ctrl+d,\u2318+d",
    (e) => {
      if (!canHandleEvent())
        return;
      app.duplicate();
      e.preventDefault();
    },
    void 0,
    [app]
  );
  useHotkeys(
    "shift+h",
    () => {
      if (!canHandleEvent(true))
        return;
      app.flipHorizontal();
    },
    void 0,
    [app]
  );
  useHotkeys(
    "shift+v",
    () => {
      if (!canHandleEvent(true))
        return;
      app.flipVertical();
    },
    void 0,
    [app]
  );
  useHotkeys(
    "escape",
    () => {
      if (!canHandleEvent(true))
        return;
      app.cancel();
    },
    void 0,
    [app]
  );
  useHotkeys(
    "backspace,del",
    () => {
      if (!canHandleEvent())
        return;
      app.delete();
    },
    void 0,
    [app]
  );
  useHotkeys(
    "\u2318+a,ctrl+a",
    () => {
      if (!canHandleEvent(true))
        return;
      app.selectAll();
    },
    void 0,
    [app]
  );
  useHotkeys(
    "up",
    () => {
      if (!canHandleEvent())
        return;
      app.nudge([0, -1], false);
    },
    void 0,
    [app]
  );
  useHotkeys(
    "right",
    () => {
      if (!canHandleEvent())
        return;
      app.nudge([1, 0], false);
    },
    void 0,
    [app]
  );
  useHotkeys(
    "down",
    () => {
      if (!canHandleEvent())
        return;
      app.nudge([0, 1], false);
    },
    void 0,
    [app]
  );
  useHotkeys(
    "left",
    () => {
      if (!canHandleEvent())
        return;
      app.nudge([-1, 0], false);
    },
    void 0,
    [app]
  );
  useHotkeys(
    "shift+up",
    () => {
      if (!canHandleEvent())
        return;
      app.nudge([0, -1], true);
    },
    void 0,
    [app]
  );
  useHotkeys(
    "shift+right",
    () => {
      if (!canHandleEvent())
        return;
      app.nudge([1, 0], true);
    },
    void 0,
    [app]
  );
  useHotkeys(
    "shift+down",
    () => {
      if (!canHandleEvent())
        return;
      app.nudge([0, 1], true);
    },
    void 0,
    [app]
  );
  useHotkeys(
    "shift+left",
    () => {
      if (!canHandleEvent())
        return;
      app.nudge([-1, 0], true);
    },
    void 0,
    [app]
  );
  useHotkeys(
    "\u2318+shift+l,ctrl+shift+l",
    () => {
      if (!canHandleEvent())
        return;
      app.toggleLocked();
    },
    void 0,
    [app]
  );
  useHotkeys(
    "\u2318+shift+c,ctrl+shift+c",
    (e) => {
      if (!canHandleEvent())
        return;
      app.copySvg();
      e.preventDefault();
    },
    void 0,
    [app]
  );
  useHotkeys(
    "\u2318+g,ctrl+g",
    (e) => {
      if (!canHandleEvent())
        return;
      app.group();
      e.preventDefault();
    },
    void 0,
    [app]
  );
  useHotkeys(
    "\u2318+shift+g,ctrl+shift+g",
    (e) => {
      if (!canHandleEvent())
        return;
      app.ungroup();
      e.preventDefault();
    },
    void 0,
    [app]
  );
  useHotkeys(
    "[",
    () => {
      if (!canHandleEvent(true))
        return;
      app.moveBackward();
    },
    void 0,
    [app]
  );
  useHotkeys(
    "]",
    () => {
      if (!canHandleEvent(true))
        return;
      app.moveForward();
    },
    void 0,
    [app]
  );
  useHotkeys(
    "shift+[",
    () => {
      if (!canHandleEvent(true))
        return;
      app.moveToBack();
    },
    void 0,
    [app]
  );
  useHotkeys(
    "shift+]",
    () => {
      if (!canHandleEvent(true))
        return;
      app.moveToFront();
    },
    void 0,
    [app]
  );
  useHotkeys(
    "ctrl+shift+backspace,\u2318+shift+backspace",
    (e) => {
      if (!canHandleEvent())
        return;
      if (app.settings.isDebugMode) {
        app.resetDocument();
      }
      e.preventDefault();
    },
    void 0,
    [app]
  );
  useHotkeys(
    "alt+command+l,alt+ctrl+l",
    (e) => {
      if (!canHandleEvent(true))
        return;
      app.style({ textAlign: "start" /* Start */ });
      e.preventDefault();
    },
    void 0,
    [app]
  );
  useHotkeys(
    "alt+command+t,alt+ctrl+t",
    (e) => {
      if (!canHandleEvent(true))
        return;
      app.style({ textAlign: "middle" /* Middle */ });
      e.preventDefault();
    },
    void 0,
    [app]
  );
  useHotkeys(
    "alt+command+r,alt+ctrl+r",
    (e) => {
      if (!canHandleEvent(true))
        return;
      app.style({ textAlign: "end" /* End */ });
      e.preventDefault();
    },
    void 0,
    [app]
  );
}

// src/hooks/useTldrawApp.tsx
import * as React5 from "react";
var TldrawContext = React5.createContext({});
var useForceUpdate = () => {
  const [_state, setState] = React5.useState(0);
  React5.useEffect(() => setState(1));
};
function useTldrawApp() {
  const context = React5.useContext(TldrawContext);
  return context;
}
var ContainerContext = React5.createContext({});
function useContainer() {
  const context = React5.useContext(ContainerContext);
  useForceUpdate();
  return context;
}

// src/hooks/useTranslation.ts
import * as React6 from "react";

// src/translations/ar.json
var ar_default = {
  "style.menu.color": "\u0627\u0644\u0644\u0648\u0646",
  "style.menu.fill": "\u064A\u0645\u0644\u0623",
  "style.menu.dash": "\u0645\u062A\u0642\u0637\u0639",
  "style.menu.size": "\u062D\u062C\u0645",
  "style.menu.keep.open": "\u062A\u0628\u0642\u0649 \u0645\u0641\u062A\u0648\u062D\u0629",
  "style.menu.font": "\u0627\u0644\u062E\u0637",
  "style.menu.align": "\u0645\u062D\u0627\u0630\u0627\u0629",
  styles: "\u0627\u0644\u0623\u0646\u0645\u0627\u0637",
  "zoom.in": "\u062A\u0643\u0628\u064A\u0631",
  "zoom.out": "\u062A\u0635\u063A\u064A\u0631",
  to: "\u0625\u0644\u0649",
  "menu.tools": "\u0623\u062F\u0648\u0627\u062A",
  "menu.transform": "\u0627\u0644\u062A\u062D\u0648\u064A\u0644\u0627\u062A",
  "menu.file": "\u0645\u0644\u0641",
  "menu.edit": "\u062A\u062D\u0631\u064A\u0631",
  "menu.view": "\u0645\u0639\u0627\u064A\u0646\u0629",
  "menu.preferences": "\u0627\u0644\u062A\u0641\u0636\u064A\u0644\u0627\u062A",
  "menu.sign.in": "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644",
  "menu.sign.out": "\u062E\u0631\u0648\u062C",
  "become.a.sponsor": "\u0643\u0646 \u0631\u0627\u0639\u064A\u0627\u064B",
  "zoom.to.content": "\u0627\u0644\u0639\u0648\u062F\u0629 \u0625\u0644\u0649 \u0627\u0644\u0645\u062D\u062A\u0648\u0649",
  "zoom.to.selection": "\u062A\u0643\u0628\u064A\u0631 \u0644\u0644\u062A\u062D\u062F\u064A\u062F",
  "zoom.to.fit": "\u062A\u0643\u0628\u064A\u0631 \u0644\u062A\u0646\u0627\u0633\u0628",
  "zoom.to": "\u062A\u0643\u0628\u064A\u0631 \u0625\u0644\u0649",
  "preferences.dark.mode": "\u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u062F\u0627\u0643\u0646",
  "preferences.focus.mode": "\u0648\u0636\u0639 \u0627\u0644\u062A\u0631\u0643\u064A\u0632",
  "preferences.debug.mode": "\u0648\u0636\u0639 \u0627\u0644\u062A\u0635\u062D\u064A\u062D",
  "preferences.show.grid": "\u0627\u0638\u0647\u0631 \u0627\u0644\u0634\u0628\u0643\u0629",
  "preferences.use.cad.selection": "\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u062A\u062D\u062F\u064A\u062F CAD",
  "preferences.keep.stylemenu.open": "\u0627\u0644\u0627\u062D\u062A\u0641\u0627\u0638 \u0628\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0646\u0645\u0637 \u0645\u0641\u062A\u0648\u062D\u0629",
  "preferences.always.show.snaps": "\u0625\u0638\u0647\u0627\u0631 \u0627\u0644\u0644\u0642\u0637\u0627\u062A \u062F\u0627\u0626\u0645\u064B\u0627",
  "preferences.rotate.handles": "\u062A\u062F\u0648\u064A\u0631 \u0627\u0644\u0645\u0642\u0627\u0628\u0636",
  "preferences.binding.handles": "\u0645\u0642\u0627\u0628\u0636 \u0645\u0644\u0632\u0645\u0629",
  "preferences.clone.handles": "\u0645\u0642\u0627\u0628\u0636 \u0627\u0633\u062A\u0646\u0633\u0627\u062E",
  undo: "\u0627\u0644\u063A\u0627\u0621",
  redo: "\u0625\u0639\u0627\u062F\u0629",
  cut: "\u0642\u0637\u0639",
  copy: "\u0646\u0633\u062D",
  paste: "\u0644\u0635\u0642",
  "copy.as": "\u0646\u0633\u062E \u0627\u0644\u0649",
  "export.as": "\u0635\u062F\u0631 \u0627\u0644\u0649",
  "select.all": "\u0627\u062E\u062A\u0631 \u0627\u0644\u0643\u0644",
  "select.none": "\u0644\u0627 \u062A\u062E\u062A\u0631 \u0634\u064A\u0621",
  delete: "\u062D\u0630\u0641",
  "new.project": "\u0645\u0634\u0631\u0648\u0639 \u062C\u062F\u064A\u062F",
  open: "\u0641\u062A\u062D",
  save: "\u062D\u0641\u0638",
  "save.as": "\u062D\u0641\u0638 \u0628\u0627\u0633\u0645",
  "upload.media": "\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0648\u0633\u0627\u0626\u0637",
  "create.page": "\u0625\u0646\u0634\u0627\u0621 \u0635\u0641\u062D\u0629",
  "new.page": "\u0635\u0641\u062D\u0629 \u062C\u062F\u064A\u062F\u0629",
  "page.name": "\u0627\u0633\u0645 \u0627\u0644\u0635\u0641\u062D\u0629",
  duplicate: "\u0646\u0633\u062E",
  cancel: "\u0627\u0644\u063A\u0627\u0621",
  "copy.invite.link": "\u0646\u0633\u062E \u0631\u0627\u0628\u0637 \u0627\u0644\u062F\u0639\u0648\u0629",
  "copy.readonly.link": "\u0646\u0633\u062E \u0631\u0627\u0628\u0637 \u062F\u0639\u0648\u0629 \u0627\u0644\u0642\u0631\u0627\u0621\u0629 \u0641\u0642\u0637",
  "create.multiplayer.project": "\u0642\u0645 \u0628\u0625\u0646\u0634\u0627\u0621 \u0645\u0634\u0631\u0648\u0639 \u0645\u062A\u0639\u062F\u062F \u0627\u0644\u0644\u0627\u0639\u0628\u064A\u0646",
  "copy.multiplayer.project": "\u0646\u0633\u062E \u0625\u0644\u0649 \u0645\u0634\u0631\u0648\u0639 \u0645\u062A\u0639\u062F\u062F \u0627\u0644\u0644\u0627\u0639\u0628\u064A\u0646",
  select: "\u0627\u062E\u062A\u0631",
  eraser: "\u0645\u0645\u062D\u0627\u0629",
  draw: "\u0631\u0633\u0645",
  arrow: "\u0633\u0647\u0645",
  text: "\u0646\u0635",
  sticky: "\u0644\u0627\u0635\u0642",
  rectangle: "\u0645\u0631\u0628\u0639",
  ellipse: "\u0628\u064A\u0636\u0627\u0648\u064A",
  triangle: "\u0645\u062B\u0644\u062B",
  line: "\u062E\u0637",
  rotate: "\u062F\u0648\u0651\u0631",
  "lock.aspect.ratio": "\u0642\u0641\u0644 \u0646\u0633\u0628\u0629 \u0627\u0644\u0627\u0628\u0639\u0627\u062F",
  "unlock.aspect.ratio": "\u0641\u062A\u062D \u0642\u0641\u0644 \u0646\u0633\u0628\u0629 \u0627\u0644\u0627\u0628\u0639\u0627\u062F",
  group: "\u062C\u0645\u0651\u0639",
  ungroup: "\u0641\u0643 \u0627\u0644\u062A\u062C\u0645\u0639",
  "move.to.back": "\u0627\u0646\u062A\u0642\u0644 \u0625\u0644\u0649 \u0627\u0644\u062E\u0644\u0641",
  "move.backward": "\u062A\u062D\u0631\u064A\u0643 \u0644\u0644\u062E\u0644\u0641",
  "move.forward": "\u062A\u062D\u0631\u064A\u0643 \u0644\u0644\u0623\u0645\u0627\u0645",
  "move.to.front": "\u062A\u062D\u0631\u0643 \u0644\u0644\u0623\u0645\u0627\u0645",
  "reset.angle": "\u0625\u0639\u0627\u062F\u0629 \u0636\u0628\u0637 \u0627\u0644\u0632\u0627\u0648\u064A\u0629",
  lock: "\u0642\u0641\u0644",
  unlock: "\u0627\u0644\u063A\u0627\u0621 \u0627\u0644\u0642\u0641\u0644",
  "move.to.page": "\u0627\u0646\u0642\u0644 \u0625\u0644\u0649 \u0627\u0644\u0635\u0641\u062D\u0629",
  "flip.horizontal": "\u0627\u0646\u0639\u0643\u0627\u0633 \u0623\u0641\u0642\u064A",
  "flip.vertical": "\u0627\u0646\u0639\u0643\u0627\u0633 \u0639\u0645\u0648\u062F\u064A",
  move: "\u062D\u0631\u0651\u0643",
  "to.front": "\u0644\u0644\u0627\u0645\u0627\u0645",
  forward: "\u0644\u0644\u062E\u0644\u0641",
  backward: "\u0644\u0644\u0648\u0631\u0627\u0621",
  back: "\u062E\u0644\u0641",
  language: "\u0644\u063A\u0629",
  "translation.link": "\u0644\u0644\u0645\u0632\u064A\u062F",
  "dock.position": "\u0645\u0648\u0642\u0639 \u0627\u0644\u0627\u062F\u0648\u0627\u062A",
  bottom: "\u0627\u0633\u0641\u0644",
  left: "\u064A\u0633\u0627\u0631",
  right: "\u064A\u0645\u064A\u0646",
  top: "\u0623\u0639\u0644\u0649",
  page: "\u0635\u0641\u062D\u0629",
  "keyboard.shortcuts": "\u0627\u062E\u062A\u0635\u0627\u0631\u0627\u062A \u0644\u0648\u062D\u0629 \u0627\u0644\u0645\u0641\u0627\u062A\u064A\u062D",
  search: "\u0628\u062D\u062B",
  loading: "{dots}\u062A\u062D\u0645\u064A\u0644 ",
  "export.background": "\u062A\u0635\u062F\u064A\u0631 \u0627\u0644\u062E\u0644\u0641\u064A\u0629",
  transparent: "\u0634\u0640\u0641\u0627\u0641",
  auto: "\u0630\u0627\u062A\u064A",
  light: "\u062E\u0641\u064A\u0641",
  dark: "\u063A\u0627\u0645\u0642",
  "dialog.save.firsttime": "\u0647\u0644 \u062A\u0631\u064A\u062F \u062D\u0641\u0638 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A \u0639\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u0645\u0634\u0631\u0648\u0639\u061F",
  "dialog.save.again": "\u0647\u0644 \u062A\u0631\u064A\u062F \u062D\u0641\u0638 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A \u0639\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u0645\u0634\u0631\u0648\u0639\u061F",
  "dialog.cancel": "\u0625\u0644\u063A\u0627\u0621",
  "dialog.no": "\u0644\u0627",
  "dialog.yes": "\u0646\u0639\u0645",
  "enter.file.name": "\u0623\u062F\u062E\u0644 \u0627\u0633\u0645 \u0627\u0644\u0645\u0644\u0641",
  image: "\u0635\u0648\u0631\u0629",
  "align.left": "\u0635\u0641\u0651 \u0644\u0644\u064A\u0633\u0627\u0631",
  "align.center.x": "\u0635\u0641\u0651 \u0627\u0644\u0645\u062D\u0648\u0631 \u0627\u0644\u0623\u0641\u0642\u064A \u0644\u0644\u0648\u0633\u0637",
  "align.right": "\u0635\u0641\u0651 \u0644\u0644\u064A\u0645\u064A\u0646",
  "align.top": "\u0635\u0641\u0651 \u0644\u0644\u0623\u0639\u0644\u0649",
  "align.center.y": "\u0635\u0641\u0651 \u0627\u0644\u0645\u062D\u0648\u0631 \u0627\u0644\u0639\u0645\u0648\u062F\u064A \u0644\u0644\u0648\u0633\u0637",
  "align.bottom": "\u0635\u0641\u0651 \u0644\u0644\u0623\u0633\u0641\u0644",
  "distribute.x": "\u062A\u0648\u0632\u064A\u0639 \u0623\u0641\u0642\u064A",
  "distribute.y": "\u062A\u0648\u0632\u064A\u0639 \u0639\u0645\u0648\u062F\u064A",
  "stretch.x": "\u062A\u0645\u062F\u064A\u062F \u0623\u0641\u0642\u064A",
  "stretch.y": "\u062A\u0645\u062F\u064A\u062F \u0639\u0645\u0648\u062F\u064A"
};

// src/translations/da.json
var da_default = {
  "style.menu.color": "Farve",
  "style.menu.fill": "Fyld",
  "style.menu.dash": "Streg",
  "style.menu.size": "St\xF8rrelse",
  "style.menu.keep.open": "Hold \xE5ben",
  "style.menu.font": "Skrifttype",
  "style.menu.align": "Juster",
  styles: "Format",
  "zoom.in": "Zoom ind",
  "zoom.out": "Zoom ud",
  to: "til",
  "menu.tools": "V\xE6rkt\xF8jer",
  "menu.transform": "Transformer",
  "menu.file": "Fil",
  "menu.edit": "Rediger",
  "menu.view": "Vis",
  "menu.preferences": "Indstillinger",
  "menu.sign.in": "Log ind",
  "menu.sign.out": "Log ud",
  "become.a.sponsor": "Bliv sponsor",
  "zoom.to.selection": "Zoom til valgte",
  "zoom.to.fit": "Zoom til l\xE6rred",
  "zoom.to": "Zoom til",
  "zoom.to.content": "Zoom til indhold",
  "preferences.dark.mode": "M\xF8rkt udseende",
  "preferences.focus.mode": "Fokus tilstand",
  "preferences.debug.mode": "Debug tilstand",
  "preferences.show.grid": "Vis net",
  "preferences.use.cad.selection": "Brug CAD udv\xE6lgelse",
  "preferences.keep.stylemenu.open": "Hold formatmenuen \xE5ben",
  "preferences.always.show.snaps": "Vis altid snaps",
  "preferences.rotate.handles": "Roteringsh\xE5ndtag",
  "preferences.binding.handles": "Bindingsh\xE5ndtag",
  "preferences.clone.handles": "Kloningsh\xE5ndtag",
  undo: "Fortryd",
  redo: "Gentag",
  cut: "Klip",
  copy: "Kopier",
  paste: "Inds\xE6t",
  "copy.as": "Kopier som",
  "export.as": "Eksporter som",
  "select.all": "V\xE6lg alt",
  "select.none": "Frav\xE6lg alt",
  delete: "Slet",
  "new.project": "Nyt projekt",
  open: "\xC5ben",
  save: "Gem",
  "save.as": "Gem som",
  "upload.media": "Upload medie",
  "create.page": "Opret side",
  "new.page": "Ny side",
  "page.name": "Sidenavn",
  duplicate: "Dupliker",
  cancel: "Fortryd",
  "copy.invite.link": "Kopier invitationslink",
  "create.multiplayer.project": "Opret multiplayer projekt",
  "copy.multiplayer.project": "Kopier til multiplayer projekt",
  select: "V\xE6lg",
  eraser: "Viskel\xE6der",
  draw: "Tegn",
  arrow: "Pil",
  text: "Tekst",
  sticky: "Note",
  rectangle: "Rektangel",
  ellipse: "Ellipse",
  triangle: "Trekant",
  line: "Linje",
  rotate: "Roter",
  "lock.aspect.ratio": "L\xE5s billedformat",
  "unlock.aspect.ratio": "Frig\xF8r billedformat",
  group: "Grupper",
  ungroup: "Opdel gruppe",
  "move.to.back": "Placer bagerst",
  "move.backward": "Flyt tilbage",
  "move.forward": "Flyt frem",
  "move.to.front": "L\xE6g forrest",
  "reset.angle": "Nulstil vinkel",
  lock: "L\xE5s",
  unlock: "L\xE5s op",
  "move.to.page": "Flyt til side",
  "flip.horizontal": "Vend vandret",
  "flip.vertical": "Vend lodret",
  move: "Flyt",
  "to.front": "Forrest",
  forward: "Frem",
  backward: "Tilbage",
  back: "Bagerst",
  language: "Sprog",
  "align.bottom": "Justering nederst",
  "align.center.x": "Vandret justering centreret",
  "align.center.y": "Lodret justering centreret",
  "align.distribute": "Juster / distribuer",
  "align.left": "Justering til venstre",
  "align.right": "Justering til h\xF8jre",
  "align.top": "Justering \xF8verst",
  "copy.readonly.link": "Kopier skrivebeskyttet link",
  "dialog.save.again": "Vil du gemme \xE6ndringerne til dit projekt?",
  "dialog.save.firsttime": "Vil du gemme dit projekt?",
  "dialog.yes": "Ja",
  "dialog.no": "Nej",
  "dialog.cancel": "Fortryd",
  "enter.file.name": "Skriv filnavn",
  "distribute.x": "Vandret distribuering",
  "distribute.y": "Lodret distribuering",
  "dock.position": "Placering af v\xE6rkt\xF8jslinje",
  bottom: "Nederst",
  left: "Venstre",
  right: "H\xF8jre",
  top: "\xD8verst",
  "export.background": "Baggrund ved eksport",
  auto: "Automatisk",
  light: "Lys",
  dark: "M\xF8rk",
  image: "Billede",
  "keyboard.shortcuts": "Tastaturgenveje",
  loading: "Indl\xE6ser",
  page: "Side",
  search: "S\xF8g",
  "stretch.x": "Str\xE6k vandret",
  "stretch.y": "Str\xE6k lodret",
  "translation.link": "L\xE6r mere",
  transparent: "Gennemsigtig"
};

// src/translations/de.json
var de_default = {
  "style.menu.color": "Farbe",
  "style.menu.fill": "F\xFCllen",
  "style.menu.dash": "Strich",
  "style.menu.size": "Gr\xF6\xDFe",
  "style.menu.keep.open": "Offen halten",
  "style.menu.font": "Schriftart",
  "style.menu.align": "Ausrichten",
  styles: "Stile",
  "zoom.in": "Heranzoomen",
  "zoom.out": "Herauszoomen",
  to: "zu",
  "menu.tools": "Werkzeuge",
  "menu.transform": "Transformieren",
  "menu.file": "Datei",
  "menu.edit": "Bearbeiten",
  "menu.view": "Ansicht",
  "menu.preferences": "Pr\xE4ferenzen",
  "menu.sign.in": "Einloggen",
  "menu.sign.out": "Ausloggen",
  "become.a.sponsor": "Sponsor werden",
  "zoom.to.content": "Zur\xFCck zum Inhalt",
  "zoom.to.selection": "Zur Auswahl zoomen",
  "zoom.to.fit": "Zoom anpassen",
  "zoom.to": "Zoomen nach",
  "preferences.dark.mode": "Dunkler Modus",
  "preferences.focus.mode": "Fokus Modus",
  "preferences.debug.mode": "Debug Modus",
  "preferences.show.grid": "Gitter anzeigen",
  "preferences.use.cad.selection": "CAD Auswahl verwenden",
  "preferences.keep.stylemenu.open": "Stilmen\xFC offen halten",
  "preferences.always.show.snaps": "Hilfslinien immer anzeigen",
  "preferences.rotate.handles": "Rotiergriffe",
  "preferences.binding.handles": "Bindegriffe",
  "preferences.clone.handles": "Klongriffe",
  undo: "R\xFCckg\xE4ngig machen",
  redo: "Wiederherstellen",
  cut: "Ausschneiden",
  copy: "Kopieren",
  paste: "Einf\xFCgen",
  "copy.as": "Kopieren als",
  "export.as": "Exportieren als",
  "select.all": "Alles ausw\xE4hlen",
  "select.none": "Nichts ausw\xE4hlen",
  delete: "L\xF6schen",
  "new.project": "Neues Projekt",
  open: "\xD6ffnen",
  save: "Speichern",
  "save.as": "Speichern als",
  "upload.media": "Medien hochladen",
  "create.page": "Seite erstellen",
  "new.page": "Neue Seite",
  "page.name": "Seitenname",
  duplicate: "Duplizieren",
  "shape.options": "Form Optionen",
  shapes: "Fromen",
  cancel: "Abbrechen",
  "copy.invite.link": "Einladungslink kopieren",
  "copy.readonly.link": "Schreibgesch\xFCtzten Link kopieren",
  "create.multiplayer.project": "Geteiltes Projekt erstellen",
  "copy.multiplayer.project": "In ein Geteiltes Projekt kopieren",
  select: "Ausw\xE4hlen",
  eraser: "Radierer",
  draw: "Malen",
  arrow: "Pfeil",
  text: "Text",
  sticky: "Notiz",
  rectangle: "Rechteck",
  ellipse: "Ellipse",
  triangle: "Dreieck",
  line: "Linie",
  rotate: "Drehen",
  "lock.aspect.ratio": "Seitenverh\xE4ltnis sperren",
  "unlock.aspect.ratio": "Seitenverh\xE4ltnis entsperren",
  group: "Gruppieren",
  ungroup: "Gruppierung aufheben",
  "move.to.back": "Nach Hinten verschieben",
  "move.backward": "R\xFCckw\xE4rts schieben",
  "move.forward": "Vorw\xE4rts schieben",
  "move.to.front": "Nach Vorne verschieben",
  "reset.angle": "Winkel zur\xFCcksetzen",
  lock: "Sperren",
  unlock: "Entsperren",
  "align.distribute": "Ausrichten / Verteilen",
  "move.to.page": "Zu Seite verschieben",
  "flip.horizontal": "Horizontal spiegeln",
  "flip.vertical": "Vertikal spiegeln",
  move: "Verschieben",
  "to.front": "Nach Vorne",
  forward: "Vorw\xE4rts",
  backward: "R\xFCckw\xE4rts",
  back: "Hinten",
  language: "Sprache",
  "translation.link": "Mehr erfahren",
  "dock.position": "Dock Position",
  bottom: "Unten",
  left: "Links",
  right: "Rechts",
  top: "Oben",
  page: "Seite",
  "keyboard.shortcuts": "Tastaturkurzbefehle",
  search: "Suche",
  loading: "Laden{dots}",
  "export.background": "Hintergrund Exportieren",
  transparent: "Transparent",
  auto: "Auto",
  light: "Hell",
  dark: "Dunkel",
  github: "Github",
  twitter: "Twitter",
  discord: "Discord",
  image: "Bild",
  "align.left": "Links ausrichten",
  "align.center.x": "Horizontal mittig ausrichten",
  "align.right": "Rechts ausrichten",
  "align.top": "Oben ausrichten",
  "align.center.y": "Vertikal mittig ausrichten",
  "align.bottom": "Unten ausrichten",
  "distribute.x": "Horizontal verteilen",
  "distribute.y": "Vertikal verteilen",
  "stretch.x": "Horizontal strecken",
  "stretch.y": "Vertikal strecken",
  "dialog.save.firsttime": "M\xF6chten Sie Ihr aktuelles Projekt speichern?",
  "dialog.save.again": "M\xF6chten Sie die \xC4nderungen an Ihrem aktuellen Projekt speichern?",
  "dialog.cancel": "Abbrechen",
  "dialog.no": "Nein",
  "dialog.yes": "Ja",
  "enter.file.name": "Dateiname eingeben",
  "tldraw-beta": "Probieren Sie das neue tldraw",
  white: "Wei\xDF",
  lightGray: "hellgrau",
  gray: "Frau",
  black: "Schwarz",
  green: "Gr\xFCn",
  cyan: "Cyan",
  blue: "Blau",
  indigo: "Indigo",
  violet: "Violett",
  red: "Rot",
  orange: "Orange",
  yellow: "Gelb",
  solid: "Durchgehend",
  dashed: "Gestrichelt",
  dotted: "Gepunktet",
  small: "Klein",
  medium: "Mittel",
  large: "Gro\xDF"
};

// src/translations/en.json
var en_default = {};

// src/translations/es.json
var es_default = {
  "style.menu.color": "Color",
  "style.menu.fill": "Relleno",
  "style.menu.dash": "L\xEDnea",
  "style.menu.size": "Tama\xF1o",
  "style.menu.keep.open": "Mantener abierto",
  "style.menu.font": "Fuente",
  "style.menu.align": "Alineaci\xF3n",
  styles: "Estilos",
  "zoom.in": "Acercar",
  "zoom.out": "Alejar",
  to: "A",
  "menu.tools": "Herramientas",
  "menu.transform": "Transformar",
  "menu.file": "Archivo",
  "menu.edit": "Editar",
  "menu.view": "Ver",
  "menu.preferences": "Preferencias",
  "menu.sign.in": "Iniciar sesi\xF3n",
  "menu.sign.out": "Cerrar sesi\xF3n",
  "become.a.sponsor": "Convi\xE9rtete en patrocinador",
  "zoom.to.content": "Acercar al contenido",
  "zoom.to.selection": "Acercar a la selecci\xF3n",
  "zoom.to.fit": "Ajustar a la ventana",
  "zoom.to": "Acercar a",
  "preferences.dark.mode": "Modo oscuro",
  "preferences.focus.mode": "Modo concentraci\xF3n",
  "preferences.debug.mode": "Modo depuraci\xF3n",
  "preferences.show.grid": "Mostrar cuadr\xEDcula",
  "preferences.use.cad.selection": "Usar selecci\xF3n CAD",
  "preferences.keep.stylemenu.open": "Mantener men\xFA de estilos abierto",
  "preferences.always.show.snaps": "Mostrar puntos de ajuste",
  "preferences.rotate.handles": "Control de rotaci\xF3n",
  "preferences.binding.handles": "Control de vinculaci\xF3n",
  "preferences.clone.handles": "Control de clonaci\xF3n",
  undo: "Deshacer",
  redo: "Rehacer",
  cut: "Cortar",
  copy: "Copiar",
  paste: "Pegar",
  "copy.as": "Copiar como",
  "export.as": "Exportar como",
  "select.all": "Selecionar todo",
  "select.none": "Selecionar nada",
  delete: "Borrar",
  "new.project": "Nuevo Proyecto",
  open: "Abrir",
  save: "Guardar",
  "save.as": "Guardar como",
  "upload.media": "Subir medios",
  "create.page": "Crear p\xE1gina",
  "new.page": "Nueva p\xE1gina",
  "page.name": "Nombre de p\xE1gina",
  duplicate: "Duplicar",
  "shape.options": "Opciones de formas",
  shapes: "Formas",
  cancel: "Cancelar",
  "copy.invite.link": "Copiar invitaci\xF3n",
  "copy.readonly.link": "Copiar invitaci\xF3n (solo lectura)",
  "create.multiplayer.project": "Crear proyecto multijugador",
  "copy.multiplayer.project": "Copiar proyecto multijugador",
  select: "Seleccionar",
  eraser: "Borrador",
  draw: "Dibujar",
  arrow: "Flecha",
  text: "Texto",
  sticky: "Pegatina",
  rectangle: "Rect\xE1ngulo",
  ellipse: "Elipse",
  triangle: "Tri\xE1ngulo",
  line: "L\xEDnea",
  rotate: "Rotar",
  "lock.aspect.ratio": "Bloquear relaci\xF3n de aspecto",
  "unlock.aspect.ratio": "Desbloquear relaci\xF3n de aspecto",
  group: "Agrupar",
  ungroup: "Desagrupar",
  "move.to.back": "Mover al fondo",
  "move.backward": "Mover atr\xE1s",
  "move.forward": "Mover adelante",
  "move.to.front": "Mover al frente",
  "reset.angle": "Restablecer \xE1ngulo",
  lock: "Bloquear",
  unlock: "Desbloquear",
  "align.distribute": "Alinear / Distribuir",
  "move.to.page": "Mover a p\xE1gina",
  "flip.horizontal": "Voltear horizontalmente",
  "flip.vertical": "Voltear verticalmente",
  move: "Mover",
  "to.front": "Al frente",
  forward: "Adelante",
  backward: "Atr\xE1s",
  back: "Fondo",
  language: "Idioma",
  "translation.link": "Saber m\xE1s",
  "dock.position": "Posici\xF3n del dock",
  bottom: "Abajo",
  left: "Izquierda",
  right: "Derecha",
  top: "Arriba",
  page: "P\xE1gina",
  "keyboard.shortcuts": "Atajos de teclado",
  search: "Buscar",
  loading: "Cargando{dots}",
  "export.background": "Exportar fondo",
  transparent: "Transparente",
  auto: "Auto",
  light: "Claro",
  dark: "Oscuro",
  github: "Github",
  twitter: "Twitter",
  discord: "Discord",
  image: "Imagen",
  "align.left": "Alinear a la izquierda",
  "align.center.x": "Alinear al centro horizontalmente",
  "align.right": "Alinear a la derecha",
  "align.top": "Alinear arriba",
  "align.center.y": "Alinear al centro verticalmente",
  "align.bottom": "Alinear abajo",
  "distribute.x": "Distribuir horizontalmente",
  "distribute.y": "Distribuir verticalmente",
  "stretch.x": "Estirar horizontalmente",
  "stretch.y": "Estirar verticalmente",
  "dialog.save.firsttime": "\xBFQuieres guardar el proyecto actual?",
  "dialog.save.again": "\xBFQuieres guardar los cambios en el proyecto actual?",
  "dialog.cancel": "Cancelar",
  "dialog.no": "No",
  "dialog.yes": "S\xED",
  "enter.file.name": "Introduce el nombre del arquivo",
  "tldraw-beta": "Prueba el nuevo tldraw",
  white: "Blanco",
  lightGray: "Gris claro",
  gray: "Gris",
  black: "Negro",
  green: "Verde",
  cyan: "Cian",
  blue: "Azul",
  indigo: "Indigo",
  violet: "Violeta",
  red: "Rojo",
  orange: "Naranja",
  yellow: "Amarillo",
  solid: "Cont\xEDnuo",
  dashed: "Discont\xEDnuo",
  dotted: "Punteado",
  small: "Peque\xF1o",
  medium: "Mediano",
  large: "Grande"
};

// src/translations/fa.json
var fa_default = {
  "style.menu.color": "\u0631\u0646\u06AF",
  "style.menu.fill": "\u062A\u0648\u067E\u064F\u0631",
  "style.menu.dash": "\u062E\u0637\u200C\u0686\u06CC\u0646",
  "style.menu.size": "\u0627\u0646\u062F\u0627\u0632\u0647",
  "style.menu.keep.open": "\u0628\u0627\u0632 \u0646\u06AF\u0647\u200C\u062F\u0627\u0634\u062A\u0646",
  "style.menu.font": "\u0642\u0644\u0645",
  "style.menu.align": "\u062A\u0631\u0627\u0632",
  styles: "\u0633\u0628\u06A9\u200C\u0647\u0627",
  "zoom.in": "\u0628\u0632\u0631\u06AF\u200C\u0646\u0645\u0627\u06CC\u06CC",
  "zoom.out": "\u06A9\u0648\u0686\u06A9\u200C\u0646\u0645\u0627\u06CC\u06CC",
  to: "\u0628\u0647",
  "menu.tools": "\u0627\u0628\u0632\u0627\u0631\u0647\u0627",
  "menu.transform": "\u062A\u063A\u06CC\u06CC\u0631 \u0634\u06A9\u0644",
  "menu.file": "\u067E\u0631\u0648\u0646\u062F\u0647",
  "menu.edit": "\u0648\u06CC\u0631\u0627\u06CC\u0634",
  "menu.view": "\u0646\u0645\u0627\u06CC\u0634",
  "menu.preferences": "\u062A\u0631\u062C\u06CC\u062D\u0627\u062A",
  "menu.sign.in": "\u0648\u0631\u0648\u062F",
  "menu.sign.out": "\u062E\u0631\u0648\u062C",
  "become.a.sponsor": "\u062D\u0645\u0627\u06CC\u062A\u200C\u06A9\u0646\u0646\u062F\u0647 \u0634\u0648\u06CC\u062F",
  "zoom.to.content": "\u0628\u0627\u0632\u06AF\u0634\u062A \u0628\u0647 \u0645\u062D\u062A\u0648\u0627",
  "zoom.to.selection": "\u0628\u0632\u0631\u06AF\u200C\u0646\u0645\u0627\u06CC\u06CC \u0628\u0647 \u0646\u0627\u062D\u06CC\u0647 \u0627\u0646\u062A\u062E\u0627\u0628\u200C\u0634\u062F\u0647",
  "zoom.to.fit": "\u0628\u0632\u0631\u06AF\u200C\u0646\u0645\u0627\u06CC\u06CC \u0645\u062A\u0646\u0627\u0633\u0628 \u0628\u0627 \u0635\u0641\u062D\u0647",
  "zoom.to": "\u0628\u0632\u0631\u06AF\u200C\u0646\u0645\u0627\u06CC\u06CC \u0628\u0647",
  "preferences.dark.mode": "\u062D\u0627\u0644\u062A \u062A\u0627\u0631\u06CC\u06A9",
  "preferences.focus.mode": "\u062D\u0627\u0644\u062A \u062A\u0645\u0631\u06A9\u0632",
  "preferences.debug.mode": "\u062D\u0627\u0644\u062A \u0639\u06CC\u0628\u200C\u06CC\u0627\u0628\u06CC",
  "preferences.show.grid": "\u0646\u0645\u0627\u06CC\u0634 \u062E\u0637\u0648\u0637 \u0631\u0627\u0647\u0646\u0645\u0627",
  "preferences.use.cad.selection": "\u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u062D\u0627\u0644\u062A \u0627\u0646\u062A\u062E\u0627\u0628 CAD",
  "preferences.keep.stylemenu.open": "\u0628\u0627\u0632 \u0646\u06AF\u0647\u200C\u062F\u0627\u0634\u062A\u0646 \u0645\u0646\u0648\u06CC \u0633\u0628\u06A9\u200C\u0647\u0627",
  "preferences.always.show.snaps": "\u0647\u0645\u06CC\u0634\u0647 \u0646\u0642\u0627\u0637 \u0686\u0633\u0628\u0627\u0646 \u0631\u0627 \u0646\u0634\u0627\u0646 \u0628\u062F\u0647",
  "preferences.rotate.handles": "\u062F\u0633\u062A\u06AF\u06CC\u0631\u0647\u200C\u0647\u0627\u06CC \u0686\u0631\u062E\u0634",
  "preferences.binding.handles": "\u062F\u0633\u062A\u06AF\u06CC\u0631\u0647\u200C\u0647\u0627\u06CC \u0627\u062A\u0635\u0627\u0644\u200C\u062F\u0647\u0646\u062F\u0647",
  "preferences.clone.handles": "\u062F\u0633\u062A\u06AF\u06CC\u0631\u0647\u200C\u0647\u0627\u06CC \u062A\u06A9\u062B\u06CC\u0631",
  undo: "\u0648\u0627\u06AF\u0631\u062F\u0627\u0646\u06CC",
  redo: "\u0627\u0646\u062C\u0627\u0645 \u062F\u0648\u0628\u0627\u0631\u0647",
  cut: "\u0628\u0631\u06CC\u062F\u0646",
  copy: "\u06A9\u067E\u06CC",
  paste: "\u062C\u0627\u06CC\u200C\u06AF\u0630\u0627\u0631\u06CC",
  "copy.as": "\u06A9\u067E\u06CC \u0628\u0647\u200C\u0639\u0646\u0648\u0627\u0646",
  "export.as": "\u062E\u0631\u0648\u062C\u06CC\u200C\u06AF\u0631\u0641\u062A\u0646 \u0628\u0647\u200C\u0639\u0646\u0648\u0627\u0646",
  "select.all": "\u0627\u0646\u062A\u062E\u0627\u0628 \u0647\u0645\u0647",
  "select.none": "\u0627\u0646\u062A\u062E\u0627\u0628 \u0647\u06CC\u0686\u200C\u06CC\u06A9",
  delete: "\u062D\u0630\u0641",
  "new.project": "\u067E\u0631\u0648\u0698\u0647 \u062C\u062F\u06CC\u062F",
  open: "\u0628\u0627\u0632\u06A9\u0631\u062F\u0646",
  save: "\u0630\u062E\u06CC\u0631\u0647",
  "save.as": "\u0630\u062E\u06CC\u0631\u0647 \u0628\u0647\u200C\u0639\u0646\u0648\u0627\u0646",
  "upload.media": "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u0631\u0633\u0627\u0646\u0647",
  "create.page": "\u0627\u06CC\u062C\u0627\u062F \u0628\u0631\u06AF\u0647",
  "new.page": "\u0628\u0631\u06AF\u0647 \u062C\u062F\u06CC\u062F",
  "page.name": "\u0646\u0627\u0645 \u0628\u0631\u06AF\u0647",
  duplicate: "\u062A\u06A9\u062B\u06CC\u0631\u06A9\u0631\u062F\u0646",
  "shape.options": "\u06AF\u0632\u06CC\u0646\u0647\u200C\u0647\u0627\u06CC \u0634\u06A9\u0644",
  shapes: "\u0634\u06A9\u0644\u200C\u0647\u0627",
  cancel: "\u0644\u063A\u0648",
  "copy.invite.link": "\u06A9\u067E\u06CC\u200C\u06A9\u0631\u062F\u0646 \u067E\u06CC\u0648\u0646\u062F \u062F\u0639\u0648\u062A",
  "copy.readonly.link": "\u06A9\u067E\u06CC\u200C\u06A9\u0631\u062F\u0646 \u067E\u06CC\u0648\u0646\u062F \u063A\u06CC\u0631\u0642\u0627\u0628\u0644 \u0648\u06CC\u0631\u0627\u06CC\u0634",
  "create.multiplayer.project": "\u0627\u06CC\u062C\u0627\u062F \u06CC\u06A9 \u067E\u0631\u0648\u0698\u0647 \u0686\u0646\u062F\u0646\u0641\u0631\u0647",
  "copy.multiplayer.project": "\u06A9\u067E\u06CC \u0628\u0647 \u067E\u0631\u0648\u0698\u0647 \u0686\u0646\u062F\u0646\u0641\u0631\u0647",
  select: "\u0627\u0646\u062A\u062E\u0627\u0628",
  eraser: "\u067E\u0627\u06A9\u200C\u06A9\u0646",
  draw: "\u0631\u0633\u0645",
  arrow: "\u0641\u0650\u0644\u0650\u0634",
  text: "\u0645\u062A\u0646",
  sticky: "\u0628\u0631\u06AF\u0647 \u0686\u0633\u0628\u0627\u0646",
  rectangle: "\u0686\u0647\u0627\u0631\u06AF\u0648\u0634",
  ellipse: "\u06AF\u0631\u062F\u06CC",
  triangle: "\u0633\u0647\u200C\u06AF\u0648\u0634",
  line: "\u062E\u0637",
  rotate: "\u0686\u0631\u062E\u0627\u0646\u062F\u0646",
  "lock.aspect.ratio": "\u0642\u0641\u0644\u200C\u06A9\u0631\u062F\u0646 \u0646\u0633\u0628\u062A \u0627\u0628\u0639\u0627\u062F",
  "unlock.aspect.ratio": "\u0627\u062C\u0627\u0632\u0647 \u062A\u063A\u06CC\u06CC\u0631 \u0646\u0633\u0628\u062A \u0627\u0628\u0639\u0627\u062F",
  group: "\u06AF\u0631\u0648\u0647\u200C\u0628\u0646\u062F\u06CC",
  ungroup: "\u0644\u063A\u0648 \u06AF\u0631\u0648\u0647\u200C\u0628\u0646\u062F\u06CC",
  "move.to.back": "\u0627\u0646\u062A\u0642\u0627\u0644 \u0628\u0647 \u0639\u0642\u0628",
  "move.backward": "\u0627\u0646\u062A\u0642\u0627\u0644 \u0628\u0647 \u0633\u0645\u062A \u0639\u0642\u0628",
  "move.forward": "\u0627\u0646\u062A\u0642\u0627\u0644 \u0628\u0647 \u0633\u0645\u062A \u062C\u0644\u0648",
  "move.to.front": "\u0627\u0646\u062A\u0642\u0627\u0644 \u0628\u0647 \u062C\u0644\u0648",
  "reset.angle": "\u0628\u0627\u0632\u0646\u0634\u0627\u0646\u06CC \u0632\u0627\u0648\u06CC\u0647",
  lock: "\u0642\u0641\u0644",
  unlock: "\u0628\u0627\u0632\u06A9\u0631\u062F\u0646 \u0642\u0641\u0644",
  "align.distribute": "\u062A\u0631\u0627\u0632 / \u067E\u062E\u0634\u200C\u06A9\u0631\u062F\u0646",
  "move.to.page": "\u0627\u0646\u062A\u0642\u0627\u0644 \u0628\u0647 \u0628\u0631\u06AF\u0647",
  "flip.horizontal": "\u0648\u0627\u0631\u0648\u0646\u0647\u200C\u0633\u0627\u0632\u06CC \u0627\u0641\u0642\u06CC",
  "flip.vertical": "\u0648\u0627\u0631\u0648\u0646\u0647\u200C\u0633\u0627\u0632\u06CC \u0639\u0645\u0648\u062F\u06CC",
  move: "\u062D\u0631\u06A9\u062A\u200C\u062F\u0627\u062F\u0646",
  "to.front": "\u0628\u0647 \u062C\u0644\u0648",
  forward: "\u0628\u0647 \u0633\u0645\u062A \u062C\u0644\u0648",
  backward: "\u0628\u0647 \u0633\u0645\u062A \u0639\u0642\u0628",
  back: "\u0628\u0647 \u0639\u0642\u0628",
  language: "\u0632\u0628\u0627\u0646",
  "translation.link": "\u06CC\u0627\u062F\u06AF\u06CC\u0631\u06CC \u0628\u06CC\u0634\u062A\u0631",
  "dock.position": "\u0645\u0648\u0642\u0639\u06CC\u062A \u0646\u0648\u0627\u0631 \u0627\u0628\u0632\u0627\u0631",
  bottom: "\u067E\u0627\u06CC\u06CC\u0646",
  left: "\u0686\u067E",
  right: "\u0631\u0627\u0633\u062A",
  top: "\u0628\u0627\u0644\u0627",
  page: "\u0628\u0631\u06AF\u0647",
  "keyboard.shortcuts": "\u0645\u06CC\u0627\u0646\u200C\u0628\u0631\u0647\u0627\u06CC \u0635\u0641\u062D\u0647\u200C\u06A9\u0644\u06CC\u062F",
  search: "\u062C\u0633\u062A\u062C\u0648",
  loading: "\u0628\u0627\u0631\u06AF\u06CC\u0631\u06CC{dots}",
  "export.background": "\u062E\u0631\u0648\u062C\u06CC\u200C\u06AF\u0631\u0641\u062A\u0646 \u067E\u0633\u200C\u0632\u0645\u06CC\u0646\u0647",
  transparent: "\u0634\u0641\u0627\u0641",
  auto: "\u062E\u0648\u062F\u06A9\u0627\u0631",
  light: "\u0631\u0648\u0634\u0646",
  dark: "\u062A\u0627\u0631\u06CC\u06A9",
  github: "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
  twitter: "\u062A\u0648\u06CC\u06CC\u062A\u0631",
  discord: "\u062F\u06CC\u0633\u06A9\u0648\u0631\u062F",
  image: "\u062A\u0635\u0648\u06CC\u0631",
  "align.left": "\u062A\u0631\u0627\u0632 \u0628\u0647 \u0686\u067E",
  "align.center.x": "\u062A\u0631\u0627\u0632 \u0628\u0647 \u0645\u0631\u06A9\u0632 \u0627\u0641\u0642\u06CC",
  "align.right": "\u062A\u0631\u0627\u0632 \u0628\u0647 \u0631\u0627\u0633\u062A",
  "align.top": "\u062A\u0631\u0627\u0632 \u0628\u0647 \u0628\u0627\u0644\u0627",
  "align.center.y": "\u062A\u0631\u0627\u0632 \u0628\u0647 \u0645\u0631\u06A9\u0632 \u0639\u0645\u0648\u062F\u06CC",
  "align.bottom": "\u062A\u0631\u0627\u0632 \u0628\u0647 \u067E\u0627\u06CC\u06CC\u0646",
  "distribute.x": "\u067E\u062E\u0634\u200C\u06A9\u0631\u062F\u0646 \u0627\u0641\u0642\u06CC",
  "distribute.y": "\u067E\u062E\u0634\u200C\u06A9\u0631\u062F\u0646 \u0639\u0645\u0648\u062F\u06CC",
  "stretch.x": "\u06A9\u0634\u200C\u0622\u0648\u0631\u062F\u0646 \u0627\u0641\u0642\u06CC",
  "stretch.y": "\u06A9\u0634\u200C\u0622\u0648\u0631\u062F\u0646 \u0639\u0645\u0648\u062F\u06CC",
  "dialog.save.firsttime": "\u0622\u06CC\u0627 \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u06CC\u062F \u067E\u0631\u0648\u0698\u0647 \u0641\u0639\u0644\u06CC \u062E\u0648\u062F \u0631\u0627 \u0630\u062E\u06CC\u0631\u0647 \u06A9\u0646\u06CC\u062F\u061F",
  "dialog.save.again": "\u0622\u06CC\u0627 \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u06CC\u062F \u06A9\u0647 \u062A\u063A\u06CC\u06CC\u0631\u0627\u062A \u0631\u0627 \u062F\u0631 \u067E\u0631\u0648\u0698\u0647 \u0641\u0639\u0644\u06CC \u062E\u0648\u062F \u0630\u062E\u06CC\u0631\u0647 \u06A9\u0646\u06CC\u062F\u061F",
  "dialog.cancel": "\u0644\u063A\u0648",
  "dialog.no": "\u062E\u06CC\u0631",
  "dialog.yes": "\u0628\u0644\u0647",
  "enter.file.name": "\u0646\u0627\u0645 \u067E\u0631\u0648\u0646\u062F\u0647 \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F",
  "tldraw-beta": "\u0627\u0645\u062A\u062D\u0627\u0646\u200C\u06A9\u0631\u062F\u0646 tldraw \u062C\u062F\u06CC\u062F",
  white: "\u0633\u0641\u06CC\u062F",
  lightGray: "\u062E\u0627\u06A9\u0633\u062A\u0631\u06CC \u0631\u0648\u0634\u0646",
  gray: "\u062E\u0627\u06A9\u0633\u062A\u0631\u06CC",
  black: "\u0645\u0634\u06A9\u06CC",
  green: "\u0633\u0628\u0632",
  cyan: "\u0641\u06CC\u0631\u0648\u0632\u0647\u200C\u0627\u06CC",
  blue: "\u0622\u0628\u06CC",
  indigo: "\u0646\u06CC\u0644\u06CC",
  violet: "\u0628\u0646\u0641\u0634",
  red: "\u0642\u0631\u0645\u0632",
  orange: "\u0646\u0627\u0631\u0646\u062C\u06CC",
  yellow: "\u0632\u0631\u062F",
  solid: "\u062A\u0648\u067E\u064F\u0631",
  dashed: "\u062E\u0637\u200C\u0686\u06CC\u0646",
  dotted: "\u0646\u0642\u0637\u0647\u200C\u0686\u06CC\u0646",
  small: "\u06A9\u0648\u0686\u06A9",
  medium: "\u0645\u062A\u0648\u0633\u0637",
  large: "\u0628\u0632\u0631\u06AF"
};

// src/translations/fr.json
var fr_default = {
  "style.menu.color": "Couleur",
  "style.menu.fill": "Remplir",
  "style.menu.dash": "Bordure",
  "style.menu.size": "Taille",
  "style.menu.keep.open": "Toujours afficher le menu",
  "style.menu.font": "Police",
  "style.menu.align": "Alignement",
  styles: "Styles",
  "zoom.in": "Zoom avant",
  "zoom.out": "Zoom arri\xE8re",
  to: "\xC0",
  "menu.tools": "Outils",
  "menu.transform": "Transformation",
  "menu.file": "Fichier",
  "menu.edit": "\xC9dition",
  "menu.view": "Afficher",
  "menu.preferences": "Pr\xE9f\xE9rences",
  "menu.sign.in": "S'authentifier",
  "menu.sign.out": "Se d\xE9connecter",
  "become.a.sponsor": "Devenir un sponsor",
  "zoom.to.content": "Retour au contenu",
  "zoom.to.selection": "Ajuster le zoom \xE0 la s\xE9lection",
  "zoom.to.fit": "Adapter le zoom au contenu",
  "zoom.to": "R\xE9tablir le zoom \xE0",
  "preferences.dark.mode": "Mode sombre",
  "preferences.focus.mode": "Mode focus",
  "preferences.debug.mode": "Afficher la barre d\xE9veloppeur",
  "preferences.show.grid": "Afficher la grille",
  "preferences.use.cad.selection": "Utiliser la s\xE9lection CAD",
  "preferences.keep.stylemenu.open": "Toujours afficher le menu styles",
  "preferences.always.show.snaps": "Afficher les rep\xE8res dynamiques",
  "preferences.rotate.handles": "Manier la rotation",
  "preferences.binding.handles": "Manier les liaisons",
  "preferences.clone.handles": "Manier le clonage",
  undo: "Annuler",
  redo: "R\xE9tablir",
  cut: "Couper",
  copy: "Copier",
  paste: "Coller",
  "copy.as": "Copier au format",
  "export.as": "Exporter au format",
  "select.all": "Tout s\xE9lectionner",
  "select.none": "Tout d\xE9s\xE9lectionner",
  delete: "Supprimer",
  "new.project": "Nouveau project",
  open: "Ouvrir",
  save: "Enregistrer",
  "save.as": "Enregistrer sous",
  "upload.media": "Importer un m\xE9dia",
  "create.page": "Cr\xE9er une page",
  "new.page": "Nouvelle Page",
  "page.name": "Nom de la page",
  duplicate: "Dupliquer",
  cancel: "Annuler",
  "copy.invite.link": "Copier le lien d'invitation",
  "copy.readonly.link": "Copier le lien en lecture seule d'invitation",
  "create.multiplayer.project": "Cr\xE9er un project multi-joueurs",
  "copy.multiplayer.project": "Copier dans un projet multi-joueurs",
  select: "S\xE9lection",
  eraser: "Gomme",
  draw: "Crayon",
  arrow: "Fl\xE8che",
  text: "Texte",
  sticky: "Note",
  rectangle: "Rectangle",
  ellipse: "Cercle",
  triangle: "Triangle",
  line: "Ligne",
  rotate: "Rotation",
  "lock.aspect.ratio": "Verrouiller les proportions",
  "unlock.aspect.ratio": "D\xE9verrouiller les proportions",
  group: "Grouper",
  ungroup: "D\xE9grouper",
  "move.to.back": "D\xE9placer \xE0 l'arri\xE8re-plan",
  "move.backward": "Reculer d'un plan",
  "move.forward": "Avancer d'un plan",
  "move.to.front": "Placer au premier plan",
  "reset.angle": "R\xE9initialiser la rotation",
  lock: "Verrouiller",
  unlock: "D\xE9verrouiller",
  "align.distribute": "Alignement / R\xE9partion",
  "move.to.page": "D\xE9placer vers la page",
  "flip.horizontal": "Retourner horizontalement",
  "flip.vertical": "Retourner verticalement",
  move: "Disposition",
  "to.front": "Placer au premier plan",
  forward: "Avancer d'un plan",
  backward: "Reculer d'un plan",
  back: "D\xE9placer \xE0 l'arri\xE8re-plan",
  language: "Langage",
  "translation.link": "En savoir plus",
  "dock.position": "Position du dock",
  bottom: "En bas",
  left: "\xC0 gauche",
  right: "\xC0 droite",
  top: "En haut",
  page: "Page",
  "keyboard.shortcuts": "Raccourcis clavier",
  search: "Rechercher",
  loading: "Chargement{dots}",
  "export.background": "Couleur d'arri\xE8re-plan de l'export",
  transparent: "Transparent",
  auto: "Automatique",
  light: "Clair",
  dark: "Sombre"
};

// src/translations/gl.json
var gl_default = {
  "style.menu.color": "Cor",
  "style.menu.fill": "Recheo",
  "style.menu.dash": "Li\xF1a",
  "style.menu.size": "Tama\xF1o",
  "style.menu.keep.open": "Manter aberto",
  "style.menu.font": "Fonte",
  "style.menu.align": "Ali\xF1amento",
  styles: "Estilos",
  "zoom.in": "Achegar",
  "zoom.out": "Afastar",
  to: "A",
  "menu.tools": "Ferramentas",
  "menu.transform": "Transformar",
  "menu.file": "Arquivo",
  "menu.edit": "Editar",
  "menu.view": "Ver",
  "menu.preferences": "Preferencias",
  "menu.sign.in": "Iniciar sesi\xF3n",
  "menu.sign.out": "Pechar sesi\xF3n",
  "become.a.sponsor": "Conv\xEDrtete en patrocinador",
  "zoom.to.content": "Achegar ao contido",
  "zoom.to.selection": "Achegar \xE1 selecci\xF3n",
  "zoom.to.fit": "Axustar \xE1 vent\xE1",
  "zoom.to": "Achegar a",
  "preferences.dark.mode": "Modo escuro",
  "preferences.focus.mode": "Modo concentraci\xF3n",
  "preferences.debug.mode": "Modo depuraci\xF3n",
  "preferences.show.grid": "Amosar cuadr\xEDcula",
  "preferences.use.cad.selection": "Usar selecci\xF3n CAD",
  "preferences.keep.stylemenu.open": "Manter men\xFA de estilos aberto",
  "preferences.always.show.snaps": "Amosar puntos de axuste",
  "preferences.rotate.handles": "Control de rotaci\xF3n",
  "preferences.binding.handles": "Control de vinculaci\xF3n",
  "preferences.clone.handles": "Control de clonaci\xF3n",
  undo: "Desfacer",
  redo: "Refacer",
  cut: "Cortar",
  copy: "Copiar",
  paste: "Pegar",
  "copy.as": "Copiar como",
  "export.as": "Exportar como",
  "select.all": "Selecionar todo",
  "select.none": "Selecionar nada",
  delete: "Borrar",
  "new.project": "Novo Proxecto",
  open: "Abrir",
  save: "Gardar",
  "save.as": "Gardar como",
  "upload.media": "Subir medios",
  "create.page": "Crear p\xE1xina",
  "new.page": "Nova p\xE1xina",
  "page.name": "Nome de p\xE1xina",
  duplicate: "Duplicar",
  "shape.options": "Opci\xF3ns de formas",
  shapes: "Formas",
  cancel: "Cancelar",
  "copy.invite.link": "Copiar invitaci\xF3n",
  "copy.readonly.link": "Copiar invitaci\xF3n (s\xF3 lectura)",
  "create.multiplayer.project": "Crear proxecto multixogador",
  "copy.multiplayer.project": "Copiar proxecto multixogador",
  select: "Seleccionar",
  eraser: "Borrador",
  draw: "Debuxar",
  arrow: "Frecha",
  text: "Texto",
  sticky: "Pegatina",
  rectangle: "Rect\xE1ngulo",
  ellipse: "Elipse",
  triangle: "Tri\xE1ngulo",
  line: "Li\xF1a",
  rotate: "Rotar",
  "lock.aspect.ratio": "Bloquear relaci\xF3n de aspecto",
  "unlock.aspect.ratio": "Desbloquear relaci\xF3n de aspecto",
  group: "Agrupar",
  ungroup: "Desagrupar",
  "move.to.back": "Mover ao fondo",
  "move.backward": "Mover atr\xE1s",
  "move.forward": "Mover adiante",
  "move.to.front": "Mover ao fronte",
  "reset.angle": "Restablecer \xE1ngulo",
  lock: "Bloquear",
  unlock: "Desbloquear",
  "align.distribute": "Ali\xF1ar / Distribu\xEDr",
  "move.to.page": "Mover \xE1 p\xE1xina",
  "flip.horizontal": "Voltear horizontalmente",
  "flip.vertical": "Voltear verticalmente",
  move: "Mover",
  "to.front": "Ao fronte",
  forward: "Adilante",
  backward: "Atr\xE1s",
  back: "Fondo",
  language: "Idioma",
  "translation.link": "Saber m\xE1is",
  "dock.position": "Posici\xF3n do dock",
  bottom: "Abaixo",
  left: "Esquerda",
  right: "Dereita",
  top: "Arriba",
  page: "P\xE1xina",
  "keyboard.shortcuts": "Atallos de teclado",
  search: "Buscar",
  loading: "Cargando{dots}",
  "export.background": "Exportar fondo",
  transparent: "Transparente",
  auto: "Auto",
  light: "Claro",
  dark: "Escuro",
  github: "Github",
  twitter: "Twitter",
  discord: "Discord",
  image: "Imaxe",
  "align.left": "Ali\xF1ar \xE1 esquerda",
  "align.center.x": "Ali\xF1ar ao centro horizontalmente",
  "align.right": "Ali\xF1ar \xE1 dereita",
  "align.top": "Ali\xF1ar arriba",
  "align.center.y": "Ali\xF1ar ao centro verticalmente",
  "align.bottom": "Ali\xF1ar abaixo",
  "distribute.x": "Distribu\xEDr horizontalmente",
  "distribute.y": "Distribu\xEDr verticalmente",
  "stretch.x": "Estirar horizontalmente",
  "stretch.y": "Estirar verticalmente",
  "dialog.save.firsttime": "Queres gardar o proxecto actual?",
  "dialog.save.again": "Queres gardar os cambios ao proxecto actual?",
  "dialog.cancel": "Cancelar",
  "dialog.no": "No",
  "dialog.yes": "S\xED",
  "enter.file.name": "Introduce o nome do arquivo",
  "tldraw-beta": "Proba o novo tldraw",
  white: "Branco",
  lightGray: "Gris claro",
  gray: "Gris",
  black: "Negro",
  green: "Verde",
  cyan: "Cian",
  blue: "Azul",
  indigo: "Indigo",
  violet: "Violeta",
  red: "Vermello",
  orange: "Laranxa",
  yellow: "Amarelo",
  solid: "Cont\xEDnuo",
  dashed: "Discont\xEDnuo",
  dotted: "Punteado",
  small: "Pequeno",
  medium: "Mediano",
  large: "Grande"
};

// src/translations/he.json
var he_default = {
  "style.menu.color": "\u05E6\u05D1\u05E2",
  "style.menu.fill": "\u05DE\u05DC\u05D0",
  "style.menu.dash": "\u05D2\u05D1\u05D5\u05DC",
  "style.menu.size": "\u05D2\u05D5\u05D3\u05DC",
  "style.menu.keep.open": "\u05D4\u05E9\u05D0\u05E8 \u05E4\u05EA\u05D5\u05D7",
  "style.menu.font": "\u05D2\u05D5\u05E4\u05DF",
  "style.menu.align": "\u05D9\u05D9\u05E9\u05D5\u05E8",
  styles: "\u05E2\u05D9\u05E6\u05D5\u05D1",
  "zoom.in": "\u05D4\u05D2\u05D3\u05DC \u05EA\u05E6\u05D5\u05D2\u05D4",
  "zoom.out": "\u05D4\u05E7\u05D8\u05DF \u05EA\u05E6\u05D5\u05D2\u05D4",
  to: "\u05DC",
  "menu.file": "\u05E7\u05D5\u05D1\u05E5",
  "menu.edit": "\u05E2\u05E8\u05D9\u05DB\u05D4",
  "menu.view": "\u05EA\u05E6\u05D5\u05D2\u05D4",
  "menu.preferences": "\u05DE\u05D0\u05E4\u05D9\u05D9\u05E0\u05D9\u05DD",
  "menu.sign.in": "\u05D4\u05D9\u05E8\u05E9\u05DD",
  "menu.sign.out": "\u05D4\u05EA\u05E0\u05EA\u05E7",
  "become.a.sponsor": "\u05DE\u05EA\u05DF \u05D7\u05E1\u05D5\u05EA",
  "zoom.to.selection": "\u05D6\u05D5\u05DD \u05DC\u05D1\u05D7\u05D9\u05E8\u05D4",
  "zoom.to.fit": "\u05D6\u05D5\u05DD \u05DC\u05D4\u05EA\u05D0\u05DE\u05D4",
  "zoom.to": "\u05D6\u05D5\u05DD \u05DC",
  "preferences.dark.mode": "\u05DE\u05E6\u05D1 \u05D7\u05E9\u05D5\u05DA",
  "preferences.focus.mode": "\u05DE\u05E6\u05D1 \u05E4\u05D5\u05E7\u05D5\u05E1",
  "preferences.debug.mode": "\u05DE\u05E6\u05D1 \u05D3\u05D9\u05D1\u05D0\u05D2",
  "preferences.show.grid": "(\u05D2\u05E8\u05D9\u05D3)\u05D4\u05E8\u05D0\u05D4 \u05E8\u05E9\u05EA \u05E2\u05D9\u05DE\u05D5\u05D3",
  "preferences.use.cad.selection": "\u05E1\u05D9\u05DE\u05D5\u05DF CAD",
  "preferences.keep.stylemenu.open": "\u05D4\u05E9\u05D0\u05E8 \u05EA\u05E4\u05E8\u05D9\u05D8 \u05E2\u05D9\u05E6\u05D5\u05D1 \u05E4\u05EA\u05D5\u05D7",
  "preferences.always.show.snaps": "\u05D4\u05E8\u05D0\u05D4 \u05E7\u05D5\u05D5\u05D9 \u05DE\u05EA\u05D0\u05E8",
  "preferences.rotate.handles": "\u05D4\u05E8\u05D0\u05D4 \u05D9\u05D3\u05D9\u05D5\u05EA \u05E1\u05D9\u05D1\u05D5\u05D1",
  "preferences.binding.handles": "\u05D4\u05E8\u05D0\u05D4 \u05D9\u05D3\u05D9\u05D5\u05EA \u05E7\u05E9\u05D9\u05E8\u05D4",
  "preferences.clone.handles": "\u05D4\u05E8\u05D0\u05D4 \u05D9\u05D3\u05D9\u05D5\u05EA \u05E9\u05D9\u05DB\u05E4\u05D5\u05DC",
  undo: "\u05D1\u05D8\u05DC",
  redo: "\u05E2\u05E9\u05D4 \u05DE\u05D7\u05D3\u05E9",
  cut: "\u05D2\u05D6\u05D5\u05E8",
  copy: "\u05D4\u05E2\u05EA\u05E7",
  paste: "\u05D4\u05D3\u05D1\u05E7",
  "copy.as": "\u05D4\u05E2\u05EA\u05E7 \u05DB",
  "export.as": "\u05D9\u05D9\u05E6\u05D0 \u05DB",
  "select.all": "\u05D1\u05D7\u05E8 \u05D4\u05DB\u05DC",
  "select.none": "\u05D1\u05D8\u05DC \u05D1\u05D7\u05D9\u05E8\u05D4",
  delete: "\u05DE\u05D7\u05E7",
  "new.project": "\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05D7\u05D3\u05E9",
  open: "\u05E4\u05EA\u05D7",
  save: "\u05E9\u05DE\u05D5\u05E8",
  "save.as": "\u05E9\u05DE\u05D5\u05E8 \u05DB",
  "upload.media": "\u05D4\u05E2\u05DC\u05D0\u05EA \u05DE\u05D3\u05D9\u05D4",
  "create.page": "\u05E6\u05D5\u05E8 \u05D3\u05E3",
  "new.page": "\u05D3\u05E3 \u05D7\u05D3\u05E9",
  "page.name": "\u05E9\u05DD \u05D4\u05D3\u05E3",
  duplicate: "\u05E9\u05DB\u05E4\u05DC",
  cancel: "\u05D1\u05D8\u05DC",
  "copy.invite.link": "\u05D4\u05E2\u05EA\u05E7 \u05E7\u05D9\u05E9\u05D5\u05E8 \u05D4\u05D6\u05DE\u05E0\u05D4",
  "create.multiplayer.project": "\u05E6\u05D5\u05E8 \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05E8\u05D1 \u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD",
  "copy.multiplayer.project": "\u05D4\u05E2\u05EA\u05E7 \u05DC\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05E8\u05D1 \u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD",
  select: "\u05E1\u05DE\u05DF",
  eraser: "\u05DE\u05D7\u05E7",
  draw: "\u05E6\u05D9\u05D9\u05E8",
  arrow: "\u05D7\u05E5",
  text: "\u05D8\u05E7\u05E1\u05D8",
  sticky: "\u05D3\u05D1\u05D9\u05E7\u05D9",
  rectangle: "\u05DE\u05E8\u05D5\u05D1\u05E2",
  ellipse: "\u05D0\u05DC\u05D9\u05E4\u05E1\u05D4",
  triangle: "\u05DE\u05E9\u05D5\u05DC\u05E9",
  line: "\u05E7\u05D5",
  rotate: "\u05E1\u05D5\u05D1\u05D1",
  "lock.aspect.ratio": "\u05E0\u05E2\u05DC \u05D9\u05D7\u05E1 \u05E8\u05D5\u05D7\u05D1-\u05D2\u05D5\u05D1\u05D4",
  "unlock.aspect.ratio": "\u05E9\u05D7\u05E8\u05E8 \u05E0\u05E2\u05D9\u05DC\u05EA \u05D9\u05D7\u05E1 \u05E8\u05D5\u05D7\u05D1-\u05D2\u05D5\u05D1\u05D4",
  group: "\u05E7\u05D1\u05E5",
  ungroup: "\u05D1\u05D8\u05DC \u05E7\u05D9\u05D1\u05D5\u05E5",
  "move.to.back": "\u05D4\u05D1\u05D0 \u05DC\u05EA\u05D7\u05EA\u05D9\u05EA",
  "move.backward": "\u05D4\u05D6\u05D6 \u05D0\u05D7\u05D5\u05E8\u05D4",
  "move.forward": "\u05D4\u05D6\u05D6 \u05E7\u05D3\u05D9\u05DE\u05D4",
  "move.to.front": "\u05D4\u05D1\u05D0 \u05DC\u05D7\u05D6\u05D9\u05EA",
  "reset.angle": "\u05D0\u05E4\u05E1 \u05D6\u05D5\u05D5\u05D9\u05EA",
  lock: "\u05E0\u05E2\u05DC",
  unlock: "\u05E9\u05D7\u05E8\u05E8 \u05E0\u05E2\u05D9\u05DC\u05D4",
  "move.to.page": "\u05D4\u05D6\u05D6 \u05DC\u05D3\u05E3",
  "flip.horizontal": "\u05D4\u05E4\u05D5\u05DA \u05D0\u05D5\u05E4\u05E7\u05D9\u05EA",
  "flip.vertical": "\u05D4\u05E4\u05D5\u05DA \u05D0\u05E0\u05DB\u05D9\u05EA",
  move: "\u05D4\u05D6\u05D6",
  "to.front": "\u05D4\u05D1\u05D0 \u05DC\u05E7\u05D3\u05D9\u05DE\u05D4",
  forward: "\u05E7\u05D3\u05D9\u05DE\u05D4",
  backward: "\u05D0\u05D7\u05D5\u05E8\u05D4",
  back: "\u05D1\u05D7\u05D6\u05E8\u05D4",
  language: "\u05E9\u05E4\u05D4"
};

// src/translations/it.json
var it_default = {
  "style.menu.color": "Colore",
  "style.menu.fill": "Riempi",
  "style.menu.dash": "Tratteggo",
  "style.menu.size": "Dimensione",
  "style.menu.keep.open": "Mantieni aperto",
  "style.menu.font": "Font",
  "style.menu.align": "Allineamento",
  styles: "Stile",
  "zoom.in": "Ingrandisci",
  "zoom.out": "Rimpicciolisci",
  to: "Imposta",
  "menu.file": "File",
  "menu.edit": "Modifica",
  "menu.view": "Visualizzazione",
  "menu.preferences": "Preferenze",
  "menu.sign.in": "Accedi",
  "menu.sign.out": "Esci",
  "become.a.sponsor": "Sponsorizza",
  "zoom.to.selection": "Adatta alla selezione",
  "zoom.to.fit": "Adatta",
  "zoom.to": "Ingrandisci",
  "preferences.dark.mode": "Modalit\xE0 scura",
  "preferences.focus.mode": "Modalit\xE0 zen",
  "preferences.debug.mode": "Modalit\xE0 sviluppatore",
  "preferences.show.grid": "Mostra griglia",
  "preferences.use.cad.selection": "Selezione CAD",
  "preferences.keep.stylemenu.open": "Mantieni menu stile aperto",
  "preferences.always.show.snaps": "Mostra sempre le guide",
  "preferences.rotate.handles": "Controlli d'inclinazione",
  "preferences.binding.handles": "Controlli d'associazione",
  "preferences.clone.handles": "Controlli di clonazione",
  undo: "Annulla",
  redo: "Ripristina",
  cut: "Taglia",
  copy: "Copia",
  paste: "Incolla",
  "copy.as": "Copia come",
  "export.as": "Esporta come",
  "select.all": "Seleziona tutto",
  "select.none": "Deseleziona tutto",
  delete: "Elimina",
  "new.project": "Nuovo progetto",
  open: "Apri",
  save: "Salva",
  "save.as": "Salva come",
  "upload.media": "Carica contenuti multimediali",
  "create.page": "Crea nuova pagina",
  "new.page": "Nuova pagina",
  "page.name": "Nome pagina",
  page: "Pagina",
  duplicate: "Duplica",
  cancel: "Chiudi",
  "copy.invite.link": "Copia link invito",
  "create.multiplayer.project": "Crea progetto multiplayer",
  "copy.multiplayer.project": "Trasforma in progetto multiplayer",
  select: "Seleziona",
  eraser: "Gomma",
  draw: "Matita",
  arrow: "Freccia",
  text: "Casella di testo",
  sticky: "Post-it",
  rectangle: "Rettangolo",
  ellipse: "Ellisse",
  triangle: "Triangolo",
  line: "Linea",
  rotate: "Ruota",
  "lock.aspect.ratio": "Blocca rapporto lati",
  "unlock.aspect.ratio": "Sblocca rapporto lati",
  group: "Raggruppa",
  ungroup: "Separa",
  "move.to.back": "Muovi in fondo",
  "move.backward": "Sposta indietro",
  "move.forward": "Sposta avanti",
  "move.to.front": "Muovi in fronte",
  "reset.angle": "Reimposta angolo",
  lock: "Blocca",
  unlock: "Sblocca",
  "move.to.page": "Trasferisci a pagina",
  "flip.horizontal": "Ribalta orizzontalmente",
  "flip.vertical": "Ribalta verticalmente",
  move: "Sposta",
  "to.front": "In primo piano",
  forward: "Sposta avanti",
  backward: "Sposta indietro",
  back: "In fondo",
  language: "Lingua",
  "dock.position": "Posizione dock",
  bottom: "In basso",
  left: "Sinistra",
  right: "Destra",
  top: "In Alto"
};

// src/translations/ja.json
var ja_default = {
  "style.menu.color": "\u8272",
  "style.menu.fill": "\u5857\u308A\u3064\u3076\u3057",
  "style.menu.dash": "\u7DDA",
  "style.menu.size": "\u592A\u3055/\u30B5\u30A4\u30BA",
  "style.menu.keep.open": "\u5E38\u306B\u8868\u793A",
  "style.menu.font": "\u30D5\u30A9\u30F3\u30C8",
  "style.menu.align": "\u914D\u7F6E",
  styles: "\u30B9\u30BF\u30A4\u30EB",
  "zoom.in": "\u62E1\u5927",
  "zoom.out": "\u7E2E\u5C0F",
  to: " ",
  "menu.file": "\u30D5\u30A1\u30A4\u30EB",
  "menu.edit": "\u7DE8\u96C6",
  "menu.view": "\u8868\u793A",
  "menu.preferences": "\u8A2D\u5B9A",
  "menu.sign.in": "\u30B5\u30A4\u30F3\u30A4\u30F3",
  "menu.sign.out": "\u30B5\u30A4\u30F3\u30A2\u30A6\u30C8",
  "become.a.sponsor": "\u652F\u63F4\u3059\u308B",
  "zoom.to.selection": "\u9078\u629E\u3057\u305F\u30A2\u30A4\u30C6\u30E0\u306B\u5408\u308F\u305B\u3066\u62E1\u5927",
  "zoom.to.fit": "\u62E1\u5927\u3057\u3066\u3059\u3079\u3066\u3092\u8868\u793A",
  "zoom.to": "\u62E1\u5927\u7387",
  "preferences.dark.mode": "\u30C0\u30FC\u30AF\u30E2\u30FC\u30C9",
  "preferences.focus.mode": "\u30D5\u30A9\u30FC\u30AB\u30B9\u30E2\u30FC\u30C9",
  "preferences.debug.mode": "\u30C7\u30D0\u30C3\u30B0\u30E2\u30FC\u30C9",
  "preferences.show.grid": "\u30B0\u30EA\u30C3\u30C9\u3092\u8868\u793A",
  "preferences.use.cad.selection": "CAD\u306E\u9078\u629E\u6CD5\u3092\u4F7F\u7528",
  "preferences.keep.stylemenu.open": "\u30B9\u30BF\u30A4\u30EB\u30E1\u30CB\u30E5\u30FC\u3092\u5E38\u306B\u8868\u793A",
  "preferences.always.show.snaps": "\u30B9\u30CA\u30C3\u30D7\u3092\u5E38\u306B\u8868\u793A",
  "preferences.rotate.handles": "\u56DE\u8EE2\u30CF\u30F3\u30C9\u30EB\u3092\u8868\u793A",
  "preferences.binding.handles": "\u7D50\u5408\u30CF\u30F3\u30C9\u30EB\u3092\u8868\u793A",
  "preferences.clone.handles": "\u30AF\u30ED\u30FC\u30F3\u30CF\u30F3\u30C9\u30EB\u3092\u8868\u793A",
  undo: "\u5143\u306B\u623B\u3059",
  redo: "\u3084\u308A\u76F4\u3057",
  cut: "\u5207\u308A\u53D6\u308A",
  copy: "\u30B3\u30D4\u30FC",
  paste: "\u8CBC\u308A\u4ED8\u3051",
  "copy.as": "\u5F62\u5F0F\u3092\u9078\u629E\u3057\u3066\u30B3\u30D4\u30FC",
  "export.as": "\u5F62\u5F0F\u3092\u9078\u629E\u3057\u3066\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8",
  "select.all": "\u3059\u3079\u3066\u9078\u629E",
  "select.none": "\u9078\u629E\u3092\u89E3\u9664",
  delete: "\u524A\u9664",
  "new.project": "\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8",
  open: "\u958B\u304F",
  save: "\u4FDD\u5B58",
  "save.as": "\u540D\u524D\u3092\u3064\u3051\u3066\u4FDD\u5B58",
  "upload.media": "\u30E1\u30C7\u30A3\u30A2\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9",
  "create.page": "\u30DA\u30FC\u30B8\u3092\u4F5C\u6210",
  "new.page": "\u65B0\u898F\u30DA\u30FC\u30B8",
  "page.name": "\u30DA\u30FC\u30B8\u540D",
  duplicate: "\u8907\u88FD",
  cancel: "\u30AD\u30E3\u30F3\u30BB\u30EB",
  "copy.invite.link": "\u5171\u6709\u30EA\u30F3\u30AF\u3092\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC",
  "create.multiplayer.project": "\u30DE\u30EB\u30C1\u30D7\u30EC\u30A4\u30E4\u30FC\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210",
  "copy.multiplayer.project": "\u30DE\u30EB\u30C1\u30D7\u30EC\u30A4\u30E4\u30FC\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u30B3\u30D4\u30FC",
  select: "\u9078\u629E",
  eraser: "\u6D88\u3057\u30B4\u30E0",
  draw: "\u63CF\u753B",
  arrow: "\u77E2\u5370",
  text: "\u30C6\u30AD\u30B9\u30C8",
  sticky: "\u3075\u305B\u3093",
  rectangle: "\u9577\u65B9\u5F62",
  ellipse: "\u6955\u5186\u5F62",
  triangle: "\u4E09\u89D2\u5F62",
  line: "\u7DDA",
  rotate: "\u56DE\u8EE2",
  "lock.aspect.ratio": "\u7E26\u6A2A\u6BD4\u3092\u56FA\u5B9A",
  "unlock.aspect.ratio": "\u7E26\u6A2A\u6BD4\u306E\u56FA\u5B9A\u3092\u89E3\u9664",
  group: "\u30B0\u30EB\u30FC\u30D4\u30F3\u30B0",
  ungroup: "\u30B0\u30EB\u30FC\u30D7\u89E3\u9664",
  "move.to.back": "\u6700\u80CC\u9762\u306B\u79FB\u52D5",
  "move.backward": "\u3072\u3068\u3064\u5F8C\u308D\u306B\u79FB\u52D5",
  "move.forward": "\u3072\u3068\u3064\u524D\u306B\u79FB\u52D5",
  "move.to.front": "\u6700\u524D\u9762\u306B\u79FB\u52D5",
  "reset.angle": "\u89D2\u5EA6\u3092\u521D\u671F\u5316",
  lock: "\u30ED\u30C3\u30AF",
  unlock: "\u30A2\u30F3\u30ED\u30C3\u30AF",
  "move.to.page": "\u30DA\u30FC\u30B8\u3078\u79FB\u52D5",
  "flip.horizontal": "\u6C34\u5E73\u65B9\u5411\u306B\u53CD\u8EE2",
  "flip.vertical": "\u5782\u76F4\u65B9\u5411\u306B\u53CD\u8EE2",
  move: "\u79FB\u52D5",
  "to.front": "\u6700\u524D\u9762\u3078",
  forward: "\u3072\u3068\u3064\u524D\u3078",
  backward: "\u3072\u3068\u3064\u5F8C\u308D\u3078",
  back: "\u6700\u80CC\u9762\u3078",
  language: "\u8A00\u8A9E"
};

// src/translations/ko-kr.json
var ko_kr_default = {
  "style.menu.color": "\uC0C9\uAE54",
  "style.menu.fill": "\uCC44\uC6B0\uAE30",
  "style.menu.dash": "\uD14C\uB450\uB9AC",
  "style.menu.size": "\uD06C\uAE30",
  "style.menu.keep.open": "\uD56D\uC0C1 \uC5F4\uAE30",
  "style.menu.font": "\uAE00\uAF34",
  "style.menu.align": "\uC815\uB82C",
  styles: "\uC2A4\uD0C0\uC77C",
  "zoom.in": "\uD655\uB300",
  "zoom.out": "\uCD95\uC18C",
  to: "To",
  "menu.tools": "\uB3C4\uAD6C",
  "menu.transform": "\uBCC0\uD658",
  "menu.file": "\uD30C\uC77C",
  "menu.edit": "\uD3B8\uC9D1",
  "menu.view": "\uBCF4\uAE30",
  "menu.preferences": "\uC124\uC815",
  "menu.sign.in": "\uB85C\uADF8\uC778",
  "menu.sign.out": "\uB85C\uADF8\uC544\uC6C3",
  "become.a.sponsor": "\uD6C4\uC6D0\uC790 \uB418\uAE30",
  "zoom.to.content": "\uCEE8\uD150\uCE20\uB85C \uB3CC\uC544\uAC00\uAE30",
  "zoom.to.selection": "\uC120\uD0DD \uC694\uC18C\uC5D0 \uB9DE\uCD94\uAE30",
  "zoom.to.fit": "\uC804\uCCB4\uC5D0 \uB9DE\uCD94\uAE30",
  "zoom.to": "\uB9DE\uCD94\uAE30",
  "preferences.dark.mode": "\uB2E4\uD06C \uBAA8\uB4DC",
  "preferences.focus.mode": "\uC9D1\uC911 \uBAA8\uB4DC",
  "preferences.debug.mode": "\uB514\uBC84\uADF8 \uBAA8\uB4DC",
  "preferences.show.grid": "\uACA9\uC790 \uBCF4\uAE30",
  "preferences.use.cad.selection": "CAD \uC120\uD0DD \uC0AC\uC6A9",
  "preferences.keep.stylemenu.open": "\uC2A4\uD0C0\uC77C \uBA54\uB274 \uD56D\uC0C1 \uC5F4\uAE30",
  "preferences.always.show.snaps": "Snap \uD56D\uC0C1 \uC5F4\uAE30",
  "preferences.rotate.handles": "\uD68C\uC804 \uBCF4\uC774\uAE30",
  "preferences.binding.handles": "\uBC14\uC778\uB529 \uBCF4\uC774\uAE30",
  "preferences.clone.handles": "\uBCF5\uC81C \uBCF4\uC774\uAE30",
  undo: "\uC2E4\uD589\uCDE8\uC18C",
  redo: "\uC7AC\uC2E4\uD589",
  cut: "\uC790\uB974\uAE30",
  copy: "\uBCF5\uC0AC",
  paste: "\uBD99\uC5EC\uB123\uAE30",
  "copy.as": "\uC774\uBBF8\uC9C0\uB85C \uBCF5\uC0AC",
  "export.as": "\uB0B4\uBCF4\uB0B4\uAE30",
  "select.all": "\uC804\uCCB4 \uC120\uD0DD",
  "select.none": "\uC120\uD0DD \uD574\uC81C",
  delete: "\uC0AD\uC81C",
  "new.project": "\uC0C8 \uD504\uB85C\uC81D\uD2B8",
  open: "\uC5F4\uAE30",
  save: "\uC800\uC7A5",
  "save.as": "\uB2E4\uB978 \uC774\uB984\uC73C\uB85C \uC800\uC7A5",
  "upload.media": "\uBBF8\uB514\uC5B4 \uC5C5\uB85C\uB4DC",
  "create.page": "\uC0C8 \uD398\uC774\uC9C0 \uC0DD\uC131",
  "new.page": "\uC0C8 \uD398\uC774\uC9C0",
  "page.name": "\uD398\uC774\uC9C0 \uC774\uB984",
  duplicate: "\uBCF5\uC81C",
  cancel: "\uCDE8\uC18C",
  "copy.invite.link": "\uCD08\uB300 \uB9C1\uD06C \uBCF5\uC0AC",
  "copy.readonly.link": "\uC77D\uAE30 \uC804\uC6A9 \uB9C1\uD06C \uBCF5\uC0AC",
  "create.multiplayer.project": "\uC2E4\uC2DC\uAC04 \uD611\uC5C5 \uD504\uB85C\uC81D\uD2B8 \uC0DD\uC131",
  "copy.multiplayer.project": "\uC2E4\uC2DC\uAC04 \uD611\uC5C5 \uD504\uB85C\uC81D\uD2B8\uB85C \uBCF5\uC81C",
  select: "\uC120\uD0DD",
  eraser: "\uC9C0\uC6B0\uAC1C",
  draw: "\uD39C",
  arrow: "\uD654\uC0B4\uD45C",
  text: "\uD14D\uC2A4\uD2B8",
  sticky: "\uC2A4\uD2F0\uD0A4\uB178\uD2B8",
  rectangle: "\uC0AC\uAC01\uD615",
  ellipse: "\uC6D0",
  triangle: "\uC0BC\uAC01\uD615",
  line: "\uC120",
  rotate: "\uD68C\uC804",
  "lock.aspect.ratio": "\uBE44\uC728 \uC7A0\uAE08",
  "unlock.aspect.ratio": "\uBE44\uC728 \uC7A0\uAE08 \uD574\uC81C",
  group: "\uADF8\uB8F9\uD654",
  ungroup: "\uADF8\uB8F9\uD654 \uD574\uC81C",
  "move.to.back": "\uB9E8 \uB4A4\uB85C \uBCF4\uB0B4\uAE30",
  "move.backward": "\uB4A4\uB85C \uBCF4\uB0B4\uAE30",
  "move.forward": "\uC55E\uC73C\uB85C \uAC00\uC838\uC624\uAE30",
  "move.to.front": "\uB9E8 \uC55E\uC73C\uB85C \uAC00\uC838\uC624\uAE30",
  "reset.angle": "\uD68C\uC804 \uCD08\uAE30\uD654",
  lock: "\uC7A0\uAE08",
  unlock: "\uC7A0\uAE08 \uD574\uC81C",
  "align.distribute": "\uC815\uB82C / \uAC04\uACA9 \uB9DE\uCD94\uAE30",
  "move.to.page": "\uD398\uC774\uC9C0\uB85C \uC774\uB3D9",
  "flip.horizontal": "\uC88C\uC6B0 \uB300\uCE6D",
  "flip.vertical": "\uC0C1\uD558 \uB300\uCE6D",
  move: "\uC21C\uC11C",
  "to.front": "\uB9E8 \uC55E\uC73C\uB85C",
  forward: "\uC55E\uC73C\uB85C",
  backward: "\uB4A4\uB85C",
  back: "\uB9E8 \uB4A4\uB85C",
  language: "\uC5B8\uC5B4",
  "translation.link": "\uB354 \uC54C\uC544\uBCF4\uAE30",
  "dock.position": "\uB3C5 \uC704\uCE58",
  bottom: "\uD558\uB2E8",
  left: "\uC67C\uCABD",
  right: "\uC624\uB978\uCABD",
  top: "\uC0C1\uB2E8",
  page: "\uD398\uC774\uC9C0",
  "keyboard.shortcuts": "\uD0A4\uBCF4\uB4DC \uB2E8\uCD95\uD0A4",
  search: "\uAC80\uC0C9",
  loading: "\uB85C\uB529{dots}",
  "export.background": "\uBC30\uACBD \uB0B4\uBCF4\uB0B4\uAE30",
  transparent: "\uD22C\uBA85",
  auto: "\uC790\uB3D9",
  light: "\uB77C\uC774\uD2B8",
  dark: "\uB2E4\uD06C",
  github: "Github",
  twitter: "Twitter",
  discord: "Discord",
  image: "\uC774\uBBF8\uC9C0",
  "align.left": "\uC67C\uCABD \uC815\uB82C",
  "align.center.x": "\uC218\uD3C9 \uC911\uC559 \uC815\uB82C",
  "align.right": "\uC624\uB978\uCABD \uC815\uB82C",
  "align.top": "\uC0C1\uB2E8 \uC815\uB82C",
  "align.center.y": "\uC218\uC9C1 \uC911\uC559 \uC815\uB82C",
  "align.bottom": "\uD558\uB2E8 \uC815\uB82C",
  "distribute.x": "\uAC00\uB85C \uAC04\uACA9 \uB9DE\uCD94\uAE30",
  "distribute.y": "\uC138\uB85C \uAC04\uACA9 \uB9DE\uCD94\uAE30",
  "stretch.x": "\uC218\uD3C9\uC73C\uB85C \uB298\uB9AC\uAE30",
  "stretch.y": "\uC218\uC9C1\uC73C\uB85C \uB298\uB9AC\uAE30",
  "dialog.save.firsttime": "\uD604\uC7AC \uD504\uB85C\uC81D\uD2B8\uB97C \uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",
  "dialog.save.again": "\uBCC0\uACBD\uC0AC\uD56D\uC744 \uD604\uC7AC \uD504\uB85C\uC81D\uD2B8\uC5D0 \uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",
  "dialog.cancel": "\uCDE8\uC18C",
  "dialog.no": "\uC544\uB2C8\uC624",
  "dialog.yes": "\uB124",
  "enter.file.name": "\uD30C\uC77C \uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694",
  "tldraw-beta": "\uC0C8\uB85C\uC6B4 tldraw\uB97C \uC0AC\uC6A9\uD574\uBCF4\uC138\uC694"
};

// src/translations/ku.json
var ku_default = {
  "style.menu.color": "\u0631\u06D5\u0646\u06AF",
  "style.menu.fill": "\u067E\u0695\u06A9\u0631\u062F\u0646\u06D5\u0648\u06D5",
  "style.menu.dash": "\u0644\u06D5\u062A \u0644\u06D5\u062A",
  "style.menu.size": "\u0642\u06D5\u0628\u0627\u0631\u06D5",
  "style.menu.keep.open": "\u0628\u06D5 \u06A9\u0631\u0627\u0648\u06D5\u06CC\u06CC \u0628\u0645\u06CE\u0646\u06D5\u0631\u06D5\u0648\u06D5",
  "style.menu.font": "\u0647\u06CE\u06B5",
  "style.menu.align": "\u0695\u06CE\u06A9\u062E\u0633\u062A\u0646",
  styles: "\u0646\u06D5\u062E\u0634\u06D5\u06A9\u0627\u0646",
  "zoom.in": "\u0647\u06CE\u0646\u0627\u0646\u06D5 \u067E\u06CE\u0634\u06D5\u0648\u06D5",
  "zoom.out": "\u062F\u0648\u0648\u0631 \u062E\u0633\u062A\u0646\u06D5\u0648\u06D5",
  to: "\u0628\u06C6",
  "menu.tools": "\u0626\u0627\u0645\u0631\u0627\u0632\u06D5\u06A9\u0627\u0646",
  "menu.transform": "\u06AF\u06C6\u0695\u06CC\u0646",
  "menu.file": "\u0641\u0627\u06CC\u0644\u06CE\u06A9",
  "menu.edit": "\u062F\u06D5\u0633\u062A\u06A9\u0627\u0631\u06CC",
  "menu.view": "\u062F\u06CC\u0645\u06D5\u0646",
  "menu.preferences": "\u062E\u0648\u0627\u0633\u062A",
  "menu.sign.in": "\u0686\u0648\u0648\u0646\u06D5 \u0698\u0648\u0648\u0631\u06D5\u0648\u06D5",
  "menu.sign.out": "\u062F\u06D5\u0631\u0686\u0648\u0648\u0646",
  "become.a.sponsor": "\u0633\u067E\u06C6\u0646\u0633\u06D5\u0631 \u0628\u06D5",
  "zoom.to.content": "\u0632\u0648\u0648\u0645 \u0628\u06A9\u06D5 \u0628\u06C6 \u0646\u0627\u0648\u06D5\u0695\u06C6\u06A9",
  "zoom.to.selection": "\u0632\u0648\u0648\u0645 \u0628\u06A9\u06D5 \u0628\u06C6 \u0647\u06D5\u06B5\u0628\u0698\u0627\u0631\u062F\u0646",
  "zoom.to.fit": "\u0632\u0648\u0648\u0645 \u0628\u06A9\u06D5 \u0628\u06C6 \u0626\u06D5\u0648\u06D5\u06CC \u0644\u06D5\u06AF\u06D5\u06B5\u06CC\u062F\u0627 \u0628\u06AF\u0648\u0646\u062C\u06CE\u062A",
  "zoom.to": "\u0632\u0648\u0648\u0645 \u0628\u06A9\u06D5 \u0628\u06C6",
  "preferences.dark.mode": "\u062F\u06C6\u062E\u06CC \u062A\u0627\u0631\u06CC\u06A9",
  "preferences.focus.mode": "\u062F\u06C6\u062E\u06CC \u0641\u06C6\u06A9\u06D5\u0633",
  "preferences.debug.mode": "\u0645\u06C6\u062F\u06CC \u0647\u06D5\u06B5\u06D5\u062F\u06C6\u0632\u06CC\u0646",
  "preferences.show.grid": "\u062A\u06C6\u0695\u06CC \u067E\u06CC\u0634\u0627\u0646 \u0628\u062F\u06D5",
  "preferences.use.cad.selection": "\u0628\u06D5\u06A9\u0627\u0631\u0628\u0647\u06CE\u0646\u06D5 CAD \u0647\u06D5\u06B5\u0628\u0698\u0627\u0631\u062F\u0646\u06CC",
  "preferences.keep.stylemenu.open": "\u0645\u06CE\u0646\u06C6\u06CC \u0633\u062A\u0627\u06CC\u0644 \u0628\u06D5 \u06A9\u0631\u0627\u0648\u06D5\u06CC\u06CC \u0628\u0647\u06CE\u06B5\u06D5\u0631\u06D5\u0648\u06D5",
  "preferences.always.show.snaps": "\u0647\u06D5\u0645\u06CC\u0634\u06D5 \u0648\u06CE\u0646\u06D5\u06CC \u062E\u06CE\u0631\u0627 \u067E\u06CC\u0634\u0627\u0646 \u0628\u062F\u06D5",
  "preferences.rotate.handles": "\u0633\u0648\u0631\u0627\u0646\u06D5\u0648\u06D5\u06CC \u062F\u06D5\u0633\u062A\u06D5\u06A9\u0627\u0646",
  "preferences.binding.handles": "\u0628\u06D5\u0633\u062A\u0646\u06D5\u0648\u06D5\u06CC \u062F\u06D5\u0633\u062A\u06D5\u06A9\u0627\u0646",
  "preferences.clone.handles": "\u06A9\u0644\u06C6\u0646 \u06A9\u0631\u062F\u0646\u06CC \u062F\u06D5\u0633\u062A\u06D5\u06A9\u0627\u0646",
  undo: "\u067E\u0627\u0634\u06D5\u06A9\u0634\u06D5 \u0628\u06A9\u06D5",
  redo: "\u062F\u0648\u0648\u0628\u0627\u0631\u06D5 \u0628\u06CC\u06A9\u06D5\u0631\u06D5\u0648\u06D5",
  cut: "\u0628\u0695\u06CC\u0646",
  copy: "\u06A9\u06C6\u067E\u06CC \u0628\u06A9\u06D5",
  paste: "\u067E\u06D5\u06CC\u0633\u062A \u0628\u06A9\u06D5",
  "copy.as": "\u06A9\u06C6\u067E\u06CC \u0648\u06D5\u06A9",
  "export.as": "\u0647\u06D5\u0646\u0627\u0631\u062F\u06D5\u06A9\u0631\u062F\u0646 \u0648\u06D5\u06A9",
  "select.all": "\u0647\u06D5\u0645\u0648\u0648\u06CC\u0627\u0646 \u0647\u06D5\u06B5\u0628\u0698\u06CE\u0631\u0647",
  "select.none": "\u0647\u06CC\u0686 \u0647\u0647\u200C\u06B5\u0645\u0647\u200C\u0628\u0698\u06CE\u0631\u0647\u200C",
  delete: "\u0633\u0695\u06CC\u0646\u06D5\u0648\u06D5",
  "new.project": "\u067E\u0695\u06C6\u0698\u06D5\u06CC \u0646\u0648\u06CE",
  open: "\u06A9\u0631\u062F\u0646\u06D5\u0648\u06D5",
  save: "\u0647\u06D5\u06B5\u06AF\u0631\u062A\u0646",
  "save.as": "\u0647\u06D5\u06B5\u06AF\u0631\u062A\u0646 \u0648\u06D5\u06A9",
  "upload.media": "\u062F\u0627\u06AF\u0631\u062A\u0646\u06CC \u0645\u06CC\u062F\u06CC\u0627",
  "create.page": "\u062F\u0631\u0648\u0633\u062A\u06A9\u0631\u062F\u0646\u06CC \u0644\u0627\u067E\u06D5\u0695\u06D5",
  "new.page": "\u0644\u0627\u067E\u06D5\u0695\u06D5\u06CC \u0646\u0648\u06CE",
  "page.name": "\u0646\u0627\u0648\u06CC \u0644\u0627\u067E\u06D5\u0695\u06D5",
  duplicate: "\u062F\u0648\u0648\u0628\u0627\u0631\u06D5\u06A9\u0631\u062F\u0646\u06D5\u0648\u06D5",
  cancel: "\u0695\u06D5\u062A\u06A9\u0631\u062F\u0646\u06D5\u0648\u06D5",
  "copy.invite.link": "\u0644\u06CC\u0646\u06A9\u06CC \u0628\u0627\u0646\u06AF\u0647\u06CE\u0634\u062A\u06A9\u0631\u062F\u0646 \u06A9\u06C6\u067E\u06CC \u0628\u06A9\u06D5",
  "copy.readonly.link": "\u0628\u06D5 \u0634\u06CE\u0648\u06D5\u06CC\u06D5\u06A9\u06CC \u0647\u06D5\u0695\u06D5\u0645\u06D5\u06A9\u06CC \u06A9\u06C6\u067E\u06CC \u0628\u06A9\u06D5",
  "create.multiplayer.project": "\u062F\u0631\u0648\u0633\u062A\u06A9\u0631\u062F\u0646\u06CC \u067E\u0631\u06C6\u0698\u06D5\u06CC \u0641\u0631\u06D5 \u0628\u06D5\u06A9\u0627\u0631\u0647\u06CE\u0646\u06D5\u0631",
  "copy.multiplayer.project": "\u06A9\u06C6\u067E\u06CC \u0628\u06A9\u06D5 \u0628\u06C6 \u067E\u0695\u06C6\u0698\u06D5\u06CC\u06D5\u06A9\u06CC \u0641\u0631\u06D5 \u0628\u06D5\u06A9\u0627\u0631\u0647\u06CE\u0646\u06D5\u0631",
  select: "\u062F\u06D5\u0633\u0646\u06CC\u0627\u0634\u0646\u06A9\u0631\u062F\u0646",
  eraser: "\u0633\u0695\u06D5\u0631\u06D5\u0648\u06D5",
  draw: "\u0648\u06CE\u0646\u06D5\u06A9\u06CE\u0634\u0627\u0646",
  arrow: "\u062A\u06CC\u0631",
  text: "\u062F\u06D5\u0642",
  sticky: "\u0686\u06D5\u0633\u067E\u0627\u0648",
  rectangle: "\u0644\u0627\u06A9\u06CE\u0634\u06D5",
  ellipse: "\u0628\u06CC\u0628\u0644\u06CC",
  triangle: "\u0633\u06CE\u06AF\u06C6\u0634\u06D5",
  line: "\u0647\u06CE\u06B5",
  rotate: "\u0633\u0648\u0695\u0627\u0646\u06D5\u0648\u06D5",
  "lock.aspect.ratio": "\u0642\u0641\u06B5\u06A9\u0631\u062F\u0646\u06CC \u0695\u06CE\u0698\u06D5\u06CC \u0695\u0648\u0648\u0628\u06D5\u0631\u06CC",
  "unlock.aspect.ratio": "\u06A9\u0631\u062F\u0646\u06D5\u0648\u06D5\u06CC \u0695\u06CE\u0698\u06D5\u06CC \u0695\u0648\u0648\u0628\u06D5\u0631\u06CC",
  group: "\u06A9\u06C6\u0645\u06D5\u06B5\u06D5",
  ungroup: "\u0644\u0627\u0628\u0631\u062F\u0646\u06CC \u06A9\u06C6\u0645\u06D5\u06B5\u06D5",
  "move.to.back": "\u0628\u0686\u06C6 \u0628\u06C6 \u067E\u0634\u062A\u06D5\u0648\u06D5",
  "move.backward": "\u0628\u06D5\u0631\u06D5\u0648 \u062F\u0648\u0627\u0648\u06D5",
  "move.forward": "\u0628\u0695\u06C6 \u067E\u06CE\u0634\u06D5\u0648\u06D5",
  "move.to.front": "\u0628\u06AF\u0648\u0627\u0632\u0631\u06CE\u062A\u06D5\u0648\u06D5 \u0628\u06C6 \u067E\u06CE\u0634\u06D5\u0648\u06D5",
  "reset.angle": "\u06AF\u06C6\u0634\u06D5\u06CC \u067E\u0634\u0648\u0648\u062F\u0627\u0646",
  lock: "\u0642\u0648\u0641\u06B5",
  unlock: "\u0644\u0627\u0628\u0631\u062F\u0646\u06CC \u0642\u0648\u0641\u06B5",
  "move.to.page": "\u0628\u0686\u06C6 \u0628\u06C6 \u0644\u0627\u067E\u06D5\u0695\u06D5",
  "flip.horizontal": "\u0626\u0627\u0633\u06C6\u06CC\u06CC \u0648\u06D5\u0631\u06AF\u06D5\u0695\u0627\u0646\u062F\u0646",
  "flip.vertical": "\u0633\u062A\u0648\u0646\u06CC \u0648\u06D5\u0631\u06AF\u06D5\u0695\u0627\u0646\u062F\u0646",
  move: "\u062C\u0648\u0648\u06B5\u06D5",
  "to.front": "\u0628\u06C6 \u067E\u06CE\u0634\u06D5\u0648\u06D5",
  forward: "\u0628\u06C6\u067E\u0634\u062A\u06D5\u0648\u06D5",
  backward: "\u0628\u06C6\u062F\u0648\u0627\u0648\u06D5",
  back: "\u06AF\u06D5\u0695\u0627\u0646\u06D5\u0648\u06D5",
  language: "\u0632\u0645\u0627\u0646",
  "translation.link": "\u0628\u06D5\u0633\u062A\u06D5\u0631\u06CC \u0648\u06D5\u0631\u06AF\u06CE\u0695\u0627\u0646",
  "dock.position": "\u0634\u0648\u06CE\u0646\u06CC \u062F\u06C6\u06A9",
  bottom: "\u062E\u0648\u0627\u0631\u06D5\u0648\u06D5",
  left: "\u0686\u06D5\u067E",
  right: "\u0695\u0627\u0633\u062A",
  top: "\u0633\u06D5\u0631\u0648\u0648",
  page: "\u0644\u0627\u067E\u06D5\u0695\u06D5",
  "keyboard.shortcuts": "\u06A9\u0648\u0631\u062A\u06A9\u0631\u0627\u0648\u06D5\u06A9\u0627\u0646\u06CC \u062A\u06D5\u062E\u062A\u06D5\u06A9\u0644\u06CC\u0644",
  search: "\u06AF\u06D5\u0695\u0627\u0646",
  loading: "\u0628\u0627\u0631\u06A9\u0631\u062F\u0646",
  "export.background": "\u067E\u0627\u0634\u062E\u0627\u0646\u06CC \u0647\u06D5\u0646\u0627\u0631\u062F\u06D5\u06A9\u0631\u062F\u0646",
  transparent: "\u0695\u0648\u0648\u0646",
  auto: "\u0626\u06C6\u062A\u06C6\u0645\u0627\u062A\u06CC\u06A9\u06CC",
  light: "\u0631\u0648\u0648\u0646\u0627\u06A9",
  dark: "\u062A\u0627\u0631\u06CC\u06A9"
};

// src/translations/main.json
var main_default = {
  "style.menu.color": "Color",
  "style.menu.fill": "Fill",
  "style.menu.dash": "Dash",
  "style.menu.size": "Size",
  "style.menu.keep.open": "Keep Open",
  "style.menu.font": "Font",
  "style.menu.align": "Align",
  styles: "Styles",
  "zoom.in": "Zoom In",
  "zoom.out": "Zoom Out",
  to: "To",
  "menu.tools": "Tools",
  "menu.transform": "Transform",
  "menu.file": "File",
  "menu.edit": "Edit",
  "menu.view": "View",
  "menu.preferences": "Preferences",
  "menu.sign.in": "Sign In",
  "menu.sign.out": "Sign Out",
  "become.a.sponsor": "Become a Sponsor",
  "zoom.to.content": "Back to content",
  "zoom.to.selection": "Zoom to Selection",
  "zoom.to.fit": "Zoom to Fit",
  "zoom.to": "Zoom to",
  "preferences.dark.mode": "Dark Mode",
  "preferences.focus.mode": "Focus Mode",
  "preferences.debug.mode": "Debug Mode",
  "preferences.show.grid": "Show Grid",
  "preferences.use.cad.selection": "Use CAD Selection",
  "preferences.keep.stylemenu.open": "Keep Style Menu Open",
  "preferences.always.show.snaps": "Always Show Snaps",
  "preferences.rotate.handles": "Rotate Handles",
  "preferences.binding.handles": "Binding Handles",
  "preferences.clone.handles": "Clone Handles",
  undo: "Undo",
  redo: "Redo",
  cut: "Cut",
  copy: "Copy",
  paste: "Paste",
  "copy.as": "Copy As",
  "export.as": "Export As",
  "select.all": "Select All",
  "select.none": "Select None",
  delete: "Delete",
  "new.project": "New Project",
  open: "Open",
  save: "Save",
  "save.as": "Save As",
  "upload.media": "Upload Media",
  "create.page": "Create Page",
  "new.page": "New Page",
  "page.name": "Page Name",
  duplicate: "Duplicate",
  "shape.options": "Shape Options",
  shapes: "Shapes",
  cancel: "Cancel",
  "copy.invite.link": "Copy Invite Link",
  "copy.readonly.link": "Copy ReadOnly Link",
  "create.multiplayer.project": "Create a Multiplayer Project",
  "copy.multiplayer.project": "Copy to Multiplayer Project",
  select: "Select",
  eraser: "Eraser",
  draw: "Draw",
  arrow: "Arrow",
  text: "Text",
  sticky: "Sticky",
  rectangle: "Rectangle",
  ellipse: "Ellipse",
  triangle: "Triangle",
  line: "Line",
  rotate: "Rotate",
  "lock.aspect.ratio": "Lock Aspect Ratio",
  "unlock.aspect.ratio": "Unlock Aspect Ratio",
  group: "Group",
  ungroup: "Ungroup",
  "move.to.back": "Move to Back",
  "move.backward": "Move Backward",
  "move.forward": "Move Forward",
  "move.to.front": "Move to Front",
  "reset.angle": "Reset Angle",
  lock: "Lock",
  unlock: "Unlock",
  "align.distribute": "Align / Distribute",
  "move.to.page": "Move to Page",
  "flip.horizontal": "Flip Horizontal",
  "flip.vertical": "Flip Vertical",
  move: "Move",
  "to.front": "To Front",
  forward: "Forward",
  backward: "Backward",
  back: "To Back",
  language: "Language",
  "translation.link": "Learn More",
  "dock.position": "Dock Position",
  bottom: "Bottom",
  left: "Left",
  right: "Right",
  top: "Top",
  page: "Page",
  "keyboard.shortcuts": "Keyboard shortcuts",
  search: "Search",
  loading: "Loading{dots}",
  "export.background": "Export Background",
  transparent: "Transparent",
  auto: "Auto",
  light: "Light",
  dark: "Dark",
  github: "Github",
  twitter: "Twitter",
  discord: "Discord",
  image: "Image",
  "align.left": "Align Left",
  "align.center.x": "Align Horizontal Center",
  "align.right": "Align Right",
  "align.top": "Align Top",
  "align.center.y": "Align Vertical Center",
  "align.bottom": "Align Bottom",
  "distribute.x": "Distribute Horizontal",
  "distribute.y": "Distribute Vertical",
  "stretch.x": "Stretch Horizontal",
  "stretch.y": "Stretch Vertical",
  "dialog.save.firsttime": "Do you want to save your current project?",
  "dialog.save.again": "Do you want to save changes to your current project?",
  "dialog.cancel": "Cancel",
  "dialog.no": "No",
  "dialog.yes": "Yes",
  "enter.file.name": "Enter file name",
  "tldraw-beta": "Try the new tldraw",
  white: "White",
  lightGray: "Light gray",
  gray: "Gray",
  black: "Black",
  green: "Green",
  cyan: "Cyan",
  blue: "Blue",
  indigo: "Indigo",
  violet: "Violet",
  red: "Red",
  orange: "Orange",
  yellow: "Yellow",
  solid: "Solid",
  dashed: "Dashed",
  dotted: "Dotted",
  small: "Small",
  medium: "Medium",
  large: "Large"
};

// src/translations/my.json
var my_default = {
  "style.menu.color": "\u1021\u101B\u1031\u102C\u1004\u103A",
  "style.menu.fill": "\u1021\u101B\u1031\u102C\u1004\u103A \u1011\u100A\u103A\u1037\u1019\u100A\u103A",
  "style.menu.dash": "\u1019\u103B\u1025\u103A\u1038\u1005\u1000\u103A",
  "style.menu.size": "\u1021\u101B\u103D\u101A\u103A\u1021\u1005\u102C\u1038",
  "style.menu.keep.open": "\u1016\u103D\u1004\u103A\u1037\u1011\u102C\u1038\u1019\u100A\u103A",
  "style.menu.font": "\u1005\u102C\u101E\u102C\u1038\u1016\u1031\u102C\u1004\u103A\u1037",
  "style.menu.align": "\u1021\u1011\u102C\u1038\u1021\u101E\u102D\u102F",
  styles: "\u1005\u1010\u102D\u102F\u1004\u103A",
  "zoom.in": "\u1021\u1000\u103C\u102E\u1038\u1001\u103B\u1032\u1037\u1019\u100A\u103A",
  "zoom.out": "\u1015\u103C\u1014\u103A\u1000\u103B\u1025\u103A\u1038\u1019\u100A\u103A",
  to: "\u101E\u102D\u102F\u1037",
  "menu.tools": "\u1000\u102D\u101B\u102D\u101A\u102C\u1019\u103B\u102C\u1038",
  "menu.transform": "\u1015\u103C\u1031\u102C\u1004\u103A\u1038\u101C\u100A\u103A\u101B\u1014\u103A",
  "menu.file": "\u1016\u102D\u102F\u1004\u103A",
  "menu.edit": "\u1015\u103C\u102F\u1015\u103C\u1004\u103A",
  "menu.view": "\u1021\u1019\u103C\u1004\u103A",
  "menu.preferences": "\u1006\u1000\u103A\u1010\u1004\u103A",
  "menu.sign.in": "\u101D\u1004\u103A\u1019\u100A\u103A",
  "menu.sign.out": "\u1011\u103D\u1000\u103A\u1019\u100A\u103A",
  "become.a.sponsor": "\u1004\u103D\u1031\u1000\u103C\u1031\u1038\u1011\u1031\u102C\u1000\u103A\u1015\u1036\u1019\u100A\u103A",
  "zoom.to.content": "\u1015\u1004\u103A\u1019\u1014\u1031\u101B\u102C\u101E\u102D\u102F\u1037 \u1015\u103C\u1014\u103A\u101E\u103D\u102C\u1038\u1019\u100A\u103A",
  "zoom.to.selection": "\u101B\u103D\u1031\u1038\u1011\u102C\u1038\u101E\u1031\u102C \u1014\u1031\u101B\u102C\u101E\u102D\u102F\u1037 \u1021\u102C\u101B\u102F\u1036\u1015\u103C\u102F\u1019\u100A\u103A",
  "zoom.to.fit": "\u1021\u1036\u1000\u102D\u102F\u1000\u103A\u1016\u103C\u1005\u103A\u1021\u1031\u102C\u1004\u103A \u1001\u103B\u1032\u1037\u1019\u100A\u103A",
  "zoom.to": "\u1015\u102F\u1036\u1019\u103E\u1014\u103A\u1006\u102D\u102F\u1012\u103A\u101E\u102D\u102F\u1037 \u1001\u103B\u1032\u1037\u1019\u100A\u103A",
  "preferences.dark.mode": "\u1021\u1019\u103E\u1031\u102C\u1004\u103A \u1019\u102F\u1012\u103A",
  "preferences.focus.mode": "\u101B\u103E\u1004\u103A\u1038\u101B\u103E\u1004\u103A\u1038\u101C\u1004\u103A\u1038\u101C\u1004\u103A\u1038 \u1019\u102F\u1012\u103A",
  "preferences.debug.mode": "\u1005\u1019\u103A\u1038\u101E\u1015\u103A \u1019\u102F\u1012\u103A",
  "preferences.show.grid": "\u1014\u1031\u102C\u1000\u103A\u1001\u1036 \u1007\u101A\u102C\u1038\u1000\u103D\u1000\u103A\u1015\u103C\u101B\u1014\u103A",
  "preferences.use.cad.selection": "CAD \u1000\u1032\u1037\u101E\u102D\u102F\u1037 \u101B\u103D\u1031\u1038\u1001\u103B\u101A\u103A\u1019\u103E\u102F \u1015\u103C\u102F\u101C\u102F\u1015\u103A\u1019\u100A\u103A",
  "preferences.keep.stylemenu.open": "\u1005\u1010\u102D\u102F\u1004\u103A\u101C\u103A \u1019\u102E\u1014\u1030\u1038\u1000\u102D\u102F \u1021\u1019\u103C\u1032\u1016\u103D\u1004\u103A\u1037\u1011\u102C\u1038\u1019\u100A\u103A",
  "preferences.always.show.snaps": "Always Show Snaps",
  "preferences.rotate.handles": "Rotate Handles",
  "preferences.binding.handles": "Binding Handles",
  "preferences.clone.handles": "Clone Handles",
  undo: "\u1014\u1002\u102D\u102F\u1019\u1030\u101C\u101E\u102D\u102F\u1037 \u1015\u103C\u1014\u103A\u101C\u102F\u1015\u103A\u101B\u1014\u103A",
  redo: "\u1015\u103C\u1014\u103A\u101C\u102F\u1015\u103A\u101B\u1014\u103A",
  cut: "\u1016\u103C\u1010\u103A\u101A\u1030",
  copy: "\u1000\u1030\u1038\u101A\u1030",
  paste: "\u1000\u1030\u1038\u101E\u103D\u1004\u103A\u1038",
  "copy.as": "\u1000\u1030\u1038\u101A\u1030\u1019\u100A\u103A\u1037 \u1015\u102F\u1036\u1005\u1036",
  "export.as": "\u1011\u102F\u1010\u103A\u1001\u103B\u1004\u103A\u101E\u100A\u103A\u1037 \u1015\u102F\u1036\u1005\u1036",
  "select.all": "\u1021\u102C\u1038\u101C\u102F\u1036\u1038\u1000\u102D\u102F \u101B\u103D\u1031\u1038\u1001\u103B\u101A\u103A\u101B\u1014\u103A",
  "select.none": "\u1010\u1005\u103A\u1001\u102F\u1019\u103E \u1019\u101B\u103D\u1031\u1038\u1010\u1031\u102C\u1037\u1015\u102B",
  delete: "\u1016\u103B\u1000\u103A\u1019\u100A\u103A",
  "new.project": "\u1015\u101B\u1031\u102C\u1002\u103B\u1000\u103A \u1021\u101E\u1005\u103A",
  open: "\u1016\u103D\u1004\u103A\u1037\u1019\u100A\u103A",
  save: "\u101E\u102D\u1019\u103A\u1038\u1019\u100A\u103A",
  "save.as": "\u1021\u1001\u103C\u102C\u1038\u101E\u1031\u102C \u1015\u102F\u1036\u1005\u1036\u1016\u103C\u1004\u103A\u1037 \u101E\u102D\u1019\u103A\u1038\u1019\u100A\u103A",
  "upload.media": "\u1019\u102E\u1012\u102E\u101A\u102C\u1016\u102D\u102F\u1004\u103A\u1019\u103B\u102C\u1038 \u1010\u1004\u103A\u1019\u100A\u103A",
  "create.page": "\u1005\u102C\u1019\u103B\u1000\u103A\u1014\u103E\u102C \u1021\u101E\u1005\u103A\u1016\u103D\u1004\u103A\u1037\u1019\u100A\u103A",
  "new.page": "\u1005\u102C\u1019\u103B\u1000\u103A\u1014\u103E\u102C \u1021\u101E\u1005\u103A",
  "page.name": "\u1005\u102C\u1019\u103B\u1000\u103A\u1014\u103E\u102C \u1021\u1019\u100A\u103A",
  duplicate: "\u1015\u103D\u102C\u1038\u1019\u100A\u103A",
  cancel: "\u1019\u101C\u102F\u1015\u103A\u1010\u1031\u102C\u1037\u1015\u102B",
  "copy.invite.link": "\u1016\u102D\u1010\u103A\u1000\u103C\u102C\u1038\u101B\u1014\u103A \u101C\u1004\u103A\u1037\u1001\u103A\u1000\u1030\u1038\u101A\u1030\u1019\u100A\u103A",
  "copy.readonly.link": "\u1000\u103C\u100A\u103A\u1037\u101B\u1030\u101B\u1014\u103A\u1021\u1010\u103D\u1000\u103A\u101E\u102C \u101C\u1004\u103A\u1037\u1001\u103A\u1000\u1030\u1038\u101A\u1030\u1019\u100A\u103A",
  "create.multiplayer.project": "\u1021\u1019\u103B\u102C\u1038\u101E\u102F\u1036\u1038 \u1015\u101B\u1031\u102C\u1002\u103B\u1000\u103A\u1021\u1016\u103C\u1005\u103A \u1021\u101E\u1005\u103A\u1016\u1014\u103A\u1010\u102E\u1038\u1019\u100A\u103A",
  "copy.multiplayer.project": "\u1021\u1019\u103B\u102C\u1038\u101E\u102F\u1036\u1038 \u1015\u101B\u1031\u102C\u1002\u103B\u1000\u103A\u1021\u1016\u103C\u1005\u103A\u101E\u102D\u102F\u1037 \u1000\u1030\u1038\u101A\u1030\u1019\u100A\u103A",
  select: "\u101B\u103D\u1031\u1038\u1001\u103B\u101A\u103A\u1019\u103E\u102F",
  eraser: "\u1001\u1032\u1016\u103B\u1000\u103A",
  draw: "\u1001\u1032\u1010\u1036",
  arrow: "\u1019\u103C\u103E\u102C\u1038",
  text: "\u1005\u102C\u101E\u102C\u1038",
  sticky: "\u1000\u1015\u103A\u1001\u103D\u102C\u1019\u103E\u1010\u103A\u1005\u102F",
  rectangle: "\u101C\u1031\u1011\u1031\u102C\u1004\u103A\u1037",
  ellipse: "\u1018\u1032\u1025",
  triangle: "\u1010\u103C\u102D\u1002\u1036",
  line: "\u1019\u103B\u1025\u103A\u1038",
  rotate: "\u101C\u103E\u100A\u103A\u1037\u1019\u100A\u103A",
  "lock.aspect.ratio": "\u1021\u1001\u103B\u102D\u102F\u1038\u1021\u1005\u102C\u1038 \u1011\u102D\u1014\u103A\u1038\u1011\u102C\u1038\u1019\u100A\u103A",
  "unlock.aspect.ratio": "\u1021\u1001\u103B\u102D\u102F\u1038\u1021\u1005\u102C\u1038 \u1019\u1011\u102D\u1014\u103A\u1038\u1010\u1031\u102C\u1037\u1015\u102B",
  group: "\u1021\u102F\u1015\u103A\u1005\u102F\u1016\u103D\u1032\u1037",
  ungroup: "\u1021\u102F\u1015\u103A\u1005\u102F\u1001\u103D\u1032",
  "move.to.back": "\u1014\u1031\u102C\u1000\u103A\u1006\u102F\u1036\u1038\u101E\u102D\u102F\u1037 \u1015\u102D\u102F\u1037\u1019\u100A\u103A",
  "move.backward": "\u1014\u1031\u102C\u1000\u103A\u101E\u102D\u102F\u1037 \u1010\u1005\u103A\u1006\u1004\u103A\u1037\u1015\u102D\u102F\u1037\u1019\u100A\u103A",
  "move.forward": "\u101B\u103E\u1031\u1037\u101E\u102D\u102F\u1037 \u1010\u1005\u103A\u1006\u1004\u103A\u1037\u1015\u102D\u102F\u1037\u1019\u100A\u103A",
  "move.to.front": "\u101B\u103E\u1031\u1037\u1006\u102F\u1036\u1038\u101E\u102D\u102F\u1037 \u1015\u102D\u102F\u1037\u1019\u100A\u103A",
  "reset.angle": "\u1014\u1002\u102D\u102F\u1019\u1030\u101C \u1011\u1031\u102C\u1004\u103A\u1037\u1001\u103B\u102D\u102F\u1038\u1005\u102C\u1038\u101E\u102D\u102F\u1037\u1015\u103C\u1031\u102C\u1004\u103A\u1038\u1019\u100A\u103A",
  lock: "\u1001\u1010\u103A\u1011\u102C\u1038\u1019\u100A\u103A",
  unlock: "\u1016\u103D\u1004\u103A\u1037\u1011\u102C\u1038\u1019\u100A\u103A",
  "align.distribute": "\u1014\u1031\u101B\u102C \u1021\u1011\u102C\u1038\u1021\u101E\u102D\u102F/ \u1021\u1006\u1014\u103A\u1037\u1021\u1000\u103B\u102F\u1036\u1037",
  "move.to.page": "\u1005\u102C\u1019\u103B\u1000\u103A\u1014\u103E\u102C\u1010\u1005\u103A\u1001\u102F\u101E\u102D\u102F\u1037 \u101B\u103D\u1031\u1038\u1019\u100A\u103A",
  "flip.horizontal": "\u1021\u101C\u103B\u102C\u1038\u101C\u102D\u102F\u1000\u103A \u101C\u103E\u1014\u103A\u1019\u100A\u103A",
  "flip.vertical": "\u1012\u1031\u102B\u1004\u103A\u101C\u102D\u102F\u1000\u103A \u101C\u103E\u1014\u103A\u1019\u100A\u103A",
  move: "\u101B\u103D\u1031\u1037\u1019\u100A\u103A",
  "to.front": "\u101B\u103E\u1031\u1037\u1006\u102F\u1036\u1038\u101E\u102D\u102F\u1037",
  forward: "\u101B\u103E\u1031\u1037\u1010\u1005\u103A\u1006\u1004\u103A\u1037",
  backward: "\u1014\u1031\u102C\u1000\u103A\u1010\u1005\u103A\u1006\u1004\u103A\u1037",
  back: "\u1014\u1031\u102C\u1000\u103A\u1006\u102F\u1036\u1038\u101E\u102D\u102F\u1037",
  language: "\u1018\u102C\u101E\u102C\u1005\u1000\u102C\u1038",
  "translation.link": "\u1015\u102D\u102F\u1019\u102D\u102F\u104D \u101C\u1031\u1037\u101C\u102C\u101B\u1014\u103A",
  "dock.position": "\u1000\u102D\u101B\u102D\u101A\u102C \u1021\u1014\u1031\u1021\u1011\u102C\u1038",
  bottom: "\u1021\u1031\u102C\u1000\u103A",
  left: "\u1018\u101A\u103A",
  right: "\u100A\u102C",
  top: "\u1011\u102D\u1015\u103A",
  page: "\u1005\u102C\u1019\u103B\u1000\u103A\u1014\u103E\u102C",
  "keyboard.shortcuts": "Keyboard shortcuts",
  search: "\u101B\u103E\u102C\u1016\u103D\u1031\u101B\u1014\u103A",
  loading: "\u1001\u100F\u1005\u1031\u102C\u1004\u103A\u1037\u1015\u1031\u1038\u101B\u1014\u103A{dots}",
  "export.background": "\u1014\u1031\u102C\u1000\u103A\u1001\u1036 \u1011\u102F\u1010\u103A\u101A\u1030\u1019\u100A\u103A",
  transparent: "\u1014\u1031\u102C\u1000\u103A\u1001\u1036 \u1021\u1000\u103C\u100A\u103A",
  auto: "Auto",
  light: "\u1021\u101C\u1004\u103A\u1038",
  dark: "\u1021\u1019\u103E\u1031\u102C\u1004\u103A",
  github: "Github",
  twitter: "Twitter",
  discord: "Discord",
  image: "\u1013\u102C\u1010\u103A\u1015\u102F\u1036",
  "align.left": "\u1018\u101A\u103A\u1016\u1000\u103A\u101E\u102D\u102F\u1037 \u100A\u103E\u102D\u101B\u1014\u103A",
  "align.center.x": "\u1021\u101C\u103B\u102C\u1038\u101C\u102D\u102F\u1000\u103A \u1017\u101F\u102D\u102F\u1006\u102E\u101E\u102D\u102F\u1037 \u100A\u103E\u102D\u101B\u1014\u103A",
  "align.right": "\u100A\u102C\u1016\u1000\u103A\u101E\u102D\u102F\u1037 \u100A\u103E\u102D\u101B\u1014\u103A",
  "align.top": "\u1021\u1015\u1031\u102B\u103A\u101E\u102D\u102F\u1037 \u100A\u103E\u102D\u101B\u1014\u103A",
  "align.center.y": "\u1012\u1031\u102B\u1004\u103A\u101C\u102D\u102F\u1000\u103A \u1017\u101F\u102D\u102F\u1006\u102E\u101E\u102D\u102F\u1037 \u100A\u103E\u102D\u101B\u1014\u103A",
  "align.bottom": "\u1021\u1031\u102C\u1000\u103A\u101E\u102D\u102F\u1037 \u100A\u103E\u102D\u101B\u1014\u103A",
  "distribute.x": "\u1021\u101C\u103B\u102C\u1038\u101C\u102D\u102F\u1000\u103A \u1016\u103C\u1014\u103A\u1037\u101B\u1014\u103A",
  "distribute.y": "\u1012\u1031\u102B\u1004\u103A\u101C\u102D\u102F\u1000\u103A \u1016\u103C\u1014\u103A\u1037\u101B\u1014\u103A",
  "stretch.x": "\u1021\u101C\u103B\u102C\u1038\u101C\u102D\u102F\u1000\u103A \u1006\u103D\u1032\u1006\u1014\u103A\u1037\u101B\u1014\u103A",
  "stretch.y": "\u1012\u1031\u102B\u1004\u103A\u101C\u102D\u102F\u1000\u103A \u1006\u103D\u1032\u1006\u1014\u103A\u1037\u101B\u1014\u103A",
  "dialog.save.firsttime": "\u101A\u1001\u102F \u1015\u101B\u1031\u102C\u1002\u103B\u1000\u103A\u1000\u102D\u102F \u101E\u102D\u1019\u103A\u1038\u1006\u100A\u103A\u101C\u102D\u102F\u1015\u102B\u101E\u101C\u102C\u1038 ?",
  "dialog.save.again": "\u101A\u1001\u102F \u1015\u101B\u1031\u102C\u1002\u103B\u1000\u103A\u1010\u103D\u1004\u103A \u1015\u103C\u1004\u103A\u1011\u102C\u1038\u101E\u1031\u102C \u1021\u1015\u103C\u1031\u102C\u1004\u103A\u1038\u1021\u101C\u100A\u103A\u1019\u103B\u102C\u1038\u1000\u102D\u102F \u1021\u1010\u100A\u103A\u1015\u103C\u102F \u101E\u102D\u1019\u103A\u1038\u1006\u100A\u103A\u101C\u102D\u102F\u1015\u102B\u101E\u101C\u102C\u1038?",
  "dialog.cancel": "\u1018\u102C\u1019\u103E \u1019\u101C\u102F\u1015\u103A\u1010\u1031\u102C\u1037\u1015\u102B",
  "dialog.no": "\u1019\u101C\u102D\u102F\u1010\u1031\u102C\u1037\u1015\u102B",
  "dialog.yes": "\u101C\u102D\u102F\u1015\u102B\u101E\u100A\u103A",
  "enter.file.name": "\u1016\u102D\u102F\u1004\u103A\u1014\u102C\u1019\u100A\u103A \u1011\u100A\u103A\u1037\u101E\u103D\u1004\u103A\u1038\u101B\u1014\u103A",
  "tldraw-beta": "tldraw \u1021\u101E\u1005\u103A\u1005\u1019\u103A\u1038\u101E\u102F\u1036\u1038\u1000\u103C\u100A\u103A\u1037\u101B\u1014\u103A"
};

// src/translations/nb-no.json
var nb_no_default = {
  "style.menu.color": "Farge",
  "style.menu.fill": "Fyll",
  "style.menu.dash": "Linje",
  "style.menu.size": "St\xF8rrelse",
  "style.menu.keep.open": "Hold \xE5pen",
  "style.menu.font": "Teksttype",
  "style.menu.align": "Juster",
  styles: "Stiler",
  "zoom.in": "Zoom inn",
  "zoom.out": "Zoom ut",
  to: "til",
  "menu.file": "Fil",
  "menu.edit": "Rediger",
  "menu.view": "Vis",
  "menu.preferences": "Preferanser",
  "menu.sign.in": "Logg inn",
  "menu.sign.out": "Logg ut",
  "become.a.sponsor": "Bli en sponsor",
  "zoom.to.selection": "Zoom til valg",
  "zoom.to.fit": "Zoom for \xE5 passe",
  "zoom.to": "Zoom til",
  "preferences.dark.mode": "M\xF8rk modus",
  "preferences.focus.mode": "Fokus modus",
  "preferences.debug.mode": "Debug modus",
  "preferences.show.grid": "Vis rutenett",
  "preferences.use.cad.selection": "Bruk CAD seleksjon",
  "preferences.keep.stylemenu.open": "Hold stilmeny \xE5pen",
  "preferences.always.show.snaps": "Vis alltid snaps",
  "preferences.rotate.handles": "Vis roteringsh\xE5ndtak",
  "preferences.binding.handles": "Vis bindingsh\xE5ndtak",
  "preferences.clone.handles": "Vis kloningsh\xE5ndtak",
  undo: "Angre",
  redo: "Gj\xF8r om",
  cut: "Klipp ut",
  copy: "Kopier",
  paste: "Lim inn",
  "copy.as": "Kopier som",
  "export.as": "Eksporter som",
  "select.all": "Velg alle",
  "select.none": "Velg ingen",
  delete: "Slett",
  "new.project": "Nytt prosjekt",
  open: "\xC5pne",
  save: "Lagre",
  "save.as": "Lagre som",
  "upload.media": "Last opp media",
  "create.page": "Opprett side",
  "new.page": "Ny side",
  "page.name": "Sidenavn",
  duplicate: "Dupliser",
  cancel: "Avbryt",
  "copy.invite.link": "Kopier invitasjonslink",
  "create.multiplayer.project": "Opprett et flerspiller prosjekt",
  "copy.multiplayer.project": "Kopier til flerspiller prosjekt",
  select: "Velg",
  eraser: "Viskel\xE6r",
  draw: "Tegn",
  arrow: "Pil",
  text: "Tekst",
  sticky: "Lapp",
  rectangle: "Rektangel",
  ellipse: "Ellipse",
  triangle: "Trekant",
  line: "Linje",
  rotate: "Roter",
  "lock.aspect.ratio": "L\xE5s st\xF8rrelsesforhold",
  "unlock.aspect.ratio": "L\xE5s opp st\xF8rrelsesforhold",
  group: "Grupper",
  ungroup: "Avgrupper",
  "move.to.back": "Flytt bakerst",
  "move.backward": "Flytt bakover",
  "move.forward": "Flytt forover",
  "move.to.front": "Flytt til front",
  "reset.angle": "Tilbakestill vinkel",
  lock: "L\xE5s",
  unlock: "L\xE5s opp",
  "move.to.page": "Flytt til side",
  "flip.horizontal": "Snu horisontalt",
  "flip.vertical": "Snu vertikalt",
  move: "Flytt",
  "to.front": "Foran",
  forward: "Framover",
  backward: "Bakover",
  back: "Bakerst",
  language: "Spr\xE5k"
};

// src/translations/ne.json
var ne_default = {
  "style.menu.color": "\u0930\u0902\u0917",
  "style.menu.fill": "\u092D\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  "style.menu.dash": "\u0927\u0930\u094D\u0915\u093E",
  "style.menu.size": "\u0906\u0915\u093E\u0930",
  "style.menu.keep.open": "\u0916\u0941\u0932\u093E \u0930\u093E\u0916\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  "style.menu.font": "\u092B\u0928\u094D\u091F",
  "style.menu.align": "\u092A\u0919\u094D\u0915\u094D\u0924\u093F\u092C\u0926\u094D\u0927",
  styles: "\u0936\u0948\u0932\u0940\u0939\u0930\u0942",
  "zoom.in": "\u091C\u0941\u092E \u0907\u0928",
  "zoom.out": "\u091C\u0941\u092E \u0906\u0909\u091F",
  to: "\u091F\u0941",
  "menu.file": "\u092B\u093E\u0907\u0932",
  "menu.edit": "\u0938\u092E\u094D\u092A\u093E\u0926\u0928 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  "menu.view": "\u092D\u094D\u092F\u0942",
  "menu.preferences": "\u092A\u094D\u0930\u093E\u0925\u092E\u093F\u0915\u0924\u093E\u0939\u0930\u0942",
  "menu.sign.in": "\u0938\u093E\u0907\u0928 \u0907\u0928 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  "menu.sign.out": "\u0938\u093E\u0907\u0928 \u0906\u0909\u091F \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  "become.a.sponsor": "\u092A\u094D\u0930\u093E\u092F\u094B\u091C\u0915 \u092C\u0928\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  "zoom.to.selection": "\u091C\u0941\u092E \u091F\u0941 \u0938\u0947\u0932\u0947\u0915\u094D\u0938\u0928",
  "zoom.to.fit": "\u091C\u0941\u092E \u091F\u0941 \u092B\u093F\u091F",
  "zoom.to": "\u091C\u0941\u092E \u091F\u0941",
  "preferences.dark.mode": "\u0905\u0901\u0927\u094D\u092F\u093E\u0930\u094B \u092E\u094B\u0921",
  "preferences.focus.mode": "\u092B\u094B\u0915\u0938 \u092E\u094B\u0921",
  "preferences.debug.mode": "\u0921\u093F\u092C\u0917 \u092E\u094B\u0921",
  "preferences.show.grid": "\u0917\u094D\u0930\u093F\u0921 \u0926\u0947\u0916\u093E\u0909\u0928\u0941\u0939\u094B\u0938\u094D",
  "preferences.use.cad.selection": "CAD \u0938\u0947\u0932\u0947\u0915\u094D\u0938\u0928 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  "preferences.keep.stylemenu.open": "\u0938\u094D\u091F\u093E\u0907\u0932 \u092E\u0947\u0928\u0941 \u0916\u0941\u0932\u093E \u0930\u093E\u0916\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  "preferences.always.show.snaps": "\u0938\u0927\u0948\u0901 \u0938\u094D\u0928\u094D\u092F\u093E\u092A\u0939\u0930\u0942 \u0926\u0947\u0916\u093E\u0909\u0928\u0941\u0939\u094B\u0938\u094D",
  "preferences.rotate.handles": "\u0939\u094D\u092F\u093E\u0928\u094D\u0921\u0932\u0939\u0930\u0942 \u0918\u0941\u092E\u093E\u0909\u0928\u0941\u0939\u094B\u0938\u094D",
  "preferences.binding.handles": "\u092C\u093E\u0907\u0928\u094D\u0921\u093F\u0919 \u0939\u094D\u092F\u093E\u0928\u094D\u0921\u0932\u0939\u0930\u0942",
  "preferences.clone.handles": "\u0915\u094D\u0932\u094B\u0928 \u0939\u094D\u092F\u093E\u0928\u094D\u0921\u0932\u0939\u0930\u0942",
  undo: "\u092A\u0942\u0930\u094D\u0935\u0935\u0924 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  redo: "\u092A\u0941\u0928\u0903 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  cut: "\u0915\u091F \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  copy: "\u0915\u092A\u093F \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  paste: "\u092A\u0947\u0938\u094D\u091F \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  "copy.as": "\u0915\u092A\u093F \u090F\u091C",
  "export.as": "\u090F\u0915\u094D\u0938\u092A\u094B\u0930\u094D\u091F \u090F\u091C",
  "select.all": "\u0938\u092C\u0948 \u091B\u093E\u0928\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  "select.none": "\u0915\u0947\u0939\u093F \u092A\u0928\u093F \u0938\u0947\u0932\u0947\u0915\u094D\u091F \u0928\u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  delete: "\u092E\u0947\u091F\u093E\u0909\u0928\u0941\u0939\u094B\u0938\u094D",
  "new.project": "\u0928\u092F\u093E\u0901 \u092A\u0930\u093F\u092F\u094B\u091C\u0928\u093E",
  open: "\u0916\u094B\u0932\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  save: "\u0938\u0941\u0930\u0915\u094D\u0937\u093F\u0924 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  "save.as": "\u0938\u0947\u092D \u090F\u091C",
  "upload.media": "\u092E\u093F\u0921\u093F\u092F\u093E \u0905\u092A\u0932\u094B\u0921 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  "create.page": "\u092A\u0943\u0937\u094D\u0920 \u0938\u093F\u0930\u094D\u091C\u0928\u093E \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  "new.page": "\u0928\u092F\u093E\u0901 \u092A\u0943\u0937\u094D\u0920 \u0938\u093F\u0930\u094D\u091C\u0928\u093E \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  "page.name": "\u092A\u0943\u0937\u094D\u0920\u0915\u094B \u0928\u093E\u092E",
  duplicate: "\u0905\u0928\u0941\u0932\u093F\u092A\u093F \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  cancel: "\u0930\u0926\u094D\u0926 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  "copy.invite.link": "\u0928\u093F\u092E\u0928\u094D\u0924\u094D\u0930\u0923\u093E \u0932\u093F\u0919\u094D\u0915 \u0915\u092A\u093F \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  "create.multiplayer.project": "\u092E\u0932\u094D\u091F\u093F\u092A\u094D\u0932\u0947\u092F\u0930 \u092A\u0930\u093F\u092F\u094B\u091C\u0928\u093E \u0938\u093F\u0930\u094D\u091C\u0928\u093E \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  "copy.multiplayer.project": "\u092E\u0932\u094D\u091F\u093F\u092A\u094D\u0932\u0947\u092F\u0930 \u092A\u094D\u0930\u094B\u091C\u0947\u0915\u094D\u091F\u092E\u093E \u0915\u092A\u093F \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  select: "\u0938\u0947\u0932\u0947\u0915\u094D\u091F",
  eraser: "\u0907\u0930\u0947\u091C\u0930",
  draw: "\u091A\u093F\u0924\u094D\u0930 \u092C\u0928\u093E\u0909\u0928\u0941",
  arrow: "\u0924\u0940\u0930",
  text: "\u0936\u092C\u094D\u0926",
  sticky: "\u091F\u093E\u0901\u0938\u093F\u0928\u0947",
  rectangle: "\u0906\u092F\u0924",
  ellipse: "\u0926\u0940\u0930\u094D\u0918\u0935\u0943\u0924\u094D\u0924",
  triangle: "\u0924\u094D\u0930\u093F\u092D\u0941\u091C",
  line: "\u0930\u0947\u0916\u093E",
  rotate: "\u0918\u0941\u092E\u093E\u0909\u0928\u0941\u0939\u094B\u0938\u094D",
  "lock.aspect.ratio": "\u0906\u0915\u093E\u0930 \u0905\u0928\u0941\u092A\u093E\u0924 \u0932\u0915 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  "unlock.aspect.ratio": "\u0906\u0915\u093E\u0930 \u0905\u0928\u0941\u092A\u093E\u0924 \u0905\u0928\u0932\u0915 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  group: "\u0938\u092E\u0942\u0939",
  ungroup: "\u0938\u092E\u0942\u0939 \u0930\u0926\u094D\u0926 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  "move.to.back": "\u092A\u091B\u093E\u0921\u093F \u0938\u093E\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  "move.backward": "\u0925\u092A \u092A\u091B\u093E\u0921\u093F \u0938\u093E\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  "move.forward": "\u0905\u0917\u093E\u0921\u093F \u0938\u093E\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  "move.to.front": "\u0925\u092A \u0905\u0917\u093E\u0921\u093F \u0938\u093E\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  "reset.angle": "\u0915\u094B\u0923 \u0930\u093F\u0938\u0947\u091F \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  lock: "\u0932\u0915 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  unlock: "\u0905\u0928\u0932\u0915 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  "move.to.page": "\u092A\u0943\u0937\u094D\u0920\u092E\u093E \u0938\u093E\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  "flip.horizontal": "\u0924\u0947\u0930\u094D\u0938\u094B \u092B\u094D\u0932\u093F\u092A \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  "flip.vertical": "\u0920\u093E\u0921\u094B \u092B\u094D\u0932\u093F\u092A \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  move: "\u0938\u093E\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  "to.front": "\u0925\u092A \u0905\u0917\u093E\u0921\u093F",
  forward: "\u0905\u0917\u093E\u0921\u093F",
  backward: "\u092A\u091B\u093E\u0921\u093F",
  back: "\u0925\u092A \u092A\u091B\u093E\u0921\u093F",
  language: "\u092D\u093E\u0937\u093E"
};

// src/translations/nn-no.json
var nn_no_default = {
  "style.menu.color": "Farge",
  "style.menu.fill": "Fyll",
  "style.menu.dash": "Line",
  "style.menu.size": "Storleik",
  "style.menu.keep.open": "Hald open",
  "style.menu.font": "Teksttype",
  "style.menu.align": "Tilpass",
  styles: "Stilar",
  "zoom.in": "Zoom inn",
  "zoom.out": "Zoom ut",
  to: "til",
  "menu.file": "Fil",
  "menu.edit": "Rediger",
  "menu.view": "Vis",
  "menu.preferences": "Innstillingar",
  "menu.sign.in": "Logg inn",
  "menu.sign.out": "Logg ut",
  "become.a.sponsor": "Vert sponsor",
  "zoom.to.content": "Zoom til innhald",
  "zoom.to.selection": "Zoom til valte element",
  "zoom.to.fit": "Zoom for \xE5 passe",
  "zoom.to": "Zoom til",
  "preferences.dark.mode": "M\xF8rkmodus",
  "preferences.focus.mode": "Fokusmodus",
  "preferences.debug.mode": "Debugmodus",
  "preferences.show.grid": "Vis rutenett",
  "preferences.use.cad.selection": "Bruk CAD-val",
  "preferences.keep.stylemenu.open": "Hald stilmeny open",
  "preferences.always.show.snaps": "Vis alltid snaps",
  "preferences.rotate.handles": "Vis roteringshandtak",
  "preferences.binding.handles": "Vis bindingshandtak",
  "preferences.clone.handles": "Vis kloningshandtak",
  undo: "Angre",
  redo: "Gjer om",
  cut: "Klipp ut",
  copy: "Kopier",
  paste: "Lim inn",
  "copy.as": "Kopier som",
  "export.as": "Eksporter som",
  "select.all": "Vel alle",
  "select.none": "Vel ingen",
  delete: "Slett",
  "new.project": "Nytt prosjekt",
  open: "Opne",
  save: "Lagre",
  "save.as": "Lagre som",
  "upload.media": "Last opp media",
  "create.page": "Opprett side",
  "new.page": "Ny side",
  "page.name": "Sidenamn",
  duplicate: "Dupliser",
  cancel: "Avbryt",
  "copy.invite.link": "Kopier invitasjonslenke",
  "copy.readonly.link": "Kopier invitasjonslenke (skrivebeskytta)",
  "create.multiplayer.project": "Lag samarbeidsprosjekt",
  "copy.multiplayer.project": "Kopier til samarbeidsprosjekt",
  select: "Vel",
  eraser: "Viskel\xEAr",
  draw: "Teikn",
  arrow: "Pil",
  text: "Tekst",
  sticky: "Lapp",
  rectangle: "Rektangel",
  ellipse: "Runding",
  triangle: "Trekant",
  line: "Line",
  rotate: "Roter",
  "lock.aspect.ratio": "L\xE5s storleiksforhold",
  "unlock.aspect.ratio": "L\xE5s opp storleiksforhold",
  group: "Grupper",
  ungroup: "Avgrupper",
  "move.to.back": "Flytt bakarst",
  "move.backward": "Flytt bakover",
  "move.forward": "Flytt framover",
  "move.to.front": "Flytt til front",
  "reset.angle": "Tilbakestill vinkel",
  lock: "L\xE5s",
  unlock: "L\xE5s opp",
  "move.to.page": "Flytt til side",
  "flip.horizontal": "Snu horisontalt",
  "flip.vertical": "Snu vertikalt",
  move: "Flytt",
  "to.front": "Framme",
  forward: "Framover",
  backward: "Bakover",
  back: "Bakarst",
  language: "Spr\xE5k",
  "translation.link": "Les meir",
  "dock.position": "Dokkplassering",
  bottom: "Nede",
  left: "Venstre",
  right: "H\xF8gre",
  top: "Oppe",
  page: "Side",
  "keyboard.shortcuts": "Sn\xF8ggtastar",
  search: "S\xF8k",
  loading: "Lastar{dots}",
  "export.background": "Eksporter bakgrunn",
  transparent: "Gjennomsiktig",
  auto: "Auto",
  light: "Lys",
  dark: "M\xF8rk",
  github: "Github",
  twitter: "Twitter",
  discord: "Discord",
  image: "Bilete",
  "align.left": "Venstrestill",
  "align.center.x": "Midtstill horisontalt",
  "align.right": "H\xF8grestill",
  "align.top": "Still til toppen",
  "align.center.y": "Midtstill vertikalt",
  "align.bottom": "Still til botnen",
  "distribute.x": "Distribuer horisontalt",
  "distribute.y": "Distribuer vertikalt",
  "stretch.x": "Strekk horisontalt",
  "stretch.y": "Strekk vertikalt",
  "dialog.save.firsttime": "Vil du lagre det noverande prosjektet ditt?",
  "dialog.save.again": "Vil du lagre endringane i det noverande prosjektet ditt?",
  "dialog.cancel": "Avbryt",
  "dialog.no": "Nei",
  "dialog.yes": "Ja",
  "enter.file.name": "Fyll inn filnamn",
  "tldraw-beta": "Pr\xF8v den nye tldraw",
  white: "Kvit",
  lightGray: "Lys gr\xE5",
  gray: "Gr\xE5",
  black: "Svart",
  green: "Gr\xF8n",
  cyan: "Cyan",
  blue: "Bk\xE5",
  indigo: "Indigo",
  violet: "Fiol",
  red: "Raud",
  orange: "Oransj",
  yellow: "Gul",
  solid: "Heil",
  dashed: "Stipla",
  dotted: "Prikka",
  small: "Liten",
  medium: "Mellomstor",
  large: "Stor"
};

// src/translations/pl.json
var pl_default = {
  "style.menu.color": "Kolor",
  "style.menu.fill": "Wype\u0142nienie",
  "style.menu.dash": "Linia",
  "style.menu.size": "Rozmiar",
  "style.menu.keep.open": "Zachowaj otwarte",
  "style.menu.font": "Czcionka",
  "style.menu.align": "Wyr\xF3wnanie",
  styles: "Style",
  "zoom.in": "Przybli\u017C",
  "zoom.out": "Oddal",
  to: "do",
  "menu.file": "Plik",
  "menu.edit": "Edycja",
  "menu.view": "Widok",
  "menu.preferences": "Preferencje",
  "menu.sign.in": "Zaloguj",
  "menu.sign.out": "Wyloguj",
  "become.a.sponsor": "Zosta\u0144 sponsorem",
  "zoom.to.selection": "Przybli\u017C do zaznaczenia",
  "zoom.to.fit": "Wype\u0142nij ekran",
  "zoom.to": "Przybli\u017C do",
  "preferences.dark.mode": "Tryb ciemny",
  "preferences.focus.mode": "Tryb skupienia",
  "preferences.debug.mode": "Tryb debugowania",
  "preferences.show.grid": "Poka\u017C siatk\u0119",
  "preferences.use.cad.selection": "U\u017Cyj zaznaczania CAD",
  "preferences.keep.stylemenu.open": "Zachowaj menu styli otwarte",
  "preferences.always.show.snaps": "Przyci\u0105gaj obiekty",
  "preferences.rotate.handles": "Uchwyty obrotu",
  "preferences.binding.handles": "Uchwyty powi\u0105zania",
  "preferences.clone.handles": "Uchwyty klonuj\u0105ce",
  undo: "Cofnij",
  redo: "Powt\xF3rz",
  cut: "Wytnij",
  copy: "Kopiuj",
  paste: "Wklej",
  "copy.as": "Kopiuj jako",
  "export.as": "Eksportuj jako",
  "select.all": "Zaznacz wszystko",
  "select.none": "Odznacz wszystko",
  delete: "Usu\u0144",
  "new.project": "Nowy projekt",
  open: "Otw\xF3rz",
  save: "Zapisz",
  "save.as": "Zapisz jako",
  "upload.media": "Za\u0142aduj multimedia",
  "create.page": "Utw\xF3rz stron\u0119",
  "new.page": "Nowa strona",
  "page.name": "Nazwa strony",
  duplicate: "Powiel",
  cancel: "Anuluj",
  "copy.invite.link": "Kopiuj link zaproszenia",
  "create.multiplayer.project": "Stw\xF3rz projekt wieloosobowy",
  "copy.multiplayer.project": "Kopiuj do projektu wieloosobowego",
  select: "Zaznacz",
  eraser: "Gumka",
  draw: "Rysuj",
  arrow: "Strza\u0142ka",
  text: "Tekst",
  sticky: "Naklejka",
  rectangle: "Prostok\u0105t",
  ellipse: "Elipsa",
  triangle: "Tr\xF3jk\u0105t",
  line: "Linia",
  rotate: "Obr\xF3\u0107",
  "lock.aspect.ratio": "Zablokuj proporcje",
  "unlock.aspect.ratio": "Odblokuj proporcje",
  group: "Grupuj",
  ungroup: "Rozgrupuj",
  "move.to.back": "Przenie\u015B na ty\u0142",
  "move.backward": "Przesu\u0144 do ty\u0142u",
  "move.forward": "Przesu\u0144 do przodu",
  "move.to.front": "Przenie\u015B na prz\xF3d",
  "reset.angle": "Resetuj k\u0105t",
  lock: "Zablokuj",
  unlock: "Odblokuj",
  "move.to.page": "Przenie\u015B na stron\u0119",
  "flip.horizontal": "Odwr\xF3\u0107 w poziomie",
  "flip.vertical": "Odwr\xF3\u0107 w pionie",
  move: "Przenie\u015B",
  "to.front": "Na wierzch",
  forward: "Do przodu",
  backward: "Do ty\u0142u",
  back: "Na sp\xF3d",
  language: "J\u0119zyk",
  "translation.link": "Czytaj wi\u0119cej",
  "dock.position": "Pozycja przybornika",
  bottom: "D\xF3\u0142",
  left: "Lewa",
  right: "Prawa",
  top: "G\xF3ra",
  page: "Strona",
  "keyboard.shortcuts": "Skr\xF3ty klawiszowe",
  search: "Szukaj",
  loading: "\u0141adowanie{dots}",
  "export.background": "Eksportuj t\u0142o",
  transparent: "Przezroczyste",
  auto: "Automatyczny",
  light: "Jasny",
  dark: "Ciemny",
  github: "Github",
  twitter: "Twitter",
  discord: "Discord",
  image: "Obraz",
  "align.left": "Wyr\xF3wnaj do lewej",
  "align.center.x": "Wycentruj poziomo",
  "align.right": "Wyr\xF3wnaj do prawej",
  "align.top": "Wyr\xF3wnaj do g\xF3ry",
  "align.center.y": "Wycentruj pionowo",
  "align.bottom": "Wyr\xF3wnaj do do\u0142u",
  "distribute.x": "Roz\u0142\xF3\u017C poziomo",
  "distribute.y": "Roz\u0142\xF3\u017C pionowo",
  "stretch.x": "Rozci\u0105gnij poziomo",
  "stretch.y": "Rozci\u0105gnij pionowo",
  "dialog.save.firsttime": "Czy chcesz zapisa\u0107 bie\u017C\u0105cy projekt?",
  "dialog.save.again": "Czy chcesz zapisa\u0107 zmiany w bie\u017C\u0105cym projekcie?",
  "dialog.cancel": "Anuluj",
  "dialog.no": "Nie",
  "dialog.yes": "Tak",
  "enter.file.name": "Podaj nazw\u0119 pliku",
  "tldraw-beta": "Wypr\xF3buj nowy tldraw"
};

// src/translations/pt-br.json
var pt_br_default = {
  "style.menu.color": "Cor",
  "style.menu.fill": "Preencher",
  "style.menu.dash": "Tra\xE7o",
  "style.menu.size": "Tamanho",
  "style.menu.keep.open": "Manter aberto",
  "style.menu.font": "Fonte",
  "style.menu.align": "Alinhamento",
  styles: "Estilos",
  "zoom.in": "Aumentar zoom",
  "zoom.out": "Diminuir zoom",
  to: "para",
  "menu.file": "Arquivo",
  "menu.edit": "Editar",
  "menu.view": "Visualizar",
  "menu.preferences": "Prefer\xEAncias",
  "menu.sign.in": "Entrar",
  "menu.sign.out": "Sair",
  "become.a.sponsor": "Torne-se um patrocinador",
  "zoom.to.selection": "Zoom para a sele\xE7\xE3o",
  "zoom.to.fit": "Zoom para ajuste",
  "zoom.to": "Zoom para",
  "preferences.dark.mode": "Modo Escuro",
  "preferences.focus.mode": "Modo Foco",
  "preferences.debug.mode": "Modo Debug",
  "preferences.show.grid": "Mostrar Grade",
  "preferences.use.cad.selection": "Usar sele\xE7\xE3o CAD",
  "preferences.keep.stylemenu.open": "Manter Menu de Estilos Aberto",
  "preferences.always.show.snaps": "Mostrar Pontos de Ajuste",
  "preferences.rotate.handles": "Controle de Rota\xE7\xE3o",
  "preferences.binding.handles": "Controle de V\xEDnculos",
  "preferences.clone.handles": "Controle de Clone",
  undo: "Desfazer",
  redo: "Refazer",
  cut: "Cortar",
  copy: "Copiar",
  paste: "Colar",
  "copy.as": "Copiar como",
  "export.as": "Exportar como",
  "select.all": "Selecionar todos",
  "select.none": "Selecionar nenhum",
  delete: "Deletar",
  "new.project": "Novo Projeto",
  open: "Abrir",
  save: "Salvar",
  "save.as": "Salvar Como",
  "upload.media": "Carregar M\xEDdia",
  page: "P\xE1gina",
  search: "Procurar",
  loading: "Carregando{dots}",
  "export.background": "Exportar Fundo",
  transparent: "Transparente",
  auto: "Autom\xE1tico",
  light: "Claro",
  dark: "Escuro",
  "menu.tools": "Ferramentas",
  "menu.transform": "Transformar",
  "zoom.to.content": "Voltar ao Conte\xFAdo",
  "translation.link": "Saiba Mais",
  "copy.readonly.link": "Copiar Link ReadOnly",
  "align.distribute": "Alinhar / Distribuir",
  "create.page": "Criar P\xE1gina",
  "new.page": "Nova P\xE1gina",
  "page.name": "Nome da P\xE1gina",
  duplicate: "Duplicar",
  cancel: "Cancelar",
  "copy.invite.link": "Copiar Link de Convite",
  "create.multiplayer.project": "Criar um Projeto Multijogador",
  "copy.multiplayer.project": "Copiar para Projeto Multijogador",
  select: "Selecionar",
  eraser: "Borracha",
  draw: "Desenhar",
  arrow: "Seta",
  text: "Texto",
  sticky: "Adesivo",
  rectangle: "Ret\xE2ngulo",
  ellipse: "Elipse",
  triangle: "Tri\xE2ngulo",
  line: "Linha",
  rotate: "Rotacionar",
  "lock.aspect.ratio": "Travar Propor\xE7\xE3o da Tela",
  "unlock.aspect.ratio": "Destravar Propor\xE7\xE3o da Tela",
  group: "Agrupar",
  ungroup: "Desagrupar",
  "move.to.back": "Recuar",
  "move.backward": "Enviar para Tr\xE1s",
  "move.forward": "Avan\xE7ar",
  "move.to.front": "Trazer para Frente",
  "reset.angle": "Reiniciar \xC2ngulo",
  lock: "Travar",
  unlock: "Destravar",
  "move.to.page": "Mover para P\xE1gina",
  "flip.horizontal": "Virar Horizontalmente",
  "flip.vertical": "Virar Verticalmente",
  move: "Mover",
  "to.front": "Para Frente",
  forward: "Avan\xE7ar",
  backward: "Recuar",
  back: "Voltar",
  language: "Idioma",
  image: "Imagem",
  "keyboard.shortcuts": "Atalhos de Teclado",
  "dock.position": "Posi\xE7\xE3o de Ferramentas",
  bottom: "Inferior",
  top: "Superior",
  right: "Direita",
  left: "Esquerda",
  "align.left": "Alinhar \xE0 esquerda",
  "align.center.x": "Alinhar ao centro na horizontal",
  "align.right": "Alinhar \xE0 direita",
  "align.top": "Alinhas em cima",
  "align.center.y": "Alinhar ao centro na vertical",
  "align.bottom": "Alinhar embaixo",
  "distribute.x": "Distruibuir na horizontal",
  "distribute.y": "Distruibuir na vertical",
  "stretch.x": "Esticar na horizontal",
  "stretch.y": "Esticar na vertical",
  "dialog.save.firsttime": "Voc\xEA deseja salvar seu projeto atual?",
  "dialog.save.again": "Voc\xEA deseja salvar as mudan\xE7as ao projeto atual?",
  "dialog.cancel": "Cancelar",
  "dialog.no": "N\xE3o",
  "dialog.yes": "Sim",
  "enter.file.name": "Insira o nome do arquivo"
};

// src/translations/pt-pt.json
var pt_pt_default = {
  "style.menu.color": "Cor",
  "style.menu.fill": "Preencher",
  "style.menu.dash": "Tra\xE7o",
  "style.menu.size": "Tamanho",
  "style.menu.keep.open": "Manter aberto",
  "style.menu.font": "Fonte",
  "style.menu.align": "Alinhamento",
  styles: "Estilos",
  "zoom.in": "Aumentar zoom",
  "zoom.out": "Diminuir zoom",
  to: "para",
  "menu.file": "Ficheiro",
  "menu.edit": "Editar",
  "menu.view": "Visualizar",
  "menu.preferences": "Prefer\xEAncias",
  "menu.sign.in": "Entrar",
  "menu.sign.out": "Sair",
  "become.a.sponsor": "Torne-se um patrocinador",
  "zoom.to.selection": "Zoom na sele\xE7\xE3o",
  "zoom.to.fit": "Zoom para caber",
  "zoom.to": "Zoom para",
  "preferences.dark.mode": "Modo Escuro",
  "preferences.focus.mode": "Modo Foco",
  "preferences.debug.mode": "Modo Debug",
  "preferences.show.grid": "Mostrar Grelha",
  "preferences.use.cad.selection": "Usar sele\xE7\xE3o CAD",
  "preferences.keep.stylemenu.open": "Manter Menu de Estilos Aberto",
  "preferences.always.show.snaps": "Mostrar Pontos de Ajuste",
  "preferences.rotate.handles": "Controlo de Rota\xE7\xE3o",
  "preferences.binding.handles": "Controlo de Binds",
  "preferences.clone.handles": "Controlo de Clone",
  undo: "Desfazer",
  redo: "Refazer",
  cut: "Cortar",
  copy: "Copiar",
  paste: "Colar",
  "copy.as": "Copiar como",
  "export.as": "Exportar como",
  "select.all": "Selecionar todos",
  "select.none": "Selecionar nenhum",
  delete: "Apagar",
  "new.project": "Novo Projeto",
  open: "Abrir",
  save: "Salvar",
  "save.as": "Salvar Como",
  "upload.media": "Upload M\xE9dia",
  "create.page": "Criar P\xE1gina",
  "new.page": "Nova P\xE1gina",
  "page.name": "Nome da P\xE1gina",
  duplicate: "Duplicar",
  cancel: "Cancelar",
  "copy.invite.link": "Copiar Link de Convite",
  "create.multiplayer.project": "Criar um Projeto Multi-Utilizador",
  "copy.multiplayer.project": "Copiar num Projeto Multi-Utilizador",
  select: "Selecionar",
  eraser: "Borracha",
  draw: "Desenhar",
  arrow: "Seta",
  text: "Texto",
  sticky: "Post-it",
  rectangle: "Ret\xE2ngulo",
  ellipse: "Elipse",
  triangle: "Tri\xE2ngulo",
  line: "Linha",
  rotate: "Rodar",
  "lock.aspect.ratio": "Trancar a Propor\xE7\xE3o",
  "unlock.aspect.ratio": "Destrancar a Propor\xE7\xE3o",
  group: "Agrupar",
  ungroup: "Desagrupar",
  "move.to.back": "Colocar no Fundo",
  "move.backward": "Mover abaixo",
  "move.forward": "Mover acima",
  "move.to.front": "Colocar \xE0 Frente",
  "reset.angle": "Reiniciar \xC2ngulo",
  lock: "Trancar",
  unlock: "Destrancar",
  "move.to.page": "Mover para P\xE1gina",
  "flip.horizontal": "Inverter Horizontalmente",
  "flip.vertical": "Inverter Verticalmente",
  move: "Mover",
  "to.front": "Para Frente",
  forward: "Avan\xE7ar",
  backward: "Recuar",
  back: "Voltar",
  language: "L\xEDngua"
};

// src/translations/ru.json
var ru_default = {
  "style.menu.color": "\u0426\u0432\u0435\u0442",
  "style.menu.fill": "\u0417\u0430\u043F\u043E\u043B\u043D\u044F\u0442\u044C",
  "style.menu.dash": "\u0428\u0442\u0440\u0438\u0445",
  "style.menu.size": "\u0420\u0430\u0437\u043C\u0435\u0440",
  "style.menu.keep.open": "\u0414\u0435\u0440\u0436\u0430\u0442\u044C \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u043C",
  "style.menu.font": "\u0428\u0440\u0438\u0444\u0442",
  "style.menu.align": "\u0412\u044B\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u043D\u0438\u0435",
  styles: "\u0421\u0442\u0438\u043B\u044C",
  "zoom.in": "\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C",
  "zoom.out": "\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C",
  to: "\u043A",
  "menu.tools": "\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
  "menu.transform": "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435",
  "menu.file": "\u0424\u0430\u0439\u043B",
  "menu.edit": "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435",
  "menu.view": "\u0412\u0438\u0434",
  "menu.preferences": "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
  "menu.sign.in": "\u0412\u043E\u0439\u0442\u0438",
  "menu.sign.out": "\u0412\u044B\u0439\u0442\u0438",
  "become.a.sponsor": "\u0421\u0442\u0430\u0442\u044C \u0441\u043F\u043E\u043D\u0441\u043E\u0440\u043E\u043C",
  "zoom.to.content": "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u043C\u0443",
  "zoom.to.selection": "\u041C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u044E",
  "zoom.to.fit": "\u041C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u0443 \u044D\u043A\u0440\u0430\u043D\u0430",
  "zoom.to": "\u041C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A",
  "preferences.dark.mode": "\u0422\u0451\u043C\u043D\u0430\u044F \u0442\u0435\u043C\u0430",
  "preferences.focus.mode": "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u0438\u0441\u0442\u0438\u0447\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C",
  "preferences.debug.mode": "\u0420\u0435\u0436\u0438\u043C \u043E\u0442\u043B\u0430\u0434\u043A\u0438",
  "preferences.show.grid": "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0441\u0435\u0442\u043A\u0443",
  "preferences.use.cad.selection": "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C CAD \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u0435",
  "preferences.keep.stylemenu.open": "\u0414\u0435\u0440\u0436\u0430\u0442\u044C \u043C\u0435\u043D\u044E \u0441\u0442\u0438\u043B\u0435\u0439 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u043C",
  "preferences.always.show.snaps": "\u0412\u0441\u0435\u0433\u0434\u0430 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043F\u0440\u0438\u0432\u044F\u0437\u043A\u0438",
  "preferences.rotate.handles": "\u0420\u0443\u0447\u043A\u0438 \u0432\u0440\u0430\u0449\u0435\u043D\u0438\u044F",
  "preferences.binding.handles": "\u0420\u0443\u0447\u043A\u0438 \u043F\u0440\u0438\u0432\u044F\u0437\u043A\u0438",
  "preferences.clone.handles": "\u0420\u0443\u0447\u043A\u0438 \u043A\u043B\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F",
  undo: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",
  redo: "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C",
  cut: "\u0412\u044B\u0440\u0435\u0437\u0430\u0442\u044C",
  copy: "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
  paste: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C",
  "copy.as": "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u0430\u043A",
  "export.as": "\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u0430\u043A",
  "select.all": "\u0412\u044B\u0434\u0435\u043B\u0438\u0442\u044C \u0432\u0441\u0451",
  "select.none": "\u0421\u043D\u044F\u0442\u044C \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u0435",
  delete: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
  "new.project": "\u041D\u043E\u0432\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442",
  open: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C",
  save: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",
  "save.as": "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043A\u0430\u043A",
  "upload.media": "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043C\u0435\u0434\u0438\u0430\u0444\u0430\u0439\u043B",
  "create.page": "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443",
  "new.page": "\u041D\u043E\u0432\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430",
  "page.name": "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B",
  duplicate: "\u0414\u0443\u0431\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
  cancel: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",
  "copy.invite.link": "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F",
  "copy.readonly.link": "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u0447\u0442\u0435\u043D\u0438\u044F",
  "create.multiplayer.project": "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043C\u043D\u043E\u0433\u043E\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u043F\u0440\u043E\u0435\u043A\u0442",
  "copy.multiplayer.project": "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432 \u043C\u043D\u043E\u0433\u043E\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u043F\u0440\u043E\u0435\u043A\u0442",
  select: "\u0412\u044B\u0434\u0435\u043B\u0438\u0442\u044C",
  eraser: "\u041B\u0430\u0441\u0442\u0438\u043A",
  draw: "\u0420\u0438\u0441\u043E\u0432\u0430\u0442\u044C",
  arrow: "\u0421\u0442\u0440\u0435\u043B\u043A\u0430",
  text: "\u0422\u0435\u043A\u0441\u0442",
  sticky: "\u0417\u0430\u043C\u0435\u0442\u043A\u0430",
  rectangle: "\u041F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A",
  ellipse: "\u042D\u043B\u043B\u0438\u043F\u0441",
  triangle: "\u0422\u0440\u0435\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A",
  line: "\u041B\u0438\u043D\u0438\u044F",
  rotate: "\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u044C",
  "lock.aspect.ratio": "\u0417\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435 \u0441\u0442\u043E\u0440\u043E\u043D",
  "unlock.aspect.ratio": "\u0420\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435 \u0441\u0442\u043E\u0440\u043E\u043D",
  group: "\u0421\u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
  ungroup: "\u0420\u0430\u0437\u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
  "move.to.back": "\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u043D\u0430\u0437\u0430\u0434",
  "move.backward": "\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u043D\u0430 \u0437\u0430\u0434\u043D\u0438\u0439 \u043F\u043B\u0430\u043D",
  "move.forward": "\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0432\u043F\u0435\u0440\u0451\u0434",
  "move.to.front": "\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u043D\u0430 \u043F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u043F\u043B\u0430\u043D",
  "reset.angle": "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0443\u0433\u043E\u043B",
  lock: "\u0411\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
  unlock: "\u0420\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
  "align.distribute": "\u0412\u044B\u0440\u043E\u0432\u043D\u044F\u0442\u044C / \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C",
  "move.to.page": "\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443",
  "flip.horizontal": "\u041F\u0435\u0440\u0435\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E",
  "flip.vertical": "\u041F\u0435\u0440\u0435\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E",
  move: "\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C",
  "to.front": "\u041D\u0430 \u043F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u043F\u043B\u0430\u043D",
  forward: "\u0412\u043F\u0435\u0440\u0435\u0434",
  backward: "\u041D\u0430 \u0437\u0430\u0434\u043D\u0438\u0439 \u043F\u043B\u0430\u043D",
  back: "\u041D\u0430\u0437\u0430\u0434",
  language: "\u042F\u0437\u044B\u043A",
  "translation.link": "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435",
  "dock.position": "\u0420\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043F\u0430\u043D\u0435\u043B\u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432",
  bottom: "\u0421\u043D\u0438\u0437\u0443",
  left: "\u0421\u043B\u0435\u0432\u0430",
  right: "\u0421\u043F\u0440\u0430\u0432\u0430",
  top: "\u0421\u0432\u0435\u0440\u0445\u0443",
  page: "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430",
  "keyboard.shortcuts": "\u0421\u043E\u0447\u0435\u0442\u0430\u043D\u0438\u044F \u043A\u043B\u0430\u0432\u0438\u0448",
  search: "\u041F\u043E\u0438\u0441\u043A",
  loading: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430",
  "export.background": "\u042D\u043A\u0441\u043F\u043E\u0440\u0442 \u0444\u043E\u043D\u0430",
  transparent: "\u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u044B\u0439",
  auto: "\u0410\u0432\u0442\u043E",
  light: "\u0421\u0432\u0435\u0442\u043B\u044B\u0439",
  dark: "\u0422\u0451\u043C\u043D\u044B\u0439",
  image: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",
  "align.left": "\u0412\u044B\u0440\u043E\u0432\u043D\u044F\u0442\u044C \u043F\u043E \u043B\u0435\u0432\u043E\u043C\u0443 \u043A\u0440\u0430\u044E",
  "align.center.x": "\u0412\u044B\u0440\u043E\u0432\u043D\u044F\u0442\u044C \u043F\u043E \u0446\u0435\u043D\u0442\u0440\u0443 \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E",
  "align.right": "\u0412\u044B\u0440\u043E\u0432\u043D\u044F\u0442\u044C \u043F\u043E \u043F\u0440\u0430\u0432\u043E\u043C\u0443 \u043A\u0440\u0430\u044E",
  "align.top": "\u0412\u044B\u0440\u043E\u0432\u043D\u044F\u0442\u044C \u043F\u043E \u0432\u0435\u0440\u0445\u043D\u0435\u043C\u0443 \u043A\u0440\u0430\u044E",
  "align.center.y": "\u0412\u044B\u0440\u043E\u0432\u043D\u044F\u0442\u044C \u043F\u043E \u0446\u0435\u043D\u0442\u0440\u0443 \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E",
  "align.bottom": "\u0412\u044B\u0440\u043E\u0432\u043D\u044F\u0442\u044C \u043F\u043E \u043D\u0438\u0436\u043D\u0435\u043C\u0443 \u043A\u0440\u0430\u044E",
  "distribute.x": "\u0420\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E",
  "distribute.y": "\u0420\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E",
  "stretch.x": "\u0420\u0430\u0441\u0442\u044F\u043D\u0443\u0442\u044C \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E",
  "stretch.y": "\u0420\u0430\u0441\u0442\u044F\u043D\u0443\u0442\u044C \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E",
  share: "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F",
  "copy.current.page.link": "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u0442\u0435\u043A\u0443\u0449\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443",
  "copy.project.link": "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u043F\u0440\u043E\u0435\u043A\u0442",
  "data.too.big.encoded": "\u0414\u0430\u043D\u043D\u044B\u0435 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0432\u0435\u043B\u0438\u043A\u0438, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043A\u043E\u0434\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0438\u0445 \u0432 \u0441\u0441\u044B\u043B\u043A\u0435. \u041D\u0435 \u0432\u043A\u043B\u044E\u0447\u0430\u0439\u0442\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0438\u043B\u0438 \u0432\u0438\u0434\u0435\u043E!",
  "dialog.save.firsttime": "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u043F\u0440\u043E\u0435\u043A\u0442?",
  "dialog.save.again": "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0432 \u0442\u0435\u043A\u0443\u0449\u0435\u043C \u043F\u0440\u043E\u0435\u043A\u0442\u0435?",
  "dialog.cancel": "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",
  "dialog.no": "\u041D\u0435\u0442",
  "dialog.yes": "\u0414\u0430",
  "enter.file.name": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F \u0444\u0430\u0439\u043B\u0430"
};

// src/translations/sv.json
var sv_default = {
  "style.menu.color": "F\xE4rg",
  "style.menu.fill": "Ifylld",
  "style.menu.dash": "Streck",
  "style.menu.size": "Storlek",
  "style.menu.keep.open": "H\xE5ll stilmenyn \xF6ppen",
  "style.menu.font": "Typsnitt",
  "style.menu.align": "Justera",
  styles: "Utseende",
  "zoom.in": "Zooma in",
  "zoom.out": "Zooma ut",
  to: "Till",
  "menu.tools": "Verktyg",
  "menu.transform": "Transform",
  "menu.file": "Arkiv",
  "menu.edit": "Redigera",
  "menu.view": "Inneh\xE5ll",
  "menu.preferences": "Inst\xE4llningar",
  "menu.sign.in": "Logga in",
  "menu.sign.out": "Logga ut",
  "become.a.sponsor": "Bli en sponsor",
  "zoom.to.content": "Anpassa zoom till inneh\xE5ll",
  "zoom.to.selection": "Anpassa zoom till urval",
  "zoom.to.fit": "Anpassa zoom till sk\xE4rm",
  "zoom.to": "Zooma till",
  "preferences.dark.mode": "M\xF6rkt l\xE4ge",
  "preferences.focus.mode": "Fokusl\xE4ge",
  "preferences.debug.mode": "Debugl\xE4ge",
  "preferences.show.grid": "Visa rutn\xE4t",
  "preferences.use.cad.selection": "V\xE4lj som i CAD-mjukvara",
  "preferences.keep.stylemenu.open": "H\xE5ll stilmenyn \xF6ppen",
  "preferences.always.show.snaps": "Visa alltid f\xE4stpunkter",
  "preferences.rotate.handles": "Rotationshandtag",
  "preferences.binding.handles": "Bindningshandtag",
  "preferences.clone.handles": "Kloningshandtag",
  undo: "\xC5ngra",
  redo: "G\xF6r om",
  cut: "Klipp ut",
  copy: "Kopiera",
  paste: "Klistra in",
  "copy.as": "Kopiera som",
  "export.as": "Exportera till",
  "select.all": "V\xE4lj alla",
  "select.none": "V\xE4lj ingen",
  delete: "Radera",
  "new.project": "Nytt projekt",
  open: "\xD6ppna",
  save: "Spara",
  "save.as": "Spara som",
  "upload.media": "Ladda upp media",
  "create.page": "Skapa sida",
  "new.page": "Ny sida",
  "page.name": "Sidnamn",
  duplicate: "Duplicera",
  cancel: "Avbryt",
  "copy.invite.link": "Kopiera l\xE4nk med redigeringsr\xE4ttigheter",
  "copy.readonly.link": "Kopiera l\xE4nk med l\xE4sr\xE4ttigheter",
  "create.multiplayer.project": "Skapa ett Multiplayer-projekt",
  "copy.multiplayer.project": "Kopiera till Multiplayer-project",
  select: "V\xE4lj",
  eraser: "Radera",
  draw: "Rita",
  arrow: "Pil",
  text: "Text",
  sticky: "Klisterlapp",
  rectangle: "Rektangel",
  ellipse: "Ellips",
  triangle: "Triangel",
  line: "Linje",
  rotate: "Rotera",
  "lock.aspect.ratio": "L\xE5s storleksf\xF6rh\xE5llande",
  "unlock.aspect.ratio": "L\xE5s upp storleksf\xF6rh\xE5llande",
  group: "Gruppera",
  ungroup: "Avgruppera",
  "move.to.back": "Placera l\xE4ngst bak",
  "move.backward": "Flytta bak\xE5t",
  "move.forward": "Flytta fram\xE5t",
  "move.to.front": "Placera l\xE4ngst fram",
  "reset.angle": "\xC5terst\xE4ll vinkel",
  lock: "L\xE5s",
  unlock: "L\xE5s upp",
  "align.distribute": "Justera / Placera",
  "move.to.page": "Flytta till sida",
  "flip.horizontal": "V\xE4nd horisontellt",
  "flip.vertical": "V\xE4nd vertikalt",
  move: "Flytta",
  "to.front": "Till l\xE4ngst fram",
  forward: "Fram\xE5t",
  backward: "Bak\xE5t",
  back: "Till l\xE4ngst bak",
  language: "Spr\xE5k",
  "translation.link": "Mer information",
  "dock.position": "Dockningsposition",
  bottom: "Botten",
  left: "V\xE4nster",
  right: "H\xF6ger",
  top: "Topp",
  page: "Sida",
  "keyboard.shortcuts": "Tangentbordsgenv\xE4gar",
  search: "S\xF6k",
  loading: "Laddar{dots}",
  "export.background": "Exportbakgrund",
  transparent: "Transparent",
  auto: "Auto",
  light: "Ljus",
  dark: "M\xF6rk",
  github: "Github",
  twitter: "Twitter",
  discord: "Discord",
  image: "Bild"
};

// src/translations/te.json
var te_default = {
  "style.menu.color": "\u0C30\u0C02\u0C17\u0C41",
  "style.menu.fill": "\u0C28\u0C3F\u0C02\u0C2A\u0C41",
  "style.menu.dash": "\u0C05\u0C21\u0C4D\u0C21 \u0C17\u0C40\u0C24",
  "style.menu.size": "\u0C2A\u0C30\u0C3F\u0C2E\u0C3E\u0C23\u0C02",
  "style.menu.keep.open": "\u0C24\u0C46\u0C30\u0C3F\u0C1A\u0C3F \u0C09\u0C02\u0C1A\u0C41",
  "style.menu.font": "\u0C05\u0C15\u0C4D\u0C37\u0C30\u0C3E\u0C15\u0C43\u0C24\u0C3F",
  "style.menu.align": "\u0C38\u0C30\u0C3F\u0C2A\u0C30\u0C1A\u0C41",
  styles: "\u0C35\u0C3F\u0C27\u0C2E\u0C41\u0C32\u0C41",
  "zoom.in": "\u0C26\u0C17\u0C4D\u0C17\u0C30\u0C17\u0C3E \u0C1A\u0C42\u0C2A\u0C41",
  "zoom.out": "\u0C26\u0C42\u0C30\u0C02\u0C17\u0C3E \u0C1A\u0C42\u0C2A\u0C41",
  to: "\u0C35\u0C26\u0C4D\u0C26\u0C15\u0C41",
  "menu.tools": "\u0C2A\u0C30\u0C3F\u0C15\u0C30\u0C3E\u0C32\u0C41",
  "menu.transform": "\u0C2E\u0C3E\u0C30\u0C4D\u0C1A\u0C41",
  "menu.file": "\u0C2B\u0C48\u0C32\u0C4D",
  "menu.edit": "\u0C2A\u0C30\u0C3F\u0C37\u0C4D\u0C15\u0C30\u0C3F\u0C02\u0C1A\u0C41",
  "menu.view": "\u0C1A\u0C42\u0C2A\u0C41",
  "menu.preferences": "\u0C0E\u0C02\u0C1A\u0C41\u0C15\u0C4A\u0C28\u0C4D\u0C28\u0C35\u0C3F",
  "menu.sign.in": "\u0C2A\u0C4D\u0C30\u0C35\u0C47\u0C36\u0C3F\u0C02\u0C1A\u0C41",
  "menu.sign.out": "\u0C28\u0C3F\u0C37\u0C4D\u0C15\u0C4D\u0C30\u0C2E\u0C23",
  "become.a.sponsor": "\u0C35\u0C3F\u0C30\u0C3E\u0C33\u0C26\u0C3E\u0C30\u0C41\u0C32\u0C41 \u0C05\u0C35\u0C4D\u0C35\u0C02\u0C21\u0C3F",
  "zoom.to.content": "\u0C35\u0C3F\u0C37\u0C2F\u0C3E\u0C28\u0C4D\u0C28\u0C47 \u0C1A\u0C42\u0C2A\u0C41",
  "zoom.to.selection": "\u0C0E\u0C02\u0C1A\u0C41\u0C15\u0C41\u0C28\u0C4D\u0C28 \u0C35\u0C3F\u0C37\u0C2F\u0C3E\u0C28\u0C4D\u0C28\u0C47 \u0C1A\u0C42\u0C2A\u0C41",
  "zoom.to.fit": "\u0C38\u0C30\u0C3F\u0C2A\u0C46\u0C1F\u0C4D\u0C1F\u0C3F \u0C1A\u0C42\u0C2A\u0C41",
  "zoom.to": "\u0C1A\u0C42\u0C2A\u0C41",
  "preferences.dark.mode": "\u0C1A\u0C40\u0C15\u0C1F\u0C48\u0C28 \u0C15\u0C4D\u0C30\u0C2E\u0C02",
  "preferences.focus.mode": "\u0C24\u0C40\u0C15\u0C4D\u0C37\u0C23 \u0C15\u0C4D\u0C30\u0C2E\u0C02",
  "preferences.debug.mode": "\u0C24\u0C2A\u0C4D\u0C2A\u0C41\u0C32\u0C47\u0C30\u0C41 \u0C15\u0C4D\u0C30\u0C2E\u0C02",
  "preferences.show.grid": "\u0C1A\u0C1F\u0C4D\u0C30\u0C02 \u0C1A\u0C42\u0C2A\u0C41",
  "preferences.use.cad.selection": "CAD\u0C28\u0C3F \u0C35\u0C3E\u0C21\u0C41",
  "preferences.keep.stylemenu.open": "\u0C35\u0C3F\u0C27\u0C2E\u0C41\u0C32 \u0C2A\u0C24\u0C4D\u0C24\u0C3F \u0C24\u0C46\u0C30\u0C3F\u0C1A\u0C3F\u0C35\u0C41\u0C02\u0C1A\u0C41",
  "preferences.always.show.snaps": "\u0C0E\u0C2A\u0C4D\u0C2A\u0C41\u0C21\u0C42 \u0C26\u0C43\u0C36\u0C4D\u0C2F\u0C2D\u0C3E\u0C17\u0C02 \u0C1A\u0C42\u0C2A\u0C41",
  "preferences.rotate.handles": "\u0C39\u0C4D\u0C2F\u0C3E\u0C02\u0C21\u0C3F\u0C32\u0C4D\u0C38\u0C4D \u0C24\u0C3F\u0C2A\u0C4D\u0C2A\u0C41",
  "preferences.binding.handles": "\u0C2F\u0C3E\u0C02\u0C21\u0C3F\u0C32\u0C4D\u0C38\u0C4D \u0C15\u0C1F\u0C4D\u0C1F\u0C41",
  "preferences.clone.handles": "\u0C2F\u0C3E\u0C02\u0C21\u0C3F\u0C32\u0C4D\u0C38\u0C4D \u0C28\u0C15\u0C32\u0C41",
  undo: "\u0C2E\u0C3E\u0C30\u0C4D\u0C2A\u0C41\u0C28\u0C3F \u0C24\u0C3F\u0C30\u0C41\u0C17\u0C17\u0C4A\u0C1F\u0C4D\u0C1F\u0C41",
  redo: "\u0C2E\u0C33\u0C4D\u0C33\u0C40 \u0C2E\u0C3E\u0C30\u0C4D\u0C1A\u0C41",
  cut: "\u0C15\u0C24\u0C4D\u0C24\u0C3F\u0C30\u0C3F\u0C02\u0C1A\u0C41",
  copy: "\u0C28\u0C15\u0C32\u0C41",
  paste: "\u0C05\u0C24\u0C3F\u0C15\u0C3F\u0C02\u0C1A\u0C41",
  "copy.as": "\u0C28\u0C15\u0C32\u0C41\u0C2A\u0C4D\u0C30\u0C24\u0C3F\u0C17\u0C3E \u0C07\u0C15\u0C4D\u0C15\u0C21\u0C3F\u0C15\u0C3F",
  "export.as": "\u0C0E\u0C17\u0C41\u0C2E\u0C24\u0C3F \u0C07\u0C15\u0C4D\u0C15\u0C21\u0C3F\u0C15\u0C3F",
  "select.all": "\u0C05\u0C28\u0C4D\u0C28\u0C40 \u0C0E\u0C02\u0C2A\u0C3F\u0C15\u0C1A\u0C46\u0C2F\u0C4D\u0C2F\u0C3F",
  "select.none": "\u0C0E\u0C26\u0C40 \u0C0E\u0C02\u0C2A\u0C3F\u0C15\u0C1A\u0C46\u0C2F\u0C4D\u0C2F\u0C35\u0C26\u0C4D\u0C26\u0C41",
  delete: "\u0C24\u0C4A\u0C32\u0C17\u0C3F\u0C02\u0C1A\u0C41",
  "new.project": "\u0C15\u0C4A\u0C24\u0C4D\u0C24 \u0C2A\u0C4D\u0C30\u0C3E\u0C1C\u0C46\u0C15\u0C4D\u0C1F\u0C41",
  open: "\u0C24\u0C46\u0C30\u0C41\u0C35\u0C41",
  save: "\u0C26\u0C3E\u0C2F\u0C3F",
  "save.as": "\u0C07\u0C32\u0C3E \u0C26\u0C3E\u0C2F\u0C3F",
  "upload.media": "\u0C0E\u0C17\u0C41\u0C2E\u0C24\u0C3F \u0C2E\u0C3E\u0C27\u0C4D\u0C2F\u0C02",
  "create.page": "\u0C2A\u0C41\u0C1F \u0C15\u0C32\u0C4D\u0C2A\u0C3F\u0C02\u0C1A\u0C41",
  "new.page": "\u0C15\u0C4A\u0C24\u0C4D\u0C24 \u0C2A\u0C41\u0C1F",
  "page.name": "\u0C2A\u0C41\u0C1F \u0C2A\u0C47\u0C30\u0C41",
  duplicate: "\u0C2E\u0C3E\u0C30\u0C41\u0C2A\u0C4D\u0C30\u0C24\u0C3F",
  cancel: "\u0C30\u0C26\u0C4D\u0C26\u0C41\u0C1A\u0C47\u0C2F\u0C3F",
  "copy.invite.link": "\u0C05\u0C39\u0C4D\u0C35\u0C3E\u0C28 \u0C32\u0C3F\u0C02\u0C15\u0C41 \u0C30\u0C3E\u0C2F\u0C3F",
  "copy.readonly.link": "\u0C2E\u0C3E\u0C30\u0C28\u0C3F\u0C2A\u0C4D\u0C30\u0C24\u0C3F \u0C32\u0C3F\u0C02\u0C15\u0C41 \u0C30\u0C3E\u0C2F\u0C3F",
  "create.multiplayer.project": "\u0C2C\u0C39\u0C41\u0C15\u0C30\u0C4D\u0C24\u0C32 \u0C2A\u0C4D\u0C30\u0C3E\u0C1C\u0C46\u0C15\u0C4D\u0C1F\u0C41 \u0C15\u0C32\u0C4D\u0C2A\u0C3F\u0C02\u0C1A\u0C41",
  "copy.multiplayer.project": "\u0C2C\u0C39\u0C41\u0C15\u0C30\u0C4D\u0C24\u0C32 \u0C2A\u0C4D\u0C30\u0C3E\u0C1C\u0C46\u0C15\u0C4D\u0C1F\u0C41\u0C15\u0C41 \u0C30\u0C3E\u0C2F\u0C3F",
  select: "\u0C0E\u0C02\u0C2A\u0C3F\u0C15\u0C1A\u0C46\u0C2F\u0C4D\u0C2F\u0C3F",
  eraser: "Eraser",
  draw: "\u0C17\u0C40\u0C2F\u0C4D\u0C2F\u0C3F",
  arrow: "\u0C2C\u0C3E\u0C23\u0C02",
  text: "\u0C05\u0C15\u0C4D\u0C37\u0C30\u0C2E\u0C41\u0C32\u0C41",
  sticky: "\u0C05\u0C24\u0C41\u0C15\u0C4D\u0C15\u0C41\u0C28\u0C47",
  rectangle: "\u0C26\u0C40\u0C30\u0C4D\u0C18\u0C1A\u0C24\u0C41\u0C30\u0C38\u0C4D\u0C30\u0C02",
  ellipse: "\u0C26\u0C40\u0C30\u0C4D\u0C18\u0C35\u0C43\u0C24\u0C4D\u0C24\u0C02",
  triangle: "\u0C24\u0C4D\u0C30\u0C3F\u0C2D\u0C41\u0C1C\u0C02",
  line: "\u0C17\u0C40\u0C24",
  rotate: "\u0C24\u0C3F\u0C2A\u0C4D\u0C2A\u0C41",
  "lock.aspect.ratio": "\u0C06\u0C38\u0C4D\u0C2A\u0C46\u0C15\u0C4D\u0C1F\u0C4D \u0C28\u0C3F\u0C37\u0C4D\u0C2A\u0C24\u0C4D\u0C24\u0C3F\u0C15\u0C3F \u0C24\u0C3E\u0C33\u0C02\u0C2A\u0C46\u0C1F\u0C4D\u0C1F\u0C41",
  "unlock.aspect.ratio": "\u0C06\u0C38\u0C4D\u0C2A\u0C46\u0C15\u0C4D\u0C1F\u0C4D \u0C28\u0C3F\u0C37\u0C4D\u0C2A\u0C24\u0C4D\u0C24\u0C3F \u0C24\u0C3E\u0C33\u0C02\u0C24\u0C46\u0C30\u0C41\u0C35\u0C41",
  group: "\u0C17\u0C41\u0C02\u0C2A\u0C41\u0C17\u0C3E \u0C0F\u0C30\u0C4D\u0C2A\u0C30\u0C1A\u0C41",
  ungroup: "\u0C17\u0C41\u0C02\u0C2A\u0C41\u0C28\u0C41 \u0C1A\u0C46\u0C26\u0C30\u0C17\u0C4A\u0C1F\u0C4D\u0C1F\u0C41",
  "move.to.back": "\u0C06\u0C16\u0C30\u0C3F\u0C15\u0C3F \u0C1C\u0C30\u0C41\u0C2A\u0C41",
  "move.backward": "\u0C35\u0C46\u0C28\u0C41\u0C15\u0C15\u0C41 \u0C1C\u0C30\u0C41\u0C2A\u0C41",
  "move.forward": "\u0C2E\u0C41\u0C02\u0C26\u0C41\u0C15\u0C41 \u0C1C\u0C30\u0C41\u0C2A\u0C41",
  "move.to.front": "\u0C2E\u0C4A\u0C26\u0C1F\u0C3F\u0C15\u0C3F \u0C1C\u0C30\u0C41\u0C2A\u0C41",
  "reset.angle": "\u0C15\u0C4B\u0C23\u0C02 \u0C30\u0C40\u0C38\u0C46\u0C1F\u0C4D",
  lock: "\u0C24\u0C3E\u0C33\u0C02 \u0C35\u0C46\u0C2F\u0C4D\u0C2F\u0C3F",
  unlock: "\u0C24\u0C3E\u0C33\u0C02 \u0C24\u0C3F\u0C2F\u0C4D\u0C2F\u0C3F",
  "align.distribute": " \u0C38\u0C30\u0C3F\u0C2A\u0C30\u0C1A\u0C41/\u0C35\u0C46\u0C26\u0C1C\u0C32\u0C4D\u0C32\u0C41",
  "move.to.page": "\u0C2A\u0C41\u0C1F\u0C32\u0C4B\u0C15\u0C3F \u0C1C\u0C30\u0C41\u0C2A\u0C41",
  "flip.horizontal": "\u0C05\u0C21\u0C4D\u0C21\u0C02\u0C17\u0C3E \u0C2A\u0C32\u0C4D\u0C1F\u0C40",
  "flip.vertical": "\u0C28\u0C3F\u0C32\u0C41\u0C35\u0C41\u0C17\u0C3E \u0C2A\u0C32\u0C4D\u0C1F\u0C40",
  move: "\u0C1C\u0C30\u0C41\u0C2A\u0C41",
  "to.front": "\u0C2E\u0C4A\u0C26\u0C1F\u0C3F\u0C15\u0C3F",
  forward: "\u0C2E\u0C41\u0C02\u0C26\u0C41\u0C15\u0C41",
  backward: "\u0C35\u0C46\u0C28\u0C41\u0C15\u0C15\u0C41",
  back: "\u0C06\u0C16\u0C30\u0C3F\u0C15\u0C3F",
  language: "\u0C2D\u0C3E\u0C37",
  "translation.link": "\u0C2E\u0C30\u0C3F \u0C15\u0C4A\u0C28\u0C4D\u0C28\u0C3F \u0C35\u0C3F\u0C37\u0C2F\u0C3E\u0C32\u0C41",
  "dock.position": "\u0C2E\u0C02\u0C1A \u0C38\u0C4D\u0C25\u0C3E\u0C28\u0C02",
  bottom: "\u0C05\u0C21\u0C41\u0C17\u0C41\u0C28",
  left: "\u0C0E\u0C21\u0C2E\u0C35\u0C48\u0C2A\u0C41",
  right: "\u0C15\u0C41\u0C21\u0C3F\u0C35\u0C48\u0C2A\u0C41",
  top: "\u0C2A\u0C48\u0C28",
  page: "\u0C2A\u0C41\u0C24",
  "keyboard.shortcuts": "\u0C15\u0C40\u0C2C\u0C4B\u0C30\u0C4D\u0C21\u0C4D \u0C38\u0C24\u0C4D\u0C35\u0C30\u0C2E\u0C3E\u0C30\u0C4D\u0C17\u0C02",
  search: "\u0C35\u0C46\u0C24\u0C41\u0C15\u0C41",
  loading: "Loading{dots}",
  "export.background": "\u0C28\u0C47\u0C2A\u0C25\u0C4D\u0C2F\u0C02 \u0C0E\u0C17\u0C41\u0C2E\u0C24\u0C3F",
  transparent: "\u0C15\u0C3E\u0C02\u0C24\u0C3F \u0C2D\u0C47\u0C26\u0C4D\u0C2F\u0C2E\u0C41",
  auto: "\u0C38\u0C4D\u0C35\u0C2F\u0C02\u0C15\u0C43\u0C24\u0C02",
  light: "\u0C35\u0C46\u0C32\u0C41\u0C24\u0C41\u0C30\u0C41",
  dark: "\u0C1A\u0C40\u0C15\u0C1F\u0C3F",
  github: "Github",
  twitter: "Twitter",
  discord: "Discord",
  image: "\u0C1A\u0C3F\u0C24\u0C4D\u0C30\u0C02",
  "align.left": "\u0C0E\u0C21\u0C2E\u0C35\u0C48\u0C2A\u0C41\u0C15\u0C41 \u0C15\u0C41\u0C26\u0C41\u0C30\u0C4D\u0C1A\u0C41",
  "align.center.x": "\u0C05\u0C21\u0C4D\u0C21\u0C02\u0C17\u0C3E \u0C2E\u0C27\u0C4D\u0C2F\u0C32\u0C4B \u0C15\u0C41\u0C26\u0C41\u0C30\u0C4D\u0C1A\u0C41",
  "align.right": "\u0C15\u0C41\u0C21\u0C3F\u0C35\u0C48\u0C2A\u0C41\u0C15\u0C41 \u0C15\u0C41\u0C26\u0C41\u0C30\u0C4D\u0C1A\u0C41",
  "align.top": "\u0C2A\u0C48\u0C15\u0C3F \u0C15\u0C41\u0C26\u0C41\u0C30\u0C4D\u0C1A\u0C41",
  "align.center.y": "\u0C28\u0C3F\u0C32\u0C41\u0C35\u0C41\u0C17\u0C3E \u0C2E\u0C27\u0C4D\u0C2F\u0C32\u0C4B \u0C15\u0C41\u0C26\u0C41\u0C30\u0C4D\u0C1A\u0C41",
  "align.bottom": "\u0C05\u0C21\u0C41\u0C17\u0C41\u0C28 \u0C15\u0C41\u0C26\u0C41\u0C30\u0C4D\u0C1A\u0C41",
  "distribute.x": "\u0C05\u0C21\u0C4D\u0C21\u0C02\u0C17\u0C3E \u0C2A\u0C02\u0C1A\u0C41",
  "distribute.y": "\u0C28\u0C3F\u0C32\u0C41\u0C35\u0C41\u0C17\u0C3E \u0C2A\u0C02\u0C1A\u0C41",
  "stretch.x": "\u0C05\u0C21\u0C4D\u0C21\u0C02\u0C17\u0C3E \u0C32\u0C3E\u0C17\u0C41",
  "stretch.y": "\u0C28\u0C3F\u0C32\u0C41\u0C35\u0C41\u0C17\u0C3E \u0C32\u0C3E\u0C17\u0C41",
  "dialog.save.firsttime": "\u0C2E\u0C40\u0C30\u0C41 \u0C08 \u0C2A\u0C4D\u0C30\u0C3E\u0C1C\u0C46\u0C15\u0C4D\u0C1F\u0C4D \u0C2D\u0C26\u0C4D\u0C30\u0C2A\u0C30\u0C1A\u0C41\u0C15\u0C4B\u0C35\u0C3E\u0C32\u0C28\u0C3F \u0C05\u0C28\u0C41\u0C15\u0C41\u0C02\u0C1F\u0C41\u0C28\u0C4D\u0C28\u0C3E\u0C30\u0C3E?",
  "dialog.save.again": "\u0C2E\u0C40\u0C30\u0C41 \u0C08 \u0C2A\u0C4D\u0C30\u0C3E\u0C1C\u0C46\u0C15\u0C4D\u0C1F\u0C4D \u0C2D\u0C26\u0C4D\u0C30\u0C2A\u0C30\u0C1A\u0C41\u0C15\u0C4B\u0C35\u0C3E\u0C32\u0C28\u0C3F \u0C05\u0C28\u0C41\u0C15\u0C41\u0C02\u0C1F\u0C41\u0C28\u0C4D\u0C28\u0C3E\u0C30\u0C3E?",
  "dialog.cancel": "\u0C30\u0C26\u0C4D\u0C26\u0C41\u0C1A\u0C46\u0C2F\u0C4D\u0C2F\u0C3F",
  "dialog.no": "\u0C35\u0C26\u0C4D\u0C26\u0C41",
  "dialog.yes": "\u0C38\u0C30\u0C47",
  "enter.file.name": "\u0C2B\u0C48\u0C32\u0C4D \u0C2A\u0C46\u0C30\u0C41 \u0C1A\u0C46\u0C2A\u0C4D\u0C2A\u0C02\u0C21\u0C3F"
};

// src/translations/th.json
var th_default = {
  "style.menu.color": "\u0E2A\u0E35",
  "style.menu.fill": "\u0E40\u0E15\u0E34\u0E21",
  "style.menu.dash": "\u0E01\u0E23\u0E2D\u0E1A",
  "style.menu.size": "\u0E02\u0E19\u0E32\u0E14",
  "style.menu.keep.open": "\u0E40\u0E1B\u0E34\u0E14\u0E17\u0E34\u0E49\u0E07\u0E44\u0E27\u0E49",
  "style.menu.font": "\u0E41\u0E1A\u0E1A\u0E2D\u0E31\u0E01\u0E29\u0E23",
  "style.menu.align": "\u0E08\u0E31\u0E14\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07",
  styles: "\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A",
  "zoom.in": "\u0E0B\u0E39\u0E21\u0E40\u0E02\u0E49\u0E32",
  "zoom.out": "\u0E0B\u0E39\u0E21\u0E2D\u0E2D\u0E01",
  to: "\u0E0B\u0E39\u0E21\u0E44\u0E1B\u0E17\u0E35\u0E48",
  "menu.tools": "\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D",
  "menu.transform": "\u0E41\u0E1B\u0E25\u0E07",
  "menu.file": "\u0E44\u0E1F\u0E25\u0E4C",
  "menu.edit": "\u0E41\u0E01\u0E49\u0E44\u0E02",
  "menu.view": "\u0E21\u0E38\u0E21\u0E21\u0E2D\u0E07",
  "menu.preferences": "\u0E01\u0E32\u0E23\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32",
  "menu.sign.in": "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A",
  "menu.sign.out": "\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A",
  "become.a.sponsor": "\u0E23\u0E48\u0E27\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E1B\u0E2D\u0E19\u0E40\u0E0B\u0E2D\u0E23\u0E4C",
  "zoom.to.content": "\u0E01\u0E25\u0E31\u0E1A\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32",
  "zoom.to.selection": "\u0E0B\u0E39\u0E21\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E2A\u0E48\u0E27\u0E19\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01",
  "zoom.to.fit": "\u0E0B\u0E39\u0E21\u0E43\u0E2B\u0E49\u0E40\u0E15\u0E47\u0E21\u0E1E\u0E2D\u0E14\u0E35",
  "zoom.to": "\u0E0B\u0E39\u0E21\u0E44\u0E1B\u0E17\u0E35\u0E48",
  "preferences.dark.mode": "\u0E42\u0E2B\u0E21\u0E14\u0E21\u0E37\u0E14",
  "preferences.focus.mode": "\u0E42\u0E2B\u0E21\u0E14\u0E42\u0E1F\u0E01\u0E31\u0E2A",
  "preferences.debug.mode": "\u0E42\u0E2B\u0E21\u0E14\u0E14\u0E35\u0E1A\u0E31\u0E01",
  "preferences.show.grid": "\u0E41\u0E2A\u0E14\u0E07\u0E15\u0E32\u0E23\u0E32\u0E07",
  "preferences.use.cad.selection": "\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E41\u0E1A\u0E1A CAD",
  "preferences.keep.stylemenu.open": "\u0E40\u0E1B\u0E34\u0E14\u0E40\u0E21\u0E19\u0E39\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E17\u0E34\u0E49\u0E07\u0E44\u0E27\u0E49",
  "preferences.always.show.snaps": "\u0E41\u0E2A\u0E14\u0E07\u0E2A\u0E41\u0E19\u0E1B\u0E15\u0E25\u0E2D\u0E14",
  "preferences.rotate.handles": "\u0E41\u0E2A\u0E14\u0E07\u0E08\u0E38\u0E14\u0E08\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E2B\u0E21\u0E38\u0E19",
  "preferences.binding.handles": "\u0E41\u0E2A\u0E14\u0E07\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E25\u0E02\u0E2D\u0E49\u0E32\u0E07\u0E2D\u0E34\u0E07",
  "preferences.clone.handles": "\u0E41\u0E2A\u0E14\u0E07\u0E15\u0E31\u0E27\u0E42\u0E04\u0E25\u0E19",
  undo: "\u0E40\u0E25\u0E34\u0E01\u0E17\u0E33",
  redo: "\u0E17\u0E33\u0E0B\u0E49\u0E33",
  cut: "\u0E15\u0E31\u0E14",
  copy: "\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01",
  paste: "\u0E27\u0E32\u0E07",
  "copy.as": "\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E40\u0E1B\u0E47\u0E19",
  "export.as": "\u0E2A\u0E48\u0E07\u0E2D\u0E2D\u0E01\u0E40\u0E1B\u0E47\u0E19",
  "select.all": "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14",
  "select.none": "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01",
  delete: "\u0E25\u0E1A",
  "new.project": "\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C\u0E43\u0E2B\u0E21\u0E48",
  open: "\u0E40\u0E1B\u0E34\u0E14",
  save: "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",
  "save.as": "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E40\u0E1B\u0E47\u0E19",
  "upload.media": "\u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14\u0E21\u0E35\u0E40\u0E14\u0E35\u0E22",
  "create.page": "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2B\u0E19\u0E49\u0E32",
  "new.page": "\u0E2B\u0E19\u0E49\u0E32\u0E43\u0E2B\u0E21\u0E48",
  "page.name": "\u0E0A\u0E37\u0E48\u0E2D\u0E2B\u0E19\u0E49\u0E32",
  duplicate: "\u0E2A\u0E33\u0E40\u0E19\u0E32",
  cancel: "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01",
  "copy.invite.link": "\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E25\u0E34\u0E07\u0E01\u0E4C\u0E40\u0E0A\u0E34\u0E0D",
  "copy.readonly.link": "\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E25\u0E34\u0E07\u0E01\u0E4C\u0E41\u0E1A\u0E1A\u0E43\u0E2B\u0E49\u0E2D\u0E48\u0E32\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E14\u0E35\u0E22\u0E27",
  "create.multiplayer.project": "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E2B\u0E25\u0E32\u0E22\u0E04\u0E19",
  "copy.multiplayer.project": "\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E2B\u0E25\u0E32\u0E22\u0E04\u0E19",
  select: "\u0E40\u0E25\u0E37\u0E2D\u0E01",
  eraser: "\u0E22\u0E32\u0E07\u0E25\u0E1A",
  draw: "\u0E27\u0E32\u0E14",
  arrow: "\u0E25\u0E39\u0E01\u0E28\u0E23",
  text: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21",
  sticky: "\u0E01\u0E23\u0E30\u0E14\u0E32\u0E29\u0E42\u0E19\u0E4A\u0E15",
  rectangle: "\u0E2A\u0E35\u0E48\u0E40\u0E2B\u0E25\u0E35\u0E48\u0E22\u0E21\u0E1C\u0E37\u0E19\u0E1C\u0E49\u0E32",
  ellipse: "\u0E27\u0E07\u0E23\u0E35",
  triangle: "\u0E2A\u0E32\u0E21\u0E40\u0E2B\u0E25\u0E35\u0E48\u0E22\u0E21",
  line: "\u0E40\u0E2A\u0E49\u0E19",
  rotate: "\u0E2B\u0E21\u0E38\u0E19",
  "lock.aspect.ratio": "\u0E25\u0E47\u0E2D\u0E04\u0E2D\u0E31\u0E15\u0E23\u0E32\u0E2A\u0E48\u0E27\u0E19\u0E20\u0E32\u0E1E",
  "unlock.aspect.ratio": "\u0E1B\u0E25\u0E14\u0E25\u0E47\u0E2D\u0E01\u0E2D\u0E31\u0E15\u0E23\u0E32\u0E2A\u0E48\u0E27\u0E19\u0E20\u0E32\u0E1E",
  group: "\u0E01\u0E25\u0E38\u0E48\u0E21",
  ungroup: "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E01\u0E25\u0E38\u0E48\u0E21",
  "move.to.back": "\u0E22\u0E49\u0E32\u0E22\u0E44\u0E1B\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E25\u0E31\u0E07",
  "move.backward": "\u0E02\u0E22\u0E31\u0E1A\u0E16\u0E2D\u0E22\u0E2B\u0E25\u0E31\u0E07",
  "move.forward": "\u0E02\u0E22\u0E31\u0E1A\u0E44\u0E1B\u0E2B\u0E19\u0E49\u0E32",
  "move.to.front": "\u0E22\u0E49\u0E32\u0E22\u0E44\u0E1B\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E19\u0E49\u0E32",
  "reset.angle": "\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15\u0E21\u0E38\u0E21",
  lock: "\u0E25\u0E47\u0E2D\u0E04",
  unlock: "\u0E1B\u0E25\u0E14\u0E25\u0E47\u0E2D\u0E04",
  "align.distribute": "\u0E08\u0E31\u0E14\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07 / \u0E01\u0E23\u0E30\u0E08\u0E32\u0E22",
  "move.to.page": "\u0E22\u0E49\u0E32\u0E22\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E2B\u0E19\u0E49\u0E32",
  "flip.horizontal": "\u0E1E\u0E25\u0E34\u0E01\u0E41\u0E19\u0E27\u0E19\u0E2D\u0E19",
  "flip.vertical": "\u0E1E\u0E25\u0E34\u0E01\u0E41\u0E19\u0E27\u0E15\u0E31\u0E49\u0E07",
  move: "\u0E22\u0E49\u0E32\u0E22",
  "to.front": "\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E19\u0E49\u0E32",
  forward: "\u0E02\u0E49\u0E32\u0E07\u0E2B\u0E19\u0E49\u0E32",
  backward: "\u0E02\u0E49\u0E32\u0E07\u0E2B\u0E25\u0E31\u0E07",
  back: "\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E25\u0E31\u0E07",
  language: "\u0E20\u0E32\u0E29\u0E32",
  "translation.link": "\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21",
  "dock.position": "\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07\u0E41\u0E16\u0E1A\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D",
  bottom: "\u0E02\u0E49\u0E32\u0E07\u0E25\u0E48\u0E32\u0E07",
  left: "\u0E02\u0E49\u0E32\u0E07\u0E0B\u0E49\u0E32\u0E22",
  right: "\u0E02\u0E49\u0E32\u0E07\u0E02\u0E27\u0E32",
  top: "\u0E02\u0E49\u0E32\u0E07\u0E1A\u0E19",
  page: "\u0E2B\u0E19\u0E49\u0E32",
  "keyboard.shortcuts": "\u0E41\u0E1B\u0E49\u0E19\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E25\u0E31\u0E14",
  search: "\u0E04\u0E49\u0E19\u0E2B\u0E32",
  loading: "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E42\u0E2B\u0E25\u0E14{dots}",
  "export.background": "\u0E2A\u0E48\u0E07\u0E2D\u0E2D\u0E01\u0E1E\u0E37\u0E49\u0E19\u0E2B\u0E25\u0E31\u0E07",
  transparent: "\u0E42\u0E1B\u0E23\u0E48\u0E07\u0E43\u0E2A",
  auto: "\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34",
  light: "\u0E2A\u0E27\u0E48\u0E32\u0E07",
  dark: "\u0E21\u0E37\u0E14",
  github: "Github",
  twitter: "Twitter",
  discord: "Discord",
  image: "\u0E20\u0E32\u0E1E",
  "align.left": "\u0E08\u0E31\u0E14\u0E43\u0E2B\u0E49\u0E0A\u0E34\u0E14\u0E0B\u0E49\u0E32\u0E22",
  "align.center.x": "\u0E08\u0E31\u0E14\u0E43\u0E2B\u0E49\u0E2D\u0E22\u0E39\u0E48\u0E01\u0E36\u0E48\u0E07\u0E01\u0E25\u0E32\u0E07\u0E41\u0E19\u0E27\u0E19\u0E2D\u0E19",
  "align.right": "\u0E08\u0E31\u0E14\u0E43\u0E2B\u0E49\u0E0A\u0E34\u0E14\u0E02\u0E27\u0E32",
  "align.top": "\u0E08\u0E31\u0E14\u0E43\u0E2B\u0E49\u0E2D\u0E22\u0E39\u0E48\u0E14\u0E49\u0E32\u0E19\u0E1A\u0E19",
  "align.center.y": "\u0E08\u0E31\u0E14\u0E43\u0E2B\u0E49\u0E2D\u0E22\u0E39\u0E48\u0E01\u0E36\u0E48\u0E07\u0E01\u0E25\u0E32\u0E07\u0E41\u0E19\u0E27\u0E15\u0E31\u0E49\u0E07",
  "align.bottom": "\u0E08\u0E31\u0E14\u0E43\u0E2B\u0E49\u0E2D\u0E22\u0E39\u0E48\u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07",
  "distribute.x": "\u0E01\u0E23\u0E30\u0E08\u0E32\u0E22\u0E41\u0E19\u0E27\u0E19\u0E2D\u0E19",
  "distribute.y": "\u0E01\u0E23\u0E30\u0E08\u0E32\u0E22\u0E41\u0E19\u0E27\u0E15\u0E31\u0E49\u0E07",
  "stretch.x": "\u0E22\u0E37\u0E14\u0E41\u0E19\u0E27\u0E19\u0E2D\u0E19",
  "stretch.y": "\u0E22\u0E37\u0E14\u0E41\u0E19\u0E27\u0E15\u0E31\u0E49\u0E07",
  "dialog.save.firsttime": "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E47\u0E01\u0E15\u0E4C\u0E1B\u0E31\u0E08\u0E08\u0E38\u0E1A\u0E31\u0E19\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?",
  "dialog.save.again": "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E01\u0E32\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E43\u0E19\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E47\u0E01\u0E15\u0E4C\u0E1B\u0E31\u0E08\u0E08\u0E38\u0E1A\u0E31\u0E19\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?",
  "dialog.cancel": "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01",
  "dialog.no": "\u0E44\u0E21\u0E48",
  "dialog.yes": "\u0E43\u0E0A\u0E48",
  "enter.file.name": "\u0E01\u0E23\u0E2D\u0E01\u0E0A\u0E37\u0E48\u0E2D\u0E44\u0E1F\u0E25\u0E4C"
};

// src/translations/tr.json
var tr_default = {
  "style.menu.color": "Renk",
  "style.menu.fill": "Doldur",
  "style.menu.dash": "\xC7izgi",
  "style.menu.size": "Boyut",
  "style.menu.keep.open": "A\xE7\u0131k Tut",
  "style.menu.font": "Yaz\u0131 Tipi",
  "style.menu.align": "Hizala",
  styles: "Stiller",
  "zoom.in": "Yak\u0131nla\u015Ft\u0131r",
  "zoom.out": "Uzakla\u015Ft\u0131r",
  to: "",
  "menu.file": "Dosya",
  "menu.edit": "D\xFCzenle",
  "menu.view": "G\xF6r\xFCnt\xFC",
  "menu.preferences": "Tercihler",
  "menu.sign.in": "Giri\u015F Yap",
  "menu.sign.out": "Oturumu Kapat",
  "become.a.sponsor": "Sponsor Ol",
  "zoom.to.selection": "Se\xE7ime Yak\u0131nla\u015Ft\u0131r",
  "zoom.to.fit": "S\u0131\u011Fd\u0131rmak i\xE7in Yak\u0131nla\u015Ft\u0131r",
  "zoom.to": "Yak\u0131nla\u015Ft\u0131r",
  "preferences.dark.mode": "Karanl\u0131k Mod",
  "preferences.focus.mode": "Odak Modu",
  "preferences.debug.mode": "Debug Modu",
  "preferences.show.grid": "Izgaray\u0131 G\xF6ster",
  "preferences.use.cad.selection": "CAD Se\xE7imi Kullan",
  "preferences.keep.stylemenu.open": "Stil Men\xFCs\xFCn\xFC A\xE7\u0131k Tut",
  "preferences.always.show.snaps": "Hiza \xC7izgilerini Hep G\xF6ster",
  "preferences.rotate.handles": "Rotasyon Kontrolc\xFCleri",
  "preferences.binding.handles": "Ba\u011Flama Kontrolc\xFCleri",
  "preferences.clone.handles": "Klon Kontrolc\xFCleri",
  undo: "Geri Al",
  redo: "Yinele",
  cut: "Kes",
  copy: "Kopyala",
  paste: "Yap\u0131\u015Ft\u0131r",
  "copy.as": "Olarak Kopyala",
  "export.as": "Olarak D\u0131\u015Far\u0131 Aktar",
  "select.all": "Hepsini Se\xE7",
  "select.none": "Hi\xE7birini Se\xE7me",
  delete: "Sil",
  "new.project": "Yeni Proje",
  open: "A\xE7",
  save: "Kaydet",
  "save.as": "Farkl\u0131 Kaydet",
  "upload.media": "Medya Y\xFCkle",
  "create.page": "Sayfa Olu\u015Ftur",
  "new.page": "Yeni Sayfa",
  "page.name": "Sayfa \u0130smi",
  duplicate: "Kopya Olu\u015Ftur",
  cancel: "\u0130ptal",
  "copy.invite.link": "Davet Linkini Kopyala",
  "create.multiplayer.project": "\xC7ok Oyunculu Proje Olu\u015Ftur",
  "copy.multiplayer.project": "\xC7ok Oyunculu Projeye Kopyala",
  select: "Se\xE7",
  eraser: "Silgi",
  draw: "\xC7izim",
  arrow: "Ok",
  text: "Yaz\u0131",
  sticky: "Yap\u0131\u015Fkan",
  rectangle: "Dikd\xF6rtgen",
  ellipse: "Elips",
  triangle: "\xDC\xE7gen",
  line: "\xC7izgi",
  rotate: "D\xF6nd\xFCr",
  "lock.aspect.ratio": "En Boy Oran\u0131n\u0131 Kilitle",
  "unlock.aspect.ratio": "En Boy Oran\u0131 Kilidini A\xE7",
  group: "Grupla",
  ungroup: "Gruplamay\u0131 Kald\u0131r",
  "move.to.back": "Arkaya Ta\u015F\u0131",
  "move.backward": "En Arkaya Ta\u015F\u0131",
  "move.forward": "En \xD6ne Ta\u015F\u0131",
  "move.to.front": "\xD6ne Ta\u015F\u0131",
  "reset.angle": "A\xE7\u0131y\u0131 S\u0131f\u0131rla",
  lock: "Kilitle",
  unlock: "Kilidini A\xE7",
  "move.to.page": "Sayfaya Ta\u015F\u0131",
  "flip.horizontal": "Yatay \xC7evir",
  "flip.vertical": "Dikey \xC7evir",
  move: "Ta\u015F\u0131",
  "to.front": "\xD6ne",
  forward: "En \xD6ne",
  backward: "En Arkaya",
  back: "Arkaya",
  language: "Dil"
};

// src/translations/uk.json
var uk_default = {
  "style.menu.color": "\u041A\u043E\u043B\u0456\u0440",
  "style.menu.fill": "\u0417\u0430\u043F\u043E\u0432\u043D\u044E\u0432\u0430\u0442\u0438",
  "style.menu.dash": "\u0428\u0442\u0440\u0438\u0445",
  "style.menu.size": "\u0420\u043E\u0437\u043C\u0456\u0440",
  "style.menu.keep.open": "\u0422\u0440\u0438\u043C\u0430\u0442\u0438 \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0438\u043C",
  "style.menu.font": "\u0428\u0440\u0438\u0444\u0442",
  "style.menu.align": "\u0412\u0438\u0440\u0456\u0432\u043D\u044F\u0442\u0438",
  styles: "\u0421\u0442\u0438\u043B\u044C",
  "zoom.in": "\u0417\u0431\u0456\u043B\u044C\u0448\u0438\u0442\u0438",
  "zoom.out": "\u0417\u043C\u0435\u043D\u0448\u0438\u0442\u0438",
  to: "\u0434\u043E",
  "menu.file": "\u0424\u0430\u0439\u043B",
  "menu.edit": "\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043D\u043D\u044F",
  "menu.view": "\u0412\u0438\u0433\u043B\u044F\u0434",
  "menu.preferences": "\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F",
  "menu.sign.in": "\u0423\u0432\u0456\u0439\u0442\u0438",
  "menu.sign.out": "\u0412\u0438\u0439\u0442\u0438",
  "become.a.sponsor": "\u0421\u0442\u0430\u0442\u0438 \u0441\u043F\u043E\u043D\u0441\u043E\u0440\u043E\u043C",
  "zoom.to.selection": "\u041D\u0430\u0431\u043B\u0438\u0437\u0438\u0442\u0438 \u0434\u043E \u0432\u0438\u0434\u0456\u043B\u0435\u043D\u043D\u044F",
  "zoom.to.fit": "\u0417\u0431\u0456\u043B\u044C\u0448\u0438\u0442\u0438 \u0437\u0430 \u0440\u043E\u0437\u043C\u0456\u0440\u043E\u043C \u0435\u043A\u0440\u0430\u043D\u0443",
  "zoom.to": "\u041D\u0430\u0431\u043B\u0438\u0437\u0438\u0442\u0438 \u0434\u043E",
  "preferences.dark.mode": "\u0422\u0435\u043C\u043D\u0430 \u0442\u0435\u043C\u0430",
  "preferences.focus.mode": "\u041C\u0456\u043D\u0456\u043C\u0430\u043B\u0456\u0441\u0442\u0438\u0447\u043D\u0438\u0439 \u0440\u0435\u0436\u0438\u043C",
  "preferences.debug.mode": "\u0420\u0435\u0436\u0438\u043C \u043D\u0430\u043B\u0430\u0433\u043E\u0434\u0436\u0435\u043D\u043D\u044F",
  "preferences.show.grid": "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0441\u0456\u0442\u043A\u0443",
  "preferences.use.cad.selection": "\u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 CAD \u0432\u0438\u0434\u0456\u043B\u0435\u043D\u043D\u044F",
  "preferences.keep.stylemenu.open": "\u0422\u0440\u0438\u043C\u0430\u0442\u0438 \u043C\u0435\u043D\u044E \u0441\u0442\u0438\u043B\u0456\u0432 \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0438\u043C",
  "preferences.always.show.snaps": "\u0417\u0430\u0432\u0436\u0434\u0438 \u043F\u043E\u043A\u0430\u0437\u0443\u0432\u0430\u0442\u0438 \u043F\u0440\u0438\u0432'\u044F\u0437\u043A\u0438",
  "preferences.rotate.handles": "\u0420\u0443\u0447\u043A\u0438 \u043E\u0431\u0435\u0440\u0442\u0430\u043D\u043D\u044F",
  "preferences.binding.handles": "\u0420\u0443\u0447\u043A\u0438 \u043F\u0440\u0438\u0432'\u044F\u0437\u043A\u0438",
  "preferences.clone.handles": "\u0420\u0443\u0447\u043A\u0438 \u043A\u043B\u043E\u043D\u0443\u0432\u0430\u043D\u043D\u044F",
  undo: "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438",
  redo: "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0438",
  cut: "\u0412\u0438\u0440\u0456\u0437\u0430\u0442\u0438",
  copy: "\u0421\u043A\u043E\u043F\u0456\u044E\u0432\u0430\u0442\u0438",
  paste: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438",
  "copy.as": "\u0421\u043A\u043E\u043F\u0456\u044E\u0432\u0430\u0442\u0438 \u044F\u043A",
  "export.as": "\u0415\u043A\u0441\u043F\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u044F\u043A",
  "select.all": "\u041E\u0431\u0440\u0430\u0442\u0438 \u0432\u0441\u0435",
  "select.none": "\u0417\u043D\u044F\u0442\u0438 \u0432\u0438\u0434\u0456\u043B\u0435\u043D\u043D\u044F",
  delete: "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438",
  "new.project": "\u041D\u043E\u0432\u0438\u0439 \u043F\u0440\u043E\u0435\u043A\u0442",
  open: "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438",
  save: "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438",
  "save.as": "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u044F\u043A",
  "upload.media": "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u043C\u0435\u0434\u0456\u0430",
  "create.page": "\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443",
  "new.page": "\u041D\u043E\u0432\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0430",
  "page.name": "\u041D\u0430\u0437\u0432\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438",
  duplicate: "\u0414\u0443\u0431\u043B\u044E\u0432\u0430\u0442\u0438",
  cancel: "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438",
  "copy.invite.link": "\u0421\u043A\u043E\u043F\u0456\u044E\u0432\u0430\u0442\u0438 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0430 \u0437\u0430\u043F\u0440\u043E\u0448\u0435\u043D\u043D\u044F",
  "create.multiplayer.project": "\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u0431\u0430\u0433\u0430\u0442\u043E\u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0446\u044C\u043A\u0438\u0439 \u043F\u0440\u043E\u0435\u043A\u0442",
  "copy.multiplayer.project": "\u0421\u043A\u043E\u043F\u0456\u044E\u0432\u0430\u0442\u0438 \u0432 \u0431\u0430\u0433\u0430\u0442\u043E\u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0446\u044C\u043A\u0438\u0439 \u043F\u0440\u043E\u0435\u043A\u0442",
  select: "\u0412\u0438\u0431\u0438\u0440\u0430\u0442\u0438",
  eraser: "\u041B\u0430\u0441\u0442\u0438\u043A",
  draw: "\u041C\u0430\u043B\u044E\u0432\u0430\u0442\u0438",
  arrow: "\u0421\u0442\u0440\u0456\u043B\u043A\u0430",
  text: "\u0422\u0435\u043A\u0441\u0442",
  sticky: "\u041D\u043E\u0442\u0430\u0442\u043A\u0430",
  rectangle: "\u041F\u0440\u044F\u043C\u043E\u043A\u0443\u0442\u043D\u0438\u043A",
  ellipse: "\u0415\u043B\u0456\u043F\u0441",
  triangle: "\u0422\u0440\u0438\u043A\u0443\u0442\u043D\u0438\u043A",
  line: " \u041B\u0456\u043D\u0456\u044F",
  rotate: "\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438",
  "lock.aspect.ratio": "\u0417\u0430\u0431\u043B\u043E\u043A\u0443\u0432\u0430\u0442\u0438 \u0441\u043F\u0456\u0432\u0432\u0456\u0434\u043D\u043E\u0448\u0435\u043D\u043D\u044F \u0441\u0442\u043E\u0440\u0456\u043D",
  "unlock.aspect.ratio": " \u0420\u043E\u0437\u0431\u043B\u043E\u043A\u0443\u0432\u0430\u0442\u0438 \u0441\u043F\u0456\u0432\u0432\u0456\u0434\u043D\u043E\u0448\u0435\u043D\u043D\u044F \u0441\u0442\u043E\u0440\u0456\u043D",
  group: "\u0417\u0433\u0440\u0443\u043F\u0443\u0432\u0430\u0442\u0438",
  ungroup: " \u0420\u043E\u0437\u0433\u0440\u0443\u043F\u0443\u0432\u0430\u0442\u0438",
  "move.to.back": "\u041F\u0435\u0440\u0435\u043C\u0456\u0441\u0442\u0438\u0442\u0438 \u043D\u0430\u0437\u0430\u0434",
  "move.backward": "\u041F\u0435\u0440\u0435\u043C\u0456\u0441\u0442\u0438\u0442\u0438 \u043D\u0430 \u0437\u0430\u0434\u043D\u0456\u0439 \u043F\u043B\u0430\u043D",
  "move.forward": "\u041F\u0435\u0440\u0435\u043C\u0456\u0441\u0442\u0438\u0442\u0438 \u0432\u043F\u0435\u0440\u0435\u0434",
  "move.to.front": "\u041F\u0435\u0440\u0435\u043C\u0456\u0441\u0442\u0438\u0442\u0438 \u043D\u0430 \u043F\u0435\u0440\u0435\u0434\u043D\u0456\u0439 \u043F\u043B\u0430\u043D",
  "reset.angle": "\u0421\u043A\u0438\u0434\u0430\u043D\u043D\u044F \u043A\u0443\u0442\u0430",
  lock: "\u0411\u043B\u043E\u043A\u0443\u0432\u0430\u043D\u043D\u044F",
  unlock: " \u0420\u043E\u0437\u0431\u043B\u043E\u043A\u0443\u0432\u0430\u043D\u043D\u044F",
  "move.to.page": "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443",
  "flip.horizontal": "\u041F\u0435\u0440\u0435\u0432\u0435\u0440\u043D\u0443\u0442\u0438 \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E",
  "flip.vertical": "\u041F\u0435\u0440\u0435\u0432\u0435\u0440\u043D\u0443\u0442\u0438 \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E",
  move: "\u041F\u0435\u0440\u0435\u043C\u0456\u0441\u0442\u0438\u0442\u0438",
  "to.front": "\u041D\u0430 \u043F\u0435\u0440\u0435\u0434\u043D\u0456\u0439 \u043F\u043B\u0430\u043D",
  forward: " \u0412\u043F\u0435\u0440\u0435\u0434",
  backward: "\u041D\u0430 \u0437\u0430\u0434\u043D\u0456\u0439 \u043F\u043B\u0430\u043D",
  back: "\u041D\u0430\u0437\u0430\u0434",
  language: "\u041C\u043E\u0432\u0430"
};

// src/translations/zh-cn.json
var zh_cn_default = {
  "style.menu.color": "\u989C\u8272",
  "style.menu.fill": "\u586B\u5145",
  "style.menu.dash": "\u8FB9\u6846",
  "style.menu.size": "\u5C3A\u5BF8",
  "style.menu.keep.open": "\u4FDD\u6301\u5E38\u5F00",
  "style.menu.font": "\u5B57\u4F53",
  "style.menu.align": "\u5BF9\u9F50",
  styles: "\u6837\u5F0F",
  "zoom.in": "\u653E\u5927",
  "zoom.out": "\u7F29\u5C0F",
  to: "\u7F29\u653E\u81F3",
  "menu.tools": "\u5DE5\u5177",
  "menu.transform": "\u8F6C\u6362",
  "menu.file": "\u6587\u4EF6",
  "menu.edit": "\u7F16\u8F91",
  "menu.view": "\u89C6\u56FE",
  "menu.preferences": "\u504F\u597D",
  "menu.sign.in": "\u767B\u5F55",
  "menu.sign.out": "\u767B\u51FA",
  search: "\u641C\u7D22",
  "become.a.sponsor": "\u6210\u4E3A\u8D5E\u52A9\u8005",
  "zoom.to.selection": "\u7F29\u653E\u9009\u4E2D",
  "zoom.to.fit": "\u81EA\u9002\u5E94\u7F29\u653E",
  "zoom.to": "\u7F29\u653E\u81F3",
  "zoom.to.content": "\u7F29\u653E\u81F3\u5185\u5BB9",
  "preferences.dark.mode": "\u6697\u9ED1\u6A21\u5F0F",
  "preferences.focus.mode": "\u4E13\u6CE8\u6A21\u5F0F",
  "preferences.debug.mode": "\u8C03\u8BD5\u6A21\u5F0F",
  "preferences.show.grid": "\u663E\u793A\u7F51\u683C",
  "preferences.use.cad.selection": "\u4F7F\u7528 CAD \u9009\u62E9",
  "preferences.keep.stylemenu.open": "\u4FDD\u6301\u6837\u5F0F\u83DC\u5355\u5E38\u5F00",
  "preferences.always.show.snaps": "\u603B\u662F\u5C55\u793A\u5BF9\u9F50\u7EBF",
  "preferences.rotate.handles": "\u65CB\u8F6C\u624B\u67C4",
  "preferences.binding.handles": "\u6346\u7ED1\u624B\u67C4",
  "preferences.clone.handles": "\u514B\u9686\u624B\u67C4",
  undo: "\u64A4\u9500",
  redo: "\u91CD\u505A",
  cut: "\u526A\u5207",
  copy: "\u590D\u5236",
  paste: "\u7C98\u8D34",
  "copy.as": "\u590D\u5236\u4E3A",
  "export.as": "\u5BFC\u51FA\u4E3A",
  "select.all": "\u9009\u4E2D\u5168\u90E8",
  "select.none": "\u53D6\u6D88\u9009\u4E2D",
  delete: "\u5220\u9664",
  "new.project": "\u65B0\u9879\u76EE",
  open: "\u6253\u5F00",
  save: "\u4FDD\u5B58",
  "save.as": "\u4FDD\u5B58\u4E3A",
  "upload.media": "\u4E0A\u4F20\u5A92\u4F53\u6587\u4EF6",
  "create.page": "\u521B\u5EFA\u9875\u9762",
  "new.page": "\u65B0\u9875\u9762",
  "page.name": "\u9875\u9762\u540D\u79F0",
  duplicate: "\u590D\u5236",
  cancel: "\u53D6\u6D88",
  "copy.invite.link": "\u590D\u5236\u9080\u8BF7\u94FE\u63A5",
  "create.multiplayer.project": "\u521B\u5EFA\u591A\u4EBA\u9879\u76EE",
  "copy.multiplayer.project": "\u590D\u5236\u5230\u591A\u4EBA\u9879\u76EE",
  select: "\u9009\u62E9",
  eraser: "\u6A61\u76AE",
  draw: "\u753B\u7B14",
  arrow: "\u7BAD\u5934",
  text: "\u6587\u672C",
  sticky: "\u4FBF\u5229\u8D34",
  rectangle: "\u77E9\u5F62",
  ellipse: "\u692D\u5706\u5F62",
  triangle: "\u4E09\u89D2\u5F62",
  line: "\u76F4\u7EBF",
  rotate: "\u65CB\u8F6C",
  "lock.aspect.ratio": "\u9501\u5B9A\u5BBD\u9AD8\u6BD4",
  "unlock.aspect.ratio": "\u89E3\u9501\u5BBD\u9AD8\u6BD4",
  group: "\u5206\u7EC4",
  ungroup: "\u53D6\u6D88\u5206\u7EC4",
  "move.to.back": "\u7F6E\u5E95",
  "move.backward": "\u4E0B\u79FB\u4E00\u5C42",
  "move.forward": "\u4E0A\u79FB\u4E00\u5C42",
  "move.to.front": "\u7F6E\u9876",
  "reset.angle": "\u91CD\u7F6E\u65CB\u8F6C\u89D2\u5EA6",
  lock: "\u9501\u5B9A",
  unlock: "\u89E3\u9501",
  "move.to.page": "\u79FB\u52A8\u5230\u9875\u9762",
  "flip.horizontal": "\u6C34\u5E73\u7FFB\u8F6C",
  "flip.vertical": "\u5782\u76F4\u7FFB\u8F6C",
  move: "\u79FB\u52A8",
  "to.front": "\u7F6E\u9876",
  forward: "\u4E0A\u4E00\u5C42",
  backward: "\u4E0B\u4E00\u5C42",
  back: "\u7F6E\u5E95",
  language: "\u8BED\u8A00",
  "keyboard.shortcuts": "\u952E\u76D8\u5FEB\u6377\u952E",
  "translation.link": "\u4E86\u89E3\u66F4\u591A",
  page: "\u9875\u9762",
  "dock.position": "\u951A\u70B9\u4F4D\u7F6E",
  bottom: "\u4E0B\u9762",
  left: "\u5DE6\u9762",
  right: "\u53F3\u9762",
  top: "\u4E0A\u9762",
  "export.background": "\u5BFC\u51FA\u80CC\u666F\u8272",
  transparent: "\u900F\u660E",
  auto: "\u81EA\u52A8",
  light: "\u660E\u4EAE",
  dark: "\u6697\u9ED1",
  "copy.readonly.link": "\u590D\u5236\u53EA\u8BFB\u94FE\u63A5",
  image: "\u56FE\u7247",
  "align.distribute": "\u5BF9\u9F50 / \u5206\u6563",
  "dialog.save.firsttime": "\u60A8\u662F\u5426\u60F3\u4FDD\u5B58\u5F53\u524D\u7684\u9879\u76EE\uFF1F",
  "dialog.save.again": "\u60A8\u662F\u5426\u60F3\u4FDD\u5B58\u5BF9\u5F53\u524D\u9879\u76EE\u7684\u66F4\u6539\uFF1F",
  "dialog.cancel": "\u53D6\u6D88",
  "dialog.no": "\u5426",
  "dialog.yes": "\u662F"
};

// src/translations/zh-tw.json
var zh_tw_default = {
  "style.menu.color": "\u984F\u8272",
  "style.menu.fill": "\u586B\u5145",
  "style.menu.dash": "\u865B\u7DDA",
  "style.menu.size": "\u5927\u5C0F",
  "style.menu.keep.open": "\u4FDD\u6301\u958B\u555F",
  "style.menu.font": "\u5B57\u578B",
  "style.menu.align": "\u5C0D\u9F4A",
  styles: "\u6A23\u5F0F",
  "zoom.in": "\u653E\u5927",
  "zoom.out": "\u7E2E\u5C0F",
  to: "\u81F3",
  "menu.file": "\u6A94\u6848",
  "menu.edit": "\u7DE8\u8F2F",
  "menu.view": "\u6AA2\u8996",
  "menu.preferences": "\u9078\u9805",
  "menu.sign.in": "\u767B\u5165",
  "menu.sign.out": "\u767B\u51FA",
  "become.a.sponsor": "\u6210\u70BA\u8D0A\u52A9\u8005",
  "zoom.to.selection": "\u7E2E\u653E\u81F3\u9078\u53D6\u7BC4\u570D",
  "zoom.to.fit": "\u7E2E\u653E\u81F3\u9069\u7576\u5927\u5C0F",
  "zoom.to": "\u7E2E\u653E\u81F3",
  "preferences.dark.mode": "\u6DF1\u8272\u6A21\u5F0F",
  "preferences.focus.mode": "\u5C08\u6CE8\u6A21\u5F0F",
  "preferences.debug.mode": "\u9664\u932F\u6A21\u5F0F",
  "preferences.show.grid": "\u986F\u793A\u7DB2\u683C",
  "preferences.use.cad.selection": "\u4F7F\u7528 CAD \u9078\u53D6",
  "preferences.keep.stylemenu.open": "\u6A23\u5F0F\u9078\u55AE\u4FDD\u6301\u958B\u555F",
  "preferences.always.show.snaps": "\u6C38\u9060\u986F\u793A\u5C0D\u9F4A\u7DDA",
  "preferences.rotate.handles": "\u65CB\u8F49\u63A7\u9EDE",
  "preferences.binding.handles": "\u7D81\u5B9A\u63A7\u9EDE",
  "preferences.clone.handles": "\u8907\u88FD\u63A7\u9EDE",
  undo: "\u5FA9\u539F",
  redo: "\u53D6\u6D88\u5FA9\u539F",
  cut: "\u526A\u4E0B",
  copy: "\u8907\u88FD",
  paste: "\u8CBC\u4E0A",
  "copy.as": "\u8907\u88FD\u6210",
  "export.as": "\u532F\u51FA\u6210",
  "select.all": "\u5168\u9078",
  "select.none": "\u53D6\u6D88\u9078\u53D6",
  delete: "\u522A\u9664",
  "new.project": "\u65B0\u5C08\u6848",
  open: "\u958B\u555F",
  save: "\u5132\u5B58",
  "save.as": "\u53E6\u5B58\u70BA",
  "upload.media": "\u4E0A\u50B3\u5A92\u9AD4",
  "create.page": "\u5EFA\u7ACB\u9801\u9762",
  "new.page": "\u65B0\u9801\u9762",
  "page.name": "\u9801\u9762\u540D\u7A31",
  duplicate: "\u8907\u88FD",
  cancel: "\u53D6\u6D88",
  "copy.invite.link": "\u8907\u88FD\u9080\u8ACB\u9023\u7D50",
  "copy.readonly.link": "\u8907\u88FD\u552F\u8B80\u9023\u7D50",
  "create.multiplayer.project": "\u5EFA\u7ACB\u591A\u4EBA\u5C08\u6848",
  "copy.multiplayer.project": "\u8907\u88FD\u81F3\u591A\u4EBA\u5C08\u6848",
  select: "\u9078\u53D6",
  eraser: "\u6A61\u76AE\u64E6",
  draw: "\u624B\u7E6A",
  arrow: "\u7BAD\u982D",
  text: "\u6587\u5B57",
  sticky: "\u4FBF\u5229\u8CBC",
  rectangle: "\u9577\u65B9\u5F62",
  ellipse: "\u6A62\u5713\u5F62",
  triangle: "\u4E09\u89D2\u5F62",
  line: "\u76F4\u7DDA",
  rotate: "\u65CB\u8F49",
  "lock.aspect.ratio": "\u9396\u5B9A\u9577\u5BEC\u6BD4",
  "unlock.aspect.ratio": "\u89E3\u9396\u9577\u5BEC\u6BD4",
  group: "\u7D44\u6210\u7FA4\u7D44",
  ungroup: "\u53D6\u6D88\u7FA4\u7D44",
  "move.to.back": "\u79FB\u5230\u6700\u4E0B\u5C64",
  "move.backward": "\u4E0B\u79FB\u4E00\u5C64",
  "move.forward": "\u4E0A\u79FB\u4E00\u5C64",
  "move.to.front": "\u79FB\u5230\u6700\u4E0A\u5C64",
  "reset.angle": "\u91CD\u8A2D\u89D2\u5EA6",
  lock: "\u9396\u5B9A",
  unlock: "\u89E3\u9396",
  "move.to.page": "\u79FB\u81F3\u9801\u9762",
  "flip.horizontal": "\u6C34\u5E73\u7FFB\u8F49",
  "flip.vertical": "\u5782\u76F4\u7FFB\u8F49",
  move: "\u79FB\u52D5",
  "to.front": "\u5230\u6700\u4E0A\u5C64",
  forward: "\u5230\u4E0A\u4E00\u5C64",
  backward: "\u5230\u4E0B\u4E00\u5C64",
  back: "\u5230\u6700\u4E0B\u5C64",
  language: "\u8A9E\u8A00",
  "translation.link": "\u4E86\u89E3\u8A73\u60C5",
  "dock.position": "\u5DE5\u5177\u5217\u4F4D\u7F6E",
  bottom: "\u4E0B\u65B9",
  left: "\u5DE6\u5074",
  right: "\u53F3\u5074",
  top: "\u4E0A\u65B9",
  page: "\u9801\u9762"
};

// src/translations/translations.ts
var TRANSLATIONS = [
  { locale: "ar", label: "\u0639\u0631\u0628\u064A", messages: ar_default },
  { locale: "da", label: "Danish", messages: da_default },
  { locale: "de", label: "Deutsch", messages: de_default },
  { locale: "en", label: "English", messages: en_default },
  { locale: "es", label: "Espa\xF1ol", messages: es_default },
  { locale: "fa", label: "\u0641\u0627\u0631\u0633\u06CC", messages: fa_default },
  { locale: "fr", label: "Fran\xE7ais", messages: fr_default },
  { locale: "gl", label: "Galego", messages: gl_default },
  { locale: "he", label: "\u05E2\u05D1\u05E8\u05D9\u05EA", messages: he_default },
  { locale: "it", label: "Italiano", messages: it_default },
  { locale: "ja", label: "\u65E5\u672C\u8A9E", messages: ja_default },
  { locale: "ko-kr", label: "\uD55C\uAD6D\uC5B4", messages: ko_kr_default },
  { locale: "my", label: "\u1019\u103C\u1014\u103A\u1019\u102C\u1005\u102C", messages: my_default },
  { locale: "nb-no", label: "Norwegian Bokm\xE5l", messages: nb_no_default },
  { locale: "ne", label: "\u0928\u0947\u092A\u093E\u0932\u0940", messages: ne_default },
  { locale: "nn-no", label: "Norwegian Nynorsk", messages: nn_no_default },
  { locale: "pl", label: "Polski", messages: pl_default },
  { locale: "pt", label: "Portugu\xEAs - Europeu", messages: pt_pt_default },
  { locale: "pt-br", label: "Portugu\xEAs - Brasil", messages: pt_br_default },
  { locale: "ru", label: "Russian", messages: ru_default },
  { locale: "sv", label: "Svenska", messages: sv_default },
  { locale: "te", label: "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41", messages: te_default },
  { locale: "tr", label: "T\xFCrk\xE7e", messages: tr_default },
  { locale: "uk", label: "Ukrainian", messages: uk_default },
  { locale: "zh-ch", label: "\u7B80\u4F53\u4E2D\u6587", messages: zh_cn_default },
  { locale: "zh-tw", label: "\u7E41\u9AD4\u4E2D\u6587 (\u53F0\u7063)", messages: zh_tw_default },
  { locale: "th", label: "\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22", messages: th_default },
  { locale: "ku", label: "\u06A9\u0648\u0631\u062F\u06CC", messages: ku_default }
];
TRANSLATIONS.sort((a, b) => a.locale < b.locale ? -1 : 1);
function getTranslation(locale) {
  var _a;
  const translation = TRANSLATIONS.find((t) => t.locale === locale);
  return {
    locale,
    label: (_a = translation == null ? void 0 : translation.label) != null ? _a : locale,
    messages: __spreadValues(__spreadValues({}, main_default), translation == null ? void 0 : translation.messages)
  };
}

// src/hooks/useTranslation.ts
function useTranslation(locale) {
  return React6.useMemo(() => {
    return getTranslation(locale != null ? locale : navigator.language.split(/[-_]/)[0]);
  }, [locale]);
}

// src/hooks/useDialog.ts
import * as React7 from "react";
var AlertDialogContext = React7.createContext({});
var useDialog = () => {
  const context = React7.useContext(AlertDialogContext);
  if (!context)
    throw new Error("useCtx must be inside a Provider with a value");
  return context;
};

// src/components/Primitives/ToolButton/ToolButton.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var ToolButton = React8.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      onSelect,
      onClick,
      onDoubleClick,
      variant,
      children,
      isToolLocked = false,
      disabled = false,
      isActive = false,
      onKeyDown,
      id
    } = _b, rest = __objRest(_b, [
      "onSelect",
      "onClick",
      "onDoubleClick",
      "variant",
      "children",
      "isToolLocked",
      "disabled",
      "isActive",
      "onKeyDown",
      "id"
    ]);
    return /* @__PURE__ */ jsxs3(StyledToolButton, __spreadProps(__spreadValues({
      ref,
      isActive,
      variant,
      onClick,
      disabled,
      onPointerDown: onSelect,
      onDoubleClick,
      onKeyDown,
      bp: breakpoints,
      id
    }, rest), {
      children: [
        /* @__PURE__ */ jsx4(StyledToolButtonInner, {
          children
        }),
        isToolLocked && /* @__PURE__ */ jsx4(ToolLockIndicator, {})
      ]
    }));
  }
);
function ToolButtonWithTooltip(_a) {
  var _b = _a, {
    label,
    kbd,
    variant,
    isLocked
  } = _b, rest = __objRest(_b, [
    "label",
    "kbd",
    "variant",
    "isLocked"
  ]);
  const app = useTldrawApp();
  const handleDoubleClick = React8.useCallback(() => {
    app.toggleToolLock();
  }, []);
  const handleKeyDown = React8.useCallback((e) => {
    if (e.key === " " && app.isForcePanning) {
      e.preventDefault();
    }
  }, []);
  return /* @__PURE__ */ jsx4(Tooltip, {
    label: label[0].toUpperCase() + label.slice(1),
    kbd,
    children: /* @__PURE__ */ jsx4(ToolButton, __spreadProps(__spreadValues({}, rest), {
      variant,
      isToolLocked: isLocked && rest.isActive,
      onDoubleClick: handleDoubleClick,
      onKeyDown: handleKeyDown,
      "aria-label": label[0].toUpperCase() + label.slice(1)
    }))
  });
}
var StyledToolButtonInner = styled("div", {
  position: "relative",
  height: "100%",
  width: "100%",
  backgroundColor: "$panel",
  borderRadius: "$2",
  margin: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "$ui",
  color: "inherit",
  userSelect: "none",
  WebkitUserSelect: "none",
  boxSizing: "border-box",
  border: "1px solid transparent",
  "-webkit-tap-highlight-color": "transparent",
  "tap-highlight-color": "transparent"
});
var StyledToolButton = styled("button", {
  position: "relative",
  color: "$text",
  fontSize: "$0",
  background: "none",
  margin: "0",
  padding: "$2",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  outline: "none",
  cursor: "pointer",
  pointerEvents: "all",
  height: "40px",
  width: "40px",
  border: "1px solid $panel",
  "-webkit-tap-highlight-color": "transparent",
  "tap-highlight-color": "transparent",
  [`&:disabled ${StyledToolButtonInner}`]: {
    opacity: 0.618
  },
  variants: {
    variant: {
      primary: {
        marginTop: "0"
      },
      icon: {
        [`& ${StyledToolButtonInner}`]: {
          display: "grid",
          "& > *": {
            gridRow: 1,
            gridColumn: 1
          }
        }
      },
      text: {
        width: "auto",
        [`& ${StyledToolButtonInner}`]: {
          fontSize: "$1",
          padding: "0 $3",
          gap: "$3"
        }
      },
      circle: {
        padding: 0,
        height: 32,
        width: 32,
        border: "none",
        [`& ${StyledToolButtonInner}`]: {
          border: "1px solid $panelContrast",
          borderRadius: "100%",
          boxShadow: "$panel"
        },
        [`& ${StyledToolButtonInner} > svg`]: {
          width: 14,
          height: 14
        }
      }
    },
    isActive: {
      true: {},
      false: {}
    },
    bp: {
      mobile: {
        padding: 0
      },
      small: {}
    }
  },
  compoundVariants: [
    {
      variant: "primary",
      bp: "mobile",
      css: {
        height: 40,
        width: 36,
        [`& ${StyledToolButtonInner} > svg`]: {
          width: 16,
          height: 16
        }
      }
    },
    {
      variant: "primary",
      bp: "small",
      css: {
        height: "40px",
        width: "40px",
        [`& ${StyledToolButtonInner} > svg`]: {
          width: 20,
          height: 20
        }
      }
    },
    {
      isActive: true,
      css: {
        [`${StyledToolButtonInner}`]: {
          backgroundColor: "$selected",
          color: "$selectedContrast"
        }
      }
    },
    {
      isActive: false,
      bp: "small",
      css: {
        [`&:hover:not(:disabled) ${StyledToolButtonInner}`]: {
          backgroundColor: "$hover"
        },
        [`&:focus:not(:disabled) ${StyledToolButtonInner}`]: {
          backgroundColor: "$hover"
        }
      }
    }
  ]
});
var ToolLockIndicator = styled("div", {
  position: "absolute",
  width: 10,
  height: 10,
  backgroundColor: "$selected",
  borderRadius: "100%",
  bottom: -2,
  border: "2px solid $panel",
  zIndex: 100
});

// src/components/ContextMenu/ContextMenu.tsx
import { Fragment, jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var numberOfSelectedIdsSelector = (s) => {
  return s.document.pageStates[s.appState.currentPageId].selectedIds.length;
};
var isDebugModeSelector = (s) => {
  return s.settings.isDebugMode;
};
var hasGroupSelectedSelector = (s) => {
  return s.document.pageStates[s.appState.currentPageId].selectedIds.some(
    (id) => s.document.pages[s.appState.currentPageId].shapes[id].children !== void 0
  );
};
var preventDefault = (e) => e.stopPropagation();
var _ContextMenu = ({ onBlur, children }) => {
  const container = useContainer();
  return /* @__PURE__ */ jsxs4(RadixContextMenu.Root, {
    dir: "ltr",
    children: [
      /* @__PURE__ */ jsx5(RadixContextMenu.Trigger, {
        dir: "ltr",
        children
      }),
      /* @__PURE__ */ jsx5(RadixContextMenu.Portal, {
        container: container.current,
        children: /* @__PURE__ */ jsx5(RadixContextMenu.Content, {
          onEscapeKeyDown: preventDefault,
          tabIndex: -1,
          onBlur,
          asChild: true,
          children: /* @__PURE__ */ jsx5(MenuContent, {
            id: "TD-ContextMenu",
            children: /* @__PURE__ */ jsx5(InnerMenu, {})
          })
        })
      })
    ]
  });
};
var InnerMenu = React9.memo(function InnerMenu2() {
  const app = useTldrawApp();
  const intl = useIntl();
  const numberOfSelectedIds = app.useStore(numberOfSelectedIdsSelector);
  const isDebugMode = app.useStore(isDebugModeSelector);
  const hasGroupSelected = app.useStore(hasGroupSelectedSelector);
  const handleFlipHorizontal = React9.useCallback(() => {
    app.flipHorizontal();
  }, [app]);
  const handleFlipVertical = React9.useCallback(() => {
    app.flipVertical();
  }, [app]);
  const handleDuplicate = React9.useCallback(() => {
    app.duplicate();
  }, [app]);
  const handleLock = React9.useCallback(() => {
    app.toggleLocked();
  }, [app]);
  const handleGroup = React9.useCallback(() => {
    app.group();
  }, [app]);
  const handleMoveToBack = React9.useCallback(() => {
    app.moveToBack();
  }, [app]);
  const handleMoveBackward = React9.useCallback(() => {
    app.moveBackward();
  }, [app]);
  const handleMoveForward = React9.useCallback(() => {
    app.moveForward();
  }, [app]);
  const handleMoveToFront = React9.useCallback(() => {
    app.moveToFront();
  }, [app]);
  const handleDelete = React9.useCallback(() => {
    app.delete();
  }, [app]);
  const handleCut = React9.useCallback(() => {
    app.cut();
  }, [app]);
  const handleCopy = React9.useCallback(() => {
    app.copy();
  }, [app]);
  const handlePaste = React9.useCallback(() => {
    app.paste();
  }, [app]);
  const handleCopySVG = React9.useCallback(() => {
    app.copyImage("svg" /* SVG */, { scale: 1, quality: 1, transparentBackground: false });
  }, [app]);
  const handleCopyPNG = React9.useCallback(() => {
    app.copyImage("png" /* PNG */, { scale: 2, quality: 1, transparentBackground: true });
  }, [app]);
  const handleUndo = React9.useCallback(() => {
    app.undo();
  }, [app]);
  const handleRedo = React9.useCallback(() => {
    app.redo();
  }, [app]);
  const handleExportPNG = React9.useCallback(() => __async(this, null, function* () {
    app.exportImage("png" /* PNG */, { scale: 2, quality: 1 });
  }), [app]);
  const handleExportJPG = React9.useCallback(() => __async(this, null, function* () {
    app.exportImage("jpeg" /* JPG */, { scale: 2, quality: 1 });
  }), [app]);
  const handleExportWEBP = React9.useCallback(() => __async(this, null, function* () {
    app.exportImage("webp" /* WEBP */, { scale: 2, quality: 1 });
  }), [app]);
  const handleExportSVG = React9.useCallback(() => __async(this, null, function* () {
    app.exportImage("svg" /* SVG */, { scale: 1, quality: 1 });
  }), [app]);
  const handleCopyJSON = React9.useCallback(() => __async(this, null, function* () {
    app.copyJson();
  }), [app]);
  const handleExportJSON = React9.useCallback(() => __async(this, null, function* () {
    app.exportJson();
  }), [app]);
  const hasSelection = numberOfSelectedIds > 0;
  const hasTwoOrMore = numberOfSelectedIds > 1;
  const hasThreeOrMore = numberOfSelectedIds > 2;
  return /* @__PURE__ */ jsx5(Fragment, {
    children: hasSelection ? /* @__PURE__ */ jsxs4(Fragment, {
      children: [
        /* @__PURE__ */ jsx5(CMRowButton, {
          onClick: handleDuplicate,
          kbd: "#D",
          id: "TD-ContextMenu-Duplicate",
          children: /* @__PURE__ */ jsx5(FormattedMessage, {
            id: "duplicate"
          })
        }),
        /* @__PURE__ */ jsx5(CMRowButton, {
          onClick: handleFlipHorizontal,
          kbd: "\u21E7H",
          id: "TD-ContextMenu-Flip_Horizontal",
          children: /* @__PURE__ */ jsx5(FormattedMessage, {
            id: "flip.horizontal"
          })
        }),
        /* @__PURE__ */ jsx5(CMRowButton, {
          onClick: handleFlipVertical,
          kbd: "\u21E7V",
          id: "TD-ContextMenu-Flip_Vertical",
          children: /* @__PURE__ */ jsx5(FormattedMessage, {
            id: "flip.vertical"
          })
        }),
        /* @__PURE__ */ jsxs4(CMRowButton, {
          onClick: handleLock,
          kbd: "#\u21E7L",
          id: "TD-ContextMenu- Lock_Unlock",
          children: [
            /* @__PURE__ */ jsx5(FormattedMessage, {
              id: "lock"
            }),
            " / ",
            /* @__PURE__ */ jsx5(FormattedMessage, {
              id: "unlock"
            })
          ]
        }),
        (hasTwoOrMore || hasGroupSelected) && /* @__PURE__ */ jsx5(Divider, {}),
        hasTwoOrMore && /* @__PURE__ */ jsx5(CMRowButton, {
          onClick: handleGroup,
          kbd: "#G",
          id: "TD-ContextMenu-Group",
          children: /* @__PURE__ */ jsx5(FormattedMessage, {
            id: "group"
          })
        }),
        hasGroupSelected && /* @__PURE__ */ jsx5(CMRowButton, {
          onClick: handleGroup,
          kbd: "#G",
          id: "TD-ContextMenu-Ungroup",
          children: /* @__PURE__ */ jsx5(FormattedMessage, {
            id: "ungroup"
          })
        }),
        /* @__PURE__ */ jsx5(Divider, {}),
        /* @__PURE__ */ jsxs4(ContextMenuSubMenu, {
          label: intl.formatMessage({ id: "move" }),
          id: "TD-ContextMenu-Move",
          children: [
            /* @__PURE__ */ jsx5(CMRowButton, {
              onClick: handleMoveToFront,
              kbd: "\u21E7]",
              id: "TD-ContextMenu-Move-To_Front",
              children: /* @__PURE__ */ jsx5(FormattedMessage, {
                id: "to.front"
              })
            }),
            /* @__PURE__ */ jsx5(CMRowButton, {
              onClick: handleMoveForward,
              kbd: "]",
              id: "TD-ContextMenu-Move-Forward",
              children: /* @__PURE__ */ jsx5(FormattedMessage, {
                id: "forward"
              })
            }),
            /* @__PURE__ */ jsx5(CMRowButton, {
              onClick: handleMoveBackward,
              kbd: "[",
              id: "TD-ContextMenu-Move-Backward",
              children: /* @__PURE__ */ jsx5(FormattedMessage, {
                id: "backward"
              })
            }),
            /* @__PURE__ */ jsx5(CMRowButton, {
              onClick: handleMoveToBack,
              kbd: "\u21E7[",
              id: "TD-ContextMenu-Move-To_Back",
              children: /* @__PURE__ */ jsx5(FormattedMessage, {
                id: "back"
              })
            })
          ]
        }),
        /* @__PURE__ */ jsx5(MoveToPageMenu, {}),
        hasTwoOrMore && /* @__PURE__ */ jsx5(AlignDistributeSubMenu, {
          hasTwoOrMore,
          hasThreeOrMore
        }),
        /* @__PURE__ */ jsx5(Divider, {}),
        /* @__PURE__ */ jsx5(CMRowButton, {
          onClick: handleCut,
          kbd: "#X",
          id: "TD-ContextMenu-Cut",
          children: /* @__PURE__ */ jsx5(FormattedMessage, {
            id: "cut"
          })
        }),
        /* @__PURE__ */ jsx5(CMRowButton, {
          onClick: handleCopy,
          kbd: "#C",
          id: "TD-ContextMenu-Copy",
          children: /* @__PURE__ */ jsx5(FormattedMessage, {
            id: "copy"
          })
        }),
        /* @__PURE__ */ jsx5(CMRowButton, {
          onClick: handlePaste,
          kbd: "#V",
          id: "TD-ContextMenu-Paste",
          children: /* @__PURE__ */ jsx5(FormattedMessage, {
            id: "paste"
          })
        }),
        /* @__PURE__ */ jsx5(Divider, {}),
        /* @__PURE__ */ jsxs4(ContextMenuSubMenu, {
          label: `${intl.formatMessage({ id: "copy.as" })}...`,
          size: "small",
          id: "TD-ContextMenu-Copy-As",
          children: [
            /* @__PURE__ */ jsx5(CMRowButton, {
              onClick: handleCopySVG,
              id: "TD-ContextMenu-Copy-as-SVG",
              children: "SVG"
            }),
            /* @__PURE__ */ jsx5(CMRowButton, {
              onClick: handleCopyPNG,
              id: "TD-ContextMenu-Copy-As-PNG",
              children: "PNG"
            }),
            isDebugMode && /* @__PURE__ */ jsx5(CMRowButton, {
              onClick: handleCopyJSON,
              id: "TD-ContextMenu-Copy_as_JSON",
              children: "JSON"
            })
          ]
        }),
        /* @__PURE__ */ jsxs4(ContextMenuSubMenu, {
          label: `${intl.formatMessage({ id: "export.as" })}...`,
          size: "small",
          id: "TD-ContextMenu-Export",
          children: [
            /* @__PURE__ */ jsx5(CMRowButton, {
              onClick: handleExportSVG,
              id: "TD-ContextMenu-Export-SVG",
              children: "SVG"
            }),
            /* @__PURE__ */ jsx5(CMRowButton, {
              onClick: handleExportPNG,
              id: "TD-ContextMenu-Export-PNG",
              children: "PNG"
            }),
            /* @__PURE__ */ jsx5(CMRowButton, {
              onClick: handleExportJPG,
              id: "TD-ContextMenu-Export-JPG",
              children: "JPG"
            }),
            /* @__PURE__ */ jsx5(CMRowButton, {
              onClick: handleExportWEBP,
              id: "TD-ContextMenu-Export-WEBP",
              children: "WEBP"
            }),
            isDebugMode && /* @__PURE__ */ jsx5(CMRowButton, {
              onClick: handleExportJSON,
              id: "TD-ContextMenu-Export-JSON",
              children: "JSON"
            })
          ]
        }),
        /* @__PURE__ */ jsx5(Divider, {}),
        /* @__PURE__ */ jsx5(CMRowButton, {
          onClick: handleDelete,
          kbd: "\u232B",
          id: "TD-ContextMenu-Delete",
          children: /* @__PURE__ */ jsx5(FormattedMessage, {
            id: "delete"
          })
        })
      ]
    }) : /* @__PURE__ */ jsxs4(Fragment, {
      children: [
        /* @__PURE__ */ jsx5(CMRowButton, {
          onClick: handlePaste,
          kbd: "#V",
          id: "TD-ContextMenu-Paste",
          children: /* @__PURE__ */ jsx5(FormattedMessage, {
            id: "paste"
          })
        }),
        /* @__PURE__ */ jsx5(CMRowButton, {
          onClick: handleUndo,
          kbd: "#Z",
          id: "TD-ContextMenu-Undo",
          children: /* @__PURE__ */ jsx5(FormattedMessage, {
            id: "undo"
          })
        }),
        /* @__PURE__ */ jsx5(CMRowButton, {
          onClick: handleRedo,
          kbd: "#\u21E7Z",
          id: "TD-ContextMenu-Redo",
          children: /* @__PURE__ */ jsx5(FormattedMessage, {
            id: "redo"
          })
        }),
        /* @__PURE__ */ jsxs4(ContextMenuSubMenu, {
          label: `${intl.formatMessage({ id: "export.as" })}...`,
          size: "small",
          id: "TD-ContextMenu-Export",
          children: [
            /* @__PURE__ */ jsx5(CMRowButton, {
              onClick: handleExportSVG,
              id: "TD-ContextMenu-Export-SVG",
              children: "SVG"
            }),
            /* @__PURE__ */ jsx5(CMRowButton, {
              onClick: handleExportPNG,
              id: "TD-ContextMenu-Export-PNG",
              children: "PNG"
            }),
            /* @__PURE__ */ jsx5(CMRowButton, {
              onClick: handleExportJPG,
              id: "TD-ContextMenu-Export-JPG",
              children: "JPG"
            }),
            /* @__PURE__ */ jsx5(CMRowButton, {
              onClick: handleExportWEBP,
              id: "TD-ContextMenu-Export-WEBP",
              children: "WEBP"
            }),
            isDebugMode && /* @__PURE__ */ jsx5(CMRowButton, {
              onClick: handleExportJSON,
              id: "TD-ContextMenu-Export-JSON",
              children: "JSON"
            })
          ]
        })
      ]
    })
  });
});
function AlignDistributeSubMenu({
  hasThreeOrMore
}) {
  const app = useTldrawApp();
  const alignTop = React9.useCallback(() => {
    app.align("top" /* Top */);
  }, [app]);
  const alignCenterVertical = React9.useCallback(() => {
    app.align("centerVertical" /* CenterVertical */);
  }, [app]);
  const alignBottom = React9.useCallback(() => {
    app.align("bottom" /* Bottom */);
  }, [app]);
  const stretchVertically = React9.useCallback(() => {
    app.stretch("vertical" /* Vertical */);
  }, [app]);
  const distributeVertically = React9.useCallback(() => {
    app.distribute("vertical" /* Vertical */);
  }, [app]);
  const alignLeft = React9.useCallback(() => {
    app.align("left" /* Left */);
  }, [app]);
  const alignCenterHorizontal = React9.useCallback(() => {
    app.align("centerHorizontal" /* CenterHorizontal */);
  }, [app]);
  const alignRight = React9.useCallback(() => {
    app.align("right" /* Right */);
  }, [app]);
  const stretchHorizontally = React9.useCallback(() => {
    app.stretch("horizontal" /* Horizontal */);
  }, [app]);
  const distributeHorizontally = React9.useCallback(() => {
    app.distribute("horizontal" /* Horizontal */);
  }, [app]);
  const container = useContainer();
  return /* @__PURE__ */ jsxs4(RadixContextMenu.Sub, {
    children: [
      /* @__PURE__ */ jsx5(CMSubTriggerButton, {
        id: "TD-ContextMenu-Align-Distribute-Trigger",
        children: /* @__PURE__ */ jsx5(FormattedMessage, {
          id: "align.distribute"
        })
      }),
      /* @__PURE__ */ jsx5(RadixContextMenu.Portal, {
        container: container.current,
        children: /* @__PURE__ */ jsx5(RadixContextMenu.SubContent, {
          asChild: true,
          sideOffset: 4,
          alignOffset: -2,
          children: /* @__PURE__ */ jsxs4(StyledGridContent, {
            numberOfSelected: hasThreeOrMore ? "threeOrMore" : "twoOrMore",
            children: [
              /* @__PURE__ */ jsx5(CMIconButton, {
                onClick: alignLeft,
                id: "TD-ContextMenu-Align_Distribute-AlignLeft",
                children: /* @__PURE__ */ jsx5(AlignLeftIcon, {})
              }),
              /* @__PURE__ */ jsx5(CMIconButton, {
                onClick: alignCenterHorizontal,
                id: "TD-ContextMenu-Align_Distribute-AlignCenterHorizontal",
                children: /* @__PURE__ */ jsx5(AlignCenterHorizontallyIcon, {})
              }),
              /* @__PURE__ */ jsx5(CMIconButton, {
                onClick: alignRight,
                id: "TD-ContextMenu-Align_Distribute-AlignRight",
                children: /* @__PURE__ */ jsx5(AlignRightIcon, {})
              }),
              /* @__PURE__ */ jsx5(CMIconButton, {
                onClick: stretchHorizontally,
                id: "TD-ContextMenu-Align_Distribute-StretchHorizontal",
                children: /* @__PURE__ */ jsx5(StretchHorizontallyIcon, {})
              }),
              hasThreeOrMore && /* @__PURE__ */ jsx5(CMIconButton, {
                onClick: distributeHorizontally,
                id: "TD-ContextMenu-Align_Distribute-SpaceEvenlyHorizontal",
                children: /* @__PURE__ */ jsx5(SpaceEvenlyHorizontallyIcon, {})
              }),
              /* @__PURE__ */ jsx5(CMIconButton, {
                onClick: alignTop,
                id: "TD-ContextMenu-Align_Distribute-AlignTop",
                children: /* @__PURE__ */ jsx5(AlignTopIcon, {})
              }),
              /* @__PURE__ */ jsx5(CMIconButton, {
                onClick: alignCenterVertical,
                id: "TD-ContextMenu-Align_Distribute-AlignCenterVertical",
                children: /* @__PURE__ */ jsx5(AlignCenterVerticallyIcon, {})
              }),
              /* @__PURE__ */ jsx5(CMIconButton, {
                onClick: alignBottom,
                id: "TD-ContextMenu-Align_Distribute-AlignBottom",
                children: /* @__PURE__ */ jsx5(AlignBottomIcon, {})
              }),
              /* @__PURE__ */ jsx5(CMIconButton, {
                onClick: stretchVertically,
                id: "TD-ContextMenu-Align_Distribute-StretchVertical",
                children: /* @__PURE__ */ jsx5(StretchVerticallyIcon, {})
              }),
              hasThreeOrMore && /* @__PURE__ */ jsx5(CMIconButton, {
                onClick: distributeVertically,
                id: "TD-ContextMenu-Align_Distribute-SpaceEvenlyVertical",
                children: /* @__PURE__ */ jsx5(SpaceEvenlyVerticallyIcon, {})
              }),
              /* @__PURE__ */ jsx5(CMArrow, {
                offset: 13
              })
            ]
          })
        })
      })
    ]
  });
}
var StyledGridContent = styled(MenuContent, {
  display: "grid",
  variants: {
    numberOfSelected: {
      threeOrMore: {
        gridTemplateColumns: "repeat(5, auto)"
      },
      twoOrMore: {
        gridTemplateColumns: "repeat(4, auto)"
      }
    }
  }
});
var currentPageIdSelector = (s) => s.appState.currentPageId;
var documentPagesSelector = (s) => s.document.pages;
function MoveToPageMenu() {
  const app = useTldrawApp();
  const currentPageId = app.useStore(currentPageIdSelector);
  const documentPages = app.useStore(documentPagesSelector);
  const sorted = Object.values(documentPages).sort((a, b) => (a.childIndex || 0) - (b.childIndex || 0)).filter((a) => a.id !== currentPageId);
  const container = useContainer();
  if (sorted.length === 0)
    return null;
  return /* @__PURE__ */ jsxs4(RadixContextMenu.Sub, {
    children: [
      /* @__PURE__ */ jsx5(CMSubTriggerButton, {
        children: /* @__PURE__ */ jsx5(FormattedMessage, {
          id: "move.to.page"
        })
      }),
      /* @__PURE__ */ jsx5(RadixContextMenu.Portal, {
        container: container.current,
        children: /* @__PURE__ */ jsx5(RadixContextMenu.SubContent, {
          sideOffset: 4,
          alignOffset: -2,
          asChild: true,
          children: /* @__PURE__ */ jsxs4(MenuContent, {
            children: [
              sorted.map(({ id, name }, i) => /* @__PURE__ */ jsx5(CMRowButton, {
                disabled: id === currentPageId,
                onClick: () => app.moveToPage(id),
                children: name || `Page ${i}`
              }, id)),
              /* @__PURE__ */ jsx5(CMArrow, {
                offset: 13
              })
            ]
          })
        })
      })
    ]
  });
}
function ContextMenuSubMenu({ children, label, size, id }) {
  const container = useContainer();
  return /* @__PURE__ */ jsxs4(RadixContextMenu.Sub, {
    children: [
      /* @__PURE__ */ jsx5(CMSubTriggerButton, {
        children: label
      }),
      /* @__PURE__ */ jsx5(RadixContextMenu.Portal, {
        container: container.current,
        children: /* @__PURE__ */ jsx5(RadixContextMenu.SubContent, {
          sideOffset: 4,
          alignOffset: -2,
          asChild: true,
          children: /* @__PURE__ */ jsxs4(MenuContent, {
            size,
            children: [
              children,
              /* @__PURE__ */ jsx5(CMArrow, {
                offset: 13
              })
            ]
          })
        })
      })
    ]
  });
}
var CMArrow = styled(RadixContextMenu.ContextMenuArrow, {
  fill: "$panel"
});
function CMIconButton(_a) {
  var _b = _a, { onSelect } = _b, rest = __objRest(_b, ["onSelect"]);
  return /* @__PURE__ */ jsx5(RadixContextMenu.ContextMenuItem, {
    dir: "ltr",
    onSelect,
    asChild: true,
    children: /* @__PURE__ */ jsx5(ToolButton, __spreadValues({}, rest))
  });
}
var CMRowButton = (_a) => {
  var _b = _a, { id } = _b, rest = __objRest(_b, ["id"]);
  return /* @__PURE__ */ jsx5(RadixContextMenu.ContextMenuItem, {
    asChild: true,
    id,
    children: /* @__PURE__ */ jsx5(RowButton, __spreadValues({}, rest))
  });
};
var CMSubTriggerButton = (_a) => {
  var _b = _a, { id } = _b, rest = __objRest(_b, ["id"]);
  return /* @__PURE__ */ jsx5(RadixContextMenu.SubTrigger, {
    asChild: true,
    id,
    children: /* @__PURE__ */ jsx5(RowButton, __spreadValues({
      hasArrow: true
    }, rest))
  });
};
var ContextMenu = React9.memo(_ContextMenu);

// src/components/ErrorFallback/ErrorFallback.tsx
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
function ErrorFallback({ error, resetErrorBoundary }) {
  const app = useTldrawApp();
  const refreshPage = () => {
    window.location.reload();
    resetErrorBoundary();
  };
  const copyError = () => {
    const textarea = document.createElement("textarea");
    textarea.value = error.message;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  };
  const downloadBackup = () => {
    app.saveProjectAs();
  };
  const resetDocument = () => {
    app.resetDocument();
    resetErrorBoundary();
  };
  return /* @__PURE__ */ jsx6(Container, {
    children: /* @__PURE__ */ jsxs5(InnerContainer, {
      children: [
        /* @__PURE__ */ jsx6("div", {
          children: "We've encountered an error!"
        }),
        /* @__PURE__ */ jsx6("pre", {
          children: /* @__PURE__ */ jsx6("code", {
            children: error.message
          })
        }),
        /* @__PURE__ */ jsxs5(Buttons, {
          children: [
            /* @__PURE__ */ jsx6(RowButton, {
              onClick: copyError,
              children: "Copy Error"
            }),
            /* @__PURE__ */ jsx6(RowButton, {
              onClick: refreshPage,
              children: "Refresh Page"
            })
          ]
        }),
        /* @__PURE__ */ jsx6(Divider, {}),
        /* @__PURE__ */ jsxs5("p", {
          children: [
            "Keep getting this error?",
            " ",
            /* @__PURE__ */ jsx6("a", {
              onClick: downloadBackup,
              title: "Download your project",
              children: "Download your project"
            }),
            " ",
            "as a backup and then",
            " ",
            /* @__PURE__ */ jsx6("a", {
              onClick: resetDocument,
              title: "Reset the document",
              children: "reset the document"
            }),
            "."
          ]
        })
      ]
    })
  });
}
var Container = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$canvas"
});
var InnerContainer = styled("div", {
  backgroundColor: "$panel",
  border: "1px solid $panelContrast",
  padding: "$5",
  borderRadius: 8,
  boxShadow: "$panel",
  maxWidth: 320,
  color: "$text",
  fontFamily: "$ui",
  fontSize: "$2",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: "$3",
  "& > pre": {
    marginTop: "$3",
    marginBottom: "$3",
    textAlign: "left",
    whiteSpace: "pre-wrap",
    backgroundColor: "$hover",
    padding: "$4",
    borderRadius: "$2",
    fontFamily: '"Menlo", "Monaco", monospace',
    fontWeight: 500
  },
  "& p": {
    fontFamily: "$body",
    lineHeight: 1.7,
    padding: "$5",
    margin: 0
  },
  "& a": {
    color: "$text",
    cursor: "pointer",
    textDecoration: "underline"
  },
  "& hr": {
    marginLeft: "-$5",
    marginRight: "-$5"
  }
});
var Buttons = styled("div", {
  display: "flex",
  "& > button > div": {
    justifyContent: "center",
    textAlign: "center"
  }
});

// src/components/FocusButton/FocusButton.tsx
import { DotFilledIcon } from "@radix-ui/react-icons";

// src/components/Primitives/IconButton/IconButton.tsx
var IconButton = styled("button", {
  position: "relative",
  height: "32px",
  width: "32px",
  backgroundColor: "$panel",
  borderRadius: "4px",
  padding: "0",
  margin: "0",
  outline: "none",
  border: "none",
  pointerEvents: "all",
  fontSize: "$0",
  color: "$text",
  cursor: "pointer",
  display: "grid",
  alignItems: "center",
  justifyContent: "center",
  "& > *": {
    gridRow: 1,
    gridColumn: 1
  },
  "&:disabled": {
    opacity: "0.5"
  },
  "& > span": {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center"
  },
  variants: {
    bp: {
      mobile: {
        backgroundColor: "transparent"
      },
      small: {
        "&:hover:not(:disabled)": {
          backgroundColor: "$hover"
        }
      }
    },
    size: {
      small: {
        height: 32,
        width: 32,
        "& svg:nth-of-type(1)": {
          height: "16px",
          width: "16px"
        }
      },
      medium: {
        height: 44,
        width: 44,
        "& svg:nth-of-type(1)": {
          height: "18px",
          width: "18px"
        }
      },
      large: {
        height: 44,
        width: 44,
        "& svg:nth-of-type(1)": {
          height: "20px",
          width: "20px"
        }
      }
    },
    isActive: {
      true: {
        color: "$selected"
      }
    }
  }
});

// src/components/FocusButton/FocusButton.tsx
import { jsx as jsx7 } from "react/jsx-runtime";
function FocusButton({ onSelect }) {
  return /* @__PURE__ */ jsx7(StyledButtonContainer, {
    children: /* @__PURE__ */ jsx7(IconButton, {
      onClick: onSelect,
      children: /* @__PURE__ */ jsx7(DotFilledIcon, {})
    })
  });
}
var StyledButtonContainer = styled("div", {
  opacity: 1,
  zIndex: 100,
  backgroundColor: "transparent",
  "& svg": {
    color: "$text"
  },
  "&:hover svg": {
    color: "$text"
  }
});

// src/components/Loading/Loading.tsx
import { FormattedMessage as FormattedMessage2 } from "react-intl";
import { jsx as jsx8 } from "react/jsx-runtime";
var loadingSelector = (s) => s.appState.isLoading;
function Loading() {
  const app = useTldrawApp();
  const isLoading = app.useStore(loadingSelector);
  return /* @__PURE__ */ jsx8(StyledLoadingPanelContainer, {
    hidden: !isLoading,
    children: /* @__PURE__ */ jsx8(FormattedMessage2, {
      id: "loading",
      values: { dots: "..." }
    })
  });
}
var StyledLoadingPanelContainer = styled("div", {
  position: "absolute",
  top: 0,
  left: "50%",
  transform: `translate(-50%, 0)`,
  borderBottomLeftRadius: "12px",
  borderBottomRightRadius: "12px",
  padding: "8px 16px",
  fontFamily: "var(--fonts-ui)",
  fontSize: "var(--fontSizes-1)",
  boxShadow: "var(--shadows-panel)",
  backgroundColor: "white",
  zIndex: 200,
  pointerEvents: "none",
  "& > div > *": {
    pointerEvents: "all"
  },
  variants: {
    transform: {
      hidden: {
        transform: `translate(-50%, 100%)`
      },
      visible: {
        transform: `translate(-50%, 0%)`
      }
    }
  }
});

// src/components/Primitives/AlertDialog/AlertDialog.tsx
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { FormattedMessage as FormattedMessage3, useIntl as useIntl2 } from "react-intl";
import { jsx as jsx9, jsxs as jsxs6 } from "react/jsx-runtime";
function Content4({ children, onClose, container }) {
  const handleKeyDown = (event) => {
    switch (event.key) {
      case "Escape":
        onClose == null ? void 0 : onClose();
        break;
    }
  };
  return /* @__PURE__ */ jsxs6(AlertDialogPrimitive.Portal, {
    container,
    children: [
      /* @__PURE__ */ jsx9(StyledOverlay, {}),
      /* @__PURE__ */ jsx9(StyledContent2, {
        onKeyDown: handleKeyDown,
        children
      })
    ]
  });
}
var StyledDescription = styled(AlertDialogPrimitive.Description, {
  marginBottom: 20,
  color: "$text",
  fontSize: "$2",
  lineHeight: 1.5,
  textAlign: "center",
  maxWidth: "62%",
  minWidth: 0,
  alignSelf: "center"
});
var AlertDialogRoot = AlertDialogPrimitive.Root;
var AlertDialogContent = Content4;
var AlertDialogDescription = StyledDescription;
var AlertDialogAction = AlertDialogPrimitive.Action;
var AlertDialogCancel = AlertDialogPrimitive.Cancel;
var AlertDialog = ({ container }) => {
  const { setDialogState, dialogState, onCancel, onNo, onYes } = useDialog();
  const intl = useIntl2();
  const descriptions = {
    saveFirstTime: intl.formatMessage({ id: "dialog.save.firsttime" }),
    saveAgain: intl.formatMessage({ id: "dialog.save.again" })
  };
  return /* @__PURE__ */ jsx9(AlertDialogRoot, {
    open: dialogState !== null,
    children: /* @__PURE__ */ jsxs6(AlertDialogContent, {
      onClose: () => setDialogState(null),
      container,
      children: [
        dialogState && /* @__PURE__ */ jsx9(AlertDialogDescription, {
          children: descriptions[dialogState]
        }),
        /* @__PURE__ */ jsxs6("div", {
          style: {
            width: "100%",
            gap: "$6",
            display: "flex",
            justifyContent: "space-between"
          },
          children: [
            onCancel && /* @__PURE__ */ jsx9(AlertDialogCancel, {
              asChild: true,
              children: /* @__PURE__ */ jsx9(Button, {
                css: { color: "$text" },
                onClick: () => {
                  onCancel();
                  setDialogState(null);
                },
                children: /* @__PURE__ */ jsx9(FormattedMessage3, {
                  id: "dialog.cancel"
                })
              })
            }),
            /* @__PURE__ */ jsxs6("div", {
              style: { flexShrink: 0 },
              children: [
                onNo && /* @__PURE__ */ jsx9(AlertDialogAction, {
                  asChild: true,
                  children: /* @__PURE__ */ jsx9(Button, {
                    onClick: () => {
                      onNo();
                      setDialogState(null);
                    },
                    children: /* @__PURE__ */ jsx9(FormattedMessage3, {
                      id: "dialog.no"
                    })
                  })
                }),
                onYes && /* @__PURE__ */ jsx9(AlertDialogAction, {
                  asChild: true,
                  children: /* @__PURE__ */ jsx9(Button, {
                    css: { backgroundColor: "#2F80ED", color: "White" },
                    onClick: () => {
                      onYes();
                      setDialogState(null);
                    },
                    children: /* @__PURE__ */ jsx9(FormattedMessage3, {
                      id: "dialog.yes"
                    })
                  })
                })
              ]
            })
          ]
        })
      ]
    })
  });
};
var StyledOverlay = styled(AlertDialogPrimitive.Overlay, {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, .15)",
  pointerEvents: "all"
});
var StyledDialogOverlay = styled(AlertDialogPrimitive.Overlay, {
  backgroundColor: "rgba(0, 0, 0, .15)",
  position: "absolute",
  pointerEvents: "all",
  inset: 0
});
var StyledContent2 = styled(AlertDialogPrimitive.Content, {
  position: "fixed",
  font: "$ui",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "max-content",
  padding: "$3",
  pointerEvents: "all",
  backgroundColor: "$panel",
  borderRadius: "$3",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  fontFamily: "$ui",
  border: "1px solid $panelContrast",
  boxShadow: "$panel"
});
var Button = styled("button", {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "$2",
  padding: "0 15px",
  fontSize: "$1",
  lineHeight: 1,
  fontWeight: "normal",
  height: 36,
  color: "$text",
  cursor: "pointer",
  minWidth: 48
});

// src/components/Primitives/AlertDialog/FilenameDialog.tsx
import * as Dialog from "@radix-ui/react-alert-dialog";
import { Pencil1Icon } from "@radix-ui/react-icons";
import * as React11 from "react";
import { FormattedMessage as FormattedMessage4, useIntl as useIntl3 } from "react-intl";

// src/components/Primitives/TextField/TextField.tsx
import * as React10 from "react";
import { jsx as jsx10, jsxs as jsxs7 } from "react/jsx-runtime";
var TextField = React10.forwardRef(
  (_a, ref) => {
    var _b = _a, { icon } = _b, rest = __objRest(_b, ["icon"]);
    return /* @__PURE__ */ jsxs7(StyledInputWrapper, {
      children: [
        /* @__PURE__ */ jsx10(StyledInput, __spreadProps(__spreadValues({}, rest), {
          ref
        })),
        icon ? /* @__PURE__ */ jsx10(StyledInputIcon, {
          children: icon
        }) : null
      ]
    });
  }
);
var StyledInputWrapper = styled("div", {
  position: "relative",
  width: "100%",
  height: "min-content"
});
var StyledInput = styled("input", {
  color: "$text",
  border: "none",
  textAlign: "left",
  width: "100%",
  paddingLeft: "$3",
  paddingRight: "$6",
  backgroundColor: "$background",
  height: "32px",
  outline: "none",
  fontFamily: "$ui",
  fontSize: "$1",
  "&:focus": {
    backgroundColor: "$hover"
  },
  borderRadius: "$2"
});
var StyledInputIcon = styled(SmallIcon, {
  top: 0,
  right: 0,
  position: "absolute",
  paddingLeft: "$3",
  paddingRight: "$3",
  pointerEvents: "none",
  color: "$text"
});

// src/components/Primitives/AlertDialog/FilenameDialog.tsx
import { jsx as jsx11, jsxs as jsxs8 } from "react/jsx-runtime";
var FilenameDialog = ({ isOpen, onClose }) => {
  const app = useTldrawApp();
  const container = useContainer();
  const intl = useIntl3();
  const [filename, setFilename] = React11.useState(app.document.name);
  const handleChange = React11.useCallback((event) => {
    const value = event.target.value.trimStart();
    setFilename(value);
  }, []);
  function stopPropagation2(e) {
    e.stopPropagation();
  }
  const handleTextFieldKeyDown = React11.useCallback((e) => {
    switch (e.key) {
      case "Enter": {
        app.saveProjectAs(filename);
        onClose();
        break;
      }
      case "Escape": {
        onClose();
        break;
      }
    }
  }, []);
  return /* @__PURE__ */ jsx11(Dialog.Root, {
    open: isOpen,
    children: /* @__PURE__ */ jsxs8(Dialog.Portal, {
      container: container.current,
      children: [
        /* @__PURE__ */ jsx11(StyledDialogOverlay2, {
          onPointerDown: onClose
        }),
        /* @__PURE__ */ jsxs8(StyledDialogContent, {
          dir: "ltr",
          onKeyDown: stopPropagation2,
          onKeyUp: stopPropagation2,
          children: [
            /* @__PURE__ */ jsx11(Input, {
              placeholder: intl.formatMessage({ id: "enter.file.name" }),
              value: filename,
              onChange: handleChange,
              onKeyDown: handleTextFieldKeyDown,
              icon: /* @__PURE__ */ jsx11(Pencil1Icon, {})
            }),
            /* @__PURE__ */ jsxs8(ActionWrapper, {
              children: [
                /* @__PURE__ */ jsx11(Dialog.Action, {
                  asChild: true,
                  children: /* @__PURE__ */ jsx11(Button, {
                    onClick: onClose,
                    children: /* @__PURE__ */ jsx11(FormattedMessage4, {
                      id: "cancel"
                    })
                  })
                }),
                /* @__PURE__ */ jsx11(Dialog.Action, {
                  asChild: true,
                  children: /* @__PURE__ */ jsx11(Button, {
                    css: { backgroundColor: "#2F80ED", color: "White" },
                    onClick: () => {
                      const name = filename.trim().replace(/\.tldr$/, "");
                      app.saveProjectAs(name);
                      onClose();
                    },
                    children: /* @__PURE__ */ jsx11(FormattedMessage4, {
                      id: "save"
                    })
                  })
                })
              ]
            })
          ]
        })
      ]
    })
  });
};
var StyledDialogContent = styled(Dialog.Content, {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 300,
  maxWidth: "fit-content",
  maxHeight: "85vh",
  marginTop: "-5vh",
  pointerEvents: "all",
  backgroundColor: "$panel",
  padding: "$3",
  borderRadius: "$2",
  font: "$ui",
  zIndex: 999999,
  "&:focus": {
    outline: "none"
  }
});
var StyledDialogOverlay2 = styled(Dialog.Overlay, {
  backgroundColor: "rgba(0, 0, 0, .15)",
  position: "absolute",
  pointerEvents: "all",
  inset: 0,
  zIndex: 999998
});
var ActionWrapper = styled("div", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: 8,
  justifyContent: "flex-end",
  marginTop: 10
});
var Input = styled(TextField, {
  background: "$hover"
});

// src/components/ToolsPanel/ToolsPanel.tsx
import * as React19 from "react";

// src/components/ToolsPanel/ActionButton.tsx
import * as DropdownMenu2 from "@radix-ui/react-dropdown-menu";
import {
  AlignBottomIcon as AlignBottomIcon2,
  AlignCenterHorizontallyIcon as AlignCenterHorizontallyIcon2,
  AlignCenterVerticallyIcon as AlignCenterVerticallyIcon2,
  AlignLeftIcon as AlignLeftIcon2,
  AlignRightIcon as AlignRightIcon2,
  AlignTopIcon as AlignTopIcon2,
  AngleIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  AspectRatioIcon,
  BoxIcon,
  CopyIcon,
  DotsHorizontalIcon,
  GroupIcon,
  LockClosedIcon,
  LockOpen1Icon,
  PinBottomIcon,
  PinTopIcon,
  RotateCounterClockwiseIcon,
  SpaceEvenlyHorizontallyIcon as SpaceEvenlyHorizontallyIcon2,
  SpaceEvenlyVerticallyIcon as SpaceEvenlyVerticallyIcon2,
  StretchHorizontallyIcon as StretchHorizontallyIcon2,
  StretchVerticallyIcon as StretchVerticallyIcon2
} from "@radix-ui/react-icons";
import * as React12 from "react";
import { useIntl as useIntl4 } from "react-intl";

// src/components/Primitives/DropdownMenu/DMItem.tsx
import { Item } from "@radix-ui/react-dropdown-menu";
import { jsx as jsx12 } from "react/jsx-runtime";
function DMItem(_a) {
  var _b = _a, {
    onSelect,
    id
  } = _b, rest = __objRest(_b, [
    "onSelect",
    "id"
  ]);
  return /* @__PURE__ */ jsx12(Item, {
    dir: "ltr",
    asChild: true,
    onSelect,
    id,
    children: /* @__PURE__ */ jsx12(RowButton, __spreadValues({}, rest))
  });
}

// src/components/Primitives/DropdownMenu/DMCheckboxItem.tsx
import { CheckboxItem } from "@radix-ui/react-dropdown-menu";

// src/components/preventEvent.ts
var preventEvent = (e) => e.preventDefault();

// src/components/Primitives/DropdownMenu/DMCheckboxItem.tsx
import { jsx as jsx13 } from "react/jsx-runtime";
function DMCheckboxItem({
  checked,
  disabled = false,
  variant,
  onCheckedChange,
  kbd,
  id,
  ariaLabel,
  children
}) {
  return /* @__PURE__ */ jsx13(CheckboxItem, {
    dir: "ltr",
    onSelect: preventEvent,
    onCheckedChange,
    checked,
    disabled,
    asChild: true,
    id,
    "aria-label": ariaLabel,
    children: /* @__PURE__ */ jsx13(RowButton, {
      kbd,
      variant,
      hasIndicator: true,
      children
    })
  });
}

// src/components/Primitives/DropdownMenu/DMContent.tsx
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

// src/components/stopPropagation.ts
var stopPropagation = (e) => e.stopPropagation();

// src/components/Primitives/DropdownMenu/DMContent.tsx
import { jsx as jsx14 } from "react/jsx-runtime";
function DMContent({
  sideOffset = 4,
  alignOffset = 0,
  children,
  align,
  variant,
  id,
  overflow = false,
  side = "bottom"
}) {
  const container = useContainer();
  return /* @__PURE__ */ jsx14(DropdownMenu.Portal, {
    container: container.current,
    dir: "ltr",
    children: /* @__PURE__ */ jsx14(DropdownMenu.Content, {
      align,
      alignOffset,
      sideOffset,
      onEscapeKeyDown: stopPropagation,
      asChild: true,
      id,
      side,
      children: /* @__PURE__ */ jsx14(StyledContent3, {
        variant,
        overflow,
        children
      })
    })
  });
}
var StyledContent3 = styled(MenuContent, {
  width: "fit-content",
  height: "fit-content",
  minWidth: 0,
  maxHeight: "100vh",
  overflowY: "auto",
  overflowX: "hidden",
  "&::webkit-scrollbar": {
    display: "none"
  },
  "-ms-overflow-style": "none",
  scrollbarWidth: "none",
  variants: {
    variant: {
      horizontal: {
        flexDirection: "row"
      },
      menu: {
        minWidth: 128
      }
    },
    overflow: {
      true: {
        maxHeight: "60vh"
      }
    }
  }
});

// src/components/Primitives/DropdownMenu/DMDivider.tsx
import { Separator } from "@radix-ui/react-dropdown-menu";
var DMDivider = styled(Separator, {
  backgroundColor: "$hover",
  height: 1,
  marginTop: "$2",
  marginRight: "-$2",
  marginBottom: "$2",
  marginLeft: "-$2"
});

// src/components/Primitives/DropdownMenu/DMRadioItem.tsx
import { RadioItem } from "@radix-ui/react-dropdown-menu";
var DMRadioItem = styled(RadioItem, {
  height: "32px",
  width: "32px",
  backgroundColor: "$panel",
  borderRadius: "4px",
  padding: "0",
  margin: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  outline: "none",
  border: "none",
  pointerEvents: "all",
  cursor: "pointer",
  variants: {
    isActive: {
      true: {
        backgroundColor: "$selected",
        color: "white"
      },
      false: {}
    },
    bp: {
      mobile: {},
      small: {}
    }
  },
  compoundVariants: [
    {
      isActive: false,
      bp: "small",
      css: {
        "&:focus": {
          backgroundColor: "$hover"
        },
        "&:hover:not(:disabled)": {
          backgroundColor: "$hover"
        }
      }
    }
  ]
});

// src/components/Primitives/DropdownMenu/DMSubMenu.tsx
import { Arrow as Arrow2, Sub as Sub2, SubContent as SubContent2, SubTrigger as SubTrigger2 } from "@radix-ui/react-dropdown-menu";
import { jsx as jsx15, jsxs as jsxs9 } from "react/jsx-runtime";
function DMSubMenu({
  children,
  size,
  overflow = false,
  disabled = false,
  label,
  id
}) {
  return /* @__PURE__ */ jsxs9(Sub2, {
    children: [
      /* @__PURE__ */ jsx15(SubTrigger2, {
        dir: "ltr",
        asChild: true,
        children: /* @__PURE__ */ jsx15(RowButton, {
          disabled,
          hasArrow: true,
          children: label
        })
      }),
      /* @__PURE__ */ jsx15(SubContent2, {
        asChild: true,
        sideOffset: 4,
        alignOffset: -4,
        children: /* @__PURE__ */ jsxs9(MenuContent, {
          size,
          overflow,
          children: [
            children,
            /* @__PURE__ */ jsx15(Arrow2, {
              offset: 13
            })
          ]
        })
      })
    ]
  }, id);
}

// src/components/Primitives/DropdownMenu/DMTriggerIcon.tsx
import { Trigger as Trigger3 } from "@radix-ui/react-dropdown-menu";
import { jsx as jsx16 } from "react/jsx-runtime";
function DMTriggerIcon(_a) {
  var _b = _a, { id, children } = _b, rest = __objRest(_b, ["id", "children"]);
  return /* @__PURE__ */ jsx16(Trigger3, {
    asChild: true,
    id,
    children: /* @__PURE__ */ jsx16(ToolButton, __spreadProps(__spreadValues({}, rest), {
      children
    }))
  });
}

// src/components/ToolsPanel/ActionButton.tsx
import { Fragment as Fragment2, jsx as jsx17, jsxs as jsxs10 } from "react/jsx-runtime";
var dockPositionState = (s) => s.settings.dockPosition;
var selectedShapesCountSelector = (s) => s.document.pageStates[s.appState.currentPageId].selectedIds.length;
var isAllLockedSelector = (s) => {
  const page = s.document.pages[s.appState.currentPageId];
  const { selectedIds } = s.document.pageStates[s.appState.currentPageId];
  return selectedIds.every((id) => page.shapes[id].isLocked);
};
var isAllAspectLockedSelector = (s) => {
  const page = s.document.pages[s.appState.currentPageId];
  const { selectedIds } = s.document.pageStates[s.appState.currentPageId];
  return selectedIds.every((id) => page.shapes[id].isAspectRatioLocked);
};
var isAllGroupedSelector = (s) => {
  const page = s.document.pages[s.appState.currentPageId];
  const selectedShapes = s.document.pageStates[s.appState.currentPageId].selectedIds.map(
    (id) => page.shapes[id]
  );
  return selectedShapes.every(
    (shape) => shape.children !== void 0 || shape.parentId === selectedShapes[0].parentId && selectedShapes[0].parentId !== s.appState.currentPageId
  );
};
var hasSelectionSelector = (s) => {
  const { selectedIds } = s.document.pageStates[s.appState.currentPageId];
  return selectedIds.length > 0;
};
var hasMultipleSelectionSelector = (s) => {
  const { selectedIds } = s.document.pageStates[s.appState.currentPageId];
  return selectedIds.length > 1;
};
function ActionButton() {
  const app = useTldrawApp();
  const intl = useIntl4();
  const isAllLocked = app.useStore(isAllLockedSelector);
  const isAllAspectLocked = app.useStore(isAllAspectLockedSelector);
  const isAllGrouped = app.useStore(isAllGroupedSelector);
  const hasSelection = app.useStore(hasSelectionSelector);
  const hasMultipleSelection = app.useStore(hasMultipleSelectionSelector);
  const selectedShapesCount = app.useStore(selectedShapesCountSelector);
  const dockPosition = app.useStore(dockPositionState);
  const hasTwoOrMore = selectedShapesCount > 1;
  const hasThreeOrMore = selectedShapesCount > 2;
  const handleRotate = React12.useCallback(() => {
    app.rotate();
  }, [app]);
  const handleDuplicate = React12.useCallback(() => {
    app.duplicate();
  }, [app]);
  const handleToggleLocked = React12.useCallback(() => {
    app.toggleLocked();
  }, [app]);
  const handleToggleAspectRatio = React12.useCallback(() => {
    app.toggleAspectRatioLocked();
  }, [app]);
  const handleGroup = React12.useCallback(() => {
    app.group();
  }, [app]);
  const handleMoveToBack = React12.useCallback(() => {
    app.moveToBack();
  }, [app]);
  const handleMoveBackward = React12.useCallback(() => {
    app.moveBackward();
  }, [app]);
  const handleMoveForward = React12.useCallback(() => {
    app.moveForward();
  }, [app]);
  const handleMoveToFront = React12.useCallback(() => {
    app.moveToFront();
  }, [app]);
  const handleResetAngle = React12.useCallback(() => {
    app.setShapeProps({ rotation: 0 });
  }, [app]);
  const alignTop = React12.useCallback(() => {
    app.align("top" /* Top */);
  }, [app]);
  const alignCenterVertical = React12.useCallback(() => {
    app.align("centerVertical" /* CenterVertical */);
  }, [app]);
  const alignBottom = React12.useCallback(() => {
    app.align("bottom" /* Bottom */);
  }, [app]);
  const stretchVertically = React12.useCallback(() => {
    app.stretch("vertical" /* Vertical */);
  }, [app]);
  const distributeVertically = React12.useCallback(() => {
    app.distribute("vertical" /* Vertical */);
  }, [app]);
  const alignLeft = React12.useCallback(() => {
    app.align("left" /* Left */);
  }, [app]);
  const alignCenterHorizontal = React12.useCallback(() => {
    app.align("centerHorizontal" /* CenterHorizontal */);
  }, [app]);
  const alignRight = React12.useCallback(() => {
    app.align("right" /* Right */);
  }, [app]);
  const stretchHorizontally = React12.useCallback(() => {
    app.stretch("horizontal" /* Horizontal */);
  }, [app]);
  const distributeHorizontally = React12.useCallback(() => {
    app.distribute("horizontal" /* Horizontal */);
  }, [app]);
  const handleMenuOpenChange = React12.useCallback(
    (open) => {
      app.setMenuOpen(open);
    },
    [app]
  );
  const contentSide = dockPosition === "bottom" || dockPosition === "top" ? "top" : dockPosition;
  return /* @__PURE__ */ jsxs10(DropdownMenu2.Root, {
    dir: "ltr",
    onOpenChange: handleMenuOpenChange,
    children: [
      /* @__PURE__ */ jsx17(DropdownMenu2.Trigger, {
        dir: "ltr",
        asChild: true,
        id: "TD-Tools-Dots",
        children: /* @__PURE__ */ jsx17(ToolButton, {
          "aria-label": intl.formatMessage({ id: "shape.options" }),
          variant: "circle",
          children: /* @__PURE__ */ jsx17(DotsHorizontalIcon, {})
        })
      }),
      /* @__PURE__ */ jsx17(DMContent, {
        sideOffset: 16,
        side: contentSide,
        children: /* @__PURE__ */ jsxs10(Fragment2, {
          children: [
            /* @__PURE__ */ jsxs10(ButtonsRow, {
              children: [
                /* @__PURE__ */ jsx17(Tooltip, {
                  label: intl.formatMessage({ id: "duplicate" }),
                  kbd: `#D`,
                  id: "TD-Tools-Copy",
                  children: /* @__PURE__ */ jsx17(ToolButton, {
                    "aria-label": intl.formatMessage({ id: "duplicate" }),
                    disabled: !hasSelection,
                    onClick: handleDuplicate,
                    children: /* @__PURE__ */ jsx17(CopyIcon, {})
                  })
                }),
                /* @__PURE__ */ jsx17(Tooltip, {
                  label: intl.formatMessage({ id: "rotate" }),
                  id: "TD-Tools-Rotate",
                  children: /* @__PURE__ */ jsx17(ToolButton, {
                    "aria-label": intl.formatMessage({ id: "rotate" }),
                    disabled: !hasSelection,
                    onClick: handleRotate,
                    children: /* @__PURE__ */ jsx17(RotateCounterClockwiseIcon, {})
                  })
                }),
                /* @__PURE__ */ jsx17(Tooltip, {
                  label: intl.formatMessage({ id: isAllLocked ? "unlock" : "lock" }),
                  kbd: `#L`,
                  id: "TD-Tools-Lock",
                  children: /* @__PURE__ */ jsx17(ToolButton, {
                    "aria-label": intl.formatMessage({ id: isAllLocked ? "unlock" : "lock" }),
                    disabled: !hasSelection,
                    onClick: handleToggleLocked,
                    children: isAllLocked ? /* @__PURE__ */ jsx17(LockClosedIcon, {}) : /* @__PURE__ */ jsx17(LockOpen1Icon, {})
                  })
                }),
                /* @__PURE__ */ jsx17(Tooltip, {
                  label: intl.formatMessage({
                    id: isAllAspectLocked ? "unlock.aspect.ratio" : "lock.aspect.ratio"
                  }),
                  id: "TD-Tools-AspectRatio",
                  children: /* @__PURE__ */ jsx17(ToolButton, {
                    "aria-label": intl.formatMessage({
                      id: isAllAspectLocked ? "unlock.aspect.ratio" : "lock.aspect.ratio"
                    }),
                    disabled: !hasSelection,
                    onClick: handleToggleAspectRatio,
                    children: isAllAspectLocked ? /* @__PURE__ */ jsx17(AspectRatioIcon, {}) : /* @__PURE__ */ jsx17(BoxIcon, {})
                  })
                }),
                /* @__PURE__ */ jsx17(Tooltip, {
                  label: intl.formatMessage({ id: "group" }),
                  kbd: `#G`,
                  id: "TD-Tools-Group",
                  children: /* @__PURE__ */ jsx17(ToolButton, {
                    "aria-label": intl.formatMessage({ id: "group" }),
                    disabled: !hasSelection || !isAllGrouped && !hasMultipleSelection,
                    onClick: handleGroup,
                    children: /* @__PURE__ */ jsx17(GroupIcon, {})
                  })
                })
              ]
            }),
            /* @__PURE__ */ jsxs10(ButtonsRow, {
              children: [
                /* @__PURE__ */ jsx17(Tooltip, {
                  label: intl.formatMessage({ id: "move.to.back" }),
                  kbd: `#\u21E7[`,
                  id: "TD-Tools-PinBottom",
                  children: /* @__PURE__ */ jsx17(ToolButton, {
                    "aria-label": intl.formatMessage({ id: "move.to.back" }),
                    disabled: !hasSelection,
                    onClick: handleMoveToBack,
                    children: /* @__PURE__ */ jsx17(PinBottomIcon, {})
                  })
                }),
                /* @__PURE__ */ jsx17(Tooltip, {
                  label: intl.formatMessage({ id: "move.backward" }),
                  kbd: `#[`,
                  id: "TD-Tools-ArrowDown",
                  children: /* @__PURE__ */ jsx17(ToolButton, {
                    "aria-label": intl.formatMessage({ id: "move.backward" }),
                    disabled: !hasSelection,
                    onClick: handleMoveBackward,
                    children: /* @__PURE__ */ jsx17(ArrowDownIcon, {})
                  })
                }),
                /* @__PURE__ */ jsx17(Tooltip, {
                  label: intl.formatMessage({ id: "move.forward" }),
                  kbd: `#]`,
                  id: "TD-Tools-ArrowUp",
                  children: /* @__PURE__ */ jsx17(ToolButton, {
                    "aria-label": intl.formatMessage({ id: "move.forward" }),
                    disabled: !hasSelection,
                    onClick: handleMoveForward,
                    children: /* @__PURE__ */ jsx17(ArrowUpIcon, {})
                  })
                }),
                /* @__PURE__ */ jsx17(Tooltip, {
                  label: intl.formatMessage({ id: "move.to.front" }),
                  kbd: `#\u21E7]`,
                  id: "TD-Tools-PinTop",
                  children: /* @__PURE__ */ jsx17(ToolButton, {
                    "aria-label": intl.formatMessage({ id: "move.to.front" }),
                    disabled: !hasSelection,
                    onClick: handleMoveToFront,
                    children: /* @__PURE__ */ jsx17(PinTopIcon, {})
                  })
                }),
                /* @__PURE__ */ jsx17(Tooltip, {
                  label: intl.formatMessage({ id: "reset.angle" }),
                  id: "TD-Tools-ResetAngle",
                  children: /* @__PURE__ */ jsx17(ToolButton, {
                    "aria-label": intl.formatMessage({ id: "reset.angle" }),
                    disabled: !hasSelection,
                    onClick: handleResetAngle,
                    children: /* @__PURE__ */ jsx17(AngleIcon, {})
                  })
                })
              ]
            }),
            /* @__PURE__ */ jsx17(Divider, {}),
            /* @__PURE__ */ jsxs10(ButtonsRow, {
              children: [
                /* @__PURE__ */ jsx17(Tooltip, {
                  label: intl.formatMessage({ id: "align.left" }),
                  id: "TD-Tools-AlignLeft",
                  children: /* @__PURE__ */ jsx17(ToolButton, {
                    "aria-label": intl.formatMessage({ id: "align.left" }),
                    disabled: !hasTwoOrMore,
                    onClick: alignLeft,
                    children: /* @__PURE__ */ jsx17(AlignLeftIcon2, {})
                  })
                }),
                /* @__PURE__ */ jsx17(Tooltip, {
                  label: intl.formatMessage({ id: "align.center.x" }),
                  id: "TD-Tools-AlignCenterHorizontal",
                  children: /* @__PURE__ */ jsx17(ToolButton, {
                    "aria-label": intl.formatMessage({ id: "align.center.x" }),
                    disabled: !hasTwoOrMore,
                    onClick: alignCenterHorizontal,
                    children: /* @__PURE__ */ jsx17(AlignCenterHorizontallyIcon2, {})
                  })
                }),
                /* @__PURE__ */ jsx17(Tooltip, {
                  label: intl.formatMessage({ id: "align.right" }),
                  id: "TD-Tools-AlignRight",
                  children: /* @__PURE__ */ jsx17(ToolButton, {
                    "aria-label": intl.formatMessage({ id: "align.right" }),
                    disabled: !hasTwoOrMore,
                    onClick: alignRight,
                    children: /* @__PURE__ */ jsx17(AlignRightIcon2, {})
                  })
                }),
                /* @__PURE__ */ jsx17(Tooltip, {
                  label: intl.formatMessage({ id: "stretch.x" }),
                  id: "TD-Tools-StretchHorizontal",
                  children: /* @__PURE__ */ jsx17(ToolButton, {
                    "aria-label": intl.formatMessage({ id: "stretch.x" }),
                    disabled: !hasTwoOrMore,
                    onClick: stretchHorizontally,
                    children: /* @__PURE__ */ jsx17(StretchHorizontallyIcon2, {})
                  })
                }),
                /* @__PURE__ */ jsx17(Tooltip, {
                  label: intl.formatMessage({ id: "distribute.x" }),
                  id: "TD-Tools-SpaceEvenlyHorizontal",
                  children: /* @__PURE__ */ jsx17(ToolButton, {
                    "aria-label": intl.formatMessage({ id: "distribute.x" }),
                    disabled: !hasThreeOrMore,
                    onClick: distributeHorizontally,
                    children: /* @__PURE__ */ jsx17(SpaceEvenlyHorizontallyIcon2, {})
                  })
                })
              ]
            }),
            /* @__PURE__ */ jsxs10(ButtonsRow, {
              children: [
                /* @__PURE__ */ jsx17(Tooltip, {
                  label: intl.formatMessage({ id: "align.top" }),
                  id: "TD-Tools-AlignTop",
                  children: /* @__PURE__ */ jsx17(ToolButton, {
                    "aria-label": intl.formatMessage({ id: "align.top" }),
                    disabled: !hasTwoOrMore,
                    onClick: alignTop,
                    children: /* @__PURE__ */ jsx17(AlignTopIcon2, {})
                  })
                }),
                /* @__PURE__ */ jsx17(Tooltip, {
                  label: intl.formatMessage({ id: "align.center.y" }),
                  id: "TD-Tools-AlignCenterVertical",
                  children: /* @__PURE__ */ jsx17(ToolButton, {
                    "aria-label": intl.formatMessage({ id: "align.center.y" }),
                    disabled: !hasTwoOrMore,
                    onClick: alignCenterVertical,
                    children: /* @__PURE__ */ jsx17(AlignCenterVerticallyIcon2, {})
                  })
                }),
                /* @__PURE__ */ jsx17(Tooltip, {
                  label: intl.formatMessage({ id: "align.bottom" }),
                  id: "TD-Tools-AlignBottom",
                  children: /* @__PURE__ */ jsx17(ToolButton, {
                    "aria-label": intl.formatMessage({ id: "align.bottom" }),
                    disabled: !hasTwoOrMore,
                    onClick: alignBottom,
                    children: /* @__PURE__ */ jsx17(AlignBottomIcon2, {})
                  })
                }),
                /* @__PURE__ */ jsx17(Tooltip, {
                  label: intl.formatMessage({ id: "stretch.y" }),
                  id: "TD-Tools-StretchVertical",
                  children: /* @__PURE__ */ jsx17(ToolButton, {
                    "aria-label": intl.formatMessage({ id: "stretch.y" }),
                    disabled: !hasTwoOrMore,
                    onClick: stretchVertically,
                    children: /* @__PURE__ */ jsx17(StretchVerticallyIcon2, {})
                  })
                }),
                /* @__PURE__ */ jsx17(Tooltip, {
                  label: intl.formatMessage({ id: "distribute.y" }),
                  id: "TD-Tools-SpaceEvenlyVertical",
                  children: /* @__PURE__ */ jsx17(ToolButton, {
                    "aria-label": intl.formatMessage({ id: "distribute.y" }),
                    disabled: !hasThreeOrMore,
                    onClick: distributeVertically,
                    children: /* @__PURE__ */ jsx17(SpaceEvenlyVerticallyIcon2, {})
                  })
                })
              ]
            })
          ]
        })
      })
    ]
  });
}
var ButtonsRow = styled("div", {
  position: "relative",
  display: "flex",
  width: "100%",
  background: "none",
  border: "none",
  cursor: "pointer",
  outline: "none",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: 0
});

// src/components/ToolsPanel/BackToContent.tsx
import * as React13 from "react";
import { FormattedMessage as FormattedMessage5 } from "react-intl";
import { jsx as jsx18 } from "react/jsx-runtime";
var isEmptyCanvasSelector = (s) => {
  return s.appState.isEmptyCanvas && Object.keys(s.document.pages[s.appState.currentPageId].shapes).length > 0;
};
var isDebugModeSelector2 = (s) => s.settings.isDebugMode;
var dockPositionState2 = (s) => s.settings.dockPosition;
var BackToContent = React13.memo(function BackToContent2() {
  const app = useTldrawApp();
  const isEmptyCanvas = app.useStore(isEmptyCanvasSelector);
  const dockPosition = app.useStore(dockPositionState2);
  const isDebugMode = app.useStore(isDebugModeSelector2);
  const style = {
    bottom: dockPosition === "bottom" && isDebugMode ? 120 : dockPosition === "bottom" ? 80 : isDebugMode ? 60 : 20,
    left: "50%",
    transform: "translate(-50%,0)"
  };
  if (!isEmptyCanvas)
    return null;
  return /* @__PURE__ */ jsx18(BackToContentContainer, {
    id: "TD-Tools-Back_to_content",
    style: __spreadValues({}, style),
    children: /* @__PURE__ */ jsx18(RowButton, {
      onClick: app.zoomToContent,
      children: /* @__PURE__ */ jsx18(FormattedMessage5, {
        id: "zoom.to.content"
      })
    })
  });
});
var BackToContentContainer = styled(MenuContent, {
  pointerEvents: "all",
  width: "fit-content",
  minWidth: 0,
  position: "fixed",
  bottom: 0
});

// src/components/ToolsPanel/DeleteButton.tsx
import * as React14 from "react";
import { useIntl as useIntl5 } from "react-intl";

// src/components/Primitives/icons/BoxIcon.tsx
import { jsx as jsx19 } from "react/jsx-runtime";

// src/components/Primitives/icons/CircleIcon.tsx
import { jsx as jsx20 } from "react/jsx-runtime";
function CircleIcon(props) {
  const _a = props, { size = 16 } = _a, rest = __objRest(_a, ["size"]);
  return /* @__PURE__ */ jsx20("svg", __spreadProps(__spreadValues({
    width: 24,
    height: 24
  }, rest), {
    children: /* @__PURE__ */ jsx20("circle", {
      cx: 12,
      cy: 12,
      r: size / 2
    })
  }));
}

// src/components/Primitives/icons/DashDashedIcon.tsx
import { jsx as jsx21 } from "react/jsx-runtime";
function DashDashedIcon() {
  return /* @__PURE__ */ jsx21("svg", {
    width: "24",
    height: "24",
    stroke: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx21("circle", {
      cx: 12,
      cy: 12,
      r: 8,
      fill: "none",
      strokeWidth: 2.5,
      strokeLinecap: "round",
      strokeDasharray: 50.26548 * 0.1
    })
  });
}

// src/components/Primitives/icons/DashDottedIcon.tsx
import { jsx as jsx22 } from "react/jsx-runtime";
var dottedDasharray = `${50.26548 * 0.025} ${50.26548 * 0.1}`;
function DashDottedIcon() {
  return /* @__PURE__ */ jsx22("svg", {
    width: "24",
    height: "24",
    stroke: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx22("circle", {
      cx: 12,
      cy: 12,
      r: 8,
      fill: "none",
      strokeWidth: 2.5,
      strokeLinecap: "round",
      strokeDasharray: dottedDasharray
    })
  });
}

// src/components/Primitives/icons/DashDrawIcon.tsx
import { jsx as jsx23 } from "react/jsx-runtime";
function DashDrawIcon() {
  return /* @__PURE__ */ jsx23("svg", {
    width: "24",
    height: "24",
    viewBox: "1 1.5 21 22",
    fill: "currentColor",
    stroke: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx23("path", {
      d: "M10.0162 19.2768C10.0162 19.2768 9.90679 19.2517 9.6879 19.2017C9.46275 19.1454 9.12816 19.0422 8.68413 18.8921C8.23384 18.7358 7.81482 18.545 7.42707 18.3199C7.03307 18.101 6.62343 17.7883 6.19816 17.3818C5.77289 16.9753 5.33511 16.3718 4.88482 15.5713C4.43453 14.7645 4.1531 13.8545 4.04053 12.8414C3.92795 11.822 4.04991 10.8464 4.40639 9.91451C4.76286 8.98266 5.39452 8.10084 6.30135 7.26906C7.21444 6.44353 8.29325 5.83377 9.5378 5.43976C10.7823 5.05202 11.833 4.92068 12.6898 5.04576C13.5466 5.16459 14.3878 5.43664 15.2133 5.86191C16.0388 6.28718 16.7768 6.8688 17.4272 7.60678C18.0714 8.34475 18.5404 9.21406 18.8344 10.2147C19.1283 11.2153 19.1721 12.2598 18.9657 13.348C18.7593 14.4299 18.2872 15.4337 17.5492 16.3593C16.8112 17.2849 15.9263 18.0072 14.8944 18.5263C13.8624 19.0391 12.9056 19.3174 12.0238 19.3612C11.142 19.405 10.2101 19.2705 9.22823 18.9578C8.24635 18.6451 7.35828 18.151 6.56402 17.4756C5.77601 16.8002 6.08871 16.8658 7.50212 17.6726C8.90927 18.4731 10.1444 18.8484 11.2076 18.7983C12.2645 18.7545 13.2965 18.4825 14.3034 17.9822C15.3102 17.4819 16.1264 16.8221 16.7518 16.0028C17.3772 15.1835 17.7681 14.3111 17.9244 13.3855C18.0808 12.4599 18.0401 11.5781 17.8025 10.74C17.5586 9.902 17.1739 9.15464 16.6486 8.49797C16.1233 7.8413 15.2289 7.27844 13.9656 6.80939C12.7086 6.34034 11.4203 6.20901 10.1007 6.41539C8.78732 6.61552 7.69599 7.06893 6.82669 7.77564C5.96363 8.48859 5.34761 9.26409 4.97863 10.1021C4.60964 10.9402 4.45329 11.8376 4.50958 12.7945C4.56586 13.7513 4.79101 14.6238 5.18501 15.4118C5.57276 16.1998 5.96363 16.8002 6.35764 17.2129C6.75164 17.6257 7.13313 17.9509 7.50212 18.1886C7.87736 18.4325 8.28074 18.642 8.71227 18.8171C9.15005 18.9922 9.47839 19.111 9.69728 19.1736C9.91617 19.2361 10.0256 19.2705 10.0256 19.2768H10.0162Z",
      strokeWidth: "2"
    })
  });
}

// src/components/Primitives/icons/DashSolidIcon.tsx
import { jsx as jsx24 } from "react/jsx-runtime";
function DashSolidIcon() {
  return /* @__PURE__ */ jsx24("svg", {
    width: "24",
    height: "24",
    stroke: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx24("circle", {
      cx: 12,
      cy: 12,
      r: 8,
      fill: "none",
      strokeWidth: 2,
      strokeLinecap: "round"
    })
  });
}

// src/components/Primitives/icons/TrashIcon.tsx
import { jsx as jsx25, jsxs as jsxs11 } from "react/jsx-runtime";
function TrashIcon(props) {
  return /* @__PURE__ */ jsxs11("svg", __spreadProps(__spreadValues({
    width: 18,
    height: 18,
    viewBox: "0 0 15 15",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {
    children: [
      /* @__PURE__ */ jsx25("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2 4.656a.5.5 0 01.5-.5h9.7a.5.5 0 010 1H2.5a.5.5 0 01-.5-.5z"
      }),
      /* @__PURE__ */ jsx25("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.272 3a.578.578 0 00-.578.578v.578h3.311v-.578A.578.578 0 008.428 3H6.272zm3.733 1.156v-.578A1.578 1.578 0 008.428 2H6.272a1.578 1.578 0 00-1.578 1.578v.578H3.578a.5.5 0 00-.5.5V12.2a1.578 1.578 0 001.577 1.578h5.39a1.578 1.578 0 001.577-1.578V4.656a.5.5 0 00-.5-.5h-1.117zm-5.927 1V12.2a.578.578 0 00.577.578h5.39a.578.578 0 00.577-.578V5.156H4.078z"
      }),
      /* @__PURE__ */ jsx25("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.272 6.85a.5.5 0 01.5.5v3.233a.5.5 0 11-1 0V7.35a.5.5 0 01.5-.5zM8.428 6.85a.5.5 0 01.5.5v3.233a.5.5 0 11-1 0V7.35a.5.5 0 01.5-.5z"
      })
    ]
  }));
}

// src/components/Primitives/icons/UndoIcon.tsx
import { jsx as jsx26 } from "react/jsx-runtime";
function UndoIcon(_a) {
  var _b = _a, {
    flipHorizontal
  } = _b, props = __objRest(_b, [
    "flipHorizontal"
  ]);
  return /* @__PURE__ */ jsx26("svg", __spreadProps(__spreadValues({
    width: 24,
    height: 24,
    viewBox: "0 0 15 15",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      transform: flipHorizontal ? "scale(-1, 1)" : "scale(1, 1)"
    }
  }, props), {
    children: /* @__PURE__ */ jsx26("path", {
      d: "M10.6707 8.5081C10.6707 10.1923 9.3004 11.5625 7.61631 11.5625H6.5351C6.35593 11.5625 6.21074 11.4173 6.21074 11.2382V11.13C6.21074 10.9508 6.35591 10.8057 6.5351 10.8057H7.61631C8.88313 10.8057 9.91387 9.77492 9.91387 8.5081C9.91387 7.24128 8.88313 6.21054 7.61631 6.21054H5.62155L6.99534 7.58433C7.14289 7.73183 7.14289 7.97195 6.99534 8.11944C6.85216 8.26251 6.60298 8.2623 6.46013 8.11944L4.44045 6.09971C4.36898 6.02824 4.32959 5.93321 4.32959 5.8321C4.32959 5.73106 4.36898 5.63598 4.44045 5.56454L6.46024 3.54472C6.60309 3.40176 6.85248 3.40176 6.99535 3.54472C7.14291 3.69218 7.14291 3.93234 6.99535 4.07979L5.62156 5.45368H7.61631C9.3004 5.45368 10.6707 6.82393 10.6707 8.5081Z"
    })
  }));
}

// src/components/Primitives/icons/SizeSmallIcon.tsx
import { jsx as jsx27 } from "react/jsx-runtime";
function SizeSmallIcon(props) {
  return /* @__PURE__ */ jsx27("svg", __spreadProps(__spreadValues({
    width: 24,
    height: 24,
    viewBox: "-2 -2 28 28",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {
    children: /* @__PURE__ */ jsx27("path", {
      d: "M12.4239 4.62C13.3572 4.62 14.1572 4.73333 14.8239 4.96C15.4906 5.17333 15.9772 5.43333 16.2839 5.74C16.3639 5.82 16.4039 5.94 16.4039 6.1V8.86H14.0639C13.9172 8.86 13.8439 8.78666 13.8439 8.64V7.26C13.4306 7.12666 12.9572 7.06 12.4239 7.06C11.6506 7.06 11.0639 7.18 10.6639 7.42C10.2639 7.66 10.0639 8.04666 10.0639 8.58V9C10.0639 9.38666 10.1639 9.69333 10.3639 9.92C10.5772 10.1333 11.0306 10.3467 11.7239 10.56L13.6439 11.14C14.4706 11.38 15.1172 11.66 15.5839 11.98C16.0506 12.3 16.3772 12.68 16.5639 13.12C16.7639 13.5467 16.8639 14.0733 16.8639 14.7V15.62C16.8639 16.7933 16.4039 17.7133 15.4839 18.38C14.5639 19.0467 13.2839 19.38 11.6439 19.38C10.6706 19.38 9.79723 19.2867 9.0239 19.1C8.2639 18.9133 7.71056 18.6533 7.3639 18.32C7.3239 18.28 7.29056 18.24 7.2639 18.2C7.25056 18.1467 7.2439 18.06 7.2439 17.94V15.74H7.6239C8.2239 16.1533 8.85056 16.4533 9.5039 16.64C10.1572 16.8267 10.9306 16.92 11.8239 16.92C12.6506 16.92 13.2506 16.7867 13.6239 16.52C14.0106 16.2533 14.2039 15.9333 14.2039 15.56V14.88C14.2039 14.6667 14.1639 14.48 14.0839 14.32C14.0172 14.16 13.8706 14.0133 13.6439 13.88C13.4172 13.7467 13.0572 13.6067 12.5639 13.46L10.6639 12.88C9.7839 12.6133 9.11056 12.3 8.6439 11.94C8.17723 11.58 7.85056 11.18 7.6639 10.74C7.49056 10.3 7.4039 9.83333 7.4039 9.34V8.38C7.4039 7.64666 7.61056 7 8.0239 6.44C8.43723 5.88 9.01723 5.44 9.7639 5.12C10.5239 4.78666 11.4106 4.62 12.4239 4.62Z"
    })
  }));
}

// src/components/Primitives/icons/SizeMediumIcon.tsx
import { jsx as jsx28 } from "react/jsx-runtime";
function SizeMediumIcon(props) {
  return /* @__PURE__ */ jsx28("svg", __spreadProps(__spreadValues({
    width: 24,
    height: 24,
    viewBox: "-2 -2 28 28",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {
    children: /* @__PURE__ */ jsx28("path", {
      d: "M8.16191 19H5.68191C5.53525 19 5.46191 18.9267 5.46191 18.78V5H8.76191C8.88191 5 8.97525 5.03333 9.04191 5.1C9.10858 5.15333 9.17525 5.27333 9.24191 5.46C9.72191 6.59333 10.1686 7.7 10.5819 8.78C11.0086 9.84667 11.4352 10.98 11.8619 12.18H12.1619C12.6019 10.9667 13.0352 9.79333 13.4619 8.66C13.8886 7.52667 14.3552 6.30667 14.8619 5H18.3219C18.4686 5 18.5419 5.07333 18.5419 5.22V19H16.0619C15.9152 19 15.8419 18.9267 15.8419 18.78V16.26C15.8419 15.5267 15.8486 14.8133 15.8619 14.12C15.8886 13.4267 15.9286 12.6867 15.9819 11.9C16.0486 11.1 16.1419 10.1933 16.2619 9.18H15.9019C15.4352 10.3533 14.9486 11.5667 14.4419 12.82C13.9486 14.06 13.4819 15.2333 13.0419 16.34H11.1019C11.0619 16.34 11.0152 16.3333 10.9619 16.32C10.9219 16.2933 10.8886 16.2467 10.8619 16.18C10.4619 15.18 10.0086 14.06 9.50191 12.82C9.00858 11.58 8.53525 10.3667 8.08191 9.18H7.70191C7.83525 10.18 7.93525 11.0733 8.00191 11.86C8.06858 12.6467 8.10858 13.3933 8.12191 14.1C8.14858 14.8067 8.16191 15.5267 8.16191 16.26V19Z"
    })
  }));
}

// src/components/Primitives/icons/SizeLargeIcon.tsx
import { jsx as jsx29 } from "react/jsx-runtime";
function SizeLargeIcon(props) {
  return /* @__PURE__ */ jsx29("svg", __spreadProps(__spreadValues({
    width: 24,
    height: 24,
    viewBox: "-2 -2 28 28",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {
    children: /* @__PURE__ */ jsx29("path", {
      d: "M7.68191 19C7.53525 19 7.46191 18.9267 7.46191 18.78V5H10.1219C10.2686 5 10.3419 5.07333 10.3419 5.22V16.56H13.4419V15.02H15.7619C15.9086 15.02 15.9819 15.0933 15.9819 15.24V19H7.68191Z"
    })
  }));
}

// src/components/Primitives/icons/EraserIcon.tsx
import { jsx as jsx30, jsxs as jsxs12 } from "react/jsx-runtime";
function EraserIcon() {
  return /* @__PURE__ */ jsxs12("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ jsx30("path", {
        d: "M1.72838 9.33987L8.84935 2.34732C9.23874 1.96494 9.86279 1.96539 10.2516 2.34831L13.5636 5.60975C13.9655 6.00555 13.9607 6.65526 13.553 7.04507L8.13212 12.2278C7.94604 12.4057 7.69851 12.505 7.44107 12.505L6.06722 12.505L3.83772 12.505C3.5673 12.505 3.30842 12.3954 3.12009 12.2014L1.7114 10.7498C1.32837 10.3551 1.33596 9.72521 1.72838 9.33987Z",
        stroke: "currentColor"
      }),
      /* @__PURE__ */ jsx30("line", {
        x1: "6.01807",
        y1: "12.5",
        x2: "10.7959",
        y2: "12.5",
        stroke: "currentColor",
        strokeLinecap: "round"
      }),
      /* @__PURE__ */ jsx30("line", {
        x1: "5.50834",
        y1: "5.74606",
        x2: "10.1984",
        y2: "10.4361",
        stroke: "currentColor"
      })
    ]
  });
}

// src/components/Primitives/icons/DiscordIcon.tsx
import { jsx as jsx31 } from "react/jsx-runtime";
function DiscordIcon() {
  return /* @__PURE__ */ jsx31("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    children: /* @__PURE__ */ jsx31("path", {
      d: "M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"
    })
  });
}

// src/components/Primitives/icons/LineIcon.tsx
import { jsx as jsx32 } from "react/jsx-runtime";
function LineIcon() {
  return /* @__PURE__ */ jsx32("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx32("path", {
      d: "M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L11.1464 3.14645C11.3417 2.95118 11.6583 2.95118 11.8536 3.14645C12.0488 3.34171 12.0488 3.65829 11.8536 3.85355L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
    })
  });
}

// src/components/ToolsPanel/DeleteButton.tsx
import { jsx as jsx33 } from "react/jsx-runtime";
function DeleteButton() {
  const app = useTldrawApp();
  const intl = useIntl5();
  const handleDelete = React14.useCallback(() => {
    app.delete();
  }, [app]);
  const hasSelection = app.useStore(
    (s) => s.appState.status === "idle" && s.document.pageStates[s.appState.currentPageId].selectedIds.length > 0
  );
  return /* @__PURE__ */ jsx33(Tooltip, {
    label: intl.formatMessage({ id: "delete" }),
    kbd: "\u232B",
    id: "TD-Delete",
    children: /* @__PURE__ */ jsx33(ToolButton, {
      "aria-label": intl.formatMessage({ id: "delete" }),
      variant: "circle",
      disabled: !hasSelection,
      onSelect: handleDelete,
      children: /* @__PURE__ */ jsx33(TrashIcon, {})
    })
  });
}

// src/components/ToolsPanel/HelpPanel.tsx
import * as DropdownMenu3 from "@radix-ui/react-dropdown-menu";
import {
  ExternalLinkIcon as ExternalLinkIcon2,
  GitHubLogoIcon,
  HeartFilledIcon,
  QuestionMarkIcon,
  TwitterLogoIcon
} from "@radix-ui/react-icons";
import * as Popover from "@radix-ui/react-popover";
import * as React16 from "react";
import { FormattedMessage as FormattedMessage8 } from "react-intl";

// src/components/TopPanel/LanguageMenu/LanguageMenu.tsx
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import * as React15 from "react";
import { FormattedMessage as FormattedMessage6 } from "react-intl";
import { jsx as jsx34, jsxs as jsxs13 } from "react/jsx-runtime";
var languageSelector = (s) => s.settings.language;
var LanguageMenu = () => {
  const app = useTldrawApp();
  const language = app.useStore(languageSelector);
  const handleChangeLanguage = React15.useCallback(
    (locale) => {
      app.setSetting("language", locale);
    },
    [app]
  );
  return /* @__PURE__ */ jsxs13(DMContent, {
    variant: "menu",
    overflow: true,
    id: "language-menu",
    side: "left",
    sideOffset: 8,
    children: [
      TRANSLATIONS.map(({ locale, label }) => /* @__PURE__ */ jsx34(DMCheckboxItem, {
        checked: language === locale,
        onCheckedChange: () => handleChangeLanguage(locale),
        id: `TD-MenuItem-Language-${locale}`,
        children: label
      }, locale)),
      /* @__PURE__ */ jsx34(Divider, {}),
      /* @__PURE__ */ jsx34("a", {
        href: "https://github.com/tldraw/tldraw/blob/main/guides/translation.md",
        target: "_blank",
        rel: "nofollow",
        children: /* @__PURE__ */ jsxs13(DMItem, {
          id: "TD-MenuItem-Translation-Link",
          children: [
            /* @__PURE__ */ jsx34(FormattedMessage6, {
              id: "translation.link"
            }),
            /* @__PURE__ */ jsx34(SmallIcon, {
              children: /* @__PURE__ */ jsx34(ExternalLinkIcon, {})
            })
          ]
        })
      })
    ]
  });
};

// src/components/ToolsPanel/KeyboardShortcutDialog.tsx
import * as Dialog2 from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { FormattedMessage as FormattedMessage7, useIntl as useIntl6 } from "react-intl";
import { jsx as jsx35, jsxs as jsxs14 } from "react/jsx-runtime";
function KeyboardShortcutDialog({
  onOpenChange
}) {
  const intl = useIntl6();
  const container = useContainer();
  const shortcuts = {
    Tools: [
      { label: intl.formatMessage({ id: "select" }), kbd: "1" },
      { label: intl.formatMessage({ id: "draw" }), kbd: "2" },
      { label: intl.formatMessage({ id: "eraser" }), kbd: "3" },
      { label: intl.formatMessage({ id: "rectangle" }), kbd: "4" },
      { label: intl.formatMessage({ id: "ellipse" }), kbd: "5" },
      { label: intl.formatMessage({ id: "triangle" }), kbd: "6" },
      { label: intl.formatMessage({ id: "line" }), kbd: "7" },
      { label: intl.formatMessage({ id: "arrow" }), kbd: "8" },
      { label: intl.formatMessage({ id: "text" }), kbd: "9" },
      { label: intl.formatMessage({ id: "sticky" }), kbd: "0" }
    ],
    View: [
      { label: intl.formatMessage({ id: "zoom.in" }), kbd: "#+" },
      { label: intl.formatMessage({ id: "zoom.out" }), kbd: "#-" },
      { label: `${intl.formatMessage({ id: "zoom.to" })} 100%`, kbd: "\u21E7+0" },
      { label: intl.formatMessage({ id: "zoom.to.fit" }), kbd: "\u21E7+1" },
      { label: intl.formatMessage({ id: "zoom.to.selection" }), kbd: "\u21E7+2" },
      { label: intl.formatMessage({ id: "preferences.dark.mode" }), kbd: "#\u21E7D" },
      { label: intl.formatMessage({ id: "preferences.focus.mode" }), kbd: "#." },
      { label: intl.formatMessage({ id: "preferences.show.grid" }), kbd: "#\u21E7G" }
    ],
    Transform: [
      { label: intl.formatMessage({ id: "flip.horizontal" }), kbd: "\u21E7H" },
      { label: intl.formatMessage({ id: "flip.vertical" }), kbd: "\u21E7V" },
      {
        label: `${intl.formatMessage({ id: "lock" })} / ${intl.formatMessage({ id: "unlock" })}`,
        kbd: "#\u21E7L"
      },
      {
        label: `${intl.formatMessage({ id: "move" })} ${intl.formatMessage({ id: "to.front" })}`,
        kbd: "\u21E7]"
      },
      {
        label: `${intl.formatMessage({ id: "move" })} ${intl.formatMessage({ id: "forward" })}`,
        kbd: "]"
      },
      {
        label: `${intl.formatMessage({ id: "move" })} ${intl.formatMessage({ id: "backward" })}`,
        kbd: "["
      },
      {
        label: `${intl.formatMessage({ id: "move" })} ${intl.formatMessage({ id: "back" })}`,
        kbd: "\u21E7["
      }
    ],
    File: [
      { label: intl.formatMessage({ id: "new.project" }), kbd: "#N" },
      { label: intl.formatMessage({ id: "open" }), kbd: "#O" },
      { label: intl.formatMessage({ id: "save" }), kbd: "#S" },
      { label: intl.formatMessage({ id: "save.as" }), kbd: "#\u21E7S" },
      { label: intl.formatMessage({ id: "upload.media" }), kbd: "#U" }
    ],
    Edit: [
      { label: intl.formatMessage({ id: "undo" }), kbd: "#Z" },
      { label: intl.formatMessage({ id: "redo" }), kbd: "#\u21E7Z" },
      { label: intl.formatMessage({ id: "cut" }), kbd: "#X" },
      { label: intl.formatMessage({ id: "copy" }), kbd: "#C" },
      { label: intl.formatMessage({ id: "paste" }), kbd: "#V" },
      { label: intl.formatMessage({ id: "select.all" }), kbd: "#A" },
      { label: intl.formatMessage({ id: "delete" }), kbd: "\u232B" },
      { label: intl.formatMessage({ id: "duplicate" }), kbd: "#D" }
    ]
  };
  return /* @__PURE__ */ jsxs14(Dialog2.Root, {
    onOpenChange,
    children: [
      /* @__PURE__ */ jsx35(Dialog2.Trigger, {
        asChild: true,
        children: /* @__PURE__ */ jsx35(RowButton, {
          id: "TD-HelpItem-Keyboard",
          variant: "wide",
          children: /* @__PURE__ */ jsx35(FormattedMessage7, {
            id: "keyboard.shortcuts"
          })
        })
      }),
      /* @__PURE__ */ jsxs14(Dialog2.Portal, {
        container: container.current,
        children: [
          /* @__PURE__ */ jsx35(DialogOverlay, {}),
          /* @__PURE__ */ jsxs14(DialogContent, {
            children: [
              /* @__PURE__ */ jsxs14(DialogTitle, {
                children: [
                  /* @__PURE__ */ jsx35(FormattedMessage7, {
                    id: "keyboard.shortcuts"
                  }),
                  /* @__PURE__ */ jsx35(Dialog2.Close, {
                    asChild: true,
                    children: /* @__PURE__ */ jsx35(DialogIconButton, {
                      children: /* @__PURE__ */ jsx35(Cross2Icon, {})
                    })
                  })
                ]
              }),
              /* @__PURE__ */ jsx35(StyledColumns, {
                bp: breakpoints,
                children: Object.entries(shortcuts).map(([key, value]) => /* @__PURE__ */ jsxs14(StyledSection, {
                  children: [
                    /* @__PURE__ */ jsx35(Label, {
                      children: /* @__PURE__ */ jsx35(FormattedMessage7, {
                        id: `menu.${key.toLocaleLowerCase()}`
                      })
                    }),
                    /* @__PURE__ */ jsx35(ContentItem, {
                      children: value.map((shortcut) => /* @__PURE__ */ jsxs14(StyledItem, {
                        children: [
                          shortcut.label,
                          /* @__PURE__ */ jsx35(Kbd, {
                            variant: "menu",
                            children: shortcut.kbd
                          })
                        ]
                      }, shortcut.label))
                    })
                  ]
                }, key))
              })
            ]
          })
        ]
      })
    ]
  });
}
var Label = styled("h3", {
  fontSize: "$2",
  color: "$text",
  fontFamily: "$ui",
  margin: 0,
  paddingBottom: "$5"
});
var StyledSection = styled("div", {
  breakInside: "avoid",
  paddingBottom: 24
});
var ContentItem = styled("ul", {
  listStyleType: "none",
  width: "100%",
  padding: 0,
  margin: 0
});
var StyledItem = styled("li", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: 32,
  minHeight: 32,
  width: "100%",
  outline: "none",
  color: "$text",
  fontFamily: "$ui",
  fontWeight: 400,
  fontSize: "$1",
  borderRadius: 4,
  userSelect: "none",
  WebkitUserSelect: "none",
  margin: 0,
  padding: "0 0"
});
var DialogContent = styled(Dialog2.Content, {
  borderRadius: 6,
  boxShadow: "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  maxWidth: "90vw",
  maxHeight: "74vh",
  overflowY: "auto",
  padding: 25,
  zIndex: 9999,
  pointerEvents: "all",
  background: "$panel",
  "&:focus": { outline: "none" }
});
var StyledColumns = styled("div", {
  maxWidth: "100%",
  width: "fit-content",
  height: "fit-content",
  overflowY: "auto",
  columnGap: 64,
  variants: {
    bp: {
      mobile: {
        columns: 1,
        [`& ${StyledSection}`]: {
          minWidth: "0px"
        }
      },
      small: {
        columns: 2,
        [`& ${StyledSection}`]: {
          minWidth: "200px"
        }
      },
      medium: {
        columns: 3
      },
      large: {
        columns: 3
      }
    }
  }
});
var DialogOverlay = styled(Dialog2.Overlay, {
  backgroundColor: "$overlay",
  position: "fixed",
  inset: 0,
  zIndex: 9998
});
var DialogIconButton = styled(IconButton, {
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 25,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$text",
  cursor: "pointer",
  "&:hover": { backgroundColor: "$hover" }
});
var DialogTitle = styled(Dialog2.Title, {
  fontFamily: "$body",
  fontSize: "$3",
  color: "$text",
  paddingBottom: 32,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: 0
});

// src/components/ToolsPanel/HelpPanel.tsx
import { Fragment as Fragment3, jsx as jsx36, jsxs as jsxs15 } from "react/jsx-runtime";
var isDebugModeSelector3 = (s) => s.settings.isDebugMode;
var dockPositionState3 = (s) => s.settings.dockPosition;
function HelpPanel() {
  const app = useTldrawApp();
  const isDebugMode = app.useStore(isDebugModeSelector3);
  const side = app.useStore(dockPositionState3);
  const [isKeyboardShortcutsOpen, setIsKeyboardShortcutsOpen] = React16.useState(false);
  return /* @__PURE__ */ jsxs15(Popover.Root, {
    children: [
      /* @__PURE__ */ jsx36(PopoverAnchor, {
        dir: "ltr",
        debug: isDebugMode,
        side,
        bp: breakpoints,
        children: /* @__PURE__ */ jsx36(Popover.Trigger, {
          dir: "ltr",
          asChild: true,
          children: /* @__PURE__ */ jsx36(HelpButton, {
            children: /* @__PURE__ */ jsx36(QuestionMarkIcon, {})
          })
        })
      }),
      /* @__PURE__ */ jsx36(Popover.Content, {
        dir: "ltr",
        align: "end",
        side: "top",
        alignOffset: 10,
        sideOffset: 8,
        asChild: true,
        children: /* @__PURE__ */ jsxs15(StyledContent4, {
          style: { visibility: isKeyboardShortcutsOpen ? "hidden" : "visible" },
          children: [
            /* @__PURE__ */ jsx36(LanguageMenuDropdown, {}),
            /* @__PURE__ */ jsx36(KeyboardShortcutDialog, {
              onOpenChange: setIsKeyboardShortcutsOpen
            }),
            /* @__PURE__ */ jsx36(Divider, {}),
            /* @__PURE__ */ jsx36(Links, {})
          ]
        })
      })
    ]
  });
}
var LanguageMenuDropdown = () => {
  return /* @__PURE__ */ jsxs15(DropdownMenu3.Root, {
    dir: "ltr",
    children: [
      /* @__PURE__ */ jsx36(DropdownMenu3.Trigger, {
        asChild: true,
        children: /* @__PURE__ */ jsx36(RowButton, {
          variant: "wide",
          hasArrow: true,
          children: /* @__PURE__ */ jsx36(FormattedMessage8, {
            id: "language"
          })
        })
      }),
      /* @__PURE__ */ jsx36(LanguageMenu, {})
    ]
  });
};
var linksData = [
  { id: "tldraw-beta", icon: ExternalLinkIcon2, url: "https://beta.tldraw.com" },
  { id: "github", icon: GitHubLogoIcon, url: "https://github.com/tldraw/tldraw" },
  { id: "twitter", icon: TwitterLogoIcon, url: "https://twitter.com/tldraw" },
  { id: "discord", icon: DiscordIcon, url: "https://discord.gg/SBBEVCA4PG" },
  {
    id: "become.a.sponsor",
    icon: HeartFilledIcon,
    url: "https://github.com/sponsors/steveruizok"
  }
];
var Links = () => {
  return /* @__PURE__ */ jsx36(Fragment3, {
    children: linksData.map((item) => /* @__PURE__ */ jsx36("a", {
      href: item.url,
      target: "_blank",
      rel: "nofollow",
      children: /* @__PURE__ */ jsxs15(RowButton, {
        id: `TD-Link-${item.id}`,
        variant: "wide",
        children: [
          /* @__PURE__ */ jsx36(FormattedMessage8, {
            id: item.id
          }),
          /* @__PURE__ */ jsx36(SmallIcon, {
            children: /* @__PURE__ */ jsx36(item.icon, {})
          })
        ]
      })
    }, item.id))
  });
};
var HelpButton = styled("button", {
  width: 32,
  height: 32,
  borderRadius: "100%",
  display: "flex",
  padding: 0,
  justifyContent: "center",
  alignItems: "center",
  outline: "none",
  backgroundColor: "$panel",
  cursor: "pointer",
  boxShadow: "$panel",
  border: "1px solid $panelContrast",
  color: "$text",
  "& svg": {
    height: 12,
    width: 12
  }
});
var StyledContent4 = styled(MenuContent, {
  width: "fit-content",
  height: "fit-content",
  minWidth: 200,
  maxHeight: 380,
  overflowY: "auto",
  "& *": {
    boxSizing: "border-box"
  },
  "& a": {
    outline: "none"
  },
  variants: {
    variant: {
      horizontal: {
        flexDirection: "row"
      },
      menu: {
        minWidth: 128
      }
    }
  }
});
var PopoverAnchor = styled(Popover.Anchor, {
  position: "absolute",
  zIndex: 999,
  right: 10,
  bottom: 10,
  width: 32,
  height: 32,
  variants: {
    debug: {
      true: {},
      false: {}
    },
    bp: {
      mobile: {
        bottom: 64
      },
      small: {
        bottom: 20
      },
      medium: {},
      large: {}
    },
    side: {
      top: {},
      left: {},
      right: {},
      bottom: {}
    }
  },
  compoundVariants: [
    {
      debug: true,
      css: {
        bottom: 50
      }
    },
    {
      bp: "mobile",
      side: "bottom",
      debug: true,
      css: {
        bottom: 104
      }
    },
    {
      bp: "small",
      side: "bottom",
      debug: true,
      css: {
        bottom: 60
      }
    },
    {
      bp: "small",
      side: "bottom",
      debug: true,
      css: {
        bottom: 60
      }
    }
  ]
});

// src/components/ToolsPanel/PrimaryTools.tsx
import {
  ArrowTopRightIcon,
  CursorArrowIcon,
  ImageIcon,
  Pencil1Icon as Pencil1Icon2,
  Pencil2Icon,
  TextIcon
} from "@radix-ui/react-icons";
import * as React18 from "react";
import { useIntl as useIntl8 } from "react-intl";

// src/components/Primitives/Panel/Panel.tsx
var Panel = styled("div", {
  backgroundColor: "$panel",
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  boxShadow: "$panel",
  padding: "$2",
  border: "1px solid $panelContrast",
  gap: 0,
  overflow: "hidden",
  variants: {
    side: {
      center: {
        borderRadius: 9
      },
      left: {
        padding: 0,
        borderTop: 0,
        borderLeft: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 9,
        borderBottomLeftRadius: 0
      },
      right: {
        padding: 0,
        borderTop: 0,
        borderRight: 0,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 9,
        borderBottomRightRadius: 0
      }
    }
  },
  "& hr": {
    height: 10,
    width: "100%",
    backgroundColor: "red",
    border: "none"
  }
});

// src/components/ToolsPanel/ShapesMenu.tsx
import * as DropdownMenu4 from "@radix-ui/react-dropdown-menu";
import { CircleIcon as CircleIcon2, SquareIcon, VercelLogoIcon } from "@radix-ui/react-icons";
import * as React17 from "react";
import { useIntl as useIntl7 } from "react-intl";
import { jsx as jsx37, jsxs as jsxs16 } from "react/jsx-runtime";
var shapeShapes = [
  "rectangle" /* Rectangle */,
  "ellipse" /* Ellipse */,
  "triangle" /* Triangle */,
  "line" /* Line */
];
var shapeShapeIcons = {
  ["rectangle" /* Rectangle */]: /* @__PURE__ */ jsx37(SquareIcon, {}),
  ["ellipse" /* Ellipse */]: /* @__PURE__ */ jsx37(CircleIcon2, {}),
  ["triangle" /* Triangle */]: /* @__PURE__ */ jsx37(VercelLogoIcon, {}),
  ["line" /* Line */]: /* @__PURE__ */ jsx37(LineIcon, {})
};
var dockPositionState4 = (s) => s.settings.dockPosition;
var ShapesMenu = React17.memo(function ShapesMenu2({
  activeTool,
  isToolLocked
}) {
  const app = useTldrawApp();
  const intl = useIntl7();
  const dockPosition = app.useStore(dockPositionState4);
  const [lastActiveTool, setLastActiveTool] = React17.useState("rectangle" /* Rectangle */);
  React17.useEffect(() => {
    if (shapeShapes.includes(activeTool) && lastActiveTool !== activeTool) {
      setLastActiveTool(activeTool);
    }
  }, [activeTool]);
  const selectShapeTool = React17.useCallback(() => {
    app.selectTool(lastActiveTool);
  }, [activeTool, app]);
  const handleDoubleClick = React17.useCallback(() => {
    app.toggleToolLock();
  }, [app]);
  const handleKeyDown = React17.useCallback((e) => {
    if (e.key === " ") {
      if (app.shiftKey) {
        e.preventDefault();
      }
    }
  }, []);
  const isActive = shapeShapes.includes(activeTool);
  const contentSide = dockPosition === "bottom" || dockPosition === "top" ? "top" : dockPosition;
  const panelStyle = dockPosition === "bottom" || dockPosition === "top" ? "row" : "column";
  return /* @__PURE__ */ jsxs16(DropdownMenu4.Root, {
    dir: "ltr",
    onOpenChange: selectShapeTool,
    children: [
      /* @__PURE__ */ jsx37(DropdownMenu4.Trigger, {
        dir: "ltr",
        asChild: true,
        id: "TD-PrimaryTools-Shapes",
        children: /* @__PURE__ */ jsx37(ToolButton, {
          disabled: isActive && app.shiftKey,
          variant: "primary",
          onDoubleClick: handleDoubleClick,
          isToolLocked: isActive && isToolLocked,
          isActive,
          onKeyDown: handleKeyDown,
          "aria-label": intl.formatMessage({ id: "shapes" }),
          children: shapeShapeIcons[lastActiveTool]
        })
      }),
      /* @__PURE__ */ jsx37(DropdownMenu4.Content, {
        asChild: true,
        side: contentSide,
        sideOffset: 12,
        children: /* @__PURE__ */ jsx37(Panel, {
          side: "center",
          style: { flexDirection: panelStyle },
          children: shapeShapes.map((shape, i) => /* @__PURE__ */ jsx37(Tooltip, {
            label: intl.formatMessage({ id: shape }),
            kbd: (4 + i).toString(),
            id: `TD-PrimaryTools-Shapes-${shape}`,
            children: /* @__PURE__ */ jsx37(DropdownMenu4.Item, {
              asChild: true,
              children: /* @__PURE__ */ jsx37(ToolButton, {
                "aria-label": intl.formatMessage({ id: shape }),
                variant: "primary",
                onClick: () => {
                  app.selectTool(shape);
                  setLastActiveTool(shape);
                },
                children: shapeShapeIcons[shape]
              })
            })
          }, shape))
        })
      })
    ]
  });
});

// src/components/ToolsPanel/PrimaryTools.tsx
import { jsx as jsx38, jsxs as jsxs17 } from "react/jsx-runtime";
var activeToolSelector = (s) => s.appState.activeTool;
var toolLockedSelector = (s) => s.appState.isToolLocked;
var dockPositionState5 = (s) => s.settings.dockPosition;
var PrimaryTools = React18.memo(function PrimaryTools2() {
  const app = useTldrawApp();
  const intl = useIntl8();
  const activeTool = app.useStore(activeToolSelector);
  const isToolLocked = app.useStore(toolLockedSelector);
  const dockPosition = app.useStore(dockPositionState5);
  const selectSelectTool = React18.useCallback(() => {
    app.selectTool("select");
  }, [app]);
  const selectEraseTool = React18.useCallback(() => {
    app.selectTool("erase");
  }, [app]);
  const selectDrawTool = React18.useCallback(() => {
    app.selectTool("draw" /* Draw */);
  }, [app]);
  const selectArrowTool = React18.useCallback(() => {
    app.selectTool("arrow" /* Arrow */);
  }, [app]);
  const selectTextTool = React18.useCallback(() => {
    app.selectTool("text" /* Text */);
  }, [app]);
  const selectStickyTool = React18.useCallback(() => {
    app.selectTool("sticky" /* Sticky */);
  }, [app]);
  const uploadMedias = React18.useCallback(() => __async(this, null, function* () {
    app.openAsset();
  }), [app]);
  const panelStyle = dockPosition === "bottom" || dockPosition === "top" ? "row" : "column";
  return /* @__PURE__ */ jsxs17(StyledPanel, {
    side: "center",
    id: "TD-PrimaryTools",
    style: { flexDirection: panelStyle },
    bp: breakpoints,
    children: [
      /* @__PURE__ */ jsx38(ToolButtonWithTooltip, {
        kbd: "1",
        label: intl.formatMessage({ id: "select" }),
        onClick: selectSelectTool,
        isActive: activeTool === "select",
        variant: "primary",
        id: "TD-PrimaryTools-CursorArrow",
        children: /* @__PURE__ */ jsx38(CursorArrowIcon, {})
      }),
      /* @__PURE__ */ jsx38(ToolButtonWithTooltip, {
        kbd: "2",
        label: intl.formatMessage({ id: "draw" }),
        onClick: selectDrawTool,
        isActive: activeTool === "draw" /* Draw */,
        variant: "primary",
        id: "TD-PrimaryTools-Pencil",
        children: /* @__PURE__ */ jsx38(Pencil1Icon2, {})
      }),
      /* @__PURE__ */ jsx38(ToolButtonWithTooltip, {
        kbd: "3",
        label: intl.formatMessage({ id: "eraser" }),
        onClick: selectEraseTool,
        isActive: activeTool === "erase",
        variant: "primary",
        id: "TD-PrimaryTools-Eraser",
        children: /* @__PURE__ */ jsx38(EraserIcon, {})
      }),
      /* @__PURE__ */ jsx38(ShapesMenu, {
        activeTool,
        isToolLocked
      }),
      /* @__PURE__ */ jsx38(ToolButtonWithTooltip, {
        kbd: "8",
        label: intl.formatMessage({ id: "arrow" }),
        onClick: selectArrowTool,
        isLocked: isToolLocked,
        variant: "primary",
        isActive: activeTool === "arrow" /* Arrow */,
        id: "TD-PrimaryTools-ArrowTopRight",
        children: /* @__PURE__ */ jsx38(ArrowTopRightIcon, {})
      }),
      /* @__PURE__ */ jsx38(ToolButtonWithTooltip, {
        kbd: "9",
        label: intl.formatMessage({ id: "text" }),
        onClick: selectTextTool,
        isLocked: isToolLocked,
        variant: "primary",
        isActive: activeTool === "text" /* Text */,
        id: "TD-PrimaryTools-Text",
        children: /* @__PURE__ */ jsx38(TextIcon, {})
      }),
      /* @__PURE__ */ jsx38(ToolButtonWithTooltip, {
        kbd: "0",
        label: intl.formatMessage({ id: "sticky" }),
        onClick: selectStickyTool,
        isActive: activeTool === "sticky" /* Sticky */,
        variant: "primary",
        id: "TD-PrimaryTools-Pencil2",
        children: /* @__PURE__ */ jsx38(Pencil2Icon, {})
      }),
      /* @__PURE__ */ jsx38(ToolButtonWithTooltip, {
        label: intl.formatMessage({ id: "image" }),
        onClick: uploadMedias,
        id: "TD-PrimaryTools-Image",
        variant: "primary",
        children: /* @__PURE__ */ jsx38(ImageIcon, {})
      })
    ]
  });
});
var StyledPanel = styled(Panel, {
  variants: {
    bp: {
      mobile: {
        padding: "$0",
        borderRadius: "10px"
      },
      small: {
        padding: "$2"
      }
    }
  }
});

// src/components/ToolsPanel/StatusBar.tsx
import { jsx as jsx39, jsxs as jsxs18 } from "react/jsx-runtime";
var statusSelector = (s) => s.appState.status;
var activeToolSelector2 = (s) => s.appState.activeTool;
function StatusBar() {
  const app = useTldrawApp();
  const status = app.useStore(statusSelector);
  const activeTool = app.useStore(activeToolSelector2);
  return /* @__PURE__ */ jsx39(StyledStatusBar, {
    bp: breakpoints,
    id: "TD-StatusBar",
    children: /* @__PURE__ */ jsxs18(StyledSection2, {
      children: [
        activeTool,
        " | ",
        status
      ]
    })
  });
}
var StyledStatusBar = styled("div", {
  height: 40,
  userSelect: "none",
  WebkitUserSelect: "none",
  borderTop: "1px solid $panelContrast",
  gridArea: "status",
  display: "flex",
  color: "$text",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "$panel",
  gap: 8,
  fontFamily: "$ui",
  fontSize: "$0",
  padding: "0 16px",
  variants: {
    bp: {
      small: {
        fontSize: "$1"
      }
    }
  }
});
var StyledSection2 = styled("div", {
  whiteSpace: "nowrap",
  overflow: "hidden"
});

// src/components/ToolsPanel/ToolsPanel.tsx
import { Fragment as Fragment4, jsx as jsx40, jsxs as jsxs19 } from "react/jsx-runtime";
var isDebugModeSelector4 = (s) => s.settings.isDebugMode;
var dockPositionState6 = (s) => s.settings.dockPosition;
var ToolsPanel = React19.memo(function ToolsPanel2({ onBlur }) {
  const app = useTldrawApp();
  const side = app.useStore(dockPositionState6);
  const isDebugMode = app.useStore(isDebugModeSelector4);
  return /* @__PURE__ */ jsxs19(Fragment4, {
    children: [
      /* @__PURE__ */ jsx40(StyledToolsPanelContainer, {
        side,
        onBlur,
        bp: breakpoints,
        debug: isDebugMode,
        children: /* @__PURE__ */ jsxs19(StyledCenterWrap, {
          id: "TD-Tools",
          children: [
            /* @__PURE__ */ jsx40(BackToContent, {}),
            /* @__PURE__ */ jsxs19(StyledPrimaryTools, {
              orientation: side === "bottom" || side === "top" ? "horizontal" : "vertical",
              children: [
                /* @__PURE__ */ jsx40(ActionButton, {}),
                /* @__PURE__ */ jsx40(PrimaryTools, {}),
                /* @__PURE__ */ jsx40(DeleteButton, {})
              ]
            })
          ]
        })
      }),
      /* @__PURE__ */ jsx40(HelpPanel, {}),
      isDebugMode && /* @__PURE__ */ jsx40(StyledStatusWrap, {
        children: /* @__PURE__ */ jsx40(StatusBar, {})
      })
    ]
  });
});
var StyledToolsPanelContainer = styled("div", {
  position: "absolute",
  width: "100%",
  minWidth: 0,
  maxWidth: "100%",
  height: 64,
  gap: "$4",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 200,
  overflow: "hidden",
  pointerEvents: "none",
  "& > div > *": {
    pointerEvents: "all"
  },
  variants: {
    debug: {
      true: {},
      false: {}
    },
    bp: {
      mobile: {},
      small: {},
      medium: {},
      large: {}
    },
    side: {
      top: {
        width: "100%",
        height: 64,
        left: 0,
        right: 0,
        top: 45
      },
      right: { width: 64, height: "100%", top: 0, right: 0 },
      bottom: {
        width: "100%",
        left: 0,
        right: 0,
        bottom: 4
      },
      left: { width: 64, height: "100%", left: 0 }
    }
  },
  compoundVariants: [
    {
      side: "top",
      bp: "large",
      css: {
        top: 0
      }
    },
    {
      side: "bottom",
      debug: true,
      css: {
        bottom: 44
      }
    }
  ]
});
var StyledCenterWrap = styled("div", {
  display: "flex",
  width: "fit-content",
  height: "fit-content",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "$4"
});
var StyledStatusWrap = styled("div", {
  position: "absolute",
  bottom: "0px",
  left: "0px",
  right: "0px",
  height: "40px",
  width: "100%",
  maxWidth: "100%"
});
var StyledPrimaryTools = styled("div", {
  position: "relative",
  display: "flex",
  alignItems: "center",
  height: "fit-content",
  gap: "$3",
  variants: {
    orientation: {
      horizontal: {
        flexDirection: "row"
      },
      vertical: {
        flexDirection: "column"
      }
    }
  }
});

// src/components/TopPanel/TopPanel.tsx
import * as React45 from "react";
import { useIntl as useIntl14 } from "react-intl";

// src/components/TopPanel/Menu/Menu.tsx
import * as DropdownMenu5 from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { supported } from "browser-fs-access";
import * as React21 from "react";
import { FormattedMessage as FormattedMessage10, useIntl as useIntl10 } from "react-intl";

// src/components/TopPanel/PreferencesMenu/PreferencesMenu.tsx
import * as React20 from "react";
import { FormattedMessage as FormattedMessage9, useIntl as useIntl9 } from "react-intl";
import { jsx as jsx41, jsxs as jsxs20 } from "react/jsx-runtime";
var settingsSelector = (s) => s.settings;
var DockPosition = ["bottom", "left", "right", "top"];
function PreferencesMenu() {
  const app = useTldrawApp();
  const intl = useIntl9();
  const settings = app.useStore(settingsSelector);
  const toggleDebugMode = React20.useCallback(() => {
    app.setSetting("isDebugMode", (v) => !v);
  }, [app]);
  const toggleDarkMode = React20.useCallback(() => {
    app.setSetting("isDarkMode", (v) => !v);
  }, [app]);
  const toggleFocusMode = React20.useCallback(() => {
    app.setSetting("isFocusMode", (v) => !v);
  }, [app]);
  const toggleGrid = React20.useCallback(() => {
    app.setSetting("showGrid", (v) => !v);
  }, [app]);
  const toggleKeepStyleMenuOpen = React20.useCallback(() => {
    app.setSetting("keepStyleMenuOpen", (v) => !v);
  }, [app]);
  const toggleCadSelectMode = React20.useCallback(() => {
    app.setSetting("isCadSelectMode", (v) => !v);
  }, [app]);
  const handleChangeDockPosition = React20.useCallback(
    (position) => {
      app.setSetting("dockPosition", position);
    },
    [app]
  );
  const selectExportBackground = React20.useCallback(
    (background) => {
      app.setSetting("exportBackground", background);
    },
    [app]
  );
  return /* @__PURE__ */ jsxs20(DMSubMenu, {
    label: intl.formatMessage({ id: "menu.preferences" }),
    id: "TD-MenuItem-Preferences",
    children: [
      /* @__PURE__ */ jsx41(DMCheckboxItem, {
        checked: settings.isDarkMode,
        onCheckedChange: toggleDarkMode,
        kbd: "#\u21E7D",
        id: "TD-MenuItem-Preferences-Dark_Mode",
        ariaLabel: intl.formatMessage({ id: "preferences.dark.mode" }),
        children: /* @__PURE__ */ jsx41(FormattedMessage9, {
          id: "preferences.dark.mode"
        })
      }),
      /* @__PURE__ */ jsx41(DMCheckboxItem, {
        checked: settings.isFocusMode,
        onCheckedChange: toggleFocusMode,
        kbd: "#.",
        id: "TD-MenuItem-Preferences-Focus_Mode",
        ariaLabel: intl.formatMessage({ id: "preferences.focus.mode" }),
        children: /* @__PURE__ */ jsx41(FormattedMessage9, {
          id: "preferences.focus.mode"
        })
      }),
      /* @__PURE__ */ jsx41(DMCheckboxItem, {
        checked: settings.isDebugMode,
        onCheckedChange: toggleDebugMode,
        id: "TD-MenuItem-Preferences-Debug_Mode",
        ariaLabel: intl.formatMessage({ id: "preferences.debug.mode" }),
        children: /* @__PURE__ */ jsx41(FormattedMessage9, {
          id: "preferences.debug.mode"
        })
      }),
      /* @__PURE__ */ jsx41(Divider, {}),
      /* @__PURE__ */ jsx41(DMCheckboxItem, {
        checked: settings.showGrid,
        onCheckedChange: toggleGrid,
        kbd: "#\u21E7G",
        id: "TD-MenuItem-Preferences-Grid",
        ariaLabel: intl.formatMessage({ id: "preferences.show.grid" }),
        children: /* @__PURE__ */ jsx41(FormattedMessage9, {
          id: "preferences.show.grid"
        })
      }),
      /* @__PURE__ */ jsx41(DMCheckboxItem, {
        checked: settings.isCadSelectMode,
        onCheckedChange: toggleCadSelectMode,
        id: "TD-MenuItem-Preferences-Cad_Selection",
        ariaLabel: intl.formatMessage({ id: "preferences.use.cad.selection" }),
        children: /* @__PURE__ */ jsx41(FormattedMessage9, {
          id: "preferences.use.cad.selection"
        })
      }),
      /* @__PURE__ */ jsx41(DMCheckboxItem, {
        checked: settings.keepStyleMenuOpen,
        onCheckedChange: toggleKeepStyleMenuOpen,
        id: "TD-MenuItem-Preferences-Style_menu",
        ariaLabel: intl.formatMessage({ id: "preferences.keep.stylemenu.open" }),
        children: /* @__PURE__ */ jsx41(FormattedMessage9, {
          id: "preferences.keep.stylemenu.open"
        })
      }),
      /* @__PURE__ */ jsx41(DMSubMenu, {
        label: intl.formatMessage({ id: "dock.position" }),
        children: DockPosition.map((position) => /* @__PURE__ */ jsx41(DMCheckboxItem, {
          checked: settings.dockPosition === position,
          onCheckedChange: () => handleChangeDockPosition(position),
          id: `TD-MenuItem-DockPosition-${position}`,
          ariaLabel: `DockPosition-${position}`,
          children: /* @__PURE__ */ jsx41(StyledText, {
            children: /* @__PURE__ */ jsx41(FormattedMessage9, {
              id: position
            })
          })
        }, position))
      }),
      /* @__PURE__ */ jsx41(DMSubMenu, {
        label: intl.formatMessage({ id: "export.background" }),
        children: Object.values(TDExportBackground).map((exportBackground) => /* @__PURE__ */ jsx41(DMCheckboxItem, {
          checked: settings.exportBackground === exportBackground,
          onCheckedChange: () => selectExportBackground(exportBackground),
          id: `TD-MenuItem-ExportBackground-${exportBackground}`,
          ariaLabel: `ExportBackground-${exportBackground}`,
          children: /* @__PURE__ */ jsx41(StyledText, {
            children: /* @__PURE__ */ jsx41(FormattedMessage9, {
              id: exportBackground
            })
          })
        }, exportBackground))
      })
    ]
  });
}
var StyledText = styled("span", {
  textTransform: "capitalize"
});

// src/components/TopPanel/Menu/Menu.tsx
import { Fragment as Fragment5, jsx as jsx42, jsxs as jsxs21 } from "react/jsx-runtime";
var numberOfSelectedIdsSelector2 = (s) => {
  return s.document.pageStates[s.appState.currentPageId].selectedIds.length;
};
var disableAssetsSelector = (s) => {
  return s.appState.disableAssets;
};
var Menu = React21.memo(function Menu2({ readOnly }) {
  const app = useTldrawApp();
  const intl = useIntl10();
  const [openDialog, setOpenDialog] = React21.useState(false);
  const numberOfSelectedIds = app.useStore(numberOfSelectedIdsSelector2);
  const disableAssets = app.useStore(disableAssetsSelector);
  const [_, setForce] = React21.useState(0);
  React21.useEffect(() => setForce(1), []);
  const { onNewProject, onOpenProject, onSaveProject, onSaveProjectAs } = useFileSystemHandlers();
  const handleSaveProjectAs = React21.useCallback(() => {
    if (!supported) {
      setOpenDialog(true);
    } else {
      app.saveProjectAs();
    }
  }, [app]);
  const handleDelete = React21.useCallback(() => {
    app.delete();
  }, [app]);
  const handleCopySVG = React21.useCallback(() => {
    app.copyImage("svg" /* SVG */, { scale: 1, quality: 1, transparentBackground: false });
  }, [app]);
  const handleCopyPNG = React21.useCallback(() => {
    app.copyImage("png" /* PNG */, { scale: 2, quality: 1, transparentBackground: true });
  }, [app]);
  const handleExportPNG = React21.useCallback(() => __async(this, null, function* () {
    app.exportImage("png" /* PNG */, { scale: 2, quality: 1 });
  }), [app]);
  const handleExportJPG = React21.useCallback(() => __async(this, null, function* () {
    app.exportImage("jpeg" /* JPG */, { scale: 2, quality: 1 });
  }), [app]);
  const handleExportWEBP = React21.useCallback(() => __async(this, null, function* () {
    app.exportImage("webp" /* WEBP */, { scale: 2, quality: 1 });
  }), [app]);
  const handleExportSVG = React21.useCallback(() => __async(this, null, function* () {
    app.exportImage("svg" /* SVG */, { scale: 2, quality: 1 });
  }), [app]);
  const handleCopyJSON = React21.useCallback(() => __async(this, null, function* () {
    app.copyJson();
  }), [app]);
  const handleExportJSON = React21.useCallback(() => __async(this, null, function* () {
    app.exportJson();
  }), [app]);
  const handleCut = React21.useCallback(() => {
    app.cut();
  }, [app]);
  const handleCopy = React21.useCallback(() => {
    app.copy();
  }, [app]);
  const handlePaste = React21.useCallback(() => {
    app.paste();
  }, [app]);
  const handleSelectAll = React21.useCallback(() => {
    app.selectAll();
  }, [app]);
  const handleSelectNone = React21.useCallback(() => {
    app.selectNone();
  }, [app]);
  const handleUploadMedia = React21.useCallback(() => {
    app.openAsset();
  }, [app]);
  const handleZoomTo100 = React21.useCallback(() => {
    app.zoomTo(1);
  }, [app]);
  const showFileMenu = app.callbacks.onNewProject || app.callbacks.onOpenProject || app.callbacks.onSaveProject || app.callbacks.onSaveProjectAs || app.callbacks.onExport;
  const hasSelection = numberOfSelectedIds > 0;
  return /* @__PURE__ */ jsxs21(Fragment5, {
    children: [
      /* @__PURE__ */ jsxs21(DropdownMenu5.Root, {
        dir: "ltr",
        children: [
          /* @__PURE__ */ jsx42(DMTriggerIcon, {
            id: "TD-MenuIcon",
            children: /* @__PURE__ */ jsx42(HamburgerMenuIcon, {})
          }),
          /* @__PURE__ */ jsxs21(DMContent, {
            variant: "menu",
            id: "TD-Menu",
            side: "bottom",
            align: "start",
            sideOffset: 4,
            alignOffset: 4,
            children: [
              showFileMenu && /* @__PURE__ */ jsxs21(DMSubMenu, {
                label: `${intl.formatMessage({ id: "menu.file" })}...`,
                id: "TD-MenuItem-File",
                children: [
                  app.callbacks.onNewProject && /* @__PURE__ */ jsx42(DMItem, {
                    onClick: onNewProject,
                    kbd: "#N",
                    id: "TD-MenuItem-File-New_Project",
                    children: /* @__PURE__ */ jsx42(FormattedMessage10, {
                      id: "new.project"
                    })
                  }),
                  app.callbacks.onOpenProject && /* @__PURE__ */ jsxs21(DMItem, {
                    onClick: onOpenProject,
                    kbd: "#O",
                    id: "TD-MenuItem-File-Open",
                    children: [
                      /* @__PURE__ */ jsx42(FormattedMessage10, {
                        id: "open"
                      }),
                      "..."
                    ]
                  }),
                  app.callbacks.onSaveProject && /* @__PURE__ */ jsx42(DMItem, {
                    onClick: onSaveProject,
                    kbd: "#S",
                    id: "TD-MenuItem-File-Save",
                    children: /* @__PURE__ */ jsx42(FormattedMessage10, {
                      id: "save"
                    })
                  }),
                  app.callbacks.onSaveProjectAs && /* @__PURE__ */ jsxs21(DMItem, {
                    onClick: handleSaveProjectAs,
                    kbd: "#\u21E7S",
                    id: "TD-MenuItem-File-Save_As",
                    children: [
                      /* @__PURE__ */ jsx42(FormattedMessage10, {
                        id: "save.as"
                      }),
                      "..."
                    ]
                  }),
                  /* @__PURE__ */ jsxs21(DMSubMenu, {
                    label: `${intl.formatMessage({ id: "export.as" })}...`,
                    size: "small",
                    id: "TD-MenuItem-Export",
                    children: [
                      /* @__PURE__ */ jsx42(DMItem, {
                        onClick: handleExportSVG,
                        id: "TD-MenuItem-Export-SVG",
                        children: "SVG"
                      }),
                      /* @__PURE__ */ jsx42(DMItem, {
                        onClick: handleExportPNG,
                        id: "TD-MenuItem-Export-PNG",
                        children: "PNG"
                      }),
                      /* @__PURE__ */ jsx42(DMItem, {
                        onClick: handleExportJPG,
                        id: "TD-MenuItem-Export-JPG",
                        children: "JPG"
                      }),
                      /* @__PURE__ */ jsx42(DMItem, {
                        onClick: handleExportWEBP,
                        id: "TD-MenuItem-Export-WEBP",
                        children: "WEBP"
                      }),
                      /* @__PURE__ */ jsx42(DMItem, {
                        onClick: handleExportJSON,
                        id: "TD-MenuItem-Export-JSON",
                        children: "JSON"
                      })
                    ]
                  }),
                  !disableAssets && /* @__PURE__ */ jsxs21(Fragment5, {
                    children: [
                      /* @__PURE__ */ jsx42(Divider, {}),
                      /* @__PURE__ */ jsx42(DMItem, {
                        onClick: handleUploadMedia,
                        kbd: "#U",
                        id: "TD-MenuItem-File-Upload_Media",
                        children: /* @__PURE__ */ jsx42(FormattedMessage10, {
                          id: "upload.media"
                        })
                      })
                    ]
                  })
                ]
              }),
              /* @__PURE__ */ jsxs21(DMSubMenu, {
                label: `${intl.formatMessage({ id: "menu.edit" })}...`,
                id: "TD-MenuItem-Edit",
                children: [
                  /* @__PURE__ */ jsx42(DMItem, {
                    onSelect: preventEvent,
                    onClick: app.undo,
                    disabled: readOnly,
                    kbd: "#Z",
                    id: "TD-MenuItem-Edit-Undo",
                    children: /* @__PURE__ */ jsx42(FormattedMessage10, {
                      id: "undo"
                    })
                  }),
                  /* @__PURE__ */ jsx42(DMItem, {
                    onSelect: preventEvent,
                    onClick: app.redo,
                    disabled: readOnly,
                    kbd: "#\u21E7Z",
                    id: "TD-MenuItem-Edit-Redo",
                    children: /* @__PURE__ */ jsx42(FormattedMessage10, {
                      id: "redo"
                    })
                  }),
                  /* @__PURE__ */ jsx42(Divider, {}),
                  /* @__PURE__ */ jsx42(DMItem, {
                    onSelect: preventEvent,
                    disabled: !hasSelection || readOnly,
                    onClick: handleCut,
                    kbd: "#X",
                    id: "TD-MenuItem-Edit-Cut",
                    children: /* @__PURE__ */ jsx42(FormattedMessage10, {
                      id: "cut"
                    })
                  }),
                  /* @__PURE__ */ jsx42(DMItem, {
                    onSelect: preventEvent,
                    disabled: !hasSelection,
                    onClick: handleCopy,
                    kbd: "#C",
                    id: "TD-MenuItem-Edit-Copy",
                    children: /* @__PURE__ */ jsx42(FormattedMessage10, {
                      id: "copy"
                    })
                  }),
                  /* @__PURE__ */ jsx42(DMItem, {
                    onSelect: preventEvent,
                    onClick: handlePaste,
                    kbd: "#V",
                    id: "TD-MenuItem-Edit-Paste",
                    children: /* @__PURE__ */ jsx42(FormattedMessage10, {
                      id: "paste"
                    })
                  }),
                  /* @__PURE__ */ jsx42(Divider, {}),
                  /* @__PURE__ */ jsxs21(DMSubMenu, {
                    label: `${intl.formatMessage({ id: "copy.as" })}...`,
                    size: "small",
                    id: "TD-MenuItem-Copy-As",
                    children: [
                      /* @__PURE__ */ jsx42(DMItem, {
                        onClick: handleCopySVG,
                        id: "TD-MenuItem-Copy-as-SVG",
                        children: "SVG"
                      }),
                      /* @__PURE__ */ jsx42(DMItem, {
                        onClick: handleCopyPNG,
                        id: "TD-MenuItem-Copy-As-PNG",
                        children: "PNG"
                      }),
                      /* @__PURE__ */ jsx42(DMItem, {
                        onClick: handleCopyJSON,
                        id: "TD-MenuItem-Copy_as_JSON",
                        children: "JSON"
                      })
                    ]
                  }),
                  /* @__PURE__ */ jsx42(Divider, {}),
                  /* @__PURE__ */ jsx42(DMItem, {
                    onSelect: preventEvent,
                    onClick: handleSelectAll,
                    kbd: "#A",
                    id: "TD-MenuItem-Select_All",
                    children: /* @__PURE__ */ jsx42(FormattedMessage10, {
                      id: "select.all"
                    })
                  }),
                  /* @__PURE__ */ jsx42(DMItem, {
                    onSelect: preventEvent,
                    disabled: !hasSelection,
                    onClick: handleSelectNone,
                    id: "TD-MenuItem-Select_None",
                    children: /* @__PURE__ */ jsx42(FormattedMessage10, {
                      id: "select.none"
                    })
                  }),
                  /* @__PURE__ */ jsx42(Divider, {}),
                  /* @__PURE__ */ jsx42(DMItem, {
                    onSelect: handleDelete,
                    disabled: !hasSelection,
                    kbd: "\u232B",
                    id: "TD-MenuItem-Delete",
                    children: /* @__PURE__ */ jsx42(FormattedMessage10, {
                      id: "delete"
                    })
                  })
                ]
              }),
              /* @__PURE__ */ jsxs21(DMSubMenu, {
                label: intl.formatMessage({ id: "menu.view" }),
                id: "TD-MenuItem-Edit",
                children: [
                  /* @__PURE__ */ jsx42(DMItem, {
                    onSelect: preventEvent,
                    onClick: app.zoomIn,
                    kbd: "#+",
                    id: "TD-MenuItem-View-ZoomIn",
                    children: /* @__PURE__ */ jsx42(FormattedMessage10, {
                      id: "zoom.in"
                    })
                  }),
                  /* @__PURE__ */ jsx42(DMItem, {
                    onSelect: preventEvent,
                    onClick: app.zoomOut,
                    kbd: "#-",
                    id: "TD-MenuItem-View-ZoomOut",
                    children: /* @__PURE__ */ jsx42(FormattedMessage10, {
                      id: "zoom.out"
                    })
                  }),
                  /* @__PURE__ */ jsxs21(DMItem, {
                    onSelect: preventEvent,
                    onClick: handleZoomTo100,
                    kbd: "\u21E7+0",
                    id: "TD-MenuItem-View-ZoomTo100",
                    children: [
                      /* @__PURE__ */ jsx42(FormattedMessage10, {
                        id: "zoom.to"
                      }),
                      " 100%"
                    ]
                  }),
                  /* @__PURE__ */ jsx42(DMItem, {
                    onSelect: preventEvent,
                    onClick: app.zoomToFit,
                    kbd: "\u21E7+1",
                    id: "TD-MenuItem-View-ZoomToFit",
                    children: /* @__PURE__ */ jsx42(FormattedMessage10, {
                      id: "zoom.to.fit"
                    })
                  }),
                  /* @__PURE__ */ jsx42(DMItem, {
                    onSelect: preventEvent,
                    onClick: app.zoomToSelection,
                    kbd: "\u21E7+2",
                    id: "TD-MenuItem-View-ZoomToSelection",
                    children: /* @__PURE__ */ jsx42(FormattedMessage10, {
                      id: "zoom.to.selection"
                    })
                  })
                ]
              }),
              /* @__PURE__ */ jsx42(Divider, {}),
              /* @__PURE__ */ jsx42(PreferencesMenu, {})
            ]
          })
        ]
      }),
      /* @__PURE__ */ jsx42(FilenameDialog, {
        isOpen: openDialog,
        onClose: () => setOpenDialog(false)
      })
    ]
  });
});

// src/components/TopPanel/MultiplayerMenu/MultiplayerMenu.tsx
import * as DropdownMenu6 from "@radix-ui/react-dropdown-menu";
import { CheckIcon as CheckIcon2, ClipboardIcon } from "@radix-ui/react-icons";
import { Utils as Utils26 } from "@tldraw/core";
import * as React41 from "react";
import { FormattedMessage as FormattedMessage11 } from "react-intl";

// src/components/Primitives/icons/MultiplayerIcon2.tsx
import { jsx as jsx43 } from "react/jsx-runtime";
function MultiplayerIcon2() {
  return /* @__PURE__ */ jsx43("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    fillRule: "evenodd",
    clipRule: "evenodd",
    children: /* @__PURE__ */ jsx43("path", {
      d: "M1.36482 4.71089C1.36482 3.21371 2.57853 2 4.07572 2C5.5729 2 6.78661 3.21371 6.78661 4.71089C6.78661 5.76842 6.18106 6.68452 5.29779 7.13136C5.80465 7.24611 6.26407 7.44186 6.66028 7.73182C7.18674 8.11711 7.57215 8.64722 7.81073 9.30983C7.81452 9.30606 7.81832 9.3023 7.82212 9.29855C8.30448 8.82317 8.91325 8.52463 9.60905 8.37275C8.68812 7.922 8.05394 6.97569 8.05394 5.88126C8.05394 4.35017 9.29513 3.10898 10.8262 3.10898C12.3573 3.10898 13.5985 4.35017 13.5985 5.88126C13.5985 6.97561 12.9644 7.92186 12.0436 8.37265C12.7396 8.52449 13.3486 8.82306 13.831 9.29854C14.5795 10.0361 14.9481 11.1249 14.9481 12.5176C14.9481 12.7799 14.7354 12.9926 14.473 12.9926C14.2107 12.9926 13.9981 12.7799 13.9981 12.5175C13.9981 11.2848 13.6738 10.4774 13.1642 9.97518C12.6532 9.4716 11.8802 9.20024 10.8266 9.20024C9.77294 9.20024 8.99993 9.4716 8.48896 9.97518C7.97939 10.4774 7.65513 11.2848 7.65513 12.5176C7.65513 12.7799 7.44247 12.9926 7.18013 12.9926C6.9178 12.9926 6.70513 12.7799 6.70513 12.5176C6.70513 11.6734 6.84053 10.941 7.11384 10.3307C7.0922 10.2895 7.0763 10.2444 7.06737 10.1962C6.91739 9.38749 6.57392 8.84586 6.09923 8.49845C5.61626 8.14499 4.94481 7.95427 4.07574 7.95427C3.05232 7.95427 2.30368 8.21784 1.80952 8.70485C1.31675 9.19047 1.00176 9.97257 1.00176 11.1702C1.00176 11.4326 0.789093 11.6452 0.526758 11.6452C0.264423 11.6452 0.0517578 11.4326 0.0517578 11.1702C0.0517578 9.81263 0.411052 8.74925 1.14268 8.02821C1.60624 7.57137 2.18892 7.28191 2.85378 7.13142C1.97043 6.68461 1.36482 5.76848 1.36482 4.71089ZM4.07572 2.95C3.1032 2.95 2.31482 3.73838 2.31482 4.71089C2.31482 5.68341 3.1032 6.47178 4.07572 6.47178C5.04823 6.47178 5.83661 5.68341 5.83661 4.71089C5.83661 3.73838 5.04823 2.95 4.07572 2.95ZM10.8262 4.05898C9.8198 4.05898 9.00394 4.87484 9.00394 5.88126C9.00394 6.88768 9.8198 7.70355 10.8262 7.70355C11.8326 7.70355 12.6485 6.88768 12.6485 5.88126C12.6485 4.87484 11.8326 4.05898 10.8262 4.05898Z"
    })
  });
}

// src/state/TLDR.ts
import { Utils as Utils25 } from "@tldraw/core";
import { intersectRayBounds as intersectRayBounds2, intersectRayEllipse as intersectRayEllipse2, intersectRayLineSegment as intersectRayLineSegment2 } from "@tldraw/intersect";
import { Vec as Vec18 } from "@tldraw/vec";

// src/constants.ts
var LETTER_SPACING = "-0.03em";
var GRID_SIZE = 8;
var SVG_EXPORT_PADDING = 16;
var BINDING_DISTANCE = 16;
var CLONING_DISTANCE = 32;
var FIT_TO_SCREEN_PADDING = 128;
var SNAP_DISTANCE = 5;
var SLOW_SPEED = 10;
var GHOSTED_OPACITY = 0.3;
var DEAD_ZONE = 3;
var LABEL_POINT = [0.5, 0.5];
var PI2 = Math.PI * 2;
var FILE_EXTENSION = ".tldr";
var EASINGS = {
  linear: (t) => t,
  easeInQuad: (t) => t * t,
  easeOutQuad: (t) => t * (2 - t),
  easeInOutQuad: (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  easeInCubic: (t) => t * t * t,
  easeOutCubic: (t) => --t * t * t + 1,
  easeInOutCubic: (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  easeInQuart: (t) => t * t * t * t,
  easeOutQuart: (t) => 1 - --t * t * t * t,
  easeInOutQuart: (t) => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t,
  easeInQuint: (t) => t * t * t * t * t,
  easeOutQuint: (t) => 1 + --t * t * t * t * t,
  easeInOutQuint: (t) => t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t,
  easeInSine: (t) => 1 - Math.cos(t * Math.PI / 2),
  easeOutSine: (t) => Math.sin(t * Math.PI / 2),
  easeInOutSine: (t) => -(Math.cos(Math.PI * t) - 1) / 2,
  easeInExpo: (t) => t <= 0 ? 0 : Math.pow(2, 10 * t - 10),
  easeOutExpo: (t) => t >= 1 ? 1 : 1 - Math.pow(2, -10 * t),
  easeInOutExpo: (t) => t <= 0 ? 0 : t >= 1 ? 1 : t < 0.5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2
};
var USER_COLORS = [
  "#EC5E41",
  "#F2555A",
  "#F04F88",
  "#E34BA9",
  "#BD54C6",
  "#9D5BD2",
  "#7B66DC",
  "#02B1CC",
  "#11B3A3",
  "#39B178",
  "#55B467",
  "#FF802B"
];
var isSafari = typeof Window === "undefined" ? false : /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
var isLinux = typeof Window === "undefined" ? false : /linux/i.test(navigator.userAgent);
var IMAGE_EXTENSIONS = [".png", ".svg", ".jpg", ".jpeg", ".gif"];
var VIDEO_EXTENSIONS = isSafari ? [] : [".mp4", ".webm"];

// src/state/StateManager/copy.ts
function deepCopy(target) {
  if (target === null) {
    return target;
  }
  if (target instanceof Date) {
    return new Date(target.getTime());
  }
  if (typeof target === "object") {
    if (typeof target[Symbol.iterator] === "function") {
      const cp = [];
      if (target.length > 0) {
        for (const arrayMember of target) {
          cp.push(deepCopy(arrayMember));
        }
      }
      return cp;
    } else {
      const targetKeys = Object.keys(target);
      const cp = {};
      if (targetKeys.length > 0) {
        for (const key of targetKeys) {
          cp[key] = deepCopy(target[key]);
        }
      }
      return cp;
    }
  }
  return target;
}

// src/state/shapes/ArrowUtil/ArrowUtil.tsx
import { SVGContainer, Utils as Utils8 } from "@tldraw/core";
import {
  intersectArcBounds,
  intersectLineSegmentBounds as intersectLineSegmentBounds2,
  intersectLineSegmentLineSegment
} from "@tldraw/intersect";
import { Vec as Vec8 } from "@tldraw/vec";
import * as React26 from "react";

// src/state/shapes/TDShapeUtil.tsx
import { TLShapeUtil, Utils as Utils4 } from "@tldraw/core";
import {
  intersectLineSegmentBounds,
  intersectLineSegmentPolyline,
  intersectRayBounds
} from "@tldraw/intersect";
import { Vec as Vec4 } from "@tldraw/vec";
import * as React23 from "react";

// src/state/shapes/shared/getBoundsRectangle.ts
import { Utils as Utils2 } from "@tldraw/core";
function getBoundsRectangle(shape, boundsCache) {
  const bounds = Utils2.getFromCache(boundsCache, shape, () => {
    const [width, height] = shape.size;
    return {
      minX: 0,
      maxX: width,
      minY: 0,
      maxY: height,
      width,
      height
    };
  });
  return Utils2.translateBounds(bounds, shape.point);
}

// src/state/shapes/shared/getTextAlign.ts
var ALIGN_VALUES = {
  ["start" /* Start */]: "left",
  ["middle" /* Middle */]: "center",
  ["end" /* End */]: "right",
  ["justify" /* Justify */]: "justify"
};
function getTextAlign(alignStyle = "start" /* Start */) {
  return ALIGN_VALUES[alignStyle];
}

// src/state/shapes/shared/getTextSize.ts
var melm;
function getMeasurementDiv() {
  var _a;
  (_a = document.getElementById("__textLabelMeasure")) == null ? void 0 : _a.remove();
  const pre = document.createElement("pre");
  pre.id = "__textLabelMeasure";
  Object.assign(pre.style, {
    whiteSpace: "pre",
    width: "auto",
    border: "1px solid transparent",
    padding: "4px",
    margin: "0px",
    letterSpacing: LETTER_SPACING,
    opacity: "0",
    position: "absolute",
    top: "-500px",
    left: "0px",
    zIndex: "9999",
    pointerEvents: "none",
    userSelect: "none",
    "-webkit-user-select": "none",
    alignmentBaseline: "mathematical",
    dominantBaseline: "mathematical"
  });
  pre.tabIndex = -1;
  document.body.appendChild(pre);
  return pre;
}
if (typeof window !== "undefined") {
  melm = getMeasurementDiv();
}
var prevText = "";
var prevFont = "";
var prevSize = [0, 0];
function clearPrevSize() {
  prevText = "";
}
function getTextLabelSize(text, font) {
  if (!text) {
    return [16, 32];
  }
  if (!melm) {
    return [10, 10];
  }
  if (!melm.parent)
    document.body.appendChild(melm);
  if (text === prevText && font === prevFont) {
    return prevSize;
  }
  prevText = text;
  prevFont = font;
  melm.textContent = text;
  melm.style.font = font;
  const width = melm.offsetWidth || 1;
  const height = melm.offsetHeight || 1;
  prevSize = [width, height];
  return prevSize;
}

// src/state/shapes/shared/getTextSvgElement.ts
var wordSeparator = new RegExp(
  `${[32, 160, 4961, 65792, 65793, 4153, 4241].map((c) => String.fromCodePoint(c)).join("|")}`
);
function getTextSvgElement(text, fontSize, fontFamily, textAlign, width, wrap = false) {
  const fontWeight = "normal";
  const lineHeight = 1;
  const letterSpacingPct = LETTER_SPACING;
  const lines = breakText({
    text,
    wrap,
    width,
    fontSize,
    fontWeight,
    fontFamily,
    fontStyle: "normal",
    textAlign: "left",
    letterSpacing: LETTER_SPACING,
    lineHeight: 1
  });
  const textElm = document.createElementNS("http://www.w3.org/2000/svg", "text");
  textElm.setAttribute("font-size", fontSize + "px");
  textElm.setAttribute("font-family", fontFamily);
  textElm.setAttribute("font-weight", fontWeight);
  textElm.setAttribute("line-height", lineHeight * fontSize + "px");
  textElm.setAttribute("letter-spacing", letterSpacingPct);
  textElm.setAttribute("text-align", textAlign != null ? textAlign : "left");
  textElm.setAttribute("dominant-baseline", "mathematical");
  textElm.setAttribute("alignment-baseline", "mathematical");
  const textLines = lines.map((line, i) => {
    const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
    tspan.textContent = line + "\n";
    tspan.setAttribute("y", lineHeight * fontSize * (i + 0.5) + "px");
    textElm.appendChild(tspan);
    return tspan;
  });
  switch (textAlign) {
    case "middle" /* Middle */: {
      textElm.setAttribute("text-align", "center");
      textElm.setAttribute("text-anchor", "middle");
      textLines.forEach((textElm2) => textElm2.setAttribute("x", width / 2 + ""));
      break;
    }
    case "end" /* End */: {
      textElm.setAttribute("text-align", "right");
      textElm.setAttribute("text-anchor", "end");
      textLines.forEach((textElm2) => textElm2.setAttribute("x", -4 + width + ""));
      break;
    }
    default: {
      textElm.setAttribute("text-align", "left");
      textElm.setAttribute("text-anchor", "start");
      textLines.forEach((textElm2) => textElm2.setAttribute("x", 4 + ""));
    }
  }
  return textElm;
}
function breakText(opts) {
  const textElm = document.createElement("div");
  textElm.style.setProperty("position", "absolute");
  textElm.style.setProperty("top", "-9999px");
  textElm.style.setProperty("left", "-9999px");
  textElm.style.setProperty("width", opts.width + "px");
  textElm.style.setProperty("height", "min-content");
  textElm.style.setProperty("font-size", opts.fontSize + "px");
  textElm.style.setProperty("font-family", opts.fontFamily);
  textElm.style.setProperty("font-weight", opts.fontWeight);
  textElm.style.setProperty("line-height", opts.lineHeight * opts.fontSize + "px");
  textElm.style.setProperty("letter-spacing", opts.letterSpacing);
  textElm.style.setProperty("text-align", opts.textAlign);
  document.body.appendChild(textElm);
  const words = opts.text.split(wordSeparator).flatMap((word) => word.replace("\n", " \n")).join(" ").split(" ");
  textElm.innerText = words[0];
  let prevHeight = textElm.offsetHeight;
  let currentLine = [words[0]];
  const lines = [currentLine];
  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    textElm.innerText += " " + word;
    const newHeight = textElm.offsetHeight;
    if (newHeight > prevHeight) {
      prevHeight = newHeight;
      currentLine = [];
      lines.push(currentLine);
    }
    currentLine.push(word);
  }
  textElm.remove();
  return lines.map((line) => line.join(" "));
}

// src/state/shapes/shared/LabelMask.tsx
import { jsx as jsx44, jsxs as jsxs22 } from "react/jsx-runtime";
function LabelMask({ id, bounds, labelSize, offset, scale = 1 }) {
  return /* @__PURE__ */ jsx44("defs", {
    children: /* @__PURE__ */ jsxs22("mask", {
      id: id + "_clip",
      children: [
        /* @__PURE__ */ jsx44("rect", {
          x: -100,
          y: -100,
          width: bounds.width + 200,
          height: bounds.height + 200,
          fill: "white"
        }),
        /* @__PURE__ */ jsx44("rect", {
          x: bounds.width / 2 - labelSize[0] / 2 * scale + ((offset == null ? void 0 : offset[0]) || 0),
          y: bounds.height / 2 - labelSize[1] / 2 * scale + ((offset == null ? void 0 : offset[1]) || 0),
          width: labelSize[0] * scale,
          height: labelSize[1] * scale,
          rx: 4 * scale,
          ry: 4 * scale,
          fill: "black",
          opacity: Math.max(scale, 0.8)
        })
      ]
    })
  });
}

// src/state/shapes/shared/PolygonUtils.ts
import { intersectLineLine } from "@tldraw/intersect";
import Vec from "@tldraw/vec";
var PI22 = Math.PI * 2;
var _PolygonUtils = class {
  static inwardEdgeNormal(edge) {
    const delta = Vec.sub(edge[1], edge[0]);
    const len = Vec.len2(delta);
    return [-delta[0] / len, delta[1] / len];
  }
  static outwardEdgeNormal(edge) {
    return Vec.neg(_PolygonUtils.inwardEdgeNormal(edge));
  }
  static isReflexVertex(polygon, index) {
    const len = polygon.length;
    const v0 = polygon[(index + len - 1) % len];
    const v1 = polygon[index];
    const v2 = polygon[(index + 1) % len];
    if (_PolygonUtils.leftSide(v0, v2, v1) < 0)
      return true;
    return false;
  }
  static getEdges(vertices) {
    return vertices.map((vert, i) => [vert, vertices[(i + 1) % vertices.length]]);
  }
  static edgesIntersection([A1, A2], [B1, B2]) {
    const den = (B2[1] - B1[1]) * (A2[0] - A1[0]) - (B2[0] - B1[0]) * (A2[1] - A1[1]);
    if (den == 0)
      return null;
    const ua = ((B2[0] - B1[0]) * (A1[1] - B1[1]) - (B2[1] - B1[1]) * (A1[0] - B1[0])) / den;
    const ub = ((A2[0] - A1[0]) * (A1[1] - B1[1]) - (A2[1] - A1[1]) * (A1[0] - B1[0])) / den;
    if (ua < 0 || ub < 0 || ua > 1 || ub > 1)
      return null;
    return [A1[0] + ua * (A2[0] - A1[0]), A1[1] + ua * (A2[1] - A1[1])];
  }
  static appendArc(polygon, center, radius, startVertex, endVertex, isPaddingBoundary = false) {
    const vertices = [...polygon];
    let startAngle = Math.atan2(startVertex[1] - center[1], startVertex[0] - center[0]);
    let endAngle = Math.atan2(endVertex[1] - center[1], endVertex[0] - center[0]);
    if (startAngle < 0)
      startAngle += PI22;
    if (endAngle < 0)
      endAngle += PI22;
    const arcSegmentCount = 5;
    const angle = startAngle > endAngle ? startAngle - endAngle : startAngle + PI22 - endAngle;
    const angle5 = (isPaddingBoundary ? -angle : PI22 - angle) / arcSegmentCount;
    vertices.push(startVertex);
    for (let i = 1; i < arcSegmentCount; ++i) {
      const angle2 = startAngle + angle5 * i;
      vertices.push([center[0] + Math.cos(angle2) * radius, center[1] + Math.sin(angle2) * radius]);
    }
    vertices.push(endVertex);
    return vertices;
  }
  static createOffsetEdge(edge, offset) {
    return edge.map((vert) => Vec.add(vert, offset));
  }
  static getOffsetPolygon(polygon, offset = 0) {
    const edges = _PolygonUtils.getEdges(polygon);
    const offsetEdges = edges.map(
      (edge) => _PolygonUtils.createOffsetEdge(edge, Vec.mul(_PolygonUtils.outwardEdgeNormal(edge), offset))
    );
    const vertices = [];
    for (let i = 0; i < offsetEdges.length; i++) {
      const thisEdge = offsetEdges[i];
      const prevEdge = offsetEdges[(i + offsetEdges.length - 1) % offsetEdges.length];
      const vertex = _PolygonUtils.edgesIntersection(prevEdge, thisEdge);
      if (vertex)
        vertices.push(vertex);
      else {
        _PolygonUtils.appendArc(vertices, edges[i][0], offset, prevEdge[1], thisEdge[0], false);
      }
    }
    return vertices;
  }
  static createPaddingPolygon(polygon, shapePadding = 0) {
    const offsetEdges = polygon.map(
      (edge) => _PolygonUtils.createOffsetEdge(edge, _PolygonUtils.inwardEdgeNormal(edge))
    );
    const vertices = [];
    for (let i = 0; i < offsetEdges.length; i++) {
      const thisEdge = offsetEdges[i];
      const prevEdge = offsetEdges[(i + offsetEdges.length - 1) % offsetEdges.length];
      const vertex = _PolygonUtils.edgesIntersection(prevEdge, thisEdge);
      if (vertex)
        vertices.push(vertex);
      else {
        _PolygonUtils.appendArc(
          vertices,
          polygon[i][0],
          shapePadding,
          prevEdge[1],
          thisEdge[0],
          true
        );
      }
    }
    return vertices;
  }
};
var PolygonUtils = _PolygonUtils;
__publicField(PolygonUtils, "leftSide", Vec.isLeft);
function getOffsetPolygon(points, offset) {
  if (points.length < 3)
    throw Error("Polygon must have at least 3 points");
  const len = points.length;
  return points.map((point, i) => [point, points[(i + 1) % len]]).map(([A, B]) => {
    const offsetVector = Vec.mul(Vec.per(Vec.uni(Vec.sub(B, A))), offset);
    return [Vec.add(A, offsetVector), Vec.add(B, offsetVector)];
  }).map((edge, i, edges) => {
    const intersection = intersectLineLine(edge, edges[(i + 1) % edges.length]);
    if (intersection === void 0)
      throw Error("Expected an intersection");
    return intersection;
  });
}

// src/state/shapes/shared/shape-styles.ts
import { Utils as Utils3 } from "@tldraw/core";
var canvasLight = "#fafafa";
var canvasDark = "#343d45";
var colors = {
  ["white" /* White */]: "#f0f1f3",
  ["lightGray" /* LightGray */]: "#c6cbd1",
  ["gray" /* Gray */]: "#788492",
  ["black" /* Black */]: "#1d1d1d",
  ["green" /* Green */]: "#36b24d",
  ["cyan" /* Cyan */]: "#0e98ad",
  ["blue" /* Blue */]: "#1c7ed6",
  ["indigo" /* Indigo */]: "#4263eb",
  ["violet" /* Violet */]: "#7746f1",
  ["red" /* Red */]: "#ff2133",
  ["orange" /* Orange */]: "#ff9433",
  ["yellow" /* Yellow */]: "#ffc936"
};
var stickyFills = {
  light: __spreadProps(__spreadValues({}, Object.fromEntries(
    Object.entries(colors).map(([k, v]) => [k, Utils3.lerpColor(v, canvasLight, 0.45)])
  )), {
    ["white" /* White */]: "#ffffff",
    ["black" /* Black */]: "#3d3d3d"
  }),
  dark: __spreadProps(__spreadValues({}, Object.fromEntries(
    Object.entries(colors).map(([k, v]) => [
      k,
      Utils3.lerpColor(Utils3.lerpColor(v, "#999999", 0.3), canvasDark, 0.4)
    ])
  )), {
    ["white" /* White */]: "#1d1d1d",
    ["black" /* Black */]: "#bbbbbb"
  })
};
var strokes = {
  light: __spreadProps(__spreadValues({}, colors), {
    ["white" /* White */]: "#1d1d1d"
  }),
  dark: __spreadProps(__spreadValues({}, Object.fromEntries(
    Object.entries(colors).map(([k, v]) => [k, Utils3.lerpColor(v, canvasDark, 0.1)])
  )), {
    ["white" /* White */]: "#cecece",
    ["black" /* Black */]: "#cecece"
  })
};
var fills = {
  light: __spreadProps(__spreadValues({}, Object.fromEntries(
    Object.entries(colors).map(([k, v]) => [k, Utils3.lerpColor(v, canvasLight, 0.82)])
  )), {
    ["white" /* White */]: "#fefefe"
  }),
  dark: __spreadProps(__spreadValues({}, Object.fromEntries(
    Object.entries(colors).map(([k, v]) => [k, Utils3.lerpColor(v, canvasDark, 0.82)])
  )), {
    ["white" /* White */]: "rgb(30,33,37)",
    ["black" /* Black */]: "#1e1e1f"
  })
};
var strokeWidths = {
  ["small" /* Small */]: 2,
  ["medium" /* Medium */]: 3.5,
  ["large" /* Large */]: 5
};
var fontSizes = {
  ["small" /* Small */]: 28,
  ["medium" /* Medium */]: 48,
  ["large" /* Large */]: 96,
  auto: "auto"
};
var fontFaces = {
  ["script" /* Script */]: '"Caveat Brush"',
  ["sans" /* Sans */]: '"Source Sans Pro"',
  ["serif" /* Serif */]: '"Crimson Pro"',
  ["mono" /* Mono */]: '"Source Code Pro"'
};
var fontSizeModifiers = {
  ["script" /* Script */]: 1,
  ["sans" /* Sans */]: 1,
  ["serif" /* Serif */]: 1,
  ["mono" /* Mono */]: 1
};
var stickyFontSizes = {
  ["small" /* Small */]: 24,
  ["medium" /* Medium */]: 36,
  ["large" /* Large */]: 48,
  auto: "auto"
};
function getStrokeWidth(size) {
  return strokeWidths[size];
}
function getFontSize(size, fontStyle = "script" /* Script */) {
  return fontSizes[size] * fontSizeModifiers[fontStyle];
}
function getFontFace(font = "script" /* Script */) {
  return fontFaces[font];
}
function getStickyFontSize(size) {
  return stickyFontSizes[size];
}
function getFontStyle(style) {
  const fontSize = getFontSize(style.size, style.font);
  const fontFace = getFontFace(style.font);
  const { scale = 1 } = style;
  return `${fontSize * scale}px/1 ${fontFace}`;
}
function getStickyFontStyle(style) {
  const fontSize = getStickyFontSize(style.size);
  const fontFace = getFontFace(style.font);
  const { scale = 1 } = style;
  return `${fontSize * scale}px/1 ${fontFace}`;
}
function getStickyShapeStyle(style, isDarkMode = false) {
  const { color } = style;
  const theme = isDarkMode ? "dark" : "light";
  const adjustedColor = color === "white" /* White */ || color === "black" /* Black */ ? "yellow" /* Yellow */ : color;
  return {
    fill: stickyFills[theme][adjustedColor],
    stroke: strokes[theme][adjustedColor],
    color: isDarkMode ? "#1d1d1d" : "#0d0d0d"
  };
}
function getShapeStyle(style, isDarkMode) {
  const { color, size, isFilled } = style;
  const strokeWidth = getStrokeWidth(size);
  const theme = isDarkMode ? "dark" : "light";
  return {
    stroke: strokes[theme][color],
    fill: isFilled ? fills[theme][color] : "none",
    strokeWidth
  };
}
var defaultStyle = {
  color: "black" /* Black */,
  size: "small" /* Small */,
  isFilled: false,
  dash: "draw" /* Draw */,
  scale: 1
};
var defaultTextStyle = __spreadProps(__spreadValues({}, defaultStyle), {
  font: "script" /* Script */,
  textAlign: "middle" /* Middle */
});

// src/state/shapes/shared/TextAreaUtils.ts
var INDENT = "  ";
var TextAreaUtils = class {
  static insertTextFirefox(field, text) {
    field.setRangeText(
      text,
      field.selectionStart || 0,
      field.selectionEnd || 0,
      "end"
    );
    field.dispatchEvent(
      new InputEvent("input", {
        data: text,
        inputType: "insertText",
        isComposing: false
      })
    );
  }
  static insert(field, text) {
    const document2 = field.ownerDocument;
    const initialFocus = document2.activeElement;
    if (initialFocus !== field) {
      field.focus();
    }
    if (!document2.execCommand("insertText", false, text)) {
      TextAreaUtils.insertTextFirefox(field, text);
    }
    if (initialFocus === document2.body) {
      field.blur();
    } else if (initialFocus instanceof HTMLElement && initialFocus !== field) {
      initialFocus.focus();
    }
  }
  static set(field, text) {
    field.select();
    TextAreaUtils.insert(field, text);
  }
  static getSelection(field) {
    const { selectionStart, selectionEnd } = field;
    return field.value.slice(
      selectionStart ? selectionStart : void 0,
      selectionEnd ? selectionEnd : void 0
    );
  }
  static wrapSelection(field, wrap, wrapEnd) {
    const { selectionStart, selectionEnd } = field;
    const selection = TextAreaUtils.getSelection(field);
    TextAreaUtils.insert(field, wrap + selection + (wrapEnd != null ? wrapEnd : wrap));
    field.selectionStart = (selectionStart || 0) + wrap.length;
    field.selectionEnd = (selectionEnd || 0) + wrap.length;
  }
  static replace(field, searchValue, replacer) {
    let drift = 0;
    field.value.replace(searchValue, (...args) => {
      const matchStart = drift + args[args.length - 2];
      const matchLength = args[0].length;
      field.selectionStart = matchStart;
      field.selectionEnd = matchStart + matchLength;
      const replacement = typeof replacer === "string" ? replacer : replacer(...args);
      TextAreaUtils.insert(field, replacement);
      field.selectionStart = matchStart;
      drift += replacement.length - matchLength;
      return replacement;
    });
  }
  static findLineEnd(value, currentEnd) {
    const lastLineStart = value.lastIndexOf("\n", currentEnd - 1) + 1;
    if (value.charAt(lastLineStart) !== "	") {
      return currentEnd;
    }
    return lastLineStart + 1;
  }
  static indent(element) {
    var _a;
    const { selectionStart, selectionEnd, value } = element;
    const selectedContrast = value.slice(selectionStart, selectionEnd);
    const lineBreakCount = (_a = /\n/g.exec(selectedContrast)) == null ? void 0 : _a.length;
    if (lineBreakCount && lineBreakCount > 0) {
      const firstLineStart = value.lastIndexOf("\n", selectionStart - 1) + 1;
      const newSelection = element.value.slice(firstLineStart, selectionEnd - 1);
      const indentedText = newSelection.replace(
        /^|\n/g,
        `$&${INDENT}`
      );
      const replacementsCount = indentedText.length - newSelection.length;
      element.setSelectionRange(firstLineStart, selectionEnd - 1);
      TextAreaUtils.insert(element, indentedText);
      element.setSelectionRange(selectionStart + 1, selectionEnd + replacementsCount);
    } else {
      TextAreaUtils.insert(element, INDENT);
    }
  }
  static unindent(element) {
    const { selectionStart, selectionEnd, value } = element;
    const firstLineStart = value.lastIndexOf("\n", selectionStart - 1) + 1;
    const minimumSelectionEnd = TextAreaUtils.findLineEnd(value, selectionEnd);
    const newSelection = element.value.slice(firstLineStart, minimumSelectionEnd);
    const indentedText = newSelection.replace(/(^|\n)(\t| {1,2})/g, "$1");
    const replacementsCount = newSelection.length - indentedText.length;
    element.setSelectionRange(firstLineStart, minimumSelectionEnd);
    TextAreaUtils.insert(element, indentedText);
    const firstLineIndentation = /\t| {1,2}/.exec(value.slice(firstLineStart, selectionStart));
    const difference = firstLineIndentation ? firstLineIndentation[0].length : 0;
    const newSelectionStart = selectionStart - difference;
    element.setSelectionRange(
      selectionStart - difference,
      Math.max(newSelectionStart, selectionEnd - replacementsCount)
    );
  }
};

// src/state/shapes/shared/TextLabel.tsx
import * as React22 from "react";
import { jsx as jsx45, jsxs as jsxs23 } from "react/jsx-runtime";
var TextLabel = React22.memo(function TextLabel2({
  font,
  text,
  color,
  offsetX = 0,
  offsetY = 0,
  scale = 1,
  isEditing = false,
  onBlur,
  onChange
}) {
  const rInput = React22.useRef(null);
  const rIsMounted = React22.useRef(false);
  const handleChange = React22.useCallback(
    (e) => {
      onChange(TLDR.normalizeText(e.currentTarget.value));
    },
    [onChange]
  );
  const handleKeyDown = React22.useCallback(
    (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        onBlur == null ? void 0 : onBlur();
        return;
      }
      if (e.key === "Tab" && text.length === 0) {
        e.preventDefault();
        return;
      }
      if (!(e.key === "Meta" || e.metaKey)) {
        e.stopPropagation();
      } else if (e.key === "z" && e.metaKey) {
        if (e.shiftKey) {
          document.execCommand("redo", false);
        } else {
          document.execCommand("undo", false);
        }
        e.stopPropagation();
        e.preventDefault();
        return;
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "=") {
        e.preventDefault();
      }
      if (e.key === "Tab") {
        e.preventDefault();
        if (e.shiftKey) {
          TextAreaUtils.unindent(e.currentTarget);
        } else {
          TextAreaUtils.indent(e.currentTarget);
        }
        onChange == null ? void 0 : onChange(TLDR.normalizeText(e.currentTarget.value));
      }
    },
    [onChange]
  );
  const handleBlur = React22.useCallback(
    (e) => {
      e.currentTarget.setSelectionRange(0, 0);
      onBlur == null ? void 0 : onBlur();
    },
    [onBlur]
  );
  const handleFocus = React22.useCallback(
    (e) => {
      if (!isEditing)
        return;
      if (!rIsMounted.current)
        return;
      if (document.activeElement === e.currentTarget) {
        e.currentTarget.select();
      }
    },
    [isEditing]
  );
  const handlePointerDown = React22.useCallback(
    (e) => {
      if (isEditing) {
        e.stopPropagation();
      }
    },
    [isEditing]
  );
  const rWasEditing = React22.useRef(isEditing);
  React22.useEffect(() => {
    if (isEditing) {
      rWasEditing.current = true;
      requestAnimationFrame(() => {
        rIsMounted.current = true;
        const elm = rInput.current;
        if (elm) {
          elm.focus();
          elm.select();
        }
      });
    } else if (rWasEditing.current) {
      onBlur == null ? void 0 : onBlur();
      rWasEditing.current = false;
    }
  }, [isEditing, onBlur]);
  const rInnerWrapper = React22.useRef(null);
  React22.useLayoutEffect(() => {
    const elm = rInnerWrapper.current;
    if (!elm)
      return;
    const size = getTextLabelSize(text, font);
    elm.style.transform = `scale(${scale}, ${scale}) translate(${offsetX}px, ${offsetY}px)`;
    elm.style.width = size[0] + 1 + "px";
    elm.style.height = size[1] + 1 + "px";
  }, [text, font, offsetY, offsetX, scale]);
  return /* @__PURE__ */ jsx45(TextWrapper, {
    children: /* @__PURE__ */ jsxs23(InnerWrapper, {
      ref: rInnerWrapper,
      hasText: !!text,
      isEditing,
      style: {
        font,
        color
      },
      children: [
        isEditing ? /* @__PURE__ */ jsx45(TextArea, {
          ref: rInput,
          style: {
            font,
            color
          },
          name: "text",
          tabIndex: -1,
          autoComplete: "false",
          autoCapitalize: "false",
          autoCorrect: "false",
          autoSave: "false",
          autoFocus: true,
          placeholder: "",
          spellCheck: "true",
          wrap: "off",
          dir: "auto",
          datatype: "wysiwyg",
          defaultValue: text,
          color,
          onFocus: handleFocus,
          onChange: handleChange,
          onKeyDown: handleKeyDown,
          onBlur: handleBlur,
          onPointerDown: handlePointerDown,
          onContextMenu: stopPropagation,
          onCopy: stopPropagation,
          onPaste: stopPropagation,
          onCut: stopPropagation
        }) : text,
        "\u200B"
      ]
    })
  });
});
var TextWrapper = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  pointerEvents: "none",
  userSelect: "none",
  variants: {
    isGhost: {
      false: { opacity: 1 },
      true: { transition: "opacity .2s", opacity: GHOSTED_OPACITY }
    }
  }
});
var commonTextWrapping = {
  whiteSpace: "pre-wrap",
  overflowWrap: "break-word",
  letterSpacing: LETTER_SPACING
};
var InnerWrapper = styled("div", __spreadValues({
  position: "absolute",
  padding: "4px",
  zIndex: 1,
  minHeight: 1,
  minWidth: 1,
  lineHeight: 1,
  outline: 0,
  fontWeight: "500",
  textAlign: "center",
  backfaceVisibility: "hidden",
  userSelect: "none",
  WebkitUserSelect: "none",
  WebkitTouchCallout: "none",
  variants: {
    hasText: {
      false: {
        pointerEvents: "none"
      },
      true: {
        pointerEvents: "all"
      }
    },
    isEditing: {
      false: {
        userSelect: "none"
      },
      true: {
        background: "$boundsBg",
        userSelect: "text",
        WebkitUserSelect: "text"
      }
    }
  }
}, commonTextWrapping));
var TextArea = styled("textarea", __spreadProps(__spreadValues({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 1,
  width: "100%",
  height: "100%",
  border: "none",
  padding: "4px",
  resize: "none",
  textAlign: "inherit",
  minHeight: "inherit",
  minWidth: "inherit",
  lineHeight: "inherit",
  outline: 0,
  fontWeight: "inherit",
  overflow: "hidden",
  backfaceVisibility: "hidden",
  display: "inline-block",
  pointerEvents: "all",
  background: "$boundsBg",
  userSelect: "text",
  WebkitUserSelect: "text",
  fontSmooth: "always",
  WebkitFontSmoothing: "subpixel-antialiased",
  MozOsxFontSmoothing: "auto"
}, commonTextWrapping), {
  "&:focus": {
    outline: "none",
    border: "none"
  }
}));

// src/state/shapes/shared/transformRectangle.ts
import Vec2 from "@tldraw/vec";
function transformRectangle(shape, bounds, { initialShape, transformOrigin, scaleX, scaleY }) {
  if (shape.rotation || initialShape.isAspectRatioLocked) {
    const size = Vec2.toFixed(
      Vec2.mul(initialShape.size, Math.min(Math.abs(scaleX), Math.abs(scaleY)))
    );
    const point = Vec2.toFixed([
      bounds.minX + (bounds.width - shape.size[0]) * (scaleX < 0 ? 1 - transformOrigin[0] : transformOrigin[0]),
      bounds.minY + (bounds.height - shape.size[1]) * (scaleY < 0 ? 1 - transformOrigin[1] : transformOrigin[1])
    ]);
    const rotation = scaleX < 0 && scaleY >= 0 || scaleY < 0 && scaleX >= 0 ? initialShape.rotation ? -initialShape.rotation : 0 : initialShape.rotation;
    return {
      size,
      point,
      rotation
    };
  } else {
    return {
      point: Vec2.toFixed([bounds.minX, bounds.minY]),
      size: Vec2.toFixed([bounds.width, bounds.height])
    };
  }
}

// src/state/shapes/shared/transformSingleRectangle.ts
import Vec3 from "@tldraw/vec";
function transformSingleRectangle(shape, bounds) {
  return {
    size: Vec3.toFixed([bounds.width, bounds.height]),
    point: Vec3.toFixed([bounds.minX, bounds.minY])
  };
}

// src/state/shapes/TDShapeUtil.tsx
var TDShapeUtil = class extends TLShapeUtil {
  constructor() {
    super(...arguments);
    __publicField(this, "canBind", false);
    __publicField(this, "canEdit", false);
    __publicField(this, "canClone", false);
    __publicField(this, "isAspectRatioLocked", false);
    __publicField(this, "hideResizeHandles", false);
    __publicField(this, "bindingDistance", BINDING_DISTANCE);
    __publicField(this, "hitTestPoint", (shape, point) => {
      return Utils4.pointInBounds(point, this.getRotatedBounds(shape));
    });
    __publicField(this, "hitTestLineSegment", (shape, A, B) => {
      const box = Utils4.getBoundsFromPoints([A, B]);
      const bounds = this.getBounds(shape);
      return Utils4.boundsContain(bounds, box) || shape.rotation ? intersectLineSegmentPolyline(A, B, Utils4.getRotatedCorners(this.getBounds(shape))).didIntersect : intersectLineSegmentBounds(A, B, this.getBounds(shape)).length > 0;
    });
    __publicField(this, "create", (props) => {
      this.refMap.set(props.id, React23.createRef());
      return this.getShape(props);
    });
    __publicField(this, "getCenter", (shape) => {
      return Utils4.getBoundsCenter(this.getBounds(shape));
    });
    __publicField(this, "getExpandedBounds", (shape) => {
      return Utils4.expandBounds(this.getBounds(shape), this.bindingDistance);
    });
    __publicField(this, "getBindingPoint", (shape, fromShape, point, origin, direction, bindAnywhere) => {
      const bounds = this.getBounds(shape);
      const expandedBounds = this.getExpandedBounds(shape);
      if (!Utils4.pointInBounds(point, expandedBounds))
        return;
      const intersections = intersectRayBounds(origin, direction, expandedBounds).filter((int) => int.didIntersect).map((int) => int.points[0]);
      if (!intersections.length)
        return;
      const center = this.getCenter(shape);
      const intersection = intersections.sort((a, b) => Vec4.dist(b, origin) - Vec4.dist(a, origin))[0];
      const middlePoint = Vec4.med(point, intersection);
      let anchor;
      let distance;
      if (bindAnywhere) {
        anchor = Vec4.dist(point, center) < BINDING_DISTANCE / 2 ? center : point;
        distance = 0;
      } else {
        if (Vec4.distanceToLineSegment(point, middlePoint, center) < BINDING_DISTANCE / 2) {
          anchor = center;
        } else {
          anchor = middlePoint;
        }
        if (Utils4.pointInBounds(point, bounds)) {
          distance = this.bindingDistance;
        } else {
          distance = Math.max(
            this.bindingDistance,
            Utils4.getBoundsSides(bounds).map((side) => Vec4.distanceToLineSegment(side[1][0], side[1][1], point)).sort((a, b) => a - b)[0]
          );
        }
      }
      const bindingPoint = Vec4.divV(Vec4.sub(anchor, [expandedBounds.minX, expandedBounds.minY]), [
        expandedBounds.width,
        expandedBounds.height
      ]);
      return {
        point: Vec4.clampV(bindingPoint, 0, 1),
        distance
      };
    });
    __publicField(this, "mutate", (shape, props) => {
      return props;
    });
    __publicField(this, "transform", (shape, bounds, info) => {
      return __spreadProps(__spreadValues({}, shape), { point: [bounds.minX, bounds.minY] });
    });
    __publicField(this, "transformSingle", (shape, bounds, info) => {
      return this.transform(shape, bounds, info);
    });
    __publicField(this, "updateChildren");
    __publicField(this, "onChildrenChange");
    __publicField(this, "onHandleChange");
    __publicField(this, "onRightPointHandle");
    __publicField(this, "onDoubleClickHandle");
    __publicField(this, "onDoubleClickBoundsHandle");
    __publicField(this, "onSessionComplete");
    __publicField(this, "getSvgElement", (shape, isDarkMode) => {
      var _a, _b, _c, _d, _e;
      const elm = (_a = document.getElementById(shape.id + "_svg")) == null ? void 0 : _a.cloneNode(true);
      if (!elm)
        return;
      const hasLabel = (_d = (_c = (_b = shape.label) == null ? void 0 : _b.trim()) == null ? void 0 : _c.length) != null ? _d : 0 > 0;
      if (hasLabel) {
        const s = shape;
        const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
        const font = getFontStyle(shape.style);
        const labelSize = getTextLabelSize(shape.label, font);
        const fontSize = getFontSize(shape.style.size, shape.style.font) * ((_e = shape.style.scale) != null ? _e : 1);
        const fontFamily = getFontFace(shape.style.font).slice(1, -1);
        const labelElm = getTextSvgElement(
          s["label"],
          fontSize,
          fontFamily,
          "middle" /* Middle */,
          labelSize[0],
          false
        );
        const bounds = this.getBounds(shape);
        labelElm.setAttribute(
          "transform",
          `translate(${bounds.width / 2 - labelSize[0] / 2}, ${bounds.height / 2 - labelSize[1] / 2})`
        );
        labelElm.setAttribute("fill", getShapeStyle(shape.style, isDarkMode).stroke);
        labelElm.setAttribute("transform-origin", "center center");
        g.setAttribute("text-align", "center");
        g.setAttribute("text-anchor", "middle");
        g.appendChild(elm);
        g.appendChild(labelElm);
        return g;
      }
      return elm;
    });
  }
};

// src/state/shapes/ArrowUtil/arrowHelpers.ts
import { Utils as Utils5 } from "@tldraw/core";
import { intersectCircleCircle, intersectCircleLineSegment } from "@tldraw/intersect";
import Vec5 from "@tldraw/vec";
import getStroke from "perfect-freehand";
function getArrowArcPath(start, end, circle, bend) {
  return [
    "M",
    start[0],
    start[1],
    "A",
    circle[2],
    circle[2],
    0,
    0,
    bend < 0 ? 0 : 1,
    end[0],
    end[1]
  ].join(" ");
}
function getBendPoint(handles, bend) {
  const { start, end } = handles;
  const dist = Vec5.dist(start.point, end.point);
  const midPoint = Vec5.med(start.point, end.point);
  const bendDist = dist / 2 * bend;
  const u = Vec5.uni(Vec5.vec(start.point, end.point));
  const point = Vec5.toFixed(
    Math.abs(bendDist) < 10 ? midPoint : Vec5.add(midPoint, Vec5.mul(Vec5.per(u), bendDist))
  );
  return point;
}
function renderFreehandArrowShaft(id, style, start, end, decorationStart, decorationEnd) {
  const getRandom = Utils5.rng(id);
  const strokeWidth = getShapeStyle(style).strokeWidth;
  const startPoint = decorationStart ? Vec5.nudge(start, end, strokeWidth) : start;
  const endPoint = decorationEnd ? Vec5.nudge(end, start, strokeWidth) : end;
  const stroke = getStroke([startPoint, endPoint], {
    size: strokeWidth,
    thinning: 0.618 + getRandom() * 0.2,
    easing: EASINGS.easeOutQuad,
    simulatePressure: true,
    streamline: 0,
    last: true
  });
  return Utils5.getSvgPathFromStroke(stroke);
}
function renderCurvedFreehandArrowShaft(id, style, start, end, decorationStart, decorationEnd, center, radius, length, easing) {
  const getRandom = Utils5.rng(id);
  const strokeWidth = getShapeStyle(style).strokeWidth;
  const startPoint = decorationStart ? Vec5.rotWith(start, center, strokeWidth / length) : start;
  const endPoint = decorationEnd ? Vec5.rotWith(end, center, -(strokeWidth / length)) : end;
  const startAngle = Vec5.angle(center, startPoint);
  const endAngle = Vec5.angle(center, endPoint);
  const points = [];
  const count = 8 + Math.floor(Math.abs(length) / 20 * 1 + getRandom() / 2);
  for (let i = 0; i < count; i++) {
    const t = easing(i / count);
    const angle = Utils5.lerpAngles(startAngle, endAngle, t);
    points.push(Vec5.toFixed(Vec5.nudgeAtAngle(center, angle, radius)));
  }
  const stroke = getStroke([startPoint, ...points, endPoint], {
    size: 1 + strokeWidth,
    thinning: 0.618 + getRandom() * 0.2,
    easing: EASINGS.easeOutQuad,
    simulatePressure: false,
    streamline: 0,
    last: true
  });
  return Utils5.getSvgPathFromStroke(stroke);
}
function getCtp(start, bend, end) {
  return Utils5.circleFromThreePoints(start, end, bend);
}
function getCurvedArrowHeadPoints(A, r1, C, r2, sweep) {
  const ints = intersectCircleCircle(A, r1 * 0.618, C, r2).points;
  if (!ints) {
    TLDR.warn("Could not find an intersection for the arrow head.");
    return { left: A, right: A };
  }
  const int = sweep ? ints[0] : ints[1];
  const left = int ? Vec5.nudge(Vec5.rotWith(int, A, Math.PI / 6), A, r1 * -0.382) : A;
  const right = int ? Vec5.nudge(Vec5.rotWith(int, A, -Math.PI / 6), A, r1 * -0.382) : A;
  return { left, right };
}
function getStraightArrowHeadPoints(A, B, r) {
  const ints = intersectCircleLineSegment(A, r, A, B).points;
  if (!ints) {
    TLDR.warn("Could not find an intersection for the arrow head.");
    return { left: A, right: A };
  }
  const int = ints[0];
  const left = int ? Vec5.rotWith(int, A, Math.PI / 6) : A;
  const right = int ? Vec5.rotWith(int, A, -Math.PI / 6) : A;
  return { left, right };
}
function getCurvedArrowHeadPath(A, r1, C, r2, sweep) {
  const { left, right } = getCurvedArrowHeadPoints(A, r1, C, r2, sweep);
  return `M ${left} L ${A} ${right}`;
}
function getStraightArrowHeadPath(A, B, r) {
  const { left, right } = getStraightArrowHeadPoints(A, B, r);
  return `M ${left} L ${A} ${right}`;
}
function getArrowPath(style, start, bend, end, decorationStart, decorationEnd) {
  const { strokeWidth } = getShapeStyle(style, false);
  const arrowDist = Vec5.dist(start, end);
  const arrowHeadLength = Math.min(arrowDist / 3, strokeWidth * 8);
  const path = [];
  const isStraightLine = Vec5.dist(bend, Vec5.toFixed(Vec5.med(start, end))) < 1;
  if (isStraightLine) {
    path.push(`M ${start} L ${end}`);
    if (decorationStart) {
      path.push(getStraightArrowHeadPath(start, end, arrowHeadLength));
    }
    if (decorationEnd) {
      path.push(getStraightArrowHeadPath(end, start, arrowHeadLength));
    }
  } else {
    const circle = getCtp(start, bend, end);
    const center = [circle[0], circle[1]];
    const radius = circle[2];
    const length = getArcLength(center, radius, start, end);
    path.push(`M ${start} A ${radius} ${radius} 0 0 ${length > 0 ? "1" : "0"} ${end}`);
    if (decorationStart)
      path.push(getCurvedArrowHeadPath(start, arrowHeadLength, center, radius, length < 0));
    if (decorationEnd) {
      path.push(getCurvedArrowHeadPath(end, arrowHeadLength, center, radius, length >= 0));
    }
  }
  return path.join(" ");
}
function getArcPoints(start, bend, end) {
  if (Vec5.dist2(bend, Vec5.med(start, end)) <= 4)
    return [start, end];
  const points = [];
  const circle = getCtp(start, bend, end);
  const center = [circle[0], circle[1]];
  const radius = circle[2];
  const startAngle = Vec5.angle(center, start);
  const endAngle = Vec5.angle(center, end);
  for (let i = 0; i < 20; i++) {
    const t = i / 19;
    const angle = Utils5.lerpAngles(startAngle, endAngle, t);
    points.push(Vec5.nudgeAtAngle(center, angle, radius));
  }
  return points;
}
function isAngleBetween(a, b, c) {
  if (c === a || c === b)
    return true;
  const PI24 = Math.PI * 2;
  const AB = (b - a + PI24) % PI24;
  const AC = (c - a + PI24) % PI24;
  return AB <= Math.PI !== AC > AB;
}
function getArcLength(C, r, A, B) {
  const sweep = Utils5.getSweep(C, A, B);
  return r * (2 * Math.PI) * (sweep / (2 * Math.PI));
}

// src/state/shapes/ArrowUtil/components/CurvedArrow.tsx.tsx
import { Utils as Utils6 } from "@tldraw/core";
import Vec6 from "@tldraw/vec";
import * as React24 from "react";

// src/state/shapes/ArrowUtil/components/ArrowHead.tsx
import { jsx as jsx46, jsxs as jsxs24 } from "react/jsx-runtime";
function Arrowhead({ left, middle, right, stroke, strokeWidth }) {
  return /* @__PURE__ */ jsxs24("g", {
    children: [
      /* @__PURE__ */ jsx46("path", {
        className: "tl-stroke-hitarea",
        d: `M ${left} L ${middle} ${right}`
      }),
      /* @__PURE__ */ jsx46("path", {
        d: `M ${left} L ${middle} ${right}`,
        fill: "none",
        stroke,
        strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        pointerEvents: "none"
      })
    ]
  });
}

// src/state/shapes/ArrowUtil/components/CurvedArrow.tsx.tsx
import { Fragment as Fragment6, jsx as jsx47, jsxs as jsxs25 } from "react/jsx-runtime";
var CurvedArrow = React24.memo(function CurvedArrow2({
  id,
  style,
  start,
  bend,
  end,
  arrowBend,
  decorationStart,
  decorationEnd,
  isDraw,
  isDarkMode
}) {
  const arrowDist = Vec6.dist(start, end);
  if (arrowDist < 2)
    return null;
  const styles = getShapeStyle(style, isDarkMode);
  const { strokeWidth } = styles;
  const sw = 1 + strokeWidth * 1.618;
  const circle = getCtp(start, bend, end);
  const center = [circle[0], circle[1]];
  const radius = circle[2];
  const length = getArcLength(center, radius, start, end);
  const getRandom = Utils6.rng(id);
  const easing = EASINGS[getRandom() > 0 ? "easeInOutSine" : "easeInOutCubic"];
  const path = isDraw ? renderCurvedFreehandArrowShaft(
    id,
    style,
    start,
    end,
    decorationStart,
    decorationEnd,
    center,
    radius,
    length,
    easing
  ) : getArrowArcPath(start, end, circle, arrowBend);
  const { strokeDasharray, strokeDashoffset } = Utils6.getPerfectDashProps(
    Math.abs(length),
    sw,
    style.dash,
    2,
    false
  );
  const arrowHeadLength = Math.min(arrowDist / 3, strokeWidth * 8);
  const startArrowHead = decorationStart ? getCurvedArrowHeadPoints(start, arrowHeadLength, center, radius, length < 0) : null;
  const endArrowHead = decorationEnd ? getCurvedArrowHeadPoints(end, arrowHeadLength, center, radius, length >= 0) : null;
  return /* @__PURE__ */ jsxs25(Fragment6, {
    children: [
      /* @__PURE__ */ jsx47("path", {
        className: "tl-stroke-hitarea",
        d: path
      }),
      /* @__PURE__ */ jsx47("path", {
        d: path,
        fill: isDraw ? styles.stroke : "none",
        stroke: styles.stroke,
        strokeWidth: isDraw ? 0 : sw,
        strokeDasharray,
        strokeDashoffset,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        pointerEvents: "none"
      }),
      startArrowHead && /* @__PURE__ */ jsx47(Arrowhead, {
        left: startArrowHead.left,
        middle: start,
        right: startArrowHead.right,
        stroke: styles.stroke,
        strokeWidth: sw
      }),
      endArrowHead && /* @__PURE__ */ jsx47(Arrowhead, {
        left: endArrowHead.left,
        middle: end,
        right: endArrowHead.right,
        stroke: styles.stroke,
        strokeWidth: sw
      })
    ]
  });
});

// src/state/shapes/ArrowUtil/components/StraightArrow.tsx
import { Utils as Utils7 } from "@tldraw/core";
import Vec7 from "@tldraw/vec";
import * as React25 from "react";
import { Fragment as Fragment7, jsx as jsx48, jsxs as jsxs26 } from "react/jsx-runtime";
var StraightArrow = React25.memo(function StraightArrow2({
  id,
  style,
  start,
  end,
  decorationStart,
  decorationEnd,
  isDraw,
  isDarkMode
}) {
  const arrowDist = Vec7.dist(start, end);
  if (arrowDist < 2)
    return null;
  const styles = getShapeStyle(style, isDarkMode);
  const { strokeWidth } = styles;
  const sw = 1 + strokeWidth * 1.618;
  const path = isDraw ? renderFreehandArrowShaft(id, style, start, end, decorationStart, decorationEnd) : "M" + Vec7.toFixed(start) + "L" + Vec7.toFixed(end);
  const { strokeDasharray, strokeDashoffset } = Utils7.getPerfectDashProps(
    arrowDist,
    strokeWidth * 1.618,
    style.dash,
    2,
    false
  );
  const arrowHeadLength = Math.min(arrowDist / 3, strokeWidth * 8);
  const startArrowHead = decorationStart ? getStraightArrowHeadPoints(start, end, arrowHeadLength) : null;
  const endArrowHead = decorationEnd ? getStraightArrowHeadPoints(end, start, arrowHeadLength) : null;
  return /* @__PURE__ */ jsxs26(Fragment7, {
    children: [
      /* @__PURE__ */ jsx48("path", {
        className: "tl-stroke-hitarea",
        d: path
      }),
      /* @__PURE__ */ jsx48("path", {
        d: path,
        fill: styles.stroke,
        stroke: styles.stroke,
        strokeWidth: isDraw ? sw / 2 : sw,
        strokeDasharray,
        strokeDashoffset,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        pointerEvents: "stroke"
      }),
      startArrowHead && /* @__PURE__ */ jsx48(Arrowhead, {
        left: startArrowHead.left,
        middle: start,
        right: startArrowHead.right,
        stroke: styles.stroke,
        strokeWidth: sw
      }),
      endArrowHead && /* @__PURE__ */ jsx48(Arrowhead, {
        left: endArrowHead.left,
        middle: end,
        right: endArrowHead.right,
        stroke: styles.stroke,
        strokeWidth: sw
      })
    ]
  });
});

// src/state/shapes/ArrowUtil/ArrowUtil.tsx
import { Fragment as Fragment8, jsx as jsx49, jsxs as jsxs27 } from "react/jsx-runtime";
var ArrowUtil = class extends TDShapeUtil {
  constructor() {
    super(...arguments);
    __publicField(this, "type", "arrow" /* Arrow */);
    __publicField(this, "hideBounds", true);
    __publicField(this, "canEdit", true);
    __publicField(this, "pathCache", /* @__PURE__ */ new WeakMap());
    __publicField(this, "getShape", (props) => {
      var _a, _b, _c, _d;
      return __spreadValues({
        id: "id",
        type: "arrow" /* Arrow */,
        name: "Arrow",
        parentId: "page",
        childIndex: 1,
        point: [0, 0],
        rotation: 0,
        bend: 0,
        handles: {
          start: __spreadValues({
            id: "start",
            index: 0,
            point: [0, 0],
            canBind: true
          }, (_a = props.handles) == null ? void 0 : _a.start),
          end: __spreadValues({
            id: "end",
            index: 1,
            point: [1, 1],
            canBind: true
          }, (_b = props.handles) == null ? void 0 : _b.end),
          bend: __spreadValues({
            id: "bend",
            index: 2,
            point: [0.5, 0.5]
          }, (_c = props.handles) == null ? void 0 : _c.bend)
        },
        decorations: (_d = props.decorations) != null ? _d : {
          end: "arrow" /* Arrow */
        },
        style: __spreadValues(__spreadProps(__spreadValues({}, defaultStyle), {
          isFilled: false
        }), props.style),
        label: "",
        labelPoint: [0.5, 0.5]
      }, props);
    });
    __publicField(this, "Component", TDShapeUtil.Component(
      ({ shape, isEditing, isGhost, meta, events, onShapeChange, onShapeBlur }, ref) => {
        var _a, _b;
        const {
          id,
          label = "",
          handles: { start, bend, end },
          decorations = {},
          style
        } = shape;
        const hasLabel = (_b = (_a = label == null ? void 0 : label.trim()) == null ? void 0 : _a.length) != null ? _b : 0 > 0;
        const isStraightLine = Vec8.dist(bend.point, Vec8.toFixed(Vec8.med(start.point, end.point))) < 1;
        const font = getFontStyle(style);
        const styles = getShapeStyle(style, meta.isDarkMode);
        const labelSize = hasLabel || isEditing ? getTextLabelSize(label, font) : [0, 0];
        const bounds = this.getBounds(shape);
        const dist = React26.useMemo(() => {
          const { start: start2, bend: bend2, end: end2 } = shape.handles;
          if (isStraightLine)
            return Vec8.dist(start2.point, end2.point);
          const circle = getCtp(start2.point, bend2.point, end2.point);
          const center = circle.slice(0, 2);
          const radius = circle[2];
          const length = getArcLength(center, radius, start2.point, end2.point);
          return Math.abs(length);
        }, [shape.handles]);
        const scale = Math.max(
          0.5,
          Math.min(1, Math.max(dist / (labelSize[1] + 128), dist / (labelSize[0] + 128)))
        );
        const offset = React26.useMemo(() => {
          const bounds2 = this.getBounds(shape);
          const offset2 = Vec8.sub(
            shape.handles.bend.point,
            Vec8.toFixed([bounds2.width / 2, bounds2.height / 2])
          );
          return offset2;
        }, [shape, scale]);
        const handleLabelChange = React26.useCallback(
          (label2) => {
            onShapeChange == null ? void 0 : onShapeChange({ id, label: label2 });
          },
          [onShapeChange]
        );
        const Component = isStraightLine ? StraightArrow : CurvedArrow;
        return /* @__PURE__ */ jsxs27(FullWrapper, __spreadProps(__spreadValues({
          ref
        }, events), {
          children: [
            /* @__PURE__ */ jsx49(TextLabel, {
              font,
              text: label,
              color: styles.stroke,
              offsetX: offset[0],
              offsetY: offset[1],
              scale,
              isEditing,
              onChange: handleLabelChange,
              onBlur: onShapeBlur
            }),
            /* @__PURE__ */ jsxs27(SVGContainer, {
              id: shape.id + "_svg",
              children: [
                /* @__PURE__ */ jsx49("defs", {
                  children: /* @__PURE__ */ jsxs27("mask", {
                    id: shape.id + "_clip",
                    children: [
                      /* @__PURE__ */ jsx49("rect", {
                        x: -100,
                        y: -100,
                        width: bounds.width + 200,
                        height: bounds.height + 200,
                        fill: "white"
                      }),
                      /* @__PURE__ */ jsx49("rect", {
                        x: bounds.width / 2 - labelSize[0] / 2 * scale + offset[0],
                        y: bounds.height / 2 - labelSize[1] / 2 * scale + offset[1],
                        width: labelSize[0] * scale,
                        height: labelSize[1] * scale,
                        rx: 4 * scale,
                        ry: 4 * scale,
                        fill: "black",
                        opacity: 1
                      })
                    ]
                  })
                }),
                /* @__PURE__ */ jsx49("g", {
                  pointerEvents: "none",
                  opacity: isGhost ? GHOSTED_OPACITY : 1,
                  mask: hasLabel || isEditing ? `url(#${shape.id}_clip)` : ``,
                  children: /* @__PURE__ */ jsx49(Component, {
                    id,
                    style,
                    start: start.point,
                    end: end.point,
                    bend: bend.point,
                    arrowBend: shape.bend,
                    decorationStart: decorations == null ? void 0 : decorations.start,
                    decorationEnd: decorations == null ? void 0 : decorations.end,
                    isDraw: style.dash === "draw" /* Draw */,
                    isDarkMode: meta.isDarkMode
                  })
                })
              ]
            })
          ]
        }));
      }
    ));
    __publicField(this, "Indicator", TDShapeUtil.Indicator(({ shape, bounds }) => {
      var _a, _b;
      const {
        style,
        decorations,
        label,
        handles: { start, bend, end }
      } = shape;
      const hasLabel = (_b = (_a = label == null ? void 0 : label.trim()) == null ? void 0 : _a.length) != null ? _b : 0 > 0;
      const font = getFontStyle(style);
      const labelSize = hasLabel ? getTextLabelSize(label, font) : [0, 0];
      const isStraightLine = Vec8.dist(bend.point, Vec8.toFixed(Vec8.med(start.point, end.point))) < 1;
      const dist = React26.useMemo(() => {
        const { start: start2, bend: bend2, end: end2 } = shape.handles;
        if (isStraightLine)
          return Vec8.dist(start2.point, end2.point);
        const circle = getCtp(start2.point, bend2.point, end2.point);
        const center = circle.slice(0, 2);
        const radius = circle[2];
        const length = getArcLength(center, radius, start2.point, end2.point);
        return Math.abs(length);
      }, [shape.handles]);
      const scale = Math.max(
        0.5,
        Math.min(1, Math.max(dist / (labelSize[1] + 128), dist / (labelSize[0] + 128)))
      );
      const offset = React26.useMemo(() => {
        const bounds2 = this.getBounds(shape);
        const offset2 = Vec8.sub(shape.handles.bend.point, [bounds2.width / 2, bounds2.height / 2]);
        return offset2;
      }, [shape, scale]);
      return /* @__PURE__ */ jsxs27(Fragment8, {
        children: [
          hasLabel && /* @__PURE__ */ jsx49(LabelMask, {
            id: shape.id,
            scale,
            offset,
            bounds,
            labelSize
          }),
          /* @__PURE__ */ jsx49("path", {
            d: getArrowPath(
              style,
              start.point,
              bend.point,
              end.point,
              decorations == null ? void 0 : decorations.start,
              decorations == null ? void 0 : decorations.end
            ),
            mask: hasLabel ? `url(#${shape.id}_clip)` : ``
          }),
          hasLabel && /* @__PURE__ */ jsx49("rect", {
            x: bounds.width / 2 - labelSize[0] / 2 * scale + offset[0],
            y: bounds.height / 2 - labelSize[1] / 2 * scale + offset[1],
            width: labelSize[0] * scale,
            height: labelSize[1] * scale,
            rx: 4 * scale,
            ry: 4 * scale,
            fill: "transparent"
          })
        ]
      });
    }));
    __publicField(this, "getBounds", (shape) => {
      const bounds = Utils8.getFromCache(this.boundsCache, shape, () => {
        const {
          handles: { start, bend, end }
        } = shape;
        return Utils8.getBoundsFromPoints(getArcPoints(start.point, bend.point, end.point));
      });
      return Utils8.translateBounds(bounds, shape.point);
    });
    __publicField(this, "getRotatedBounds", (shape) => {
      const {
        handles: { start, bend, end }
      } = shape;
      let points = getArcPoints(start.point, bend.point, end.point);
      const { minX, minY, maxX, maxY } = Utils8.getBoundsFromPoints(points);
      if (shape.rotation !== 0) {
        points = points.map(
          (pt) => Vec8.rotWith(pt, [(minX + maxX) / 2, (minY + maxY) / 2], shape.rotation || 0)
        );
      }
      return Utils8.translateBounds(Utils8.getBoundsFromPoints(points), shape.point);
    });
    __publicField(this, "getCenter", (shape) => {
      const { start, end } = shape.handles;
      return Vec8.add(shape.point, Vec8.med(start.point, end.point));
    });
    __publicField(this, "shouldRender", (prev, next) => {
      return next.decorations !== prev.decorations || next.handles !== prev.handles || next.style !== prev.style || next.label !== prev.label;
    });
    __publicField(this, "hitTestPoint", (shape, point) => {
      const {
        handles: { start, bend, end }
      } = shape;
      const pt = Vec8.sub(point, shape.point);
      const points = getArcPoints(start.point, bend.point, end.point);
      for (let i = 1; i < points.length; i++) {
        if (Vec8.distanceToLineSegment(points[i - 1], points[i], pt) < 1) {
          return true;
        }
      }
      return false;
    });
    __publicField(this, "hitTestLineSegment", (shape, A, B) => {
      const {
        handles: { start, bend, end }
      } = shape;
      const ptA = Vec8.sub(A, shape.point);
      const ptB = Vec8.sub(B, shape.point);
      const points = getArcPoints(start.point, bend.point, end.point);
      for (let i = 1; i < points.length; i++) {
        if (intersectLineSegmentLineSegment(points[i - 1], points[i], ptA, ptB).didIntersect) {
          return true;
        }
      }
      return false;
    });
    __publicField(this, "hitTestBounds", (shape, bounds) => {
      const { start, end, bend } = shape.handles;
      const sp = Vec8.add(shape.point, start.point);
      const ep = Vec8.add(shape.point, end.point);
      if (Utils8.pointInBounds(sp, bounds) || Utils8.pointInBounds(ep, bounds)) {
        return true;
      }
      if (Vec8.isEqual(Vec8.med(start.point, end.point), bend.point)) {
        return intersectLineSegmentBounds2(sp, ep, bounds).length > 0;
      } else {
        const [cx, cy, r] = getCtp(start.point, bend.point, end.point);
        const cp = Vec8.add(shape.point, [cx, cy]);
        return intersectArcBounds(cp, r, sp, ep, bounds).length > 0;
      }
    });
    __publicField(this, "transform", (shape, bounds, { initialShape, scaleX, scaleY }) => {
      const initialShapeBounds = this.getBounds(initialShape);
      const handles = ["start", "end"];
      const nextHandles = __spreadValues({}, initialShape.handles);
      handles.forEach((handle) => {
        if (handle === "bend")
          return;
        const [x, y] = nextHandles[handle].point;
        const nw = x / initialShapeBounds.width;
        const nh = y / initialShapeBounds.height;
        nextHandles[handle] = __spreadProps(__spreadValues({}, nextHandles[handle]), {
          point: [
            bounds.width * (scaleX < 0 ? 1 - nw : nw),
            bounds.height * (scaleY < 0 ? 1 - nh : nh)
          ]
        });
      });
      const nextBend = scaleX > 0 && scaleY < 0 || scaleX < 0 && scaleY > 0 ? -initialShape.bend : initialShape.bend;
      const bendPoint = getBendPoint(nextHandles, nextBend);
      nextHandles.bend.point = bendPoint;
      return {
        point: Vec8.toFixed([bounds.minX, bounds.minY]),
        handles: nextHandles,
        bend: nextBend
      };
    });
    __publicField(this, "onDoubleClickHandle", (shape, handle) => {
      var _a, _b;
      switch (handle) {
        case "bend": {
          return {
            bend: 0,
            handles: __spreadProps(__spreadValues({}, shape.handles), {
              bend: __spreadProps(__spreadValues({}, shape.handles.bend), {
                point: getBendPoint(shape.handles, shape.bend)
              })
            })
          };
        }
        case "start": {
          return {
            decorations: __spreadProps(__spreadValues({}, shape.decorations), {
              start: ((_a = shape.decorations) == null ? void 0 : _a.start) ? void 0 : "arrow" /* Arrow */
            })
          };
        }
        case "end": {
          return {
            decorations: __spreadProps(__spreadValues({}, shape.decorations), {
              end: ((_b = shape.decorations) == null ? void 0 : _b.end) ? void 0 : "arrow" /* Arrow */
            })
          };
        }
      }
      return this;
    });
    __publicField(this, "onHandleChange", (shape, handles) => {
      let nextHandles = Utils8.deepMerge(shape.handles, handles);
      let nextBend = shape.bend;
      nextHandles = Utils8.deepMerge(nextHandles, {
        start: {
          point: Vec8.toFixed(nextHandles.start.point)
        },
        end: {
          point: Vec8.toFixed(nextHandles.end.point)
        }
      });
      if (Vec8.isEqual(nextHandles.start.point, nextHandles.end.point))
        return;
      if ("bend" in handles) {
        const { start, end, bend } = nextHandles;
        const distance = Vec8.dist(start.point, end.point);
        const midPoint = Vec8.med(start.point, end.point);
        const angle = Vec8.angle(start.point, end.point);
        const u = Vec8.uni(Vec8.vec(start.point, end.point));
        const ap = Vec8.add(midPoint, Vec8.mul(Vec8.per(u), distance));
        const bp = Vec8.sub(midPoint, Vec8.mul(Vec8.per(u), distance));
        const bendPoint = Vec8.nearestPointOnLineSegment(ap, bp, bend.point, true);
        const bendDist = Vec8.dist(midPoint, bendPoint);
        const realBend = bendDist / (distance / 2);
        nextBend = Utils8.clamp(realBend, -0.99, 0.99);
        const angleToBend = Vec8.angle(start.point, bendPoint);
        if (Vec8.isEqual(midPoint, getBendPoint(nextHandles, nextBend))) {
          nextBend = 0;
        } else if (isAngleBetween(angle, angle + Math.PI, angleToBend)) {
          nextBend *= -1;
        }
      }
      const nextShape = {
        point: shape.point,
        bend: nextBend,
        handles: __spreadProps(__spreadValues({}, nextHandles), {
          bend: __spreadProps(__spreadValues({}, nextHandles.bend), {
            point: getBendPoint(nextHandles, nextBend)
          })
        })
      };
      const topLeft = shape.point;
      const nextBounds = this.getBounds(__spreadValues({}, nextShape));
      const offset = Vec8.sub([nextBounds.minX, nextBounds.minY], topLeft);
      if (!Vec8.isEqual(offset, [0, 0])) {
        Object.values(nextShape.handles).forEach((handle) => {
          handle.point = Vec8.toFixed(Vec8.sub(handle.point, offset));
        });
        nextShape.point = Vec8.toFixed(Vec8.add(nextShape.point, offset));
      }
      return nextShape;
    });
    __publicField(this, "getSvgElement", (shape, isDarkMode) => {
      var _a, _b, _c, _d, _e;
      const elm = (_a = document.getElementById(shape.id + "_svg")) == null ? void 0 : _a.cloneNode(true);
      if (!elm)
        return;
      const hasLabel = (_d = (_c = (_b = shape.label) == null ? void 0 : _b.trim()) == null ? void 0 : _c.length) != null ? _d : 0 > 0;
      if (hasLabel) {
        const s = shape;
        const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
        const font = getFontStyle(shape.style);
        const labelSize = getTextLabelSize(shape.label, font);
        const fontSize = getFontSize(shape.style.size, shape.style.font) * ((_e = shape.style.scale) != null ? _e : 1);
        const fontFamily = getFontFace(shape.style.font).slice(1, -1);
        const labelElm = getTextSvgElement(
          s.label,
          fontSize,
          fontFamily,
          "start" /* Start */,
          labelSize[0],
          false
        );
        let dist;
        const { start, bend, end } = shape.handles;
        const isStraightLine = Vec8.dist(bend.point, Vec8.toFixed(Vec8.med(start.point, end.point))) < 1;
        if (isStraightLine) {
          dist = Vec8.dist(start.point, end.point);
        } else {
          const circle = getCtp(start.point, bend.point, end.point);
          const center = circle.slice(0, 2);
          const radius = circle[2];
          const length = getArcLength(center, radius, start.point, end.point);
          dist = Math.abs(length);
        }
        const scale = Math.max(
          0.5,
          Math.min(1, Math.max(dist / (labelSize[1] + 128), dist / (labelSize[0] + 128)))
        );
        const bounds = this.getBounds(shape);
        const offset = Vec8.sub(shape.handles.bend.point, [bounds.width / 2, bounds.height / 2]);
        const x = bounds.width / 2 - labelSize[0] / 2 * scale + offset[0];
        const y = bounds.height / 2 - labelSize[1] / 2 * scale + offset[1];
        labelElm.setAttribute("transform", `translate(${x}, ${y})`);
        labelElm.setAttribute("fill", getShapeStyle(shape.style, isDarkMode).stroke);
        labelElm.setAttribute("transform-origin", "center center");
        g.setAttribute("text-align", "center");
        g.setAttribute("text-anchor", "middle");
        g.appendChild(elm);
        g.appendChild(labelElm);
        return g;
      }
      return elm;
    });
  }
};
var FullWrapper = styled("div", { width: "100%", height: "100%" });

// src/state/shapes/DrawUtil/DrawUtil.tsx
import { SVGContainer as SVGContainer2, Utils as Utils10 } from "@tldraw/core";
import {
  intersectBoundsBounds,
  intersectBoundsPolyline,
  intersectLineSegmentBounds as intersectLineSegmentBounds3,
  intersectLineSegmentLineSegment as intersectLineSegmentLineSegment2
} from "@tldraw/intersect";
import { Vec as Vec10 } from "@tldraw/vec";
import * as React27 from "react";

// src/state/shapes/DrawUtil/drawHelpers.ts
import { Utils as Utils9 } from "@tldraw/core";
import Vec9 from "@tldraw/vec";
import {
  getStrokeOutlinePoints,
  getStrokePoints
} from "perfect-freehand";
var simulatePressureSettings = {
  easing: (t) => Math.sin(t * Math.PI / 2),
  simulatePressure: true
};
var realPressureSettings = {
  easing: (t) => t * t,
  simulatePressure: false
};
function getFreehandOptions(shape) {
  const styles = getShapeStyle(shape.style);
  const options2 = __spreadProps(__spreadValues({
    size: 1 + styles.strokeWidth * 1.5,
    thinning: 0.65,
    streamline: 0.65,
    smoothing: 0.65
  }, shape.points[1][2] === 0.5 ? simulatePressureSettings : realPressureSettings), {
    last: shape.isComplete
  });
  return options2;
}
function getFillPath(shape) {
  if (shape.points.length < 2)
    return "";
  return Utils9.getSvgPathFromStroke(
    getStrokePoints(shape.points, getFreehandOptions(shape)).map((pt) => pt.point)
  );
}
function getDrawStrokePoints(shape, options2) {
  return getStrokePoints(shape.points, options2);
}
function getDrawStrokePathTDSnapshot(shape) {
  if (shape.points.length < 2)
    return "";
  const options2 = getFreehandOptions(shape);
  const strokePoints = getDrawStrokePoints(shape, options2);
  const path = Utils9.getSvgPathFromStroke(getStrokeOutlinePoints(strokePoints, options2));
  return path;
}
function getSolidStrokePathTDSnapshot(shape) {
  const { points } = shape;
  if (points.length < 2)
    return "M 0 0 L 0 0";
  const options2 = getFreehandOptions(shape);
  const strokePoints = getDrawStrokePoints(shape, options2);
  const last = points[points.length - 1];
  if (!Vec9.isEqual(strokePoints[0].point, last))
    strokePoints.push({ point: last });
  const path = Utils9.getSvgPathFromStrokePoints(strokePoints);
  return path;
}

// src/state/shapes/DrawUtil/DrawUtil.tsx
import { jsx as jsx50, jsxs as jsxs28 } from "react/jsx-runtime";
var DrawUtil = class extends TDShapeUtil {
  constructor() {
    super(...arguments);
    __publicField(this, "type", "draw" /* Draw */);
    __publicField(this, "pointsBoundsCache", /* @__PURE__ */ new WeakMap([]));
    __publicField(this, "shapeBoundsCache", /* @__PURE__ */ new Map());
    __publicField(this, "rotatedCache", /* @__PURE__ */ new WeakMap([]));
    __publicField(this, "pointCache", {});
    __publicField(this, "canClone", true);
    __publicField(this, "getShape", (props) => {
      return Utils10.deepMerge(
        {
          id: "id",
          type: "draw" /* Draw */,
          name: "Draw",
          parentId: "page",
          childIndex: 1,
          point: [0, 0],
          rotation: 0,
          style: defaultStyle,
          points: [],
          isComplete: false
        },
        props
      );
    });
    __publicField(this, "Component", TDShapeUtil.Component(
      ({ shape, meta, isSelected, isGhost, events }, ref) => {
        const { points, style, isComplete } = shape;
        const polygonPathTDSnapshot = React27.useMemo(() => {
          return getFillPath(shape);
        }, [points, style.size]);
        const pathTDSnapshot = React27.useMemo(() => {
          return style.dash === "draw" /* Draw */ ? getDrawStrokePathTDSnapshot(shape) : getSolidStrokePathTDSnapshot(shape);
        }, [points, style.size, style.dash, isComplete]);
        const styles = getShapeStyle(style, meta.isDarkMode);
        const { stroke, fill, strokeWidth } = styles;
        const bounds = this.getBounds(shape);
        const verySmall = bounds.width <= strokeWidth / 2 && bounds.height <= strokeWidth / 2;
        if (verySmall) {
          const sw2 = 1 + strokeWidth;
          return /* @__PURE__ */ jsx50(SVGContainer2, __spreadProps(__spreadValues({
            ref,
            id: shape.id + "_svg"
          }, events), {
            children: /* @__PURE__ */ jsx50("circle", {
              r: sw2,
              fill: stroke,
              stroke,
              pointerEvents: "all",
              opacity: isGhost ? GHOSTED_OPACITY : 1
            })
          }));
        }
        const shouldFill = style.isFilled && points.length > 3 && Vec10.dist(points[0], points[points.length - 1]) < strokeWidth * 2;
        if (shape.style.dash === "draw" /* Draw */) {
          return /* @__PURE__ */ jsx50(SVGContainer2, __spreadProps(__spreadValues({
            ref,
            id: shape.id + "_svg"
          }, events), {
            children: /* @__PURE__ */ jsxs28("g", {
              opacity: isGhost ? GHOSTED_OPACITY : 1,
              children: [
                /* @__PURE__ */ jsx50("path", {
                  className: shouldFill || isSelected ? "tl-fill-hitarea" : "tl-stroke-hitarea",
                  d: pathTDSnapshot
                }),
                shouldFill && /* @__PURE__ */ jsx50("path", {
                  d: polygonPathTDSnapshot,
                  stroke: "none",
                  fill,
                  strokeLinejoin: "round",
                  strokeLinecap: "round",
                  pointerEvents: "none"
                }),
                /* @__PURE__ */ jsx50("path", {
                  d: pathTDSnapshot,
                  fill: stroke,
                  stroke,
                  strokeWidth: strokeWidth / 2,
                  strokeLinejoin: "round",
                  strokeLinecap: "round",
                  pointerEvents: "none"
                })
              ]
            })
          }));
        }
        const strokeDasharray = {
          ["draw" /* Draw */]: "none",
          ["solid" /* Solid */]: `none`,
          ["dotted" /* Dotted */]: `0.1 ${strokeWidth * 4}`,
          ["dashed" /* Dashed */]: `${strokeWidth * 4} ${strokeWidth * 4}`
        }[style.dash];
        const strokeDashoffset = {
          ["draw" /* Draw */]: "none",
          ["solid" /* Solid */]: `none`,
          ["dotted" /* Dotted */]: `0`,
          ["dashed" /* Dashed */]: `0`
        }[style.dash];
        const sw = 1 + strokeWidth * 1.5;
        return /* @__PURE__ */ jsx50(SVGContainer2, __spreadProps(__spreadValues({
          ref,
          id: shape.id + "_svg"
        }, events), {
          children: /* @__PURE__ */ jsxs28("g", {
            opacity: isGhost ? GHOSTED_OPACITY : 1,
            children: [
              /* @__PURE__ */ jsx50("path", {
                className: shouldFill && isSelected ? "tl-fill-hitarea" : "tl-stroke-hitarea",
                d: pathTDSnapshot
              }),
              /* @__PURE__ */ jsx50("path", {
                d: pathTDSnapshot,
                fill: shouldFill ? fill : "none",
                stroke: "none",
                strokeWidth: Math.min(4, strokeWidth * 2),
                strokeLinejoin: "round",
                strokeLinecap: "round",
                pointerEvents: "none"
              }),
              /* @__PURE__ */ jsx50("path", {
                d: pathTDSnapshot,
                fill: "none",
                stroke,
                strokeWidth: sw,
                strokeDasharray,
                strokeDashoffset,
                strokeLinejoin: "round",
                strokeLinecap: "round",
                pointerEvents: "none"
              })
            ]
          })
        }));
      }
    ));
    __publicField(this, "Indicator", TDShapeUtil.Indicator(({ shape }) => {
      const { points } = shape;
      const pathTDSnapshot = React27.useMemo(() => {
        return getSolidStrokePathTDSnapshot(shape);
      }, [points]);
      const bounds = this.getBounds(shape);
      const verySmall = bounds.width < 4 && bounds.height < 4;
      if (verySmall) {
        return /* @__PURE__ */ jsx50("circle", {
          x: bounds.width / 2,
          y: bounds.height / 2,
          r: 1
        });
      }
      return /* @__PURE__ */ jsx50("path", {
        d: pathTDSnapshot
      });
    }));
    __publicField(this, "transform", (shape, bounds, { initialShape, scaleX, scaleY }) => {
      const initialShapeBounds = Utils10.getFromCache(
        this.boundsCache,
        initialShape,
        () => Utils10.getBoundsFromPoints(initialShape.points)
      );
      const points = initialShape.points.map(([x, y, r]) => {
        return [
          bounds.width * (scaleX < 0 ? 1 - x / initialShapeBounds.width : x / initialShapeBounds.width),
          bounds.height * (scaleY < 0 ? 1 - y / initialShapeBounds.height : y / initialShapeBounds.height),
          r
        ];
      });
      const newBounds = Utils10.getBoundsFromPoints(shape.points);
      const point = Vec10.sub([bounds.minX, bounds.minY], [newBounds.minX, newBounds.minY]);
      return {
        points,
        point
      };
    });
    __publicField(this, "getBounds", (shape) => {
      const pointsHaveChanged = !this.pointsBoundsCache.has(shape.points);
      const pointHasChanged = !(this.pointCache[shape.id] === shape.point);
      if (pointsHaveChanged) {
        const bounds = Utils10.getBoundsFromPoints(shape.points);
        this.pointsBoundsCache.set(shape.points, bounds);
        this.shapeBoundsCache.set(shape.id, Utils10.translateBounds(bounds, shape.point));
        this.pointCache[shape.id] = shape.point;
      } else if (pointHasChanged && !pointsHaveChanged) {
        this.pointCache[shape.id] = shape.point;
        this.shapeBoundsCache.set(
          shape.id,
          Utils10.translateBounds(this.pointsBoundsCache.get(shape.points), shape.point)
        );
      }
      return this.shapeBoundsCache.get(shape.id);
    });
    __publicField(this, "shouldRender", (prev, next) => {
      return next.points !== prev.points || next.style !== prev.style || next.isComplete !== prev.isComplete;
    });
    __publicField(this, "hitTestPoint", (shape, point) => {
      const ptA = Vec10.sub(point, shape.point);
      return Utils10.pointInPolyline(ptA, shape.points);
    });
    __publicField(this, "hitTestLineSegment", (shape, A, B) => {
      const { points, point } = shape;
      const ptA = Vec10.sub(A, point);
      const ptB = Vec10.sub(B, point);
      const bounds = this.getBounds(shape);
      if (bounds.width < 8 && bounds.height < 8) {
        return Vec10.distanceToLineSegment(A, B, Utils10.getBoundsCenter(bounds)) < 5;
      }
      if (intersectLineSegmentBounds3(ptA, ptB, bounds)) {
        for (let i = 1; i < points.length; i++) {
          if (intersectLineSegmentLineSegment2(points[i - 1], points[i], ptA, ptB).didIntersect) {
            return true;
          }
        }
      }
      return false;
    });
    __publicField(this, "hitTestBounds", (shape, bounds) => {
      if (!shape.rotation) {
        const shapeBounds = this.getBounds(shape);
        return Utils10.boundsContain(bounds, shapeBounds) || (Utils10.boundsContain(shapeBounds, bounds) || intersectBoundsBounds(shapeBounds, bounds).length > 0) && intersectBoundsPolyline(Utils10.translateBounds(bounds, Vec10.neg(shape.point)), shape.points).length > 0;
      }
      const rBounds = this.getRotatedBounds(shape);
      const rotatedBounds = Utils10.getFromCache(this.rotatedCache, shape, () => {
        const c = Utils10.getBoundsCenter(Utils10.getBoundsFromPoints(shape.points));
        return shape.points.map((pt) => Vec10.rotWith(pt, c, shape.rotation || 0));
      });
      return Utils10.boundsContain(bounds, rBounds) || intersectBoundsPolyline(Utils10.translateBounds(bounds, Vec10.neg(shape.point)), rotatedBounds).length > 0;
    });
  }
};

// src/state/shapes/EllipseUtil/EllipseUtil.tsx
import { SVGContainer as SVGContainer3, Utils as Utils13 } from "@tldraw/core";
import {
  intersectEllipseBounds,
  intersectLineSegmentEllipse,
  intersectRayEllipse
} from "@tldraw/intersect";
import { Vec as Vec11 } from "@tldraw/vec";
import * as React30 from "react";

// src/state/shapes/EllipseUtil/components/DashedEllipse.tsx
import { Utils as Utils11 } from "@tldraw/core";
import * as React28 from "react";
import { Fragment as Fragment9, jsx as jsx51, jsxs as jsxs29 } from "react/jsx-runtime";
var DashedEllipse = React28.memo(function DashedEllipse2({
  radius,
  style,
  isSelected,
  isDarkMode
}) {
  const { stroke, strokeWidth, fill } = getShapeStyle(style, isDarkMode);
  const sw = 1 + strokeWidth * 1.618;
  const rx = Math.max(0, radius[0] - sw / 2);
  const ry = Math.max(0, radius[1] - sw / 2);
  const perimeter = Utils11.perimeterOfEllipse(rx, ry);
  const { strokeDasharray, strokeDashoffset } = Utils11.getPerfectDashProps(
    perimeter < 64 ? perimeter * 2 : perimeter,
    strokeWidth * 1.618,
    style.dash,
    4
  );
  return /* @__PURE__ */ jsxs29(Fragment9, {
    children: [
      /* @__PURE__ */ jsx51("ellipse", {
        className: style.isFilled || isSelected ? "tl-fill-hitarea" : "tl-stroke-hitarea",
        cx: radius[0],
        cy: radius[1],
        rx: radius[0],
        ry: radius[1]
      }),
      /* @__PURE__ */ jsx51("ellipse", {
        cx: radius[0],
        cy: radius[1],
        rx,
        ry,
        fill,
        stroke,
        strokeWidth: sw,
        strokeDasharray,
        strokeDashoffset,
        pointerEvents: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    ]
  });
});

// src/state/shapes/EllipseUtil/components/DrawEllipse.tsx
import * as React29 from "react";

// src/state/shapes/EllipseUtil/ellipseHelpers.ts
import { Utils as Utils12 } from "@tldraw/core";
import { getStrokeOutlinePoints as getStrokeOutlinePoints2, getStrokePoints as getStrokePoints2 } from "perfect-freehand";
function getEllipseStrokePoints(id, radius, style) {
  const { strokeWidth } = getShapeStyle(style);
  const getRandom = Utils12.rng(id);
  const rx = radius[0] + getRandom() * strokeWidth * 2;
  const ry = radius[1] + getRandom() * strokeWidth * 2;
  const perimeter = Utils12.perimeterOfEllipse(rx, ry);
  const points = [];
  const start = Math.PI + Math.PI * getRandom();
  const extra = Math.abs(getRandom());
  const count = Math.max(16, perimeter / 10);
  for (let i = 0; i < count; i++) {
    const t = EASINGS.easeInOutSine(i / (count + 1));
    const rads = start * 2 + Math.PI * (2 + extra) * t;
    const c = Math.cos(rads);
    const s = Math.sin(rads);
    points.push([rx * c + radius[0], ry * s + radius[1], t + 0.5 + getRandom() / 2]);
  }
  return getStrokePoints2(points, {
    size: 1 + strokeWidth * 2,
    thinning: 0.618,
    end: { taper: perimeter / 8 },
    start: { taper: perimeter / 12 },
    streamline: 0,
    simulatePressure: true
  });
}
function getEllipsePath(id, radius, style) {
  const { strokeWidth } = getShapeStyle(style);
  const getRandom = Utils12.rng(id);
  const rx = radius[0] + getRandom() * strokeWidth * 2;
  const ry = radius[1] + getRandom() * strokeWidth * 2;
  const perimeter = Utils12.perimeterOfEllipse(rx, ry);
  return Utils12.getSvgPathFromStroke(
    getStrokeOutlinePoints2(getEllipseStrokePoints(id, radius, style), {
      size: 2 + strokeWidth * 2,
      thinning: 0.618,
      end: { taper: perimeter / 8 },
      start: { taper: perimeter / 12 },
      streamline: 0,
      simulatePressure: true
    })
  );
}
function getEllipseIndicatorPath(id, radius, style) {
  return Utils12.getSvgPathFromStrokePoints(getEllipseStrokePoints(id, radius, style));
}

// src/state/shapes/EllipseUtil/components/DrawEllipse.tsx
import { Fragment as Fragment10, jsx as jsx52, jsxs as jsxs30 } from "react/jsx-runtime";
var DrawEllipse = React29.memo(function DrawEllipse2({
  id,
  radius,
  style,
  isSelected,
  isDarkMode
}) {
  const { stroke, strokeWidth, fill } = getShapeStyle(style, isDarkMode);
  const innerPath = getEllipsePath(id, radius, style);
  return /* @__PURE__ */ jsxs30(Fragment10, {
    children: [
      /* @__PURE__ */ jsx52("ellipse", {
        className: style.isFilled || isSelected ? "tl-fill-hitarea" : "tl-stroke-hitarea",
        cx: radius[0],
        cy: radius[1],
        rx: radius[0],
        ry: radius[1]
      }),
      style.isFilled && /* @__PURE__ */ jsx52("path", {
        d: getEllipseIndicatorPath(id, radius, style),
        stroke: "none",
        fill,
        pointerEvents: "none"
      }),
      /* @__PURE__ */ jsx52("path", {
        d: innerPath,
        fill: stroke,
        stroke,
        strokeWidth,
        pointerEvents: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    ]
  });
});

// src/state/shapes/EllipseUtil/EllipseUtil.tsx
import { jsx as jsx53, jsxs as jsxs31 } from "react/jsx-runtime";
var EllipseUtil = class extends TDShapeUtil {
  constructor() {
    super(...arguments);
    __publicField(this, "type", "ellipse" /* Ellipse */);
    __publicField(this, "canBind", true);
    __publicField(this, "canClone", true);
    __publicField(this, "canEdit", true);
    __publicField(this, "getShape", (props) => {
      return Utils13.deepMerge(
        {
          id: "id",
          type: "ellipse" /* Ellipse */,
          name: "Ellipse",
          parentId: "page",
          childIndex: 1,
          point: [0, 0],
          radius: [1, 1],
          rotation: 0,
          style: defaultStyle,
          label: "",
          labelPoint: [0.5, 0.5]
        },
        props
      );
    });
    __publicField(this, "Component", TDShapeUtil.Component(
      ({
        shape,
        isGhost,
        isSelected,
        isBinding,
        isEditing,
        meta,
        bounds,
        events,
        onShapeChange,
        onShapeBlur
      }, ref) => {
        const { id, radius, style, label = "", labelPoint = LABEL_POINT } = shape;
        const font = getFontStyle(shape.style);
        const styles = getShapeStyle(style, meta.isDarkMode);
        const strokeWidth = styles.strokeWidth;
        const sw = 1 + strokeWidth * 1.618;
        const rx = Math.max(0, radius[0] - sw / 2);
        const ry = Math.max(0, radius[1] - sw / 2);
        const Component = style.dash === "draw" /* Draw */ ? DrawEllipse : DashedEllipse;
        const handleLabelChange = React30.useCallback(
          (label2) => onShapeChange == null ? void 0 : onShapeChange({ id, label: label2 }),
          [onShapeChange]
        );
        return /* @__PURE__ */ jsxs31(FullWrapper2, __spreadProps(__spreadValues({
          ref
        }, events), {
          children: [
            /* @__PURE__ */ jsx53(TextLabel, {
              isEditing,
              onChange: handleLabelChange,
              onBlur: onShapeBlur,
              font,
              text: label,
              color: styles.stroke,
              offsetX: (labelPoint[0] - 0.5) * bounds.width,
              offsetY: (labelPoint[1] - 0.5) * bounds.height
            }),
            /* @__PURE__ */ jsxs31(SVGContainer3, {
              id: shape.id + "_svg",
              opacity: isGhost ? GHOSTED_OPACITY : 1,
              children: [
                isBinding && /* @__PURE__ */ jsx53("ellipse", {
                  className: "tl-binding-indicator",
                  cx: radius[0],
                  cy: radius[1],
                  rx,
                  ry,
                  strokeWidth: this.bindingDistance
                }),
                /* @__PURE__ */ jsx53(Component, {
                  id,
                  radius,
                  style,
                  isSelected,
                  isDarkMode: meta.isDarkMode
                })
              ]
            })
          ]
        }));
      }
    ));
    __publicField(this, "Indicator", TDShapeUtil.Indicator(({ shape }) => {
      const { id, radius, style } = shape;
      const styles = getShapeStyle(style);
      const strokeWidth = styles.strokeWidth;
      const sw = 1 + strokeWidth * 1.618;
      const rx = Math.max(0, radius[0] - sw / 2);
      const ry = Math.max(0, radius[1] - sw / 2);
      return style.dash === "draw" /* Draw */ ? /* @__PURE__ */ jsx53("path", {
        d: getEllipseIndicatorPath(id, radius, style)
      }) : /* @__PURE__ */ jsx53("ellipse", {
        cx: radius[0],
        cy: radius[1],
        rx,
        ry
      });
    }));
    __publicField(this, "hitTestPoint", (shape, point) => {
      return Utils13.pointInBounds(point, this.getRotatedBounds(shape)) && Utils13.pointInEllipse(
        point,
        this.getCenter(shape),
        shape.radius[0],
        shape.radius[1],
        shape.rotation || 0
      );
    });
    __publicField(this, "hitTestLineSegment", (shape, A, B) => {
      return intersectLineSegmentEllipse(
        A,
        B,
        this.getCenter(shape),
        shape.radius[0],
        shape.radius[1],
        shape.rotation || 0
      ).didIntersect;
    });
    __publicField(this, "getBounds", (shape) => {
      return Utils13.getFromCache(this.boundsCache, shape, () => {
        return Utils13.getRotatedEllipseBounds(
          shape.point[0],
          shape.point[1],
          shape.radius[0],
          shape.radius[1],
          0
        );
      });
    });
    __publicField(this, "getRotatedBounds", (shape) => {
      return Utils13.getRotatedEllipseBounds(
        shape.point[0],
        shape.point[1],
        shape.radius[0],
        shape.radius[1],
        shape.rotation
      );
    });
    __publicField(this, "hitTestBounds", (shape, bounds) => {
      const shapeBounds = this.getBounds(shape);
      return Utils13.boundsContained(shapeBounds, bounds) || intersectEllipseBounds(
        this.getCenter(shape),
        shape.radius[0],
        shape.radius[1],
        shape.rotation || 0,
        bounds
      ).length > 0;
    });
    __publicField(this, "shouldRender", (prev, next) => {
      return next.radius !== prev.radius || next.style !== prev.style || next.label !== prev.label;
    });
    __publicField(this, "getCenter", (shape) => {
      return Vec11.add(shape.point, shape.radius);
    });
    __publicField(this, "getBindingPoint", (shape, fromShape, point, origin, direction, bindAnywhere) => {
      {
        const expandedBounds = this.getExpandedBounds(shape);
        const center = this.getCenter(shape);
        let bindingPoint;
        let distance;
        if (!Utils13.pointInEllipse(
          point,
          center,
          shape.radius[0] + this.bindingDistance,
          shape.radius[1] + this.bindingDistance
        )) {
          return;
        }
        if (bindAnywhere) {
          if (Vec11.dist(point, this.getCenter(shape)) < 12) {
            bindingPoint = [0.5, 0.5];
          } else {
            bindingPoint = Vec11.divV(Vec11.sub(point, [expandedBounds.minX, expandedBounds.minY]), [
              expandedBounds.width,
              expandedBounds.height
            ]);
          }
          distance = 0;
        } else {
          let intersection = intersectRayEllipse(
            origin,
            direction,
            center,
            shape.radius[0],
            shape.radius[1],
            shape.rotation || 0
          ).points.sort((a, b) => Vec11.dist(a, origin) - Vec11.dist(b, origin))[0];
          if (!intersection) {
            intersection = intersectLineSegmentEllipse(
              point,
              center,
              center,
              shape.radius[0],
              shape.radius[1],
              shape.rotation || 0
            ).points.sort((a, b) => Vec11.dist(a, point) - Vec11.dist(b, point))[0];
          }
          if (!intersection) {
            return void 0;
          }
          const anchor = Vec11.med(point, intersection);
          if (Vec11.distanceToLineSegment(point, anchor, this.getCenter(shape)) < 12) {
            bindingPoint = [0.5, 0.5];
          } else {
            bindingPoint = Vec11.divV(Vec11.sub(anchor, [expandedBounds.minX, expandedBounds.minY]), [
              expandedBounds.width,
              expandedBounds.height
            ]);
          }
          if (Utils13.pointInEllipse(point, center, shape.radius[0], shape.radius[1], shape.rotation || 0)) {
            distance = this.bindingDistance / 2;
          } else {
            const innerIntersection = intersectLineSegmentEllipse(
              point,
              center,
              center,
              shape.radius[0],
              shape.radius[1],
              shape.rotation || 0
            ).points[0];
            if (!innerIntersection)
              return void 0;
            distance = Math.max(this.bindingDistance / 2, Vec11.dist(point, innerIntersection));
          }
        }
        return {
          point: bindingPoint,
          distance
        };
      }
    });
    __publicField(this, "transform", (shape, bounds, { scaleX, scaleY, initialShape }) => {
      const { rotation = 0 } = initialShape;
      return {
        point: [bounds.minX, bounds.minY],
        radius: [bounds.width / 2, bounds.height / 2],
        rotation: scaleX < 0 && scaleY >= 0 || scaleY < 0 && scaleX >= 0 ? -(rotation || 0) : rotation || 0
      };
    });
    __publicField(this, "transformSingle", (shape, bounds) => {
      return {
        point: Vec11.toFixed([bounds.minX, bounds.minY]),
        radius: Vec11.div([bounds.width, bounds.height], 2)
      };
    });
  }
};
var FullWrapper2 = styled("div", { width: "100%", height: "100%" });

// src/state/shapes/GroupUtil/GroupUtil.tsx
import { SVGContainer as SVGContainer4, Utils as Utils14 } from "@tldraw/core";
import { jsx as jsx54, jsxs as jsxs32 } from "react/jsx-runtime";
var GroupUtil = class extends TDShapeUtil {
  constructor() {
    super(...arguments);
    __publicField(this, "type", "group" /* Group */);
    __publicField(this, "canBind", true);
    __publicField(this, "getShape", (props) => {
      return Utils14.deepMerge(
        {
          id: "id",
          type: "group" /* Group */,
          name: "Group",
          parentId: "page",
          childIndex: 1,
          point: [0, 0],
          size: [100, 100],
          rotation: 0,
          children: [],
          style: defaultStyle
        },
        props
      );
    });
    __publicField(this, "Component", TDShapeUtil.Component(
      ({ shape, isBinding, isGhost, isHovered, isSelected, events }, ref) => {
        const { id, size } = shape;
        const sw = 2;
        const w = Math.max(0, size[0] - sw / 2);
        const h = Math.max(0, size[1] - sw / 2);
        const strokes2 = [
          [[sw / 2, sw / 2], [w, sw / 2], w - sw / 2],
          [[w, sw / 2], [w, h], h - sw / 2],
          [[w, h], [sw / 2, h], w - sw / 2],
          [[sw / 2, h], [sw / 2, sw / 2], h - sw / 2]
        ];
        const paths = strokes2.map(([start, end], i) => {
          return /* @__PURE__ */ jsx54("line", {
            x1: start[0],
            y1: start[1],
            x2: end[0],
            y2: end[1]
          }, id + "_" + i);
        });
        return /* @__PURE__ */ jsxs32(SVGContainer4, __spreadProps(__spreadValues({
          ref
        }, events), {
          children: [
            isBinding && /* @__PURE__ */ jsx54("rect", {
              className: "tl-binding-indicator",
              strokeWidth: this.bindingDistance
            }),
            /* @__PURE__ */ jsxs32("g", {
              opacity: isGhost ? GHOSTED_OPACITY : 1,
              children: [
                /* @__PURE__ */ jsx54("rect", {
                  x: 0,
                  y: 0,
                  width: size[0],
                  height: size[1],
                  fill: "transparent",
                  pointerEvents: "all"
                }),
                /* @__PURE__ */ jsx54(ScaledLines, {
                  stroke: "black" /* Black */,
                  opacity: isHovered || isSelected ? 1 : 0,
                  strokeLinecap: "round",
                  pointerEvents: "stroke",
                  children: paths
                })
              ]
            })
          ]
        }));
      }
    ));
    __publicField(this, "Indicator", TDShapeUtil.Indicator(({ shape }) => {
      const { id, size } = shape;
      const sw = 2;
      const w = Math.max(0, size[0] - sw / 2);
      const h = Math.max(0, size[1] - sw / 2);
      const strokes2 = [
        [[sw / 2, sw / 2], [w, sw / 2], w - sw / 2],
        [[w, sw / 2], [w, h], h - sw / 2],
        [[w, h], [sw / 2, h], w - sw / 2],
        [[sw / 2, h], [sw / 2, sw / 2], h - sw / 2]
      ];
      const paths = strokes2.map(([start, end], i) => {
        return /* @__PURE__ */ jsx54("line", {
          x1: start[0],
          y1: start[1],
          x2: end[0],
          y2: end[1]
        }, id + "_" + i);
      });
      return /* @__PURE__ */ jsx54(ScaledLines, {
        strokeLinecap: "round",
        pointerEvents: "stroke",
        children: paths
      });
    }));
    __publicField(this, "getBounds", (shape) => {
      return getBoundsRectangle(shape, this.boundsCache);
    });
    __publicField(this, "shouldRender", (prev, next) => {
      return next.size !== prev.size || next.style !== prev.style;
    });
  }
};
var ScaledLines = styled("g", {
  strokeWidth: "calc(1.5px * var(--tl-scale))",
  strokeDasharray: `calc(1px * var(--tl-scale)), calc(3px * var(--tl-scale))`
});

// src/state/shapes/ImageUtil/ImageUtil.tsx
import { styled as styled2 } from "@stitches/react";
import { HTMLContainer, Utils as Utils15 } from "@tldraw/core";
import * as React31 from "react";
import { jsx as jsx55, jsxs as jsxs33 } from "react/jsx-runtime";
var ImageUtil = class extends TDShapeUtil {
  constructor() {
    super(...arguments);
    __publicField(this, "type", "image" /* Image */);
    __publicField(this, "canBind", true);
    __publicField(this, "canClone", true);
    __publicField(this, "isAspectRatioLocked", true);
    __publicField(this, "showCloneHandles", false);
    __publicField(this, "getShape", (props) => {
      return Utils15.deepMerge(
        {
          id: "image",
          type: "image" /* Image */,
          name: "Image",
          parentId: "page",
          childIndex: 1,
          point: [0, 0],
          size: [1, 1],
          rotation: 0,
          style: __spreadProps(__spreadValues({}, defaultStyle), { isFilled: true }),
          assetId: "assetId"
        },
        props
      );
    });
    __publicField(this, "Component", TDShapeUtil.Component(
      ({ shape, asset = { src: "" }, isBinding, isGhost, meta, events, onShapeChange }, ref) => {
        const { size, style } = shape;
        const { bindingDistance } = this;
        const rImage = React31.useRef(null);
        const rWrapper = React31.useRef(null);
        React31.useLayoutEffect(() => {
          const wrapper = rWrapper.current;
          if (!wrapper)
            return;
          const [width, height] = size;
          wrapper.style.width = `${width}px`;
          wrapper.style.height = `${height}px`;
        }, [size]);
        return /* @__PURE__ */ jsxs33(HTMLContainer, __spreadProps(__spreadValues({
          ref
        }, events), {
          children: [
            isBinding && /* @__PURE__ */ jsx55("div", {
              className: "tl-binding-indicator",
              style: {
                position: "absolute",
                top: `calc(${-bindingDistance}px * var(--tl-zoom))`,
                left: `calc(${-bindingDistance}px * var(--tl-zoom))`,
                width: `calc(100% + ${bindingDistance * 2}px * var(--tl-zoom))`,
                height: `calc(100% + ${bindingDistance * 2}px * var(--tl-zoom))`,
                backgroundColor: "var(--tl-selectFill)"
              }
            }),
            /* @__PURE__ */ jsx55(Wrapper, {
              ref: rWrapper,
              isDarkMode: meta.isDarkMode,
              isFilled: style.isFilled,
              isGhost,
              children: /* @__PURE__ */ jsx55(ImageElement, {
                id: shape.id + "_image",
                ref: rImage,
                src: asset.src,
                alt: "tl_image_asset",
                draggable: false
              })
            })
          ]
        }));
      }
    ));
    __publicField(this, "Indicator", TDShapeUtil.Indicator(({ shape }) => {
      const {
        size: [width, height]
      } = shape;
      return /* @__PURE__ */ jsx55("rect", {
        x: 0,
        y: 0,
        rx: 2,
        ry: 2,
        width: Math.max(1, width),
        height: Math.max(1, height)
      });
    }));
    __publicField(this, "getBounds", (shape) => {
      return getBoundsRectangle(shape, this.boundsCache);
    });
    __publicField(this, "shouldRender", (prev, next) => {
      return next.size !== prev.size || next.style !== prev.style;
    });
    __publicField(this, "transform", transformRectangle);
    __publicField(this, "transformSingle", transformSingleRectangle);
    __publicField(this, "getSvgElement", (shape) => {
      const bounds = this.getBounds(shape);
      const elm = document.createElementNS("http://www.w3.org/2000/svg", "image");
      elm.setAttribute("width", `${bounds.width}`);
      elm.setAttribute("height", `${bounds.height}`);
      elm.setAttribute("xmlns:xlink", `http://www.w3.org/1999/xlink`);
      return elm;
    });
  }
};
var Wrapper = styled2("div", {
  pointerEvents: "all",
  position: "relative",
  fontFamily: "sans-serif",
  fontSize: "2em",
  height: "100%",
  width: "100%",
  borderRadius: "3px",
  perspective: "800px",
  overflow: "hidden",
  p: {
    userSelect: "none"
  },
  img: {
    userSelect: "none"
  },
  variants: {
    isGhost: {
      false: { opacity: 1 },
      true: { transition: "opacity .2s", opacity: GHOSTED_OPACITY }
    },
    isFilled: {
      true: {},
      false: {}
    },
    isDarkMode: {
      true: {},
      false: {}
    }
  },
  compoundVariants: [
    {
      isFilled: true,
      isDarkMode: true,
      css: {
        boxShadow: "2px 3px 12px -2px rgba(0,0,0,.3), 1px 1px 4px rgba(0,0,0,.3), 1px 1px 2px rgba(0,0,0,.3)"
      }
    },
    {
      isFilled: true,
      isDarkMode: false,
      css: {
        boxShadow: "2px 3px 12px -2px rgba(0,0,0,.2), 1px 1px 4px rgba(0,0,0,.16),  1px 1px 2px rgba(0,0,0,.16)"
      }
    }
  ]
});
var ImageElement = styled2("img", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  maxWidth: "100%",
  minWidth: "100%",
  pointerEvents: "none",
  objectFit: "cover",
  userSelect: "none",
  borderRadius: 2
});

// src/state/shapes/RectangleUtil/RectangleUtil.tsx
import { SVGContainer as SVGContainer5, Utils as Utils18 } from "@tldraw/core";
import * as React34 from "react";

// src/state/shapes/RectangleUtil/components/BindingIndicator.tsx
import { jsx as jsx56 } from "react/jsx-runtime";
function BindingIndicator({ strokeWidth, size }) {
  return /* @__PURE__ */ jsx56("rect", {
    className: "tl-binding-indicator",
    x: strokeWidth,
    y: strokeWidth,
    width: Math.max(0, size[0] - strokeWidth / 2),
    height: Math.max(0, size[1] - strokeWidth / 2),
    strokeWidth: BINDING_DISTANCE * 2
  });
}

// src/state/shapes/RectangleUtil/components/DashedRectangle.tsx
import { Utils as Utils16 } from "@tldraw/core";
import * as React32 from "react";
import { Fragment as Fragment11, jsx as jsx57, jsxs as jsxs34 } from "react/jsx-runtime";
var DashedRectangle = React32.memo(function DashedRectangle2({
  id,
  style,
  size,
  isSelected,
  isDarkMode
}) {
  const { stroke, strokeWidth, fill } = getShapeStyle(style, isDarkMode);
  const sw = 1 + strokeWidth * 1.618;
  const w = Math.max(0, size[0] - sw / 2);
  const h = Math.max(0, size[1] - sw / 2);
  const strokes2 = [
    [[sw / 2, sw / 2], [w, sw / 2], w - sw / 2],
    [[w, sw / 2], [w, h], h - sw / 2],
    [[w, h], [sw / 2, h], w - sw / 2],
    [[sw / 2, h], [sw / 2, sw / 2], h - sw / 2]
  ];
  const paths = strokes2.map(([start, end, length], i) => {
    const { strokeDasharray, strokeDashoffset } = Utils16.getPerfectDashProps(
      length,
      strokeWidth * 1.618,
      style.dash
    );
    return /* @__PURE__ */ jsx57("line", {
      x1: start[0],
      y1: start[1],
      x2: end[0],
      y2: end[1],
      strokeDasharray,
      strokeDashoffset
    }, id + "_" + i);
  });
  return /* @__PURE__ */ jsxs34(Fragment11, {
    children: [
      /* @__PURE__ */ jsx57("rect", {
        className: isSelected || style.isFilled ? "tl-fill-hitarea" : "tl-stroke-hitarea",
        x: sw / 2,
        y: sw / 2,
        width: w,
        height: h,
        strokeWidth: BINDING_DISTANCE
      }),
      style.isFilled && /* @__PURE__ */ jsx57("rect", {
        x: sw / 2,
        y: sw / 2,
        width: w,
        height: h,
        fill,
        pointerEvents: "none"
      }),
      /* @__PURE__ */ jsx57("g", {
        pointerEvents: "none",
        stroke,
        strokeWidth: sw,
        strokeLinecap: "round",
        children: paths
      })
    ]
  });
});

// src/state/shapes/RectangleUtil/components/DrawRectangle.tsx
import * as React33 from "react";

// src/state/shapes/RectangleUtil/rectangleHelpers.ts
import { Utils as Utils17 } from "@tldraw/core";
import Vec12 from "@tldraw/vec";
import getStroke2, { getStrokePoints as getStrokePoints3 } from "perfect-freehand";
function getRectangleDrawPoints(id, style, size) {
  const styles = getShapeStyle(style);
  const getRandom = Utils17.rng(id);
  const sw = styles.strokeWidth;
  const w = Math.max(0, size[0]);
  const h = Math.max(0, size[1]);
  const offsets = Array.from(Array(4)).map(() => {
    return [getRandom() * sw * 0.75, getRandom() * sw * 0.75];
  });
  const tl = Vec12.add([sw / 2, sw / 2], offsets[0]);
  const tr = Vec12.add([w - sw / 2, sw / 2], offsets[1]);
  const br = Vec12.add([w - sw / 2, h - sw / 2], offsets[2]);
  const bl = Vec12.add([sw / 2, h - sw / 2], offsets[3]);
  const rm = Math.round(Math.abs(getRandom() * 2 * 4));
  const rx = Math.min(w / 4, sw * 2);
  const ry = Math.min(h / 4, sw * 2);
  const px = Math.max(8, Math.floor(w / 16));
  const py = Math.max(8, Math.floor(h / 16));
  const lines = Utils17.rotateArray(
    [
      Vec12.pointsBetween(Vec12.add(tl, [rx, 0]), Vec12.sub(tr, [rx, 0]), px),
      Vec12.pointsBetween(Vec12.add(tr, [0, ry]), Vec12.sub(br, [0, ry]), py),
      Vec12.pointsBetween(Vec12.sub(br, [rx, 0]), Vec12.add(bl, [rx, 0]), px),
      Vec12.pointsBetween(Vec12.sub(bl, [0, ry]), Vec12.add(tl, [0, ry]), py)
    ],
    rm
  );
  const points = [...lines.flat(), ...lines[0]].slice(
    5,
    Math.floor((rm % 2 === 0 ? px : py) / -2) + 3
  );
  return {
    points
  };
}
function getDrawStrokeInfo(id, style, size) {
  const { points } = getRectangleDrawPoints(id, style, size);
  const { strokeWidth } = getShapeStyle(style);
  const options2 = {
    size: strokeWidth,
    thinning: 0.65,
    streamline: 0.3,
    smoothing: 1,
    simulatePressure: false,
    last: true
  };
  return { points, options: options2 };
}
function getRectanglePath(id, style, size) {
  const { points, options: options2 } = getDrawStrokeInfo(id, style, size);
  const stroke = getStroke2(points, options2);
  return Utils17.getSvgPathFromStroke(stroke);
}
function getRectangleIndicatorPathTDSnapshot(id, style, size) {
  const { points, options: options2 } = getDrawStrokeInfo(id, style, size);
  return Utils17.getSvgPathFromStrokePoints(getStrokePoints3(points, options2));
}

// src/state/shapes/RectangleUtil/components/DrawRectangle.tsx
import { Fragment as Fragment12, jsx as jsx58, jsxs as jsxs35 } from "react/jsx-runtime";
var DrawRectangle = React33.memo(function DrawRectangle2({
  id,
  style,
  size,
  isSelected,
  isDarkMode
}) {
  const { isFilled } = style;
  const { stroke, strokeWidth, fill } = getShapeStyle(style, isDarkMode);
  const pathTDSnapshot = getRectanglePath(id, style, size);
  const innerPath = getRectangleIndicatorPathTDSnapshot(id, style, size);
  return /* @__PURE__ */ jsxs35(Fragment12, {
    children: [
      /* @__PURE__ */ jsx58("path", {
        className: style.isFilled || isSelected ? "tl-fill-hitarea" : "tl-stroke-hitarea",
        d: innerPath
      }),
      isFilled && /* @__PURE__ */ jsx58("path", {
        d: innerPath,
        fill,
        pointerEvents: "none"
      }),
      /* @__PURE__ */ jsx58("path", {
        d: pathTDSnapshot,
        fill: stroke,
        stroke,
        strokeWidth,
        pointerEvents: "none"
      })
    ]
  });
});

// src/state/shapes/RectangleUtil/RectangleUtil.tsx
import { jsx as jsx59, jsxs as jsxs36 } from "react/jsx-runtime";
var RectangleUtil = class extends TDShapeUtil {
  constructor() {
    super(...arguments);
    __publicField(this, "type", "rectangle" /* Rectangle */);
    __publicField(this, "canBind", true);
    __publicField(this, "canClone", true);
    __publicField(this, "canEdit", true);
    __publicField(this, "getShape", (props) => {
      return Utils18.deepMerge(
        {
          id: "id",
          type: "rectangle" /* Rectangle */,
          name: "Rectangle",
          parentId: "page",
          childIndex: 1,
          point: [0, 0],
          size: [1, 1],
          rotation: 0,
          style: defaultStyle,
          label: "",
          labelPoint: [0.5, 0.5]
        },
        props
      );
    });
    __publicField(this, "Component", TDShapeUtil.Component(
      ({
        shape,
        isEditing,
        isBinding,
        isSelected,
        isGhost,
        meta,
        bounds,
        events,
        onShapeBlur,
        onShapeChange
      }, ref) => {
        const { id, size, style, label = "", labelPoint = LABEL_POINT } = shape;
        const font = getFontStyle(style);
        const styles = getShapeStyle(style, meta.isDarkMode);
        const Component = style.dash === "draw" /* Draw */ ? DrawRectangle : DashedRectangle;
        const handleLabelChange = React34.useCallback(
          (label2) => onShapeChange == null ? void 0 : onShapeChange({ id, label: label2 }),
          [onShapeChange]
        );
        return /* @__PURE__ */ jsxs36(FullWrapper3, __spreadProps(__spreadValues({
          ref
        }, events), {
          children: [
            /* @__PURE__ */ jsx59(TextLabel, {
              isEditing,
              onChange: handleLabelChange,
              onBlur: onShapeBlur,
              font,
              text: label,
              color: styles.stroke,
              offsetX: (labelPoint[0] - 0.5) * bounds.width,
              offsetY: (labelPoint[1] - 0.5) * bounds.height
            }),
            /* @__PURE__ */ jsxs36(SVGContainer5, {
              id: shape.id + "_svg",
              opacity: isGhost ? GHOSTED_OPACITY : 1,
              children: [
                isBinding && /* @__PURE__ */ jsx59(BindingIndicator, {
                  strokeWidth: styles.strokeWidth,
                  size
                }),
                /* @__PURE__ */ jsx59(Component, {
                  id,
                  style,
                  size,
                  isSelected,
                  isDarkMode: meta.isDarkMode
                })
              ]
            })
          ]
        }));
      }
    ));
    __publicField(this, "Indicator", TDShapeUtil.Indicator(({ shape }) => {
      const { id, style, size } = shape;
      const styles = getShapeStyle(style, false);
      const sw = styles.strokeWidth;
      if (style.dash === "draw" /* Draw */) {
        return /* @__PURE__ */ jsx59("path", {
          d: getRectangleIndicatorPathTDSnapshot(id, style, size)
        });
      }
      return /* @__PURE__ */ jsx59("rect", {
        x: sw,
        y: sw,
        rx: 1,
        ry: 1,
        width: Math.max(1, size[0] - sw * 2),
        height: Math.max(1, size[1] - sw * 2)
      });
    }));
    __publicField(this, "getBounds", (shape) => {
      return getBoundsRectangle(shape, this.boundsCache);
    });
    __publicField(this, "shouldRender", (prev, next) => {
      return next.size !== prev.size || next.style !== prev.style || next.label !== prev.label;
    });
    __publicField(this, "transform", transformRectangle);
    __publicField(this, "transformSingle", transformSingleRectangle);
  }
};
var FullWrapper3 = styled("div", { width: "100%", height: "100%" });

// src/state/shapes/StickyUtil/StickyUtil.tsx
import { HTMLContainer as HTMLContainer2, Utils as Utils19 } from "@tldraw/core";
import { Vec as Vec13 } from "@tldraw/vec";
import * as React35 from "react";
import { jsx as jsx60, jsxs as jsxs37 } from "react/jsx-runtime";
var StickyUtil = class extends TDShapeUtil {
  constructor() {
    super(...arguments);
    __publicField(this, "type", "sticky" /* Sticky */);
    __publicField(this, "canBind", true);
    __publicField(this, "canEdit", true);
    __publicField(this, "canClone", true);
    __publicField(this, "hideResizeHandles", true);
    __publicField(this, "showCloneHandles", true);
    __publicField(this, "getShape", (props) => {
      return Utils19.deepMerge(
        {
          id: "id",
          type: "sticky" /* Sticky */,
          name: "Sticky",
          parentId: "page",
          childIndex: 1,
          point: [0, 0],
          size: [200, 200],
          text: "",
          rotation: 0,
          style: defaultTextStyle
        },
        props
      );
    });
    __publicField(this, "Component", TDShapeUtil.Component(
      ({ shape, meta, events, isGhost, isBinding, isEditing, onShapeBlur, onShapeChange }, ref) => {
        const font = getStickyFontStyle(shape.style);
        const { color, fill } = getStickyShapeStyle(shape.style, meta.isDarkMode);
        const rContainer = React35.useRef(null);
        const rTextArea = React35.useRef(null);
        const rText = React35.useRef(null);
        const rIsMounted = React35.useRef(false);
        const handlePointerDown = React35.useCallback((e) => {
          e.stopPropagation();
        }, []);
        const onChange = React35.useCallback(
          (text) => {
            onShapeChange == null ? void 0 : onShapeChange({
              id: shape.id,
              type: shape.type,
              text: TLDR.normalizeText(text)
            });
          },
          [shape.id]
        );
        const handleTextChange = React35.useCallback(
          (e) => {
            onChange(e.currentTarget.value);
          },
          [onShapeChange, onChange]
        );
        const handleKeyDown = React35.useCallback(
          (e) => {
            if (e.key === "Escape") {
              e.preventDefault();
              e.stopPropagation();
              onShapeBlur == null ? void 0 : onShapeBlur();
              return;
            }
            if (e.key === "Tab" && shape.text.length === 0) {
              e.preventDefault();
              return;
            }
            if (!(e.key === "Meta" || e.metaKey)) {
              e.stopPropagation();
            } else if (e.key === "z" && e.metaKey) {
              if (e.shiftKey) {
                document.execCommand("redo", false);
              } else {
                document.execCommand("undo", false);
              }
              e.stopPropagation();
              e.preventDefault();
              return;
            }
            if ((e.metaKey || e.ctrlKey) && e.key === "=") {
              e.preventDefault();
            }
            if (e.key === "Tab") {
              e.preventDefault();
              if (e.shiftKey) {
                TextAreaUtils.unindent(e.currentTarget);
              } else {
                TextAreaUtils.indent(e.currentTarget);
              }
              onShapeChange == null ? void 0 : onShapeChange(__spreadProps(__spreadValues({}, shape), { text: TLDR.normalizeText(e.currentTarget.value) }));
            }
          },
          [shape, onShapeChange]
        );
        const handleBlur = React35.useCallback((e) => {
          e.currentTarget.setSelectionRange(0, 0);
          onShapeBlur == null ? void 0 : onShapeBlur();
        }, []);
        const handleFocus = React35.useCallback(
          (e) => {
            if (!isEditing)
              return;
            if (!rIsMounted.current)
              return;
            e.currentTarget.select();
          },
          [isEditing]
        );
        React35.useEffect(() => {
          if (isEditing) {
            rIsMounted.current = true;
            const elm = rTextArea.current;
            elm.focus();
            elm.select();
          }
        }, [isEditing]);
        React35.useEffect(() => {
          const text = rText.current;
          const { size } = shape;
          const { offsetHeight: currTextHeight } = text;
          const minTextHeight = MIN_CONTAINER_HEIGHT - PADDING * 2;
          const prevTextHeight = size[1] - PADDING * 2;
          if (currTextHeight === prevTextHeight)
            return;
          if (currTextHeight > minTextHeight) {
            onShapeChange == null ? void 0 : onShapeChange({ id: shape.id, size: [size[0], currTextHeight + PADDING * 2] });
            return;
          }
          if (currTextHeight < minTextHeight && size[1] > MIN_CONTAINER_HEIGHT) {
            onShapeChange == null ? void 0 : onShapeChange({ id: shape.id, size: [size[0], MIN_CONTAINER_HEIGHT] });
            return;
          }
          const textarea = rTextArea.current;
          textarea == null ? void 0 : textarea.focus();
        }, [shape.text, shape.size[1], shape.style]);
        const style = {
          font,
          color,
          textShadow: meta.isDarkMode ? `0.5px 0.5px 2px rgba(255, 255, 255,.25)` : `0.5px 0.5px 2px rgba(255, 255, 255,.5)`
        };
        return /* @__PURE__ */ jsx60(HTMLContainer2, __spreadProps(__spreadValues({
          ref
        }, events), {
          children: /* @__PURE__ */ jsxs37(StyledStickyContainer, {
            ref: rContainer,
            isDarkMode: meta.isDarkMode,
            isGhost,
            style: __spreadValues({ backgroundColor: fill }, style),
            children: [
              isBinding && /* @__PURE__ */ jsx60("div", {
                className: "tl-binding-indicator",
                style: {
                  position: "absolute",
                  top: -this.bindingDistance,
                  left: -this.bindingDistance,
                  width: `calc(100% + ${this.bindingDistance * 2}px)`,
                  height: `calc(100% + ${this.bindingDistance * 2}px)`,
                  backgroundColor: "var(--tl-selectFill)"
                }
              }),
              /* @__PURE__ */ jsxs37(StyledText2, {
                ref: rText,
                isEditing,
                alignment: shape.style.textAlign,
                children: [
                  shape.text,
                  "\u200B"
                ]
              }),
              isEditing && /* @__PURE__ */ jsx60(StyledTextArea, {
                ref: rTextArea,
                onPointerDown: handlePointerDown,
                value: shape.text,
                onChange: handleTextChange,
                onKeyDown: handleKeyDown,
                onFocus: handleFocus,
                onBlur: handleBlur,
                tabIndex: -1,
                autoComplete: "false",
                autoCapitalize: "false",
                autoCorrect: "false",
                autoSave: "false",
                autoFocus: true,
                spellCheck: true,
                alignment: shape.style.textAlign,
                onContextMenu: stopPropagation,
                onCopy: stopPropagation,
                onPaste: stopPropagation,
                onCut: stopPropagation
              })
            ]
          })
        }));
      }
    ));
    __publicField(this, "Indicator", TDShapeUtil.Indicator(({ shape }) => {
      const {
        size: [width, height]
      } = shape;
      return /* @__PURE__ */ jsx60("rect", {
        x: 0,
        y: 0,
        rx: 3,
        ry: 3,
        width: Math.max(1, width),
        height: Math.max(1, height)
      });
    }));
    __publicField(this, "getBounds", (shape) => {
      return getBoundsRectangle(shape, this.boundsCache);
    });
    __publicField(this, "shouldRender", (prev, next) => {
      return next.size !== prev.size || next.style !== prev.style || next.text !== prev.text;
    });
    __publicField(this, "transform", (shape, bounds, { scaleX, scaleY, transformOrigin }) => {
      const point = Vec13.toFixed([
        bounds.minX + (bounds.width - shape.size[0]) * (scaleX < 0 ? 1 - transformOrigin[0] : transformOrigin[0]),
        bounds.minY + (bounds.height - shape.size[1]) * (scaleY < 0 ? 1 - transformOrigin[1] : transformOrigin[1])
      ]);
      return {
        point
      };
    });
    __publicField(this, "transformSingle", (shape) => {
      return shape;
    });
    __publicField(this, "getSvgElement", (shape, isDarkMode) => {
      var _a, _b;
      const bounds = this.getBounds(shape);
      const style = getStickyShapeStyle(shape.style, isDarkMode);
      const fontSize = getStickyFontSize(shape.style.size) * ((_a = shape.style.scale) != null ? _a : 1);
      const fontFamily = getFontFace(shape.style.font).slice(1, -1);
      const textAlign = (_b = shape.style.textAlign) != null ? _b : "start" /* Start */;
      const textElm = getTextSvgElement(
        shape.text,
        fontSize,
        fontFamily,
        textAlign,
        bounds.width - PADDING * 2,
        true
      );
      textElm.setAttribute("fill", style.color);
      textElm.setAttribute("transform", `translate(${PADDING}, ${PADDING})`);
      const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      rect.setAttribute("width", bounds.width + "");
      rect.setAttribute("height", bounds.height + "");
      rect.setAttribute("fill", style.fill);
      rect.setAttribute("rx", "3");
      rect.setAttribute("ry", "3");
      g.appendChild(rect);
      g.appendChild(textElm);
      return g;
    });
  }
};
var PADDING = 16;
var MIN_CONTAINER_HEIGHT = 200;
var StyledStickyContainer = styled("div", {
  pointerEvents: "all",
  position: "relative",
  backgroundColor: "rgba(255, 220, 100)",
  fontFamily: "sans-serif",
  height: "100%",
  width: "100%",
  padding: PADDING + "px",
  borderRadius: "3px",
  perspective: "800px",
  variants: {
    isGhost: {
      false: { opacity: 1 },
      true: { transition: "opacity .2s", opacity: GHOSTED_OPACITY }
    },
    isDarkMode: {
      true: {
        boxShadow: "2px 3px 12px -2px rgba(0,0,0,.3), 1px 1px 4px rgba(0,0,0,.3), 1px 1px 2px rgba(0,0,0,.3)"
      },
      false: {
        boxShadow: "2px 3px 12px -2px rgba(0,0,0,.2), 1px 1px 4px rgba(0,0,0,.16),  1px 1px 2px rgba(0,0,0,.16)"
      }
    }
  }
});
var commonTextWrapping2 = {
  whiteSpace: "pre-wrap",
  overflowWrap: "break-word",
  letterSpacing: LETTER_SPACING
};
var StyledText2 = styled("div", __spreadValues({
  position: "absolute",
  top: PADDING,
  left: PADDING,
  width: `calc(100% - ${PADDING * 2}px)`,
  height: "fit-content",
  font: "inherit",
  pointerEvents: "none",
  userSelect: "none",
  variants: {
    isEditing: {
      true: {
        opacity: 1
      },
      false: {
        opacity: 1
      }
    },
    alignment: {
      ["start" /* Start */]: {
        textAlign: "left"
      },
      ["middle" /* Middle */]: {
        textAlign: "center"
      },
      ["end" /* End */]: {
        textAlign: "right"
      },
      ["justify" /* Justify */]: {
        textAlign: "justify"
      }
    }
  }
}, commonTextWrapping2));
var StyledTextArea = styled("textarea", __spreadProps(__spreadValues({
  width: "100%",
  height: "100%",
  border: "none",
  overflow: "hidden",
  background: "none",
  outline: "none",
  textAlign: "left",
  font: "inherit",
  padding: 0,
  color: "transparent",
  verticalAlign: "top",
  resize: "none",
  caretColor: "black"
}, commonTextWrapping2), {
  variants: {
    alignment: {
      ["start" /* Start */]: {
        textAlign: "left"
      },
      ["middle" /* Middle */]: {
        textAlign: "center"
      },
      ["end" /* End */]: {
        textAlign: "right"
      },
      ["justify" /* Justify */]: {
        textAlign: "justify"
      }
    }
  },
  "&:focus": {
    outline: "none",
    border: "none"
  }
}));

// src/state/shapes/TextUtil/TextUtil.tsx
import { HTMLContainer as HTMLContainer3, Utils as Utils20 } from "@tldraw/core";
import { Vec as Vec14 } from "@tldraw/vec";
import * as React36 from "react";
import { jsx as jsx61, jsxs as jsxs38 } from "react/jsx-runtime";
var TextUtil = class extends TDShapeUtil {
  constructor() {
    super(...arguments);
    __publicField(this, "type", "text" /* Text */);
    __publicField(this, "isAspectRatioLocked", true);
    __publicField(this, "canEdit", true);
    __publicField(this, "canBind", true);
    __publicField(this, "canClone", true);
    __publicField(this, "bindingDistance", BINDING_DISTANCE / 2);
    __publicField(this, "getShape", (props) => {
      return Utils20.deepMerge(
        {
          id: "id",
          type: "text" /* Text */,
          name: "Text",
          parentId: "page",
          childIndex: 1,
          point: [0, 0],
          rotation: 0,
          text: " ",
          style: defaultTextStyle
        },
        props
      );
    });
    __publicField(this, "texts", /* @__PURE__ */ new Map());
    __publicField(this, "Component", TDShapeUtil.Component(
      ({ shape, isBinding, isGhost, isEditing, onShapeBlur, onShapeChange, meta, events }, ref) => {
        const { text, style } = shape;
        const styles = getShapeStyle(style, meta.isDarkMode);
        const font = getFontStyle(shape.style);
        const rInput = React36.useRef(null);
        const rIsMounted = React36.useRef(false);
        const rEditedText = React36.useRef(text);
        React36.useLayoutEffect(() => {
          if (text !== rEditedText.current) {
            let delta = [0, 0];
            this.texts.set(shape.id, text);
            const currentBounds = this.getBounds(shape);
            const nextBounds = this.getBounds(shape);
            switch (shape.style.textAlign) {
              case "start" /* Start */: {
                break;
              }
              case "middle" /* Middle */: {
                delta = Vec14.div([nextBounds.width - currentBounds.width, 0], 2);
                break;
              }
              case "end" /* End */: {
                delta = [nextBounds.width - currentBounds.width, 0];
                break;
              }
            }
            rEditedText.current = text;
            onShapeChange == null ? void 0 : onShapeChange(__spreadProps(__spreadValues({}, shape), {
              id: shape.id,
              point: Vec14.sub(shape.point, delta),
              text
            }));
          }
        }, [text]);
        const handleChange = React36.useCallback(
          (e) => {
            let delta = [0, 0];
            const newText = TLDR.normalizeText(e.currentTarget.value);
            const currentBounds = this.getBounds(shape);
            this.texts.set(shape.id, newText);
            const nextBounds = this.getBounds(__spreadProps(__spreadValues({}, shape), {
              text: newText
            }));
            switch (shape.style.textAlign) {
              case "start" /* Start */: {
                break;
              }
              case "middle" /* Middle */: {
                delta = Vec14.div([nextBounds.width - currentBounds.width, 0], 2);
                break;
              }
              case "end" /* End */: {
                delta = [nextBounds.width - currentBounds.width, 0];
                break;
              }
            }
            rEditedText.current = newText;
            onShapeChange == null ? void 0 : onShapeChange(__spreadProps(__spreadValues({}, shape), {
              id: shape.id,
              point: Vec14.sub(shape.point, delta),
              text: newText
            }));
          },
          [shape.id, shape.point]
        );
        const handleKeyDown = React36.useCallback(
          (e) => {
            if (e.key === "Escape") {
              e.preventDefault();
              e.stopPropagation();
              onShapeBlur == null ? void 0 : onShapeBlur();
              return;
            }
            if (e.key === "Tab" && shape.text.length === 0) {
              e.preventDefault();
              return;
            }
            if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
              e.preventDefault();
              e.stopPropagation();
              rInput.current.blur();
              return;
            }
            if (!(e.key === "Meta" || e.metaKey)) {
              e.stopPropagation();
            } else if (e.key === "z" && e.metaKey) {
              if (e.shiftKey) {
                document.execCommand("redo", false);
              } else {
                document.execCommand("undo", false);
              }
              e.stopPropagation();
              e.preventDefault();
              return;
            }
            if ((e.metaKey || e.ctrlKey) && e.key === "=") {
              e.preventDefault();
            }
            if (e.key === "Tab") {
              e.preventDefault();
              if (e.shiftKey) {
                TextAreaUtils.unindent(e.currentTarget);
              } else {
                TextAreaUtils.indent(e.currentTarget);
              }
              onShapeChange == null ? void 0 : onShapeChange(__spreadProps(__spreadValues({}, shape), { text: TLDR.normalizeText(e.currentTarget.value) }));
            }
          },
          [shape, onShapeChange]
        );
        const handleBlur = React36.useCallback((e) => {
          e.currentTarget.setSelectionRange(0, 0);
          onShapeBlur == null ? void 0 : onShapeBlur();
        }, []);
        const handleFocus = React36.useCallback(
          (e) => {
            if (!isEditing)
              return;
            if (!rIsMounted.current)
              return;
            if (document.activeElement === e.currentTarget) {
              e.currentTarget.select();
            }
          },
          [isEditing]
        );
        const handlePointerDown = React36.useCallback(
          (e) => {
            if (isEditing) {
              e.stopPropagation();
            }
          },
          [isEditing]
        );
        const rWasEditing = React36.useRef(isEditing);
        React36.useEffect(() => {
          if (isEditing) {
            rWasEditing.current = true;
            this.texts.set(shape.id, text);
            requestAnimationFrame(() => {
              rIsMounted.current = true;
              const elm = rInput.current;
              if (elm) {
                elm.focus();
                elm.select();
              }
            });
          } else if (rWasEditing.current) {
            rWasEditing.current = false;
            onShapeBlur == null ? void 0 : onShapeBlur();
          }
        }, [isEditing]);
        return /* @__PURE__ */ jsx61(HTMLContainer3, __spreadProps(__spreadValues({
          ref
        }, events), {
          children: /* @__PURE__ */ jsx61(Wrapper2, {
            isGhost,
            isEditing,
            onPointerDown: handlePointerDown,
            children: /* @__PURE__ */ jsxs38(InnerWrapper2, {
              style: {
                font,
                color: styles.stroke,
                textAlign: getTextAlign(style.textAlign)
              },
              children: [
                isBinding && /* @__PURE__ */ jsx61("div", {
                  className: "tl-binding-indicator",
                  style: {
                    position: "absolute",
                    top: -this.bindingDistance,
                    left: -this.bindingDistance,
                    width: `calc(100% + ${this.bindingDistance * 2}px)`,
                    height: `calc(100% + ${this.bindingDistance * 2}px)`,
                    backgroundColor: "var(--tl-selectFill)"
                  }
                }),
                isEditing ? /* @__PURE__ */ jsx61(TextArea2, {
                  ref: rInput,
                  style: {
                    font,
                    color: styles.stroke
                  },
                  name: "text",
                  tabIndex: -1,
                  autoComplete: "false",
                  autoCapitalize: "false",
                  autoCorrect: "false",
                  autoSave: "false",
                  autoFocus: true,
                  placeholder: "",
                  spellCheck: "true",
                  wrap: "off",
                  dir: "auto",
                  datatype: "wysiwyg",
                  defaultValue: text,
                  color: styles.stroke,
                  onFocus: handleFocus,
                  onChange: handleChange,
                  onKeyDown: handleKeyDown,
                  onBlur: handleBlur,
                  onPointerDown: handlePointerDown,
                  onContextMenu: stopPropagation,
                  onCopy: stopPropagation,
                  onPaste: stopPropagation,
                  onCut: stopPropagation
                }) : text,
                "\u200B"
              ]
            })
          })
        }));
      }
    ));
    __publicField(this, "Indicator", TDShapeUtil.Indicator(({ shape }) => {
      const { width, height } = this.getBounds(shape);
      return /* @__PURE__ */ jsx61("rect", {
        x: 0,
        y: 0,
        width,
        height
      });
    }));
    __publicField(this, "getBounds", (shape) => {
      const bounds = Utils20.getFromCache(this.boundsCache, shape, () => {
        var _a;
        if (!melm2) {
          return { minX: 0, minY: 0, maxX: 10, maxY: 10, width: 10, height: 10 };
        }
        if (!melm2.parentNode)
          document.body.appendChild(melm2);
        melm2.style.font = getFontStyle(shape.style);
        melm2.textContent = (_a = this.texts.get(shape.id)) != null ? _a : shape.text;
        const width = melm2.offsetWidth || 1;
        const height = melm2.offsetHeight || 1;
        return {
          minX: 0,
          maxX: width,
          minY: 0,
          maxY: height,
          width,
          height
        };
      });
      return Utils20.translateBounds(bounds, shape.point);
    });
    __publicField(this, "shouldRender", (prev, next) => {
      return next.text !== prev.text || next.style.scale !== prev.style.scale || next.style !== prev.style;
    });
    __publicField(this, "transform", (shape, bounds, { initialShape, scaleX, scaleY }) => {
      const {
        rotation = 0,
        style: { scale = 1 }
      } = initialShape;
      const nextScale = scale * Math.abs(Math.min(scaleX, scaleY));
      return {
        point: [bounds.minX, bounds.minY],
        rotation: scaleX < 0 && scaleY >= 0 || scaleY < 0 && scaleX >= 0 ? -(rotation || 0) : rotation,
        style: __spreadProps(__spreadValues({}, initialShape.style), {
          scale: nextScale
        })
      };
    });
    __publicField(this, "transformSingle", (shape, bounds, { initialShape, scaleX, scaleY }) => {
      const {
        style: { scale = 1 }
      } = initialShape;
      return {
        point: Vec14.toFixed([bounds.minX, bounds.minY]),
        style: __spreadProps(__spreadValues({}, initialShape.style), {
          scale: scale * Math.max(Math.abs(scaleY), Math.abs(scaleX))
        })
      };
    });
    __publicField(this, "onDoubleClickBoundsHandle", (shape) => {
      const center = this.getCenter(shape);
      const newCenter = this.getCenter(__spreadProps(__spreadValues({}, shape), {
        style: __spreadProps(__spreadValues({}, shape.style), {
          scale: 1
        })
      }));
      return {
        style: __spreadProps(__spreadValues({}, shape.style), {
          scale: 1
        }),
        point: Vec14.toFixed(Vec14.add(shape.point, Vec14.sub(center, newCenter)))
      };
    });
    __publicField(this, "getSvgElement", (shape, isDarkMode) => {
      var _a, _b;
      const bounds = this.getBounds(shape);
      const style = getShapeStyle(shape.style, isDarkMode);
      const fontSize = getFontSize(shape.style.size, shape.style.font) * ((_a = shape.style.scale) != null ? _a : 1);
      const fontFamily = getFontFace(shape.style.font).slice(1, -1);
      const textAlign = (_b = shape.style.textAlign) != null ? _b : "middle" /* Middle */;
      const textElm = getTextSvgElement(
        shape.text,
        fontSize,
        fontFamily,
        textAlign,
        bounds.width,
        false
      );
      textElm.setAttribute("fill", style.stroke);
      return textElm;
    });
  }
};
var melm2;
function getMeasurementDiv2() {
  var _a;
  (_a = document.getElementById("__textMeasure")) == null ? void 0 : _a.remove();
  const pre = document.createElement("pre");
  pre.id = "__textMeasure";
  Object.assign(pre.style, {
    whiteSpace: "pre",
    width: "auto",
    border: "1px solid transparent",
    padding: "4px",
    margin: "0px",
    letterSpacing: LETTER_SPACING,
    opacity: "0",
    position: "absolute",
    top: "-500px",
    left: "0px",
    zIndex: "9999",
    pointerEvents: "none",
    userSelect: "none",
    alignmentBaseline: "mathematical",
    dominantBaseline: "mathematical"
  });
  pre.tabIndex = -1;
  document.body.appendChild(pre);
  return pre;
}
if (typeof window !== "undefined") {
  melm2 = getMeasurementDiv2();
}
var Wrapper2 = styled("div", {
  width: "100%",
  height: "100%",
  variants: {
    isGhost: {
      false: { opacity: 1 },
      true: { transition: "opacity .2s", opacity: GHOSTED_OPACITY }
    },
    isEditing: {
      false: {
        pointerEvents: "all",
        userSelect: "all"
      },
      true: {
        pointerEvents: "none",
        userSelect: "none"
      }
    }
  }
});
var commonTextWrapping3 = {
  whiteSpace: "pre-wrap",
  overflowWrap: "break-word"
};
var InnerWrapper2 = styled("div", __spreadValues({
  position: "absolute",
  width: "100%",
  height: "100%",
  padding: "4px",
  zIndex: 1,
  minHeight: 1,
  minWidth: 1,
  lineHeight: 1,
  letterSpacing: LETTER_SPACING,
  outline: 0,
  fontWeight: "500",
  backfaceVisibility: "hidden",
  userSelect: "none",
  pointerEvents: "none",
  WebkitUserSelect: "none",
  WebkitTouchCallout: "none",
  isEditing: {
    false: {},
    true: {
      pointerEvents: "all",
      background: "$boundsBg",
      userSelect: "text",
      WebkitUserSelect: "text"
    }
  }
}, commonTextWrapping3));
var TextArea2 = styled("textarea", __spreadProps(__spreadValues({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 1,
  width: "100%",
  height: "100%",
  border: "none",
  padding: "4px",
  resize: "none",
  textAlign: "inherit",
  minHeight: "inherit",
  minWidth: "inherit",
  lineHeight: "inherit",
  letterSpacing: "inherit",
  outline: 0,
  fontWeight: "inherit",
  overflow: "hidden",
  backfaceVisibility: "hidden",
  display: "inline-block",
  pointerEvents: "all",
  background: "$boundsBg",
  userSelect: "text",
  WebkitUserSelect: "text"
}, commonTextWrapping3), {
  "&:focus": {
    outline: "none",
    border: "none"
  }
}));

// src/state/shapes/TriangleUtil/TriangleUtil.tsx
import { SVGContainer as SVGContainer6, Utils as Utils23 } from "@tldraw/core";
import {
  intersectBoundsPolygon,
  intersectLineSegmentPolyline as intersectLineSegmentPolyline2,
  intersectRayLineSegment
} from "@tldraw/intersect";
import Vec17 from "@tldraw/vec";
import * as React39 from "react";

// src/state/shapes/TriangleUtil/components/DashedTriangle.tsx
import { Utils as Utils22 } from "@tldraw/core";
import Vec16 from "@tldraw/vec";
import * as React37 from "react";

// src/state/shapes/TriangleUtil/triangleHelpers.ts
import { Utils as Utils21 } from "@tldraw/core";
import Vec15 from "@tldraw/vec";
import getStroke3, { getStrokePoints as getStrokePoints4 } from "perfect-freehand";
function getTrianglePoints(size, offset = 0, rotation = 0) {
  const [w, h] = size;
  let points = [
    [w / 2, 0],
    [w, h],
    [0, h]
  ];
  if (offset)
    points = getOffsetPolygon(points, offset);
  if (rotation)
    points = points.map((pt) => Vec15.rotWith(pt, [w / 2, h / 2], rotation));
  return points;
}
function getTriangleCentroid(size) {
  const [w, h] = size;
  const points = [
    [w / 2, 0],
    [w, h],
    [0, h]
  ];
  return [
    (points[0][0] + points[1][0] + points[2][0]) / 3,
    (points[0][1] + points[1][1] + points[2][1]) / 3
  ];
}
function getTriangleDrawPoints(id, size, strokeWidth) {
  const [w, h] = size;
  const getRandom = Utils21.rng(id);
  const offsets = Array.from(Array(3)).map(() => {
    return [getRandom() * strokeWidth * 0.75, getRandom() * strokeWidth * 0.75];
  });
  const corners = [
    Vec15.add([w / 2, 0], offsets[0]),
    Vec15.add([w, h], offsets[1]),
    Vec15.add([0, h], offsets[2])
  ];
  const rm = Math.round(Math.abs(getRandom() * 2 * 3));
  const lines = Utils21.rotateArray(
    [
      Vec15.pointsBetween(corners[0], corners[1], 32),
      Vec15.pointsBetween(corners[1], corners[2], 32),
      Vec15.pointsBetween(corners[2], corners[0], 32)
    ],
    rm
  );
  const points = [...lines.flat(), ...lines[0]];
  return {
    points
  };
}
function getDrawStrokeInfo2(id, size, style) {
  const { strokeWidth } = getShapeStyle(style);
  const { points } = getTriangleDrawPoints(id, size, strokeWidth);
  const options2 = {
    size: strokeWidth,
    thinning: 0.65,
    streamline: 0.3,
    smoothing: 1,
    simulatePressure: false,
    last: true
  };
  return { points, options: options2 };
}
function getTrianglePath(id, size, style) {
  const { points, options: options2 } = getDrawStrokeInfo2(id, size, style);
  const stroke = getStroke3(points, options2);
  return Utils21.getSvgPathFromStroke(stroke);
}
function getTriangleIndicatorPathTDSnapshot(id, size, style) {
  const { points, options: options2 } = getDrawStrokeInfo2(id, size, style);
  return Utils21.getSvgPathFromStrokePoints(getStrokePoints4(points, options2));
}

// src/state/shapes/TriangleUtil/components/DashedTriangle.tsx
import { Fragment as Fragment13, jsx as jsx62, jsxs as jsxs39 } from "react/jsx-runtime";
var DashedTriangle = React37.memo(function DashedTriangle2({
  id,
  size,
  style,
  isSelected,
  isDarkMode
}) {
  const { stroke, strokeWidth, fill } = getShapeStyle(style, isDarkMode);
  const sw = 1 + strokeWidth * 1.618;
  const points = getTrianglePoints(size);
  const sides = Utils22.pointsToLineSegments(points, true);
  const paths = sides.map(([start, end], i) => {
    const { strokeDasharray, strokeDashoffset } = Utils22.getPerfectDashProps(
      Vec16.dist(start, end),
      strokeWidth * 1.618,
      style.dash
    );
    return /* @__PURE__ */ jsx62("line", {
      x1: start[0],
      y1: start[1],
      x2: end[0],
      y2: end[1],
      stroke,
      strokeWidth: sw,
      strokeLinecap: "round",
      strokeDasharray,
      strokeDashoffset
    }, id + "_" + i);
  });
  const bgPath = points.join();
  return /* @__PURE__ */ jsxs39(Fragment13, {
    children: [
      /* @__PURE__ */ jsx62("polygon", {
        className: style.isFilled || isSelected ? "tl-fill-hitarea" : "tl-stroke-hitarea",
        points: bgPath
      }),
      style.isFilled && /* @__PURE__ */ jsx62("polygon", {
        fill,
        points: bgPath,
        pointerEvents: "none"
      }),
      /* @__PURE__ */ jsx62("g", {
        pointerEvents: "stroke",
        children: paths
      })
    ]
  });
});

// src/state/shapes/TriangleUtil/components/DrawTriangle.tsx
import * as React38 from "react";
import { Fragment as Fragment14, jsx as jsx63, jsxs as jsxs40 } from "react/jsx-runtime";
var DrawTriangle = React38.memo(function DrawTriangle2({
  id,
  size,
  style,
  isSelected,
  isDarkMode
}) {
  const { stroke, strokeWidth, fill } = getShapeStyle(style, isDarkMode);
  const pathTDSnapshot = getTrianglePath(id, size, style);
  const indicatorPath = getTriangleIndicatorPathTDSnapshot(id, size, style);
  return /* @__PURE__ */ jsxs40(Fragment14, {
    children: [
      /* @__PURE__ */ jsx63("path", {
        className: style.isFilled || isSelected ? "tl-fill-hitarea" : "tl-stroke-hitarea",
        d: indicatorPath
      }),
      style.isFilled && /* @__PURE__ */ jsx63("path", {
        d: indicatorPath,
        fill,
        pointerEvents: "none"
      }),
      /* @__PURE__ */ jsx63("path", {
        d: pathTDSnapshot,
        fill: stroke,
        stroke,
        strokeWidth,
        pointerEvents: "none"
      })
    ]
  });
});

// src/state/shapes/TriangleUtil/components/TriangleBindingIndicator.tsx
import { jsx as jsx64 } from "react/jsx-runtime";
function TriangleBindingIndicator({ size }) {
  const trianglePoints = getTrianglePoints(size).join();
  return /* @__PURE__ */ jsx64("polygon", {
    className: "tl-binding-indicator",
    points: trianglePoints,
    strokeWidth: BINDING_DISTANCE * 2
  });
}

// src/state/shapes/TriangleUtil/TriangleUtil.tsx
import { jsx as jsx65, jsxs as jsxs41 } from "react/jsx-runtime";
var TriangleUtil = class extends TDShapeUtil {
  constructor() {
    super(...arguments);
    __publicField(this, "type", "triangle" /* Triangle */);
    __publicField(this, "canBind", true);
    __publicField(this, "canClone", true);
    __publicField(this, "canEdit", true);
    __publicField(this, "getShape", (props) => {
      return Utils23.deepMerge(
        {
          id: "id",
          type: "triangle" /* Triangle */,
          name: "Triangle",
          parentId: "page",
          childIndex: 1,
          point: [0, 0],
          size: [1, 1],
          rotation: 0,
          style: defaultStyle,
          label: "",
          labelPoint: [0.5, 0.5]
        },
        props
      );
    });
    __publicField(this, "Component", TDShapeUtil.Component(
      ({
        shape,
        bounds,
        isBinding,
        isEditing,
        isSelected,
        isGhost,
        meta,
        events,
        onShapeChange,
        onShapeBlur
      }, ref) => {
        const { id, label = "", size, style, labelPoint = LABEL_POINT } = shape;
        const font = getFontStyle(style);
        const styles = getShapeStyle(style, meta.isDarkMode);
        const Component = style.dash === "draw" /* Draw */ ? DrawTriangle : DashedTriangle;
        const handleLabelChange = React39.useCallback(
          (label2) => onShapeChange == null ? void 0 : onShapeChange({ id, label: label2 }),
          [onShapeChange]
        );
        const offsetY = React39.useMemo(() => {
          const center = Vec17.div(size, 2);
          const centroid = getTriangleCentroid(size);
          return (centroid[1] - center[1]) * 0.72;
        }, [size]);
        return /* @__PURE__ */ jsxs41(FullWrapper4, __spreadProps(__spreadValues({
          ref
        }, events), {
          children: [
            /* @__PURE__ */ jsx65(TextLabel, {
              font,
              text: label,
              color: styles.stroke,
              offsetX: (labelPoint[0] - 0.5) * bounds.width,
              offsetY: offsetY + (labelPoint[1] - 0.5) * bounds.height,
              isEditing,
              onChange: handleLabelChange,
              onBlur: onShapeBlur
            }),
            /* @__PURE__ */ jsxs41(SVGContainer6, {
              id: shape.id + "_svg",
              opacity: isGhost ? GHOSTED_OPACITY : 1,
              children: [
                isBinding && /* @__PURE__ */ jsx65(TriangleBindingIndicator, {
                  size
                }),
                /* @__PURE__ */ jsx65(Component, {
                  id,
                  style,
                  size,
                  isSelected,
                  isDarkMode: meta.isDarkMode
                })
              ]
            })
          ]
        }));
      }
    ));
    __publicField(this, "Indicator", TDShapeUtil.Indicator(({ shape }) => {
      const { size } = shape;
      return /* @__PURE__ */ jsx65("polygon", {
        points: getTrianglePoints(size).join()
      });
    }));
    __publicField(this, "shouldRender", (prev, next) => {
      return next.size !== prev.size || next.style !== prev.style || next.label !== prev.label;
    });
    __publicField(this, "getBounds", (shape) => {
      return getBoundsRectangle(shape, this.boundsCache);
    });
    __publicField(this, "getExpandedBounds", (shape) => {
      return Utils23.getBoundsFromPoints(
        getTrianglePoints(shape.size, this.bindingDistance).map((pt) => Vec17.add(pt, shape.point))
      );
    });
    __publicField(this, "hitTestLineSegment", (shape, A, B) => {
      return intersectLineSegmentPolyline2(A, B, this.getPoints(shape)).didIntersect;
    });
    __publicField(this, "hitTestBounds", (shape, bounds) => {
      return Utils23.boundsContained(this.getBounds(shape), bounds) || intersectBoundsPolygon(bounds, this.getPoints(shape)).length > 0;
    });
    __publicField(this, "getBindingPoint", (shape, fromShape, point, origin, direction, bindAnywhere) => {
      const expandedBounds = this.getExpandedBounds(shape);
      if (!Utils23.pointInBounds(point, expandedBounds))
        return;
      const points = getTrianglePoints(shape.size).map((pt) => Vec17.add(pt, shape.point));
      const expandedPoints = getTrianglePoints(shape.size, this.bindingDistance).map(
        (pt) => Vec17.add(pt, shape.point)
      );
      const closestDistanceToEdge = Utils23.pointsToLineSegments(points, true).map(([a, b]) => Vec17.distanceToLineSegment(a, b, point)).sort((a, b) => a - b)[0];
      if (!(Utils23.pointInPolygon(point, expandedPoints) || closestDistanceToEdge < this.bindingDistance))
        return;
      const intersections = Utils23.pointsToLineSegments(expandedPoints.concat([expandedPoints[0]])).map((segment) => intersectRayLineSegment(origin, direction, segment[0], segment[1])).filter((intersection2) => intersection2.didIntersect).flatMap((intersection2) => intersection2.points);
      if (!intersections.length)
        return;
      const center = Vec17.add(getTriangleCentroid(shape.size), shape.point);
      const intersection = intersections.sort((a, b) => Vec17.dist(b, origin) - Vec17.dist(a, origin))[0];
      const middlePoint = Vec17.med(point, intersection);
      let anchor;
      let distance;
      if (bindAnywhere) {
        anchor = Vec17.dist(point, center) < BINDING_DISTANCE / 2 ? center : point;
        distance = 0;
      } else {
        if (Vec17.distanceToLineSegment(point, middlePoint, center) < BINDING_DISTANCE / 2) {
          anchor = center;
        } else {
          anchor = middlePoint;
        }
        if (Utils23.pointInPolygon(point, points)) {
          distance = this.bindingDistance;
        } else {
          distance = Math.max(this.bindingDistance, closestDistanceToEdge);
        }
      }
      const bindingPoint = Vec17.divV(Vec17.sub(anchor, [expandedBounds.minX, expandedBounds.minY]), [
        expandedBounds.width,
        expandedBounds.height
      ]);
      return {
        point: Vec17.clampV(bindingPoint, 0, 1),
        distance
      };
    });
    __publicField(this, "transform", transformRectangle);
    __publicField(this, "transformSingle", transformSingleRectangle);
  }
  getPoints(shape) {
    const {
      rotation = 0,
      point: [x, y],
      size: [w, h]
    } = shape;
    return [
      [x + w / 2, y],
      [x, y + h],
      [x + w, y + h]
    ].map((pt) => Vec17.rotWith(pt, this.getCenter(shape), rotation));
  }
};
var FullWrapper4 = styled("div", { width: "100%", height: "100%" });

// src/state/shapes/VideoUtil/VideoUtil.tsx
import { styled as styled3 } from "@stitches/react";
import { HTMLContainer as HTMLContainer4, Utils as Utils24 } from "@tldraw/core";
import * as React40 from "react";
import { jsx as jsx66, jsxs as jsxs42 } from "react/jsx-runtime";
var VideoUtil = class extends TDShapeUtil {
  constructor() {
    super(...arguments);
    __publicField(this, "type", "video" /* Video */);
    __publicField(this, "canBind", true);
    __publicField(this, "canEdit", true);
    __publicField(this, "canClone", true);
    __publicField(this, "isAspectRatioLocked", true);
    __publicField(this, "showCloneHandles", false);
    __publicField(this, "isStateful", true);
    __publicField(this, "getShape", (props) => {
      return Utils24.deepMerge(
        {
          id: "video",
          type: "video" /* Video */,
          name: "Video",
          parentId: "page",
          childIndex: 1,
          point: [0, 0],
          size: [1, 1],
          rotation: 0,
          style: defaultStyle,
          assetId: "assetId",
          isPlaying: true,
          currentTime: 0
        },
        props
      );
    });
    __publicField(this, "Component", TDShapeUtil.Component(
      ({ shape, asset = { src: "" }, isBinding, isEditing, isGhost, meta, events, onShapeChange }, ref) => {
        const rVideo = React40.useRef(null);
        const rWrapper = React40.useRef(null);
        const { currentTime = 0, size, isPlaying, style } = shape;
        React40.useLayoutEffect(() => {
          const wrapper = rWrapper.current;
          if (!wrapper)
            return;
          const [width, height] = size;
          wrapper.style.width = `${width}px`;
          wrapper.style.height = `${height}px`;
        }, [size]);
        React40.useLayoutEffect(() => {
          const video = rVideo.current;
          if (!video)
            return;
          if (isPlaying)
            video.play();
          else
            video.pause();
        }, [isPlaying]);
        React40.useLayoutEffect(() => {
          const video = rVideo.current;
          if (!video)
            return;
          if (currentTime !== video.currentTime) {
            video.currentTime = currentTime;
          }
        }, [currentTime]);
        const handlePlay = React40.useCallback(() => {
          onShapeChange == null ? void 0 : onShapeChange({ id: shape.id, isPlaying: true });
        }, []);
        const handlePause = React40.useCallback(() => {
          onShapeChange == null ? void 0 : onShapeChange({ id: shape.id, isPlaying: false });
        }, []);
        const handleSetCurrentTime = React40.useCallback(() => {
          const video = rVideo.current;
          if (!video)
            return;
          if (!isEditing)
            return;
          onShapeChange == null ? void 0 : onShapeChange({ id: shape.id, currentTime: video.currentTime });
        }, [isEditing]);
        return /* @__PURE__ */ jsxs42(HTMLContainer4, __spreadProps(__spreadValues({
          ref
        }, events), {
          children: [
            isBinding && /* @__PURE__ */ jsx66("div", {
              className: "tl-binding-indicator",
              style: {
                position: "absolute",
                top: -this.bindingDistance,
                left: -this.bindingDistance,
                width: `calc(100% + ${this.bindingDistance * 2}px)`,
                height: `calc(100% + ${this.bindingDistance * 2}px)`,
                backgroundColor: "var(--tl-selectFill)"
              }
            }),
            /* @__PURE__ */ jsx66(Wrapper3, {
              ref: rWrapper,
              isDarkMode: meta.isDarkMode,
              isGhost,
              isFilled: style.isFilled,
              children: /* @__PURE__ */ jsx66(VideoElement, {
                ref: rVideo,
                id: shape.id + "_video",
                muted: true,
                loop: true,
                playsInline: true,
                disableRemotePlayback: true,
                disablePictureInPicture: true,
                controls: isEditing,
                autoPlay: isPlaying,
                onPlay: handlePlay,
                onPause: handlePause,
                onTimeUpdate: handleSetCurrentTime,
                children: /* @__PURE__ */ jsx66("source", {
                  src: asset.src
                })
              })
            })
          ]
        }));
      }
    ));
    __publicField(this, "Indicator", TDShapeUtil.Indicator(({ shape }) => {
      const {
        size: [width, height]
      } = shape;
      return /* @__PURE__ */ jsx66("rect", {
        x: 0,
        y: 0,
        rx: 2,
        ry: 2,
        width: Math.max(1, width),
        height: Math.max(1, height)
      });
    }));
    __publicField(this, "getBounds", (shape) => {
      return getBoundsRectangle(shape, this.boundsCache);
    });
    __publicField(this, "shouldRender", (prev, next) => {
      return next.size !== prev.size || next.style !== prev.style || next.isPlaying !== prev.isPlaying;
    });
    __publicField(this, "getSvgElement", (shape) => {
      const bounds = this.getBounds(shape);
      const elm = document.createElementNS("http://www.w3.org/2000/svg", "image");
      elm.setAttribute("width", `${bounds.width}`);
      elm.setAttribute("height", `${bounds.height}`);
      elm.setAttribute("xmlns:xlink", `http://www.w3.org/1999/xlink`);
      return elm;
    });
    __publicField(this, "transform", transformRectangle);
    __publicField(this, "transformSingle", transformSingleRectangle);
  }
};
var Wrapper3 = styled3("div", {
  pointerEvents: "all",
  position: "relative",
  fontFamily: "sans-serif",
  fontSize: "2em",
  height: "100%",
  width: "100%",
  borderRadius: "3px",
  perspective: "800px",
  overflow: "hidden",
  p: {
    userSelect: "none"
  },
  img: {
    userSelect: "none"
  },
  variants: {
    isGhost: {
      false: { opacity: 1 },
      true: { transition: "opacity .2s", opacity: GHOSTED_OPACITY }
    },
    isFilled: {
      true: {},
      false: {}
    },
    isDarkMode: {
      true: {},
      false: {}
    }
  },
  compoundVariants: [
    {
      isFilled: true,
      isDarkMode: true,
      css: {
        boxShadow: "2px 3px 12px -2px rgba(0,0,0,.3), 1px 1px 4px rgba(0,0,0,.3), 1px 1px 2px rgba(0,0,0,.3)"
      }
    },
    {
      isFilled: true,
      isDarkMode: false,
      css: {
        boxShadow: "2px 3px 12px -2px rgba(0,0,0,.2), 1px 1px 4px rgba(0,0,0,.16),  1px 1px 2px rgba(0,0,0,.16)"
      }
    }
  ]
});
var VideoElement = styled3("video", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  maxWidth: "100%",
  minWidth: "100%",
  pointerEvents: "none",
  objectFit: "cover",
  userSelect: "none",
  borderRadius: 2
});

// src/state/shapes/index.ts
var Rectangle = new RectangleUtil();
var Triangle = new TriangleUtil();
var Ellipse = new EllipseUtil();
var Draw = new DrawUtil();
var Arrow3 = new ArrowUtil();
var Text = new TextUtil();
var Group = new GroupUtil();
var Sticky = new StickyUtil();
var Image2 = new ImageUtil();
var Video = new VideoUtil();
var shapeUtils = {
  ["rectangle" /* Rectangle */]: Rectangle,
  ["triangle" /* Triangle */]: Triangle,
  ["ellipse" /* Ellipse */]: Ellipse,
  ["draw" /* Draw */]: Draw,
  ["arrow" /* Arrow */]: Arrow3,
  ["text" /* Text */]: Text,
  ["group" /* Group */]: Group,
  ["sticky" /* Sticky */]: Sticky,
  ["image" /* Image */]: Image2,
  ["video" /* Video */]: Video
};
var getShapeUtil = (shape) => {
  if (typeof shape === "string")
    return shapeUtils[shape];
  return shapeUtils[shape.type];
};

// src/state/TLDR.ts
var isDev = true;
var _TLDR = class {
  static getShapeUtil(shape) {
    return getShapeUtil(shape);
  }
  static getSelectedShapes(data, pageId) {
    const page = _TLDR.getPage(data, pageId);
    const selectedIds = _TLDR.getSelectedIds(data, pageId);
    return selectedIds.map((id) => page.shapes[id]);
  }
  static screenToWorld(data, point) {
    const camera = _TLDR.getPageState(data, data.appState.currentPageId).camera;
    return Vec18.sub(Vec18.div(point, camera.zoom), camera.point);
  }
  static getCameraZoom(zoom) {
    return Utils25.clamp(zoom, 0.1, 5);
  }
  static getPage(data, pageId) {
    return data.document.pages[pageId];
  }
  static getPageState(data, pageId) {
    return data.document.pageStates[pageId];
  }
  static getSelectedIds(data, pageId) {
    return _TLDR.getPageState(data, pageId).selectedIds;
  }
  static getShapes(data, pageId) {
    return Object.values(_TLDR.getPage(data, pageId).shapes);
  }
  static getCamera(data, pageId) {
    return _TLDR.getPageState(data, pageId).camera;
  }
  static getShape(data, shapeId, pageId) {
    return _TLDR.getPage(data, pageId).shapes[shapeId];
  }
  static getCenter(shape) {
    return _TLDR.getShapeUtil(shape).getCenter(shape);
  }
  static getBounds(shape) {
    return _TLDR.getShapeUtil(shape).getBounds(shape);
  }
  static getRotatedBounds(shape) {
    return _TLDR.getShapeUtil(shape).getRotatedBounds(shape);
  }
  static getSelectedBounds(data) {
    return Utils25.getCommonBounds(
      _TLDR.getSelectedShapes(data, data.appState.currentPageId).map(
        (shape) => _TLDR.getShapeUtil(shape).getBounds(shape)
      )
    );
  }
  static getParentId(data, id, pageId) {
    return _TLDR.getShape(data, id, pageId).parentId;
  }
  static getDocumentBranch(data, id, pageId) {
    const shape = _TLDR.getShape(data, id, pageId);
    if (shape.children === void 0)
      return [id];
    return [
      id,
      ...shape.children.flatMap((childId) => _TLDR.getDocumentBranch(data, childId, pageId))
    ];
  }
  static getSelectedBranchSnapshot(data, pageId, fn) {
    const page = _TLDR.getPage(data, pageId);
    const copies = _TLDR.getSelectedIds(data, pageId).flatMap((id) => _TLDR.getDocumentBranch(data, id, pageId).map((id2) => page.shapes[id2])).filter((shape) => !shape.isLocked).map(Utils25.deepClone);
    if (fn !== void 0) {
      return copies.map((shape) => __spreadValues({ id: shape.id }, fn(shape)));
    }
    return copies;
  }
  static getSelectedShapeSnapshot(data, pageId, fn) {
    const copies = _TLDR.getSelectedShapes(data, pageId).filter((shape) => !shape.isLocked).map(Utils25.deepClone);
    if (fn !== void 0) {
      return copies.map((shape) => __spreadValues({ id: shape.id }, fn(shape)));
    }
    return copies;
  }
  static getAllEffectedShapeIds(data, ids, pageId) {
    const page = _TLDR.getPage(data, pageId);
    const visited = new Set(ids);
    ids.forEach((id) => {
      const shape = page.shapes[id];
      function collectDescendants(shape2) {
        if (shape2.children === void 0)
          return;
        shape2.children.filter((childId) => !visited.has(childId)).forEach((childId) => {
          visited.add(childId);
          collectDescendants(page.shapes[childId]);
        });
      }
      collectDescendants(shape);
      function collectAscendants(shape2) {
        const parentId = shape2.parentId;
        if (parentId === page.id)
          return;
        if (visited.has(parentId))
          return;
        visited.add(parentId);
        collectAscendants(page.shapes[parentId]);
      }
      collectAscendants(shape);
      visited.forEach((id2) => {
        Object.values(page.bindings).filter((binding) => binding.fromId === id2 || binding.toId === id2).forEach((binding) => visited.add(binding.fromId === id2 ? binding.toId : binding.fromId));
      });
    });
    return Array.from(visited.values());
  }
  static getLinkedShapeIds(data, pageId, direction, includeArrows = true) {
    const selectedIds = _TLDR.getSelectedIds(data, pageId);
    const page = _TLDR.getPage(data, pageId);
    const linkedIds = new Set(selectedIds);
    const checkedIds = /* @__PURE__ */ new Set();
    const idsToCheck = [...selectedIds];
    const arrows = new Set(
      Object.values(page.shapes).filter((shape) => {
        var _a;
        return shape.type === "arrow" /* Arrow */ && (shape.handles.start.bindingId || ((_a = shape.handles) == null ? void 0 : _a.end.bindingId));
      })
    );
    while (idsToCheck.length) {
      const id = idsToCheck.pop();
      if (!(id && arrows.size))
        break;
      if (checkedIds.has(id))
        continue;
      checkedIds.add(id);
      arrows.forEach((arrow) => {
        var _a, _b;
        const {
          handles: {
            start: { bindingId: startBindingId },
            end: { bindingId: endBindingId }
          }
        } = arrow;
        const startBinding = startBindingId ? page.bindings[startBindingId] : null;
        const endBinding = endBindingId ? page.bindings[endBindingId] : null;
        let hit = false;
        if (startBinding && startBinding.toId === id) {
          if (direction === "center") {
            hit = true;
          } else if (((_a = arrow.decorations) == null ? void 0 : _a.start) && endBinding) {
            hit = direction === "left";
          } else {
            hit = direction === "right";
          }
          if (hit) {
            if (includeArrows)
              linkedIds.add(arrow.id);
            linkedIds.add(id);
            if (endBinding) {
              linkedIds.add(endBinding.toId);
              idsToCheck.push(endBinding.toId);
            }
          }
        } else if (endBinding && endBinding.toId === id) {
          if (direction === "center") {
            hit = true;
          } else if (((_b = arrow.decorations) == null ? void 0 : _b.end) && startBinding) {
            hit = direction === "left";
          } else {
            hit = direction === "right";
          }
          if (hit) {
            if (includeArrows)
              linkedIds.add(arrow.id);
            linkedIds.add(id);
            if (startBinding) {
              linkedIds.add(startBinding.toId);
              idsToCheck.push(startBinding.toId);
            }
          }
        }
        if ((!startBinding || linkedIds.has(startBinding.toId)) && (!endBinding || linkedIds.has(endBinding.toId))) {
          arrows.delete(arrow);
        }
      });
    }
    return Array.from(linkedIds.values());
  }
  static getChildIndexAbove(data, id, pageId) {
    const page = data.document.pages[pageId];
    const shape = page.shapes[id];
    let siblings;
    if (shape.parentId === page.id) {
      siblings = Object.values(page.shapes).filter((shape2) => shape2.parentId === page.id).sort((a, b) => a.childIndex - b.childIndex);
    } else {
      const parent = page.shapes[shape.parentId];
      if (!parent.children)
        throw Error("No children in parent!");
      siblings = parent.children.map((childId) => page.shapes[childId]).sort((a, b) => a.childIndex - b.childIndex);
    }
    const index = siblings.indexOf(shape);
    const nextSibling = siblings[index + 1];
    if (!nextSibling)
      return shape.childIndex + 1;
    return nextSibling.childIndex;
  }
  static getBeforeShape(shape, change) {
    return Object.fromEntries(
      Object.keys(change).map((k) => [k, shape[k]])
    );
  }
  static mutateShapes(data, ids, fn, pageId, forceChildrenTraversal = false) {
    const beforeShapes = {};
    const afterShapes = {};
    ids.forEach((id, i) => {
      const shape = _TLDR.getShape(data, id, pageId);
      if (shape.isLocked)
        return;
      if ((shape == null ? void 0 : shape.type) === "group" && (ids.length === 1 || forceChildrenTraversal)) {
        shape.children.forEach((id2, i2) => {
          const shape2 = _TLDR.getShape(data, id2, pageId);
          if (shape2.isLocked)
            return;
          const change2 = fn(shape2, i2);
          if (change2) {
            beforeShapes[id2] = _TLDR.getBeforeShape(shape2, change2);
            afterShapes[id2] = change2;
          }
        });
      }
      const change = fn(shape, i);
      if (change) {
        beforeShapes[id] = _TLDR.getBeforeShape(shape, change);
        afterShapes[id] = change;
      }
    });
    const dataWithMutations = Utils25.deepMerge(data, {
      document: {
        pages: {
          [data.appState.currentPageId]: {
            shapes: afterShapes
          }
        }
      }
    });
    return {
      before: beforeShapes,
      after: afterShapes,
      data: dataWithMutations
    };
  }
  static createShapes(data, shapes, pageId) {
    const before = {
      document: {
        pages: {
          [pageId]: {
            shapes: __spreadValues({}, Object.fromEntries(
              shapes.flatMap((shape) => {
                const results = [[shape.id, void 0]];
                if (shape.parentId !== pageId) {
                  const parent = _TLDR.getShape(data, shape.parentId, pageId);
                  if (!parent.children)
                    throw Error("No children in parent!");
                  results.push([parent.id, { children: parent.children }]);
                }
                return results;
              })
            ))
          }
        }
      }
    };
    const after = {
      document: {
        pages: {
          [pageId]: {
            shapes: {
              shapes: __spreadValues({}, Object.fromEntries(
                shapes.flatMap((shape) => {
                  const results = [[shape.id, shape]];
                  if (shape.parentId !== pageId) {
                    const parent = _TLDR.getShape(data, shape.parentId, pageId);
                    if (!parent.children)
                      throw Error("No children in parent!");
                    results.push([parent.id, { children: [...parent.children, shape.id] }]);
                  }
                  return results;
                })
              ))
            }
          }
        }
      }
    };
    return {
      before,
      after
    };
  }
  static deleteShapes(data, shapes, pageId) {
    pageId = pageId ? pageId : data.appState.currentPageId;
    const page = _TLDR.getPage(data, pageId);
    const shapeIds = typeof shapes[0] === "string" ? shapes : shapes.map((shape) => shape.id);
    const before = {
      document: {
        pages: {
          [pageId]: {
            shapes: __spreadValues({}, Object.fromEntries(
              shapeIds.flatMap((id) => {
                const shape = page.shapes[id];
                const results = [[shape.id, shape]];
                if (shape.parentId !== pageId) {
                  const parent = page.shapes[shape.parentId];
                  if (!parent.children)
                    throw Error("No children in parent!");
                  results.push([parent.id, { children: parent.children }]);
                }
                return results;
              })
            )),
            bindings: __spreadValues({}, Object.fromEntries(
              Object.values(page.bindings).filter((binding) => {
                return shapeIds.includes(binding.fromId) || shapeIds.includes(binding.toId);
              }).map((binding) => {
                return [binding.id, binding];
              })
            ))
          }
        }
      }
    };
    const after = {
      document: {
        pages: {
          [pageId]: {
            shapes: __spreadValues({}, Object.fromEntries(
              shapeIds.flatMap((id) => {
                const shape = page.shapes[id];
                const results = [[shape.id, void 0]];
                if (shape.parentId !== page.id) {
                  const parent = page.shapes[shape.parentId];
                  if (!parent.children)
                    throw Error("No children in parent!");
                  results.push([
                    parent.id,
                    { children: parent.children.filter((id2) => id2 !== shape.id) }
                  ]);
                }
                return results;
              })
            ))
          }
        }
      }
    };
    return {
      before,
      after
    };
  }
  static onSessionComplete(shape) {
    var _a, _b;
    const delta = (_b = (_a = _TLDR.getShapeUtil(shape)).onSessionComplete) == null ? void 0 : _b.call(_a, shape);
    if (!delta)
      return shape;
    return __spreadValues(__spreadValues({}, shape), delta);
  }
  static onChildrenChange(data, shape, pageId) {
    var _a, _b;
    if (!shape.children)
      return;
    const delta = (_b = (_a = _TLDR.getShapeUtil(shape)).onChildrenChange) == null ? void 0 : _b.call(
      _a,
      shape,
      shape.children.map((id) => _TLDR.getShape(data, id, pageId))
    );
    if (!delta)
      return shape;
    return __spreadValues(__spreadValues({}, shape), delta);
  }
  static updateArrowBindings(page, arrowShape) {
    var _a, _b, _c, _d, _e, _f;
    const result = {
      start: deepCopy(arrowShape.handles.start),
      end: deepCopy(arrowShape.handles.end)
    };
    let start = {
      isBound: false,
      handle: arrowShape.handles.start,
      point: Vec18.add(arrowShape.handles.start.point, arrowShape.point)
    };
    let end = {
      isBound: false,
      handle: arrowShape.handles.end,
      point: Vec18.add(arrowShape.handles.end.point, arrowShape.point)
    };
    if (arrowShape.handles.start.bindingId) {
      const hasDecoration = ((_a = arrowShape.decorations) == null ? void 0 : _a.start) !== void 0;
      const handle = arrowShape.handles.start;
      const binding = page.bindings[arrowShape.handles.start.bindingId];
      if (!binding)
        throw Error(
          "Could not find a binding to match the start handle's bindingId: " + arrowShape.handles.start.bindingId
        );
      const target = page.shapes[binding.toId];
      const util = _TLDR.getShapeUtil(target);
      const bounds = util.getBounds(target);
      const expandedBounds = util.getExpandedBounds(target);
      const intersectBounds = hasDecoration ? Utils25.expandBounds(bounds, binding.distance) : bounds;
      const { minX, minY, width, height } = expandedBounds;
      const anchorPoint = Vec18.add(
        [minX, minY],
        Vec18.mulV([width, height], Vec18.rotWith(binding.point, [0.5, 0.5], target.rotation || 0))
      );
      start = {
        isBound: true,
        hasDecoration,
        binding,
        handle,
        point: anchorPoint,
        util,
        target,
        bounds,
        expandedBounds,
        intersectBounds,
        center: util.getCenter(target)
      };
    }
    if (arrowShape.handles.end.bindingId) {
      const hasDecoration = ((_b = arrowShape.decorations) == null ? void 0 : _b.end) !== void 0;
      const handle = arrowShape.handles.end;
      const binding = page.bindings[arrowShape.handles.end.bindingId];
      if (!binding)
        throw Error("Could not find a binding to match the end handle's bindingId");
      const target = page.shapes[binding.toId];
      const util = _TLDR.getShapeUtil(target);
      const bounds = util.getBounds(target);
      const expandedBounds = util.getExpandedBounds(target);
      const intersectBounds = hasDecoration ? Utils25.expandBounds(bounds, binding.distance) : bounds;
      const { minX, minY, width, height } = expandedBounds;
      const anchorPoint = Vec18.add(
        [minX, minY],
        Vec18.mulV([width, height], Vec18.rotWith(binding.point, [0.5, 0.5], target.rotation || 0))
      );
      end = {
        isBound: true,
        hasDecoration,
        binding,
        handle,
        point: anchorPoint,
        util,
        target,
        bounds,
        expandedBounds,
        intersectBounds,
        center: util.getCenter(target)
      };
    }
    for (const ID2 of ["end", "start"]) {
      const A = ID2 === "start" ? start : end;
      const B = ID2 === "start" ? end : start;
      if (A.isBound) {
        if (!A.binding.distance) {
          result[ID2].point = Vec18.sub(A.point, arrowShape.point);
        } else {
          const direction = Vec18.uni(Vec18.sub(A.point, B.point));
          switch (A.target.type) {
            case "ellipse" /* Ellipse */: {
              const hits = intersectRayEllipse2(
                B.point,
                direction,
                A.center,
                A.target.radius[0] + (A.hasDecoration ? A.binding.distance : 0),
                A.target.radius[1] + (A.hasDecoration ? A.binding.distance : 0),
                A.target.rotation || 0
              ).points.sort((a, b) => Vec18.dist(a, B.point) - Vec18.dist(b, B.point));
              if (hits[0] !== void 0) {
                result[ID2].point = Vec18.toFixed(Vec18.sub(hits[0], arrowShape.point));
              }
              break;
            }
            case "triangle" /* Triangle */: {
              const targetPoint = A.target.point;
              const points = getTrianglePoints(
                A.target.size,
                A.hasDecoration ? BINDING_DISTANCE : 0,
                A.target.rotation
              ).map((pt) => Vec18.add(pt, targetPoint));
              const hits = Utils25.pointsToLineSegments(points, true).map(([p0, p1]) => intersectRayLineSegment2(B.point, direction, p0, p1)).filter((intersection) => intersection.didIntersect).flatMap((intersection) => intersection.points).sort((a, b) => Vec18.dist(a, B.point) - Vec18.dist(b, B.point));
              if (hits[0] !== void 0) {
                result[ID2].point = Vec18.toFixed(Vec18.sub(hits[0], arrowShape.point));
              }
              break;
            }
            default: {
              const hits = intersectRayBounds2(
                B.point,
                direction,
                A.intersectBounds,
                A.target.rotation
              ).filter((int) => int.didIntersect).map((int) => int.points[0]).sort((a, b) => Vec18.dist(a, B.point) - Vec18.dist(b, B.point));
              if (!hits[0])
                continue;
              let bHit = void 0;
              if (B.isBound) {
                const bHits = intersectRayBounds2(
                  B.point,
                  direction,
                  B.intersectBounds,
                  B.target.rotation
                ).filter((int) => int.didIntersect).map((int) => int.points[0]).sort((a, b) => Vec18.dist(a, B.point) - Vec18.dist(b, B.point));
                bHit = bHits[0];
              }
              if (B.isBound && (hits.length < 2 || bHit && hits[0] && Math.ceil(Vec18.dist(hits[0], bHit)) < BINDING_DISTANCE * 2.5 || Utils25.boundsContain(A.expandedBounds, B.expandedBounds) || Utils25.boundsCollide(A.expandedBounds, B.expandedBounds))) {
                const shortArrowDirection = Vec18.uni(Vec18.sub(B.point, A.point));
                const shortArrowHits = intersectRayBounds2(
                  A.point,
                  shortArrowDirection,
                  A.bounds,
                  A.target.rotation
                ).filter((int) => int.didIntersect).map((int) => int.points[0]);
                if (!shortArrowHits[0])
                  continue;
                result[ID2].point = Vec18.toFixed(Vec18.sub(shortArrowHits[0], arrowShape.point));
                result[ID2 === "start" ? "end" : "start"].point = Vec18.toFixed(
                  Vec18.add(
                    Vec18.sub(shortArrowHits[0], arrowShape.point),
                    Vec18.mul(
                      shortArrowDirection,
                      Math.min(
                        Vec18.dist(shortArrowHits[0], B.point),
                        BINDING_DISTANCE * 2.5 * (Utils25.boundsContain(B.bounds, A.intersectBounds) ? -1 : 1)
                      )
                    )
                  )
                );
              } else if (!B.isBound && (hits[0] && Vec18.dist(hits[0], B.point) < BINDING_DISTANCE * 2.5 || Utils25.pointInBounds(B.point, A.intersectBounds))) {
                const shortArrowDirection = Vec18.uni(Vec18.sub(A.center, B.point));
                return (_d = (_c = _TLDR.getShapeUtil(arrowShape)).onHandleChange) == null ? void 0 : _d.call(_c, arrowShape, {
                  [ID2]: __spreadProps(__spreadValues({}, arrowShape.handles[ID2]), {
                    point: Vec18.toFixed(
                      Vec18.add(
                        Vec18.sub(B.point, arrowShape.point),
                        Vec18.mul(shortArrowDirection, BINDING_DISTANCE * 2.5)
                      )
                    )
                  })
                });
              } else if (hits[0]) {
                result[ID2].point = Vec18.toFixed(Vec18.sub(hits[0], arrowShape.point));
              }
            }
          }
        }
      }
    }
    return (_f = (_e = _TLDR.getShapeUtil(arrowShape)).onHandleChange) == null ? void 0 : _f.call(_e, arrowShape, result);
  }
  static transform(shape, bounds, info) {
    const delta = _TLDR.getShapeUtil(shape).transform(shape, bounds, info);
    if (!delta)
      return shape;
    return __spreadValues(__spreadValues({}, shape), delta);
  }
  static transformSingle(shape, bounds, info) {
    const delta = _TLDR.getShapeUtil(shape).transformSingle(shape, bounds, info);
    if (!delta)
      return shape;
    return __spreadValues(__spreadValues({}, shape), delta);
  }
  static getRotatedShapeMutation(shape, center, origin, delta) {
    var _a, _b;
    const relativeCenter = Vec18.sub(center, shape.point);
    const rotatedCenter = Vec18.rotWith(center, origin, delta);
    const nextPoint = Vec18.toFixed(Vec18.sub(rotatedCenter, relativeCenter));
    if (shape.handles !== void 0) {
      const change = (_b = (_a = this.getShapeUtil(shape)).onHandleChange) == null ? void 0 : _b.call(
        _a,
        __spreadProps(__spreadValues({}, shape), { point: nextPoint }),
        Object.fromEntries(
          Object.entries(shape.handles).map(([handleId, handle]) => {
            const point = Vec18.toFixed(Vec18.rotWith(handle.point, relativeCenter, delta));
            return [handleId, __spreadProps(__spreadValues({}, handle), { point })];
          })
        )
      );
      return change;
    }
    const nextRotation = Utils25.clampRadians((shape.rotation || 0) + delta);
    return {
      point: nextPoint,
      rotation: nextRotation
    };
  }
  static updateParents(data, pageId, changedShapeIds) {
    const page = _TLDR.getPage(data, pageId);
    if (changedShapeIds.length === 0)
      return;
    const { shapes } = _TLDR.getPage(data, pageId);
    const parentToUpdateIds = Array.from(
      new Set(changedShapeIds.map((id) => shapes[id].parentId).values())
    ).filter((id) => id !== page.id);
    for (const parentId of parentToUpdateIds) {
      const parent = shapes[parentId];
      if (!parent.children) {
        throw Error("A shape is parented to a shape without a children array.");
      }
      _TLDR.onChildrenChange(data, parent, pageId);
    }
    _TLDR.updateParents(data, pageId, parentToUpdateIds);
  }
  static getBinding(data, id, pageId) {
    return _TLDR.getPage(data, pageId).bindings[id];
  }
  static getBindings(data, pageId) {
    const page = _TLDR.getPage(data, pageId);
    return Object.values(page.bindings);
  }
  static getBindableShapeIds(data) {
    return _TLDR.getShapes(data, data.appState.currentPageId).filter((shape) => _TLDR.getShapeUtil(shape).canBind).sort((a, b) => b.childIndex - a.childIndex).map((shape) => shape.id);
  }
  static getBindingsWithShapeIds(data, ids, pageId) {
    return Array.from(
      new Set(
        _TLDR.getBindings(data, pageId).filter((binding) => {
          return ids.includes(binding.toId) || ids.includes(binding.fromId);
        })
      ).values()
    );
  }
  static getRelatedBindings(data, ids, pageId) {
    const changedShapeIds = new Set(ids);
    const page = _TLDR.getPage(data, pageId);
    const bindingsArr = Object.values(page.bindings);
    const bindingsToUpdate = new Set(
      bindingsArr.filter(
        (binding) => changedShapeIds.has(binding.toId) || changedShapeIds.has(binding.fromId)
      )
    );
    let prevSize2 = bindingsToUpdate.size;
    let delta = -1;
    while (delta !== 0) {
      bindingsToUpdate.forEach((binding) => {
        const fromId = binding.fromId;
        for (const otherBinding of bindingsArr) {
          if (otherBinding.fromId === fromId) {
            bindingsToUpdate.add(otherBinding);
          }
          if (otherBinding.toId === fromId) {
            bindingsToUpdate.add(otherBinding);
          }
        }
      });
      delta = bindingsToUpdate.size - prevSize2;
      prevSize2 = bindingsToUpdate.size;
    }
    return Array.from(bindingsToUpdate.values());
  }
  static normalizeText(text) {
    return text.replace(_TLDR.fixNewLines, "\n").split("\n").map((x) => x || " ").join("\n");
  }
  static assertShapeHasProperty(shape, prop) {
    if (shape[prop] === void 0) {
      throw new Error();
    }
  }
  static warn(e) {
    if (isDev) {
      console.warn(e);
    }
  }
  static error(e) {
    if (isDev) {
      console.error(e);
    }
  }
  static getSvgString(svg, scale = 1) {
    const clone = svg.cloneNode(true);
    svg.setAttribute("width", +svg.getAttribute("width") * scale + "");
    svg.setAttribute("height", +svg.getAttribute("height") * scale + "");
    return new XMLSerializer().serializeToString(clone).replaceAll("&#10;      ", "").replaceAll(/((\s|")[0-9]*\.[0-9]{2})([0-9]*)(\b|"|\))/g, "$1");
  }
  static getSvgAsDataUrl(svg, scale = 1) {
    const svgString = _TLDR.getSvgString(svg, scale);
    const base64SVG = window.btoa(unescape(svgString));
    return `data:image/svg+xml;base64,${base64SVG}`;
  }
  static getImageForSvg(_0) {
    return __async(this, arguments, function* (svg, type = "png" /* PNG */, opts = {}) {
      const { scale = 2, quality = 1 } = opts;
      const svgString = _TLDR.getSvgString(svg, scale);
      if (!svgString)
        return;
      const canvas = yield new Promise((resolve) => {
        const image = new Image();
        image.crossOrigin = "anonymous";
        const base64SVG = window.btoa(unescape(encodeURIComponent(svgString)));
        const dataUrl = `data:image/svg+xml;base64,${base64SVG}`;
        image.onload = () => {
          const canvas2 = document.createElement("canvas");
          const context = canvas2.getContext("2d");
          const imageWidth = image.width;
          const imageHeight = image.height;
          canvas2.width = imageWidth;
          canvas2.height = imageHeight;
          context.drawImage(image, 0, 0, imageWidth, imageHeight);
          URL.revokeObjectURL(dataUrl);
          resolve(canvas2);
        };
        image.onerror = () => {
          console.warn("Could not convert that SVG to an image.");
        };
        image.src = dataUrl;
      });
      const blob = yield new Promise(
        (resolve) => canvas.toBlob((blob2) => resolve(blob2), "image/" + type, quality)
      );
      return blob;
    });
  }
};
var TLDR = _TLDR;
__publicField(TLDR, "copyStringToClipboard", (string) => {
  try {
    if (navigator.clipboard) {
      navigator.clipboard.write([
        new ClipboardItem({
          "text/plain": new Blob([string], { type: "text/plain" })
        })
      ]);
    }
  } catch (e) {
    const textarea = document.createElement("textarea");
    textarea.setAttribute("position", "fixed");
    textarea.setAttribute("top", "0");
    textarea.setAttribute("readonly", "true");
    textarea.setAttribute("contenteditable", "true");
    textarea.style.position = "fixed";
    textarea.value = string;
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
      const range = document.createRange();
      range.selectNodeContents(textarea);
      const sel = window.getSelection();
      if (sel) {
        sel.removeAllRanges();
        sel.addRange(range);
        textarea.setSelectionRange(0, textarea.value.length);
      }
      document.execCommand("copy");
    } catch (err) {
      null;
    } finally {
      document.body.removeChild(textarea);
    }
  }
});
__publicField(TLDR, "flattenShape", (data, shape) => {
  var _a;
  return [
    shape,
    ...((_a = shape.children) != null ? _a : []).map((childId) => _TLDR.getShape(data, childId, data.appState.currentPageId)).sort((a, b) => a.childIndex - b.childIndex).flatMap((shape2) => _TLDR.flattenShape(data, shape2))
  ];
});
__publicField(TLDR, "flattenPage", (data, pageId) => {
  return Object.values(data.document.pages[pageId].shapes).sort((a, b) => a.childIndex - b.childIndex).reduce((acc, shape) => [...acc, ..._TLDR.flattenShape(data, shape)], []);
});
__publicField(TLDR, "getTopChildIndex", (data, pageId) => {
  const shapes = _TLDR.getShapes(data, pageId);
  return shapes.length === 0 ? 1 : shapes.filter((shape) => shape.parentId === pageId).sort((a, b) => b.childIndex - a.childIndex)[0].childIndex + 1;
});
__publicField(TLDR, "fixNewLines", /\r?\n|\r/g);

// src/components/TopPanel/MultiplayerMenu/MultiplayerMenu.tsx
import { jsx as jsx67, jsxs as jsxs43 } from "react/jsx-runtime";
var roomSelector = (state) => state.room;
var MultiplayerMenu = function MultiplayerMenu2() {
  const app = useTldrawApp();
  const room = app.useStore(roomSelector);
  const [copied, setCopied] = React41.useState(false);
  const rTimeout = React41.useRef(0);
  const handleCopySelect = React41.useCallback(() => {
    setCopied(true);
    TLDR.copyStringToClipboard(window.location.href);
    clearTimeout(rTimeout.current);
    rTimeout.current = setTimeout(() => setCopied(false), 1200);
  }, []);
  const handleCopyReadOnlySelect = React41.useCallback(() => {
    setCopied(true);
    const segs = window.location.href.split("/");
    segs[segs.length - 2] = "v";
    segs[segs.length - 1] = Utils26.lns(segs[segs.length - 1]);
    TLDR.copyStringToClipboard(segs.join("/"));
    clearTimeout(rTimeout.current);
    rTimeout.current = setTimeout(() => setCopied(false), 1200);
  }, []);
  const handleCreateMultiplayerProject = React41.useCallback(() => __async(this, null, function* () {
    if (app.isDirty) {
      if (app.fileSystemHandle) {
        if (window.confirm("Do you want to save changes to your current project?")) {
          yield app.saveProject();
        }
      } else {
        if (window.confirm("Do you want to save your current project?")) {
          yield app.saveProject();
        }
      }
    } else if (!app.fileSystemHandle) {
      if (window.confirm("Do you want to save your current project?")) {
        yield app.saveProject();
      }
    }
  }), []);
  const handleCopyToMultiplayerProject = React41.useCallback(() => __async(this, null, function* () {
    var _a;
    const nextDocument = Utils26.deepClone(app.document);
    app.setIsLoading(true);
    try {
      if (app.callbacks.onAssetUpload) {
        for (const id in nextDocument.assets) {
          const asset = nextDocument.assets[id];
          if (asset.src.includes("base64")) {
            const file = dataURLtoFile(
              asset.src,
              ((_a = asset.fileName) != null ? _a : asset.type === "video" /* Video */) ? "image.png" : "image.mp4"
            );
            const newSrc = yield app.callbacks.onAssetUpload(app, file, id);
            if (newSrc) {
              asset.src = newSrc;
            } else {
              asset.src = "";
            }
          }
        }
      }
      const result = yield fetch(`/api/create`, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          roomId: Utils26.uniqueId(),
          pageId: app.currentPageId,
          document: nextDocument
        })
      }).then((d) => d.json());
      if (result == null ? void 0 : result.url) {
        window.location.href = result.url;
      } else {
        TLDR.warn(result == null ? void 0 : result.message);
      }
    } catch (e) {
      TLDR.warn(e.message);
    }
    app.setIsLoading(false);
  }), []);
  return /* @__PURE__ */ jsxs43(DropdownMenu6.Root, {
    dir: "ltr",
    children: [
      /* @__PURE__ */ jsx67(DMTriggerIcon, {
        id: "TD-MultiplayerMenuIcon",
        isActive: !!room,
        children: /* @__PURE__ */ jsx67(MultiplayerIcon2, {})
      }),
      /* @__PURE__ */ jsxs43(DMContent, {
        variant: "menu",
        id: "TD-MultiplayerMenu",
        side: "bottom",
        align: "start",
        sideOffset: 4,
        children: [
          /* @__PURE__ */ jsxs43(DMItem, {
            id: "TD-Multiplayer-CopyInviteLink",
            onClick: handleCopySelect,
            disabled: !room,
            children: [
              /* @__PURE__ */ jsx67(FormattedMessage11, {
                id: "copy.invite.link"
              }),
              /* @__PURE__ */ jsx67(SmallIcon, {
                children: copied ? /* @__PURE__ */ jsx67(CheckIcon2, {}) : /* @__PURE__ */ jsx67(ClipboardIcon, {})
              })
            ]
          }),
          /* @__PURE__ */ jsxs43(DMItem, {
            id: "TD-Multiplayer-CopyReadOnlyLink",
            onClick: handleCopyReadOnlySelect,
            disabled: !room,
            children: [
              /* @__PURE__ */ jsx67(FormattedMessage11, {
                id: "copy.readonly.link"
              }),
              /* @__PURE__ */ jsx67(SmallIcon, {
                children: copied ? /* @__PURE__ */ jsx67(CheckIcon2, {}) : /* @__PURE__ */ jsx67(ClipboardIcon, {})
              })
            ]
          }),
          /* @__PURE__ */ jsx67(Divider, {}),
          /* @__PURE__ */ jsx67(DMItem, {
            id: "TD-Multiplayer-CreateMultiplayerProject",
            onClick: handleCreateMultiplayerProject,
            children: /* @__PURE__ */ jsx67("a", {
              href: `${window.location.origin}/r`,
              children: /* @__PURE__ */ jsx67(FormattedMessage11, {
                id: "create.multiplayer.project"
              })
            })
          }),
          /* @__PURE__ */ jsx67(DMItem, {
            id: "TD-Multiplayer-CopyToMultiplayerProject",
            onClick: handleCopyToMultiplayerProject,
            children: /* @__PURE__ */ jsx67(FormattedMessage11, {
              id: "copy.multiplayer.project"
            })
          })
        ]
      })
    ]
  });
};
function dataURLtoFile(dataurl, filename) {
  var _a, _b;
  const arr = dataurl.split(",");
  const mime = (_b = (_a = arr[0]) == null ? void 0 : _a.match(/:(.*?);/)) == null ? void 0 : _b[1];
  const bstr = window.atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}

// src/components/TopPanel/PageMenu/PageMenu.tsx
import * as DropdownMenu7 from "@radix-ui/react-dropdown-menu";
import { CheckIcon as CheckIcon3, PlusIcon } from "@radix-ui/react-icons";
import * as React43 from "react";
import { FormattedMessage as FormattedMessage13, useIntl as useIntl12 } from "react-intl";

// src/components/TopPanel/PageOptionsDialog/PageOptionsDialog.tsx
import * as Dialog3 from "@radix-ui/react-alert-dialog";
import { MixerVerticalIcon, Pencil1Icon as Pencil1Icon3 } from "@radix-ui/react-icons";
import * as React42 from "react";
import { FormattedMessage as FormattedMessage12, useIntl as useIntl11 } from "react-intl";
import { jsx as jsx68, jsxs as jsxs44 } from "react/jsx-runtime";
var canDeleteSelector = (s) => {
  return Object.keys(s.document.pages).length > 1;
};
function PageOptionsDialog({ page, onOpen, onClose }) {
  const app = useTldrawApp();
  const intl = useIntl11();
  const [isOpen, setIsOpen] = React42.useState(false);
  const [pageName, setPageName] = React42.useState(page.name || "Page");
  const canDelete = app.useStore(canDeleteSelector);
  const rInput = React42.useRef(null);
  const handleClose = React42.useCallback(() => {
    setIsOpen(false);
  }, []);
  const handleDuplicate = React42.useCallback(() => {
    app.duplicatePage(page.id);
  }, [app]);
  const handleDelete = React42.useCallback(() => {
    if (window.confirm(`Are you sure you want to delete this page?`)) {
      app.deletePage(page.id);
    }
  }, [app]);
  const handleOpenChange = React42.useCallback(
    (isOpen2) => {
      setIsOpen(isOpen2);
      if (isOpen2) {
        onOpen == null ? void 0 : onOpen();
        return;
      }
    },
    [app]
  );
  function stopPropagation2(e) {
    e.stopPropagation();
  }
  const rInitialName = React42.useRef(page.name || "Page");
  const rCurrentName = React42.useRef(rInitialName.current);
  const handleTextFieldChange = React42.useCallback((event) => {
    const value = event.target.value.trimStart();
    rCurrentName.current = value;
    setPageName(value);
  }, []);
  const handleTextFieldKeyDown = React42.useCallback((e) => {
    switch (e.key) {
      case "Enter": {
        if (rCurrentName.current === rInitialName.current) {
          setIsOpen(false);
        } else {
          rInitialName.current = rCurrentName.current;
          app.renamePage(page.id, rCurrentName.current.trim());
          setIsOpen(false);
        }
        break;
      }
      case "Escape": {
        if (rCurrentName.current === rInitialName.current) {
          setIsOpen(false);
          return;
        }
        rCurrentName.current = rInitialName.current;
        setPageName(rInitialName.current);
        requestAnimationFrame(() => {
          const elm = rInput.current;
          if (elm) {
            elm.focus();
            elm.setSelectionRange(0, elm.value.length);
          }
        });
        break;
      }
    }
  }, []);
  const rWasOpen = React42.useRef(false);
  React42.useEffect(() => {
    if (isOpen) {
      rWasOpen.current = true;
      rInitialName.current = page.name || "Page";
      rCurrentName.current = rInitialName.current;
      requestAnimationFrame(() => {
        const elm = rInput.current;
        if (elm) {
          elm.focus();
          elm.setSelectionRange(0, elm.value.length);
        }
      });
    } else if (rWasOpen.current) {
      onClose == null ? void 0 : onClose();
    }
    return () => {
      if (rCurrentName.current !== rInitialName.current) {
        rInitialName.current = rCurrentName.current;
        app.renamePage(page.id, rCurrentName.current);
      }
    };
  }, [isOpen]);
  const container = useContainer();
  return /* @__PURE__ */ jsxs44(Dialog3.Root, {
    open: isOpen,
    onOpenChange: handleOpenChange,
    children: [
      /* @__PURE__ */ jsx68(Dialog3.Trigger, {
        asChild: true,
        "data-shy": "true",
        children: /* @__PURE__ */ jsx68(IconButton, {
          bp: breakpoints,
          children: /* @__PURE__ */ jsx68(SmallIcon, {
            children: /* @__PURE__ */ jsx68(MixerVerticalIcon, {})
          })
        })
      }),
      /* @__PURE__ */ jsxs44(Dialog3.Portal, {
        container: container.current,
        children: [
          /* @__PURE__ */ jsx68(StyledDialogOverlay3, {
            onPointerDown: handleClose
          }),
          /* @__PURE__ */ jsxs44(StyledDialogContent2, {
            dir: "ltr",
            onKeyDown: stopPropagation2,
            onKeyUp: stopPropagation2,
            children: [
              /* @__PURE__ */ jsx68(TextField, {
                ref: rInput,
                placeholder: intl.formatMessage({ id: "page.name" }),
                value: pageName,
                onChange: handleTextFieldChange,
                onKeyDown: handleTextFieldKeyDown,
                icon: /* @__PURE__ */ jsx68(Pencil1Icon3, {})
              }),
              /* @__PURE__ */ jsx68(Divider, {}),
              /* @__PURE__ */ jsx68(DialogAction, {
                onSelect: handleDuplicate,
                children: /* @__PURE__ */ jsx68(FormattedMessage12, {
                  id: "duplicate"
                })
              }),
              /* @__PURE__ */ jsx68(DialogAction, {
                disabled: !canDelete,
                onSelect: handleDelete,
                children: /* @__PURE__ */ jsx68(FormattedMessage12, {
                  id: "delete"
                })
              }),
              /* @__PURE__ */ jsx68(Divider, {}),
              /* @__PURE__ */ jsx68(Dialog3.Cancel, {
                asChild: true,
                children: /* @__PURE__ */ jsx68(RowButton, {
                  children: /* @__PURE__ */ jsx68(FormattedMessage12, {
                    id: "cancel"
                  })
                })
              })
            ]
          })
        ]
      })
    ]
  });
}
var StyledDialogContent2 = styled(Dialog3.Content, {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 240,
  maxWidth: "fit-content",
  maxHeight: "85vh",
  marginTop: "-5vh",
  pointerEvents: "all",
  backgroundColor: "$panel",
  padding: "$1",
  borderRadius: "$2",
  font: "$ui",
  zIndex: 999999,
  "&:focus": {
    outline: "none"
  }
});
var StyledDialogOverlay3 = styled(Dialog3.Overlay, {
  backgroundColor: "rgba(0, 0, 0, .15)",
  position: "absolute",
  pointerEvents: "all",
  inset: 0,
  zIndex: 999998
});
function DialogAction(_a) {
  var _b = _a, {
    onSelect
  } = _b, rest = __objRest(_b, [
    "onSelect"
  ]);
  return /* @__PURE__ */ jsx68(Dialog3.Action, {
    asChild: true,
    onClick: onSelect,
    onSelect,
    children: /* @__PURE__ */ jsx68(RowButton, __spreadValues({}, rest))
  });
}

// src/components/TopPanel/PageMenu/PageMenu.tsx
import { Fragment as Fragment15, jsx as jsx69, jsxs as jsxs45 } from "react/jsx-runtime";
var sortedSelector = (s) => Object.values(s.document.pages).sort((a, b) => (a.childIndex || 0) - (b.childIndex || 0));
var currentPageNameSelector = (s) => s.document.pages[s.appState.currentPageId].name;
var currentPageIdSelector2 = (s) => s.document.pages[s.appState.currentPageId].id;
function PageMenu() {
  const app = useTldrawApp();
  const intl = useIntl12();
  const rIsOpen = React43.useRef(false);
  const [isOpen, setIsOpen] = React43.useState(false);
  React43.useEffect(() => {
    if (rIsOpen.current !== isOpen) {
      rIsOpen.current = isOpen;
    }
  }, [isOpen]);
  const handleClose = React43.useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);
  const handleOpenChange = React43.useCallback(
    (isOpen2) => {
      if (rIsOpen.current !== isOpen2) {
        setIsOpen(isOpen2);
      }
    },
    [setIsOpen]
  );
  const currentPageName = app.useStore(currentPageNameSelector);
  return /* @__PURE__ */ jsxs45(DropdownMenu7.Root, {
    dir: "ltr",
    open: isOpen,
    onOpenChange: handleOpenChange,
    children: [
      /* @__PURE__ */ jsx69(DropdownMenu7.Trigger, {
        dir: "ltr",
        asChild: true,
        id: "TD-Page",
        children: /* @__PURE__ */ jsx69(ToolButton, {
          variant: "text",
          children: currentPageName || intl.formatMessage({ id: "page" })
        })
      }),
      /* @__PURE__ */ jsx69(DMContent, {
        variant: "menu",
        align: "start",
        sideOffset: 4,
        children: isOpen && /* @__PURE__ */ jsx69(PageMenuContent, {
          onClose: handleClose
        })
      })
    ]
  });
}
function PageMenuContent({ onClose }) {
  const app = useTldrawApp();
  const intl = useIntl12();
  const sortedPages = app.useStore(sortedSelector);
  const currentPageId = app.useStore(currentPageIdSelector2);
  const defaultPageName = intl.formatMessage({ id: "page" });
  const handleCreatePage = React43.useCallback(() => {
    const pageName = defaultPageName + " " + (Object.keys(app.document.pages).length + 1);
    app.createPage(void 0, pageName);
  }, [app]);
  const handleChangePage = React43.useCallback(
    (id) => {
      onClose();
      app.changePage(id);
    },
    [app]
  );
  const [dragId, setDragId] = React43.useState(null);
  const [dropIndex, setDropIndex] = React43.useState(null);
  const handleDragStart = React43.useCallback((ev) => {
    setDragId(ev.currentTarget.id);
    setDropIndex(sortedPages.findIndex((p) => p.id === ev.currentTarget.id));
    ev.dataTransfer.effectAllowed = "move";
  }, []);
  const handleDrag = React43.useCallback(
    (ev) => {
      ev.preventDefault();
      let dropIndex2 = sortedPages.findIndex((p) => p.id === ev.currentTarget.id);
      const rect = ev.currentTarget.getBoundingClientRect();
      const ny = (ev.clientY - rect.top) / rect.height;
      dropIndex2 = ny < 0.5 ? dropIndex2 : dropIndex2 + 1;
      setDropIndex(dropIndex2);
    },
    [dragId, sortedPages]
  );
  const handleDrop = React43.useCallback(() => {
    if (dragId !== null && dropIndex !== null) {
      app.movePage(dragId, dropIndex);
    }
    setDragId(null);
    setDropIndex(null);
  }, [dragId, dropIndex]);
  return /* @__PURE__ */ jsxs45(Fragment15, {
    children: [
      /* @__PURE__ */ jsx69(DropdownMenu7.RadioGroup, {
        dir: "ltr",
        value: currentPageId,
        onValueChange: handleChangePage,
        children: sortedPages.map((page, i) => /* @__PURE__ */ jsxs45(ButtonWithOptions, {
          isDropAbove: i === dropIndex && i === 0,
          isDropBelow: dropIndex !== null && i === dropIndex - 1,
          children: [
            /* @__PURE__ */ jsx69(DropdownMenu7.RadioItem, {
              title: page.name || defaultPageName,
              value: page.id,
              id: page.id,
              asChild: true,
              onDragOver: handleDrag,
              onDragStart: handleDragStart,
              onDrop: handleDrop,
              draggable: true,
              children: /* @__PURE__ */ jsxs45(PageButton, {
                children: [
                  /* @__PURE__ */ jsx69("span", {
                    id: page.id,
                    children: page.name || defaultPageName
                  }),
                  /* @__PURE__ */ jsx69(DropdownMenu7.ItemIndicator, {
                    children: /* @__PURE__ */ jsx69(SmallIcon, {
                      children: /* @__PURE__ */ jsx69(CheckIcon3, {})
                    })
                  })
                ]
              })
            }, page.id),
            /* @__PURE__ */ jsx69(PageOptionsDialog, {
              page,
              onClose
            })
          ]
        }, page.id))
      }),
      /* @__PURE__ */ jsx69(Divider, {}),
      /* @__PURE__ */ jsx69(DropdownMenu7.Item, {
        onSelect: handleCreatePage,
        asChild: true,
        children: /* @__PURE__ */ jsxs45(RowButton, {
          children: [
            /* @__PURE__ */ jsx69("span", {
              children: /* @__PURE__ */ jsx69(FormattedMessage13, {
                id: "create.page"
              })
            }),
            /* @__PURE__ */ jsx69(SmallIcon, {
              children: /* @__PURE__ */ jsx69(PlusIcon, {})
            })
          ]
        })
      })
    ]
  });
}
var ButtonWithOptions = styled("div", {
  position: "relative",
  display: "grid",
  gridTemplateColumns: "1fr auto",
  gridAutoFlow: "column",
  margin: 0,
  '& > *[data-shy="true"]': {
    opacity: 0
  },
  '&:hover > *[data-shy="true"]': {
    opacity: 1
  },
  variants: {
    isDropAbove: {
      true: {
        "&::after": {
          content: "",
          display: "block",
          position: "absolute",
          top: 0,
          width: "100%",
          height: "1px",
          backgroundColor: "$selected",
          zIndex: 999,
          pointerEvents: "none"
        }
      }
    },
    isDropBelow: {
      true: {
        "&::after": {
          content: "",
          display: "block",
          position: "absolute",
          width: "100%",
          height: "1px",
          top: "100%",
          backgroundColor: "$selected",
          zIndex: 999,
          pointerEvents: "none"
        }
      }
    }
  }
});
var PageButton = styled(RowButton, {
  minWidth: 128
});

// src/components/TopPanel/StyleMenu/StyleMenu.tsx
import * as DropdownMenu8 from "@radix-ui/react-dropdown-menu";
import {
  TextAlignCenterIcon,
  TextAlignJustifyIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon
} from "@radix-ui/react-icons";
import * as React44 from "react";
import { FormattedMessage as FormattedMessage14, useIntl as useIntl13 } from "react-intl";
import { Fragment as Fragment16, jsx as jsx70, jsxs as jsxs46 } from "react/jsx-runtime";
var currentStyleSelector = (s) => s.appState.currentStyle;
var selectedIdsSelector = (s) => s.document.pageStates[s.appState.currentPageId].selectedIds;
var STYLE_KEYS = Object.keys(defaultTextStyle);
var DASH_ICONS = {
  ["draw" /* Draw */]: /* @__PURE__ */ jsx70(DashDrawIcon, {}),
  ["solid" /* Solid */]: /* @__PURE__ */ jsx70(DashSolidIcon, {}),
  ["dashed" /* Dashed */]: /* @__PURE__ */ jsx70(DashDashedIcon, {}),
  ["dotted" /* Dotted */]: /* @__PURE__ */ jsx70(DashDottedIcon, {})
};
var SIZE_ICONS = {
  ["small" /* Small */]: /* @__PURE__ */ jsx70(SizeSmallIcon, {}),
  ["medium" /* Medium */]: /* @__PURE__ */ jsx70(SizeMediumIcon, {}),
  ["large" /* Large */]: /* @__PURE__ */ jsx70(SizeLargeIcon, {})
};
var ALIGN_ICONS = {
  ["start" /* Start */]: /* @__PURE__ */ jsx70(TextAlignLeftIcon, {}),
  ["middle" /* Middle */]: /* @__PURE__ */ jsx70(TextAlignCenterIcon, {}),
  ["end" /* End */]: /* @__PURE__ */ jsx70(TextAlignRightIcon, {}),
  ["justify" /* Justify */]: /* @__PURE__ */ jsx70(TextAlignJustifyIcon, {})
};
var themeSelector = (s) => s.settings.isDarkMode ? "dark" : "light";
var keepOpenSelector = (s) => s.settings.keepStyleMenuOpen;
var optionsSelector = (s) => {
  const { activeTool, currentPageId: pageId } = s.appState;
  switch (activeTool) {
    case "select": {
      const page = s.document.pages[pageId];
      let hasText = false;
      let hasLabel = false;
      for (const id of s.document.pageStates[pageId].selectedIds) {
        if ("text" in page.shapes[id])
          hasText = true;
        if ("label" in page.shapes[id])
          hasLabel = true;
      }
      return hasText ? "text" : hasLabel ? "label" : "";
    }
    case "text" /* Text */: {
      return "text";
    }
    case "rectangle" /* Rectangle */: {
      return "label";
    }
    case "ellipse" /* Ellipse */: {
      return "label";
    }
    case "triangle" /* Triangle */: {
      return "label";
    }
    case "arrow" /* Arrow */: {
      return "label";
    }
    case "line" /* Line */: {
      return "label";
    }
  }
  return false;
};
var StyleMenu = React44.memo(function ColorMenu() {
  const app = useTldrawApp();
  const intl = useIntl13();
  const theme = app.useStore(themeSelector);
  const keepOpen = app.useStore(keepOpenSelector);
  const options2 = app.useStore(optionsSelector);
  const currentStyle = app.useStore(currentStyleSelector);
  const selectedIds = app.useStore(selectedIdsSelector);
  const [displayedStyle, setDisplayedStyle] = React44.useState(currentStyle);
  const rDisplayedStyle = React44.useRef(currentStyle);
  React44.useEffect(() => {
    const {
      appState: { currentStyle: currentStyle2 },
      page,
      selectedIds: selectedIds2
    } = app;
    let commonStyle = {};
    if (selectedIds2.length <= 0) {
      commonStyle = currentStyle2;
    } else {
      const overrides = /* @__PURE__ */ new Set([]);
      app.selectedIds.map((id) => page.shapes[id]).forEach((shape) => {
        STYLE_KEYS.forEach((key) => {
          if (overrides.has(key))
            return;
          if (commonStyle[key] === void 0) {
            commonStyle[key] = shape.style[key];
          } else {
            if (commonStyle[key] === shape.style[key])
              return;
            commonStyle[key] = shape.style[key];
            overrides.add(key);
          }
        });
      });
    }
    if (JSON.stringify(commonStyle) !== JSON.stringify(rDisplayedStyle.current)) {
      rDisplayedStyle.current = commonStyle;
      setDisplayedStyle(commonStyle);
    }
  }, [currentStyle, selectedIds]);
  const handleToggleKeepOpen = React44.useCallback((checked) => {
    app.setSetting("keepStyleMenuOpen", checked);
  }, []);
  const handleToggleFilled = React44.useCallback((checked) => {
    app.style({ isFilled: checked });
  }, []);
  const handleDashChange = React44.useCallback((value) => {
    app.style({ dash: value });
  }, []);
  const handleSizeChange = React44.useCallback((value) => {
    app.style({ size: value });
  }, []);
  const handleFontChange = React44.useCallback((value) => {
    app.style({ font: value });
  }, []);
  const handleTextAlignChange = React44.useCallback((value) => {
    app.style({ textAlign: value });
  }, []);
  const handleMenuOpenChange = React44.useCallback(
    (open) => {
      app.setMenuOpen(open);
    },
    [app]
  );
  return /* @__PURE__ */ jsxs46(DropdownMenu8.Root, {
    dir: "ltr",
    onOpenChange: handleMenuOpenChange,
    open: keepOpen ? true : void 0,
    modal: false,
    children: [
      /* @__PURE__ */ jsx70(DropdownMenu8.Trigger, {
        asChild: true,
        id: "TD-Styles",
        children: /* @__PURE__ */ jsxs46(ToolButton, {
          "aria-label": intl.formatMessage({ id: "styles" }),
          variant: "text",
          children: [
            /* @__PURE__ */ jsx70(FormattedMessage14, {
              id: "styles"
            }),
            /* @__PURE__ */ jsxs46(OverlapIcons, {
              style: {
                color: strokes[theme][displayedStyle.color]
              },
              children: [
                displayedStyle.isFilled && /* @__PURE__ */ jsx70(CircleIcon, {
                  size: 16,
                  stroke: "none",
                  fill: fills[theme][displayedStyle.color]
                }),
                DASH_ICONS[displayedStyle.dash]
              ]
            })
          ]
        })
      }),
      /* @__PURE__ */ jsxs46(DMContent, {
        id: "TD-StylesMenu",
        side: "bottom",
        align: "end",
        sideOffset: 4,
        alignOffset: 4,
        children: [
          /* @__PURE__ */ jsxs46(StyledRow, {
            variant: "tall",
            id: "TD-Styles-Color-Container",
            children: [
              /* @__PURE__ */ jsx70("span", {
                children: /* @__PURE__ */ jsx70(FormattedMessage14, {
                  id: "style.menu.color"
                })
              }),
              /* @__PURE__ */ jsx70(ColorGrid, {
                children: Object.keys(strokes.light).map((style) => /* @__PURE__ */ jsx70(DropdownMenu8.Item, {
                  onSelect: preventEvent,
                  asChild: true,
                  id: `TD-Styles-Color-Swatch-${style}`,
                  children: /* @__PURE__ */ jsx70(ToolButton, {
                    variant: "icon",
                    isActive: displayedStyle.color === style,
                    onClick: () => app.style({ color: style }),
                    "aria-label": intl.formatMessage({ id: style }),
                    children: /* @__PURE__ */ jsx70(CircleIcon, {
                      size: 18,
                      strokeWidth: 2.5,
                      fill: displayedStyle.isFilled ? fills[theme][style] : "transparent",
                      stroke: strokes.light[style]
                    })
                  })
                }, style))
              })
            ]
          }),
          /* @__PURE__ */ jsx70(DMCheckboxItem, {
            variant: "styleMenu",
            checked: !!displayedStyle.isFilled,
            onCheckedChange: handleToggleFilled,
            id: "TD-Styles-Fill",
            children: /* @__PURE__ */ jsx70(FormattedMessage14, {
              id: "style.menu.fill"
            })
          }),
          /* @__PURE__ */ jsxs46(StyledRow, {
            id: "TD-Styles-Dash-Container",
            children: [
              /* @__PURE__ */ jsx70(FormattedMessage14, {
                id: "style.menu.dash"
              }),
              /* @__PURE__ */ jsx70(StyledGroup, {
                dir: "ltr",
                value: displayedStyle.dash,
                onValueChange: handleDashChange,
                children: Object.values(DashStyle).map((style) => /* @__PURE__ */ jsx70(DMRadioItem, {
                  isActive: style === displayedStyle.dash,
                  value: style,
                  onSelect: preventEvent,
                  bp: breakpoints,
                  id: `TD-Styles-Dash-${style}`,
                  "aria-label": intl.formatMessage({ id: style }),
                  children: DASH_ICONS[style]
                }, style))
              })
            ]
          }),
          /* @__PURE__ */ jsxs46(StyledRow, {
            id: "TD-Styles-Size-Container",
            children: [
              /* @__PURE__ */ jsx70(FormattedMessage14, {
                id: "style.menu.size"
              }),
              /* @__PURE__ */ jsx70(StyledGroup, {
                dir: "ltr",
                value: displayedStyle.size,
                onValueChange: handleSizeChange,
                children: Object.values(SizeStyle).map((sizeStyle) => /* @__PURE__ */ jsx70(DMRadioItem, {
                  isActive: sizeStyle === displayedStyle.size,
                  value: sizeStyle,
                  onSelect: preventEvent,
                  bp: breakpoints,
                  id: `TD-Styles-Dash-${sizeStyle}`,
                  "aria-label": intl.formatMessage({ id: sizeStyle }),
                  children: SIZE_ICONS[sizeStyle]
                }, sizeStyle))
              })
            ]
          }),
          (options2 === "text" || options2 === "label") && /* @__PURE__ */ jsxs46(Fragment16, {
            children: [
              /* @__PURE__ */ jsx70(Divider, {}),
              /* @__PURE__ */ jsxs46(StyledRow, {
                id: "TD-Styles-Font-Container",
                children: [
                  /* @__PURE__ */ jsx70(FormattedMessage14, {
                    id: "style.menu.font"
                  }),
                  /* @__PURE__ */ jsx70(StyledGroup, {
                    dir: "ltr",
                    value: displayedStyle.font,
                    onValueChange: handleFontChange,
                    children: Object.values(FontStyle).map((fontStyle) => /* @__PURE__ */ jsx70(DMRadioItem, {
                      isActive: fontStyle === displayedStyle.font,
                      value: fontStyle,
                      onSelect: preventEvent,
                      bp: breakpoints,
                      id: `TD-Styles-Font-${fontStyle}`,
                      children: /* @__PURE__ */ jsx70(FontIcon, {
                        fontStyle,
                        children: "Aa"
                      })
                    }, fontStyle))
                  })
                ]
              }),
              options2 === "text" && /* @__PURE__ */ jsxs46(StyledRow, {
                id: "TD-Styles-Align-Container",
                children: [
                  /* @__PURE__ */ jsx70(FormattedMessage14, {
                    id: "style.menu.align"
                  }),
                  /* @__PURE__ */ jsx70(StyledGroup, {
                    dir: "ltr",
                    value: displayedStyle.textAlign,
                    onValueChange: handleTextAlignChange,
                    children: Object.values(AlignStyle).map((style) => /* @__PURE__ */ jsx70(DMRadioItem, {
                      isActive: style === displayedStyle.textAlign,
                      value: style,
                      onSelect: preventEvent,
                      bp: breakpoints,
                      id: `TD-Styles-Align-${style}`,
                      children: ALIGN_ICONS[style]
                    }, style))
                  })
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsx70(Divider, {}),
          /* @__PURE__ */ jsx70(DMCheckboxItem, {
            variant: "styleMenu",
            checked: keepOpen,
            onCheckedChange: handleToggleKeepOpen,
            id: "TD-Styles-Keep-Open",
            children: /* @__PURE__ */ jsx70(FormattedMessage14, {
              id: "style.menu.keep.open"
            })
          })
        ]
      })
    ]
  });
});
var ColorGrid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(4, auto)",
  gap: 0
});
var StyledRow = styled("div", {
  position: "relative",
  width: "100%",
  background: "none",
  border: "none",
  cursor: "pointer",
  minHeight: "32px",
  outline: "none",
  color: "$text",
  fontFamily: "$ui",
  fontWeight: 400,
  fontSize: "$1",
  padding: "$2 0 $2 $3",
  borderRadius: 4,
  userSelect: "none",
  WebkitUserSelect: "none",
  margin: 0,
  display: "flex",
  gap: "$3",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  variants: {
    variant: {
      tall: {
        alignItems: "flex-start",
        padding: "0 0 0 $3",
        "& > span": {
          paddingTop: "$4"
        }
      }
    }
  }
});
var StyledGroup = styled(DropdownMenu8.DropdownMenuRadioGroup, {
  display: "flex",
  flexDirection: "row",
  gap: "$1"
});
var OverlapIcons = styled("div", {
  display: "grid",
  "& > *": {
    gridColumn: 1,
    gridRow: 1
  }
});
var FontIcon = styled("div", {
  width: 32,
  height: 32,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "$3",
  variants: {
    fontStyle: {
      ["script" /* Script */]: {
        fontFamily: "Caveat Brush"
      },
      ["sans" /* Sans */]: {
        fontFamily: "Recursive"
      },
      ["serif" /* Serif */]: {
        fontFamily: "Georgia"
      },
      ["mono" /* Mono */]: {
        fontFamily: "Recursive Mono"
      }
    }
  }
});

// src/components/TopPanel/ZoomMenu/ZoomMenu.tsx
import * as DropdownMenu9 from "@radix-ui/react-dropdown-menu";
import { FormattedMessage as FormattedMessage15 } from "react-intl";
import { jsx as jsx71, jsxs as jsxs47 } from "react/jsx-runtime";
var zoomSelector = (s) => s.document.pageStates[s.appState.currentPageId].camera.zoom;
var ZoomMenu = function ZoomMenu2() {
  const app = useTldrawApp();
  const zoom = app.useStore(zoomSelector);
  return /* @__PURE__ */ jsxs47(DropdownMenu9.Root, {
    dir: "ltr",
    children: [
      /* @__PURE__ */ jsx71(DropdownMenu9.Trigger, {
        dir: "ltr",
        asChild: true,
        id: "TD-Zoom",
        children: /* @__PURE__ */ jsxs47(FixedWidthToolButton, {
          onDoubleClick: app.resetZoom,
          variant: "text",
          children: [
            Math.round(zoom * 100),
            "%"
          ]
        })
      }),
      /* @__PURE__ */ jsxs47(DMContent, {
        align: "end",
        children: [
          /* @__PURE__ */ jsx71(DMItem, {
            onSelect: preventEvent,
            onClick: app.zoomIn,
            kbd: "#+",
            id: "TD-Zoom-Zoom_In",
            children: /* @__PURE__ */ jsx71(FormattedMessage15, {
              id: "zoom.in"
            })
          }),
          /* @__PURE__ */ jsx71(DMItem, {
            onSelect: preventEvent,
            onClick: app.zoomOut,
            kbd: "#\u2212",
            id: "TD-Zoom-Zoom_Out",
            children: /* @__PURE__ */ jsx71(FormattedMessage15, {
              id: "zoom.out"
            })
          }),
          /* @__PURE__ */ jsxs47(DMItem, {
            onSelect: preventEvent,
            onClick: app.resetZoom,
            kbd: "\u21E70",
            id: "TD-Zoom-Zoom_To_100%",
            children: [
              /* @__PURE__ */ jsx71(FormattedMessage15, {
                id: "zoom.to"
              }),
              " 100%"
            ]
          }),
          /* @__PURE__ */ jsx71(DMItem, {
            onSelect: preventEvent,
            onClick: app.zoomToFit,
            kbd: "\u21E71",
            id: "TD-Zoom-To_Fit",
            children: /* @__PURE__ */ jsx71(FormattedMessage15, {
              id: "zoom.to.fit"
            })
          }),
          /* @__PURE__ */ jsx71(DMItem, {
            onSelect: preventEvent,
            onClick: app.zoomToSelection,
            kbd: "\u21E72",
            id: "TD-Zoom-To_Selection",
            children: /* @__PURE__ */ jsx71(FormattedMessage15, {
              id: "zoom.to.selection"
            })
          })
        ]
      })
    ]
  });
};
var FixedWidthToolButton = styled(ToolButton, {
  minWidth: 56
});

// src/components/TopPanel/TopPanel.tsx
import { Fragment as Fragment17, jsx as jsx72, jsxs as jsxs48 } from "react/jsx-runtime";
function _TopPanel({
  readOnly,
  showPages,
  showMenu,
  showStyles,
  showZoom,
  showMultiplayerMenu
}) {
  const app = useTldrawApp();
  const intl = useIntl14();
  return /* @__PURE__ */ jsxs48(StyledTopPanel, {
    children: [
      (showMenu || showPages) && /* @__PURE__ */ jsxs48(Panel, {
        side: "left",
        id: "TD-MenuPanel",
        children: [
          showMenu && /* @__PURE__ */ jsx72(Menu, {
            readOnly
          }),
          showMultiplayerMenu && /* @__PURE__ */ jsx72(MultiplayerMenu, {}),
          showPages && /* @__PURE__ */ jsx72(PageMenu, {})
        ]
      }),
      /* @__PURE__ */ jsx72(StyledSpacer, {}),
      (showStyles || showZoom) && /* @__PURE__ */ jsxs48(Panel, {
        side: "right",
        children: [
          app.readOnly ? /* @__PURE__ */ jsx72(ReadOnlyLabel, {
            children: "Read Only"
          }) : /* @__PURE__ */ jsxs48(Fragment17, {
            children: [
              /* @__PURE__ */ jsx72(ToolButtonWithTooltip, {
                kbd: "#Z",
                label: intl.formatMessage({ id: "undo" }),
                onClick: app.undo,
                id: "TD-TopPanel-Undo",
                "aria-label": intl.formatMessage({ id: "undo" }),
                children: /* @__PURE__ */ jsx72(UndoIcon, {})
              }),
              /* @__PURE__ */ jsx72(ToolButtonWithTooltip, {
                kbd: "#\u21E7Z",
                label: intl.formatMessage({ id: "redo" }),
                onClick: app.redo,
                id: "TD-TopPanel-Redo",
                "aria-label": intl.formatMessage({ id: "redo" }),
                children: /* @__PURE__ */ jsx72(UndoIcon, {
                  flipHorizontal: true
                })
              })
            ]
          }),
          showZoom && /* @__PURE__ */ jsx72(ZoomMenu, {}),
          showStyles && !readOnly && /* @__PURE__ */ jsx72(StyleMenu, {})
        ]
      })
    ]
  });
}
var StyledTopPanel = styled("div", {
  width: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  display: "flex",
  flexDirection: "row",
  pointerEvents: "none",
  "& > *": {
    pointerEvents: "all"
  }
});
var StyledSpacer = styled("div", {
  flexGrow: 2,
  pointerEvents: "none"
});
var ReadOnlyLabel = styled("div", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "$ui",
  fontSize: "$1",
  paddingLeft: "$4",
  paddingRight: "$1",
  userSelect: "none",
  WebkitUserSelect: "none"
});
var TopPanel = React45.memo(_TopPanel);

// src/hooks/useCursor.ts
import React46 from "react";
function useCursor(ref) {
  React46.useEffect(() => {
    let isPointing = false;
    let isSpacePanning = false;
    const elm = ref.current;
    if (!elm)
      return;
    const onKeyDown = (e) => {
      if (e.key === " " && !isSpacePanning) {
        isSpacePanning = true;
        if (isPointing) {
          elm.setAttribute("style", "cursor: grabbing !important");
        } else {
          elm.setAttribute("style", "cursor: grab !important");
        }
      }
    };
    const onKeyUp = (e) => {
      if (e.key === " ") {
        isSpacePanning = false;
        elm.setAttribute("style", "cursor: initial");
      }
    };
    const onPointerDown = (e) => {
      isPointing = true;
      if (e.button === 1) {
        elm.setAttribute("style", "cursor: grabbing !important");
      }
      if (e.button === 0) {
        if (isSpacePanning) {
          elm.setAttribute("style", "cursor: grabbing !important");
        }
      }
    };
    const onPointerUp = () => {
      isPointing = false;
      if (isSpacePanning) {
        elm.setAttribute("style", "cursor: grab !important");
      } else {
        elm.setAttribute("style", "cursor: initial");
      }
    };
    elm.addEventListener("keydown", onKeyDown);
    elm.addEventListener("keyup", onKeyUp);
    elm.addEventListener("pointerdown", onPointerDown);
    elm.addEventListener("pointerup", onPointerUp);
    return () => {
      elm.removeEventListener("keydown", onKeyDown);
      elm.removeEventListener("keyup", onKeyUp);
      elm.removeEventListener("pointerdown", onPointerDown);
      elm.removeEventListener("pointerup", onPointerUp);
    };
  }, [ref.current]);
}

// src/state/TldrawApp.ts
import {
  Utils as Utils55
} from "@tldraw/core";
import { Vec as Vec44 } from "@tldraw/vec";

// src/state/IdbClipboard.ts
import { del, get, set } from "idb-keyval";
var ID = "tldraw_clipboard";
function getClipboard() {
  return __async(this, null, function* () {
    return get(ID);
  });
}
function setClipboard(item) {
  return __async(this, null, function* () {
    return set(ID, item);
  });
}

// src/state/StateManager/StateManager.ts
import { Utils as Utils27 } from "@tldraw/core";
import * as idb from "idb-keyval";
import create from "zustand";
import createVanilla from "zustand/vanilla";
var StateManager = class {
  constructor(initialState, id, version, update) {
    __publicField(this, "_idbId");
    __publicField(this, "initialState");
    __publicField(this, "store");
    __publicField(this, "pointer", -1);
    __publicField(this, "_state");
    __publicField(this, "_status", "loading");
    __publicField(this, "stack", []);
    __publicField(this, "_snapshot");
    __publicField(this, "useStore");
    __publicField(this, "ready");
    __publicField(this, "isPaused", false);
    __publicField(this, "persist", (patch, id) => {
      if (this._status !== "ready")
        return;
      if (this.onPersist) {
        this.onPersist(this._state, patch, id);
      }
      if (this._idbId) {
        return idb.set(this._idbId, this._state).catch((e) => console.error(e));
      }
    });
    __publicField(this, "applyPatch", (patch, id) => {
      const prev = this._state;
      const next = Utils27.deepMerge(this._state, patch);
      const final = this.cleanup(next, prev, patch, id);
      if (this.onStateWillChange) {
        this.onStateWillChange(final, id);
      }
      this._state = final;
      this.store.setState(this._state, true);
      if (this.onStateDidChange) {
        this.onStateDidChange(this._state, id);
      }
      return this;
    });
    __publicField(this, "migrate", (next) => {
      return next;
    });
    __publicField(this, "cleanup", (nextState, _prevState, _patch, _id) => nextState);
    __publicField(this, "onStateWillChange");
    __publicField(this, "onStateDidChange");
    __publicField(this, "patchState", (patch, id) => {
      this.applyPatch(patch, id);
      if (this.onPatch) {
        this.onPatch(this._state, patch, id);
      }
      return this;
    });
    __publicField(this, "replaceState", (state, id) => {
      const final = this.cleanup(state, this._state, state, id);
      if (this.onStateWillChange) {
        this.onStateWillChange(final, "replace");
      }
      this._state = final;
      this.store.setState(this._state, true);
      if (this.onStateDidChange) {
        this.onStateDidChange(this._state, "replace");
      }
      return this;
    });
    __publicField(this, "setState", (command, id = command.id) => {
      if (this.pointer < this.stack.length - 1) {
        this.stack = this.stack.slice(0, this.pointer + 1);
      }
      this.stack.push(__spreadProps(__spreadValues({}, command), { id }));
      this.pointer = this.stack.length - 1;
      this.applyPatch(command.after, id);
      if (this.onCommand)
        this.onCommand(this._state, command, id);
      this.persist(command.after, id);
      return this;
    });
    __publicField(this, "onReady");
    __publicField(this, "onPatch");
    __publicField(this, "onCommand");
    __publicField(this, "onPersist");
    __publicField(this, "onReplace");
    __publicField(this, "onReset");
    __publicField(this, "onResetHistory");
    __publicField(this, "onUndo");
    __publicField(this, "onRedo");
    __publicField(this, "reset", () => {
      if (this.onStateWillChange) {
        this.onStateWillChange(this.initialState, "reset");
      }
      this._state = this.initialState;
      this.store.setState(this._state, true);
      this.resetHistory();
      this.persist({}, "reset");
      if (this.onStateDidChange) {
        this.onStateDidChange(this._state, "reset");
      }
      if (this.onReset) {
        this.onReset(this._state);
      }
      return this;
    });
    __publicField(this, "replaceHistory", (history, pointer = history.length - 1) => {
      this.stack = history;
      this.pointer = pointer;
      if (this.onReplace) {
        this.onReplace(this._state);
      }
      return this;
    });
    __publicField(this, "resetHistory", () => {
      this.stack = [];
      this.pointer = -1;
      if (this.onResetHistory) {
        this.onResetHistory(this._state);
      }
      return this;
    });
    __publicField(this, "undo", () => {
      if (!this.isPaused) {
        if (!this.canUndo)
          return this;
        const command = this.stack[this.pointer];
        this.pointer--;
        this.applyPatch(command.before, `undo`);
        this.persist(command.before, "undo");
      }
      if (this.onUndo)
        this.onUndo(this._state);
      return this;
    });
    __publicField(this, "redo", () => {
      if (!this.isPaused) {
        if (!this.canRedo)
          return this;
        this.pointer++;
        const command = this.stack[this.pointer];
        this.applyPatch(command.after, "redo");
        this.persist(command.after, "undo");
      }
      if (this.onRedo)
        this.onRedo(this._state);
      return this;
    });
    __publicField(this, "setSnapshot", () => {
      this._snapshot = __spreadValues({}, this._state);
      return this;
    });
    __publicField(this, "forceUpdate", () => {
      this.store.setState(this._state, true);
    });
    this._idbId = id;
    this._state = deepCopy(initialState);
    this._snapshot = deepCopy(initialState);
    this.initialState = deepCopy(initialState);
    this.store = createVanilla(() => this._state);
    this.useStore = create(this.store);
    this.ready = new Promise((resolve) => {
      let message = "none";
      if (this._idbId) {
        message = "restored";
        idb.get(this._idbId).then((saved) => __async(this, null, function* () {
          if (saved) {
            let next = saved;
            if (version) {
              const savedVersion = yield idb.get(id + "_version");
              if (savedVersion && savedVersion < version) {
                next = update ? update(saved, initialState, savedVersion) : initialState;
                message = "migrated";
              }
            }
            yield idb.set(id + "_version", version || -1);
            const prevEmpty = this._state.appState.isEmptyCanvas;
            next = this.migrate(next);
            this._state = deepCopy(next);
            this._snapshot = deepCopy(next);
            this._state.appState.isEmptyCanvas = prevEmpty;
            this.store.setState(this._state, true);
          } else {
            yield idb.set(id + "_version", version || -1);
          }
          this._status = "ready";
          resolve(message);
        })).catch((e) => console.error(e));
      } else {
        this._status = "ready";
        resolve(message);
      }
    }).then((message) => {
      if (this.onReady)
        this.onReady(message);
      return message;
    });
  }
  pause() {
    this.isPaused = true;
  }
  resume() {
    this.isPaused = false;
  }
  get canUndo() {
    return this.pointer > -1;
  }
  get canRedo() {
    return this.pointer < this.stack.length - 1;
  }
  get state() {
    return this._state;
  }
  get status() {
    return this._status;
  }
  get snapshot() {
    return this._snapshot;
  }
};

// src/state/commands/alignShapes/alignShapes.ts
import { Utils as Utils28 } from "@tldraw/core";
import { Vec as Vec19 } from "@tldraw/vec";
function alignShapes(app, ids, type) {
  const { currentPageId } = app;
  const initialShapes = ids.map((id) => app.getShape(id));
  const boundsForShapes = initialShapes.map((shape) => {
    return {
      id: shape.id,
      point: [...shape.point],
      bounds: TLDR.getBounds(shape)
    };
  });
  const commonBounds = Utils28.getCommonBounds(boundsForShapes.map(({ bounds }) => bounds));
  const midX = commonBounds.minX + commonBounds.width / 2;
  const midY = commonBounds.minY + commonBounds.height / 2;
  const deltaMap = Object.fromEntries(
    boundsForShapes.map(({ id, point, bounds }) => {
      return [
        id,
        {
          prev: point,
          next: {
            ["top" /* Top */]: [point[0], commonBounds.minY],
            ["centerVertical" /* CenterVertical */]: [point[0], midY - bounds.height / 2],
            ["bottom" /* Bottom */]: [point[0], commonBounds.maxY - bounds.height],
            ["left" /* Left */]: [commonBounds.minX, point[1]],
            ["centerHorizontal" /* CenterHorizontal */]: [midX - bounds.width / 2, point[1]],
            ["right" /* Right */]: [commonBounds.maxX - bounds.width, point[1]]
          }[type]
        }
      ];
    })
  );
  const { before, after } = TLDR.mutateShapes(
    app.state,
    ids,
    (shape) => {
      if (!deltaMap[shape.id])
        return shape;
      return { point: deltaMap[shape.id].next };
    },
    currentPageId,
    false
  );
  initialShapes.forEach((shape) => {
    if (shape.type === "group" /* Group */) {
      const delta = Vec19.sub(after[shape.id].point, before[shape.id].point);
      shape.children.forEach((id) => {
        const child = app.getShape(id);
        before[child.id] = { point: child.point };
        after[child.id] = { point: Vec19.add(child.point, delta) };
      });
      delete before[shape.id];
      delete after[shape.id];
    }
  });
  return {
    id: "align",
    before: {
      document: {
        pages: {
          [currentPageId]: {
            shapes: before
          }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [currentPageId]: {
            shapes: after
          }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    }
  };
}

// src/state/commands/changePage/changePage.ts
function changePage(app, pageId) {
  return {
    id: "change_page",
    before: {
      appState: {
        currentPageId: app.currentPageId
      }
    },
    after: {
      appState: {
        currentPageId: pageId
      }
    }
  };
}

// src/state/commands/createPage/createPage.ts
import { Utils as Utils29 } from "@tldraw/core";

// src/state/commands/shared/getIncrementedName.ts
function getIncrementedName(name, others) {
  var _a;
  let result = name;
  const set3 = new Set(others);
  while (set3.has(result)) {
    result = ((_a = /^.*(\d+)$/.exec(result)) == null ? void 0 : _a[1]) ? result.replace(/(\d+)(?=\D?)$/, (m) => (+m + 1).toString()) : `${result} 1`;
  }
  return result;
}

// src/state/commands/shared/removeShapesFromPage.ts
function removeShapesFromPage(data, ids, pageId) {
  const before = {
    shapes: {},
    bindings: {}
  };
  const after = {
    shapes: {},
    bindings: {}
  };
  const parentsToUpdate = [];
  const deletedIds = /* @__PURE__ */ new Set();
  const assetsToRemove = /* @__PURE__ */ new Set();
  ids.filter((id) => !TLDR.getShape(data, id, pageId).isLocked).forEach((id) => {
    deletedIds.add(id);
    const shape = TLDR.getShape(data, id, pageId);
    before.shapes[id] = shape;
    after.shapes[id] = void 0;
    if (shape.children !== void 0) {
      shape.children.forEach((childId) => {
        deletedIds.add(childId);
        const child = TLDR.getShape(data, childId, pageId);
        before.shapes[childId] = child;
        after.shapes[childId] = void 0;
      });
    }
    if (shape.parentId !== pageId) {
      parentsToUpdate.push(TLDR.getShape(data, shape.parentId, pageId));
    }
    if (shape.assetId) {
      assetsToRemove.add(shape.assetId);
    }
  });
  parentsToUpdate.forEach((parent) => {
    var _a;
    if (ids.includes(parent.id))
      return;
    deletedIds.add(parent.id);
    before.shapes[parent.id] = { children: parent.children };
    after.shapes[parent.id] = { children: parent.children.filter((id) => !ids.includes(id)) };
    if (((_a = after.shapes[parent.id]) == null ? void 0 : _a.children.length) === 0) {
      after.shapes[parent.id] = void 0;
      before.shapes[parent.id] = TLDR.getShape(data, parent.id, pageId);
    }
  });
  const page = TLDR.getPage(data, pageId);
  Object.values(page.bindings).filter((binding) => deletedIds.has(binding.fromId) || deletedIds.has(binding.toId)).forEach((binding) => {
    for (const id of [binding.toId, binding.fromId]) {
      if (after.shapes[id] === void 0) {
        before.bindings[binding.id] = binding;
        after.bindings[binding.id] = void 0;
        const shape = page.shapes[id];
        if (shape && shape.handles) {
          Object.values(shape.handles).filter((handle) => handle.bindingId === binding.id).forEach((handle) => {
            var _a, _b, _c, _d, _e, _f;
            before.shapes[id] = __spreadProps(__spreadValues({}, before.shapes[id]), {
              handles: __spreadProps(__spreadValues({}, (_a = before.shapes[id]) == null ? void 0 : _a.handles), {
                [handle.id]: __spreadProps(__spreadValues({}, (_c = (_b = before.shapes[id]) == null ? void 0 : _b.handles) == null ? void 0 : _c[handle.id]), {
                  bindingId: binding.id
                })
              })
            });
            if (!deletedIds.has(id)) {
              after.shapes[id] = __spreadProps(__spreadValues({}, after.shapes[id]), {
                handles: __spreadProps(__spreadValues({}, (_d = after.shapes[id]) == null ? void 0 : _d.handles), {
                  [handle.id]: __spreadProps(__spreadValues({}, (_f = (_e = after.shapes[id]) == null ? void 0 : _e.handles) == null ? void 0 : _f[handle.id]), {
                    bindingId: void 0
                  })
                })
              });
            }
          });
        }
      }
    }
  });
  Object.values(data.document.pages).flatMap((page2) => Object.values(page2.shapes)).forEach((shape) => {
    if ("assetId" in shape && shape.assetId && !deletedIds.has(shape.id)) {
      assetsToRemove.delete(shape.assetId);
    }
  });
  return { before, after, assetsToRemove: Array.from(assetsToRemove) };
}

// src/state/commands/createPage/createPage.ts
function createPage(app, center, pageId = Utils29.uniqueId(), pageName = "Page") {
  const { currentPageId } = app;
  const pages = Object.values(app.state.document.pages).sort(
    (a, b) => {
      var _a, _b;
      return ((_a = a.childIndex) != null ? _a : 0) - ((_b = b.childIndex) != null ? _b : 0);
    }
  );
  const topPage = pages[pages.length - 1];
  const nextChildIndex = (topPage == null ? void 0 : topPage.childIndex) ? (topPage == null ? void 0 : topPage.childIndex) + 1 : 1;
  const page = {
    id: pageId,
    name: getIncrementedName(
      pageName,
      pages.map((p) => {
        var _a;
        return (_a = p.name) != null ? _a : "";
      })
    ),
    childIndex: nextChildIndex,
    shapes: {},
    bindings: {}
  };
  const pageState = {
    id: pageId,
    selectedIds: [],
    camera: { point: center, zoom: 1 },
    editingId: void 0,
    bindingId: void 0,
    hoveredId: void 0,
    pointedId: void 0
  };
  return {
    id: "create_page",
    before: {
      appState: {
        currentPageId
      },
      document: {
        pages: {
          [pageId]: void 0
        },
        pageStates: {
          [pageId]: void 0
        }
      }
    },
    after: {
      appState: {
        currentPageId: page.id
      },
      document: {
        pages: {
          [pageId]: page
        },
        pageStates: {
          [pageId]: pageState
        }
      }
    }
  };
}

// src/state/commands/createShapes/createShapes.ts
function createShapes(app, shapes, bindings = []) {
  const { currentPageId } = app;
  const beforeShapes = {};
  const afterShapes = {};
  shapes.forEach((shape) => {
    beforeShapes[shape.id] = void 0;
    afterShapes[shape.id] = shape;
  });
  const beforeBindings = {};
  const afterBindings = {};
  bindings.forEach((binding) => {
    beforeBindings[binding.id] = void 0;
    afterBindings[binding.id] = binding;
  });
  return {
    id: "create",
    before: {
      document: {
        pages: {
          [currentPageId]: {
            shapes: beforeShapes,
            bindings: beforeBindings
          }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: [...app.selectedIds]
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [currentPageId]: {
            shapes: afterShapes,
            bindings: afterBindings
          }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: shapes.map((shape) => shape.id)
          }
        }
      }
    }
  };
}

// src/state/commands/deletePage/deletePage.ts
function deletePage(app, pageId) {
  const {
    currentPageId,
    document: { pages, pageStates }
  } = app;
  const pagesArr = Object.values(pages).sort((a, b) => (a.childIndex || 0) - (b.childIndex || 0));
  const currentIndex = pagesArr.findIndex((page) => page.id === pageId);
  let nextCurrentPageId;
  if (pageId === currentPageId) {
    if (currentIndex === pagesArr.length - 1) {
      nextCurrentPageId = pagesArr[pagesArr.length - 2].id;
    } else {
      nextCurrentPageId = pagesArr[currentIndex + 1].id;
    }
  } else {
    nextCurrentPageId = currentPageId;
  }
  return {
    id: "delete_page",
    before: {
      appState: {
        currentPageId: pageId
      },
      document: {
        pages: {
          [pageId]: __spreadValues({}, pages[pageId])
        },
        pageStates: {
          [pageId]: __spreadValues({}, pageStates[pageId])
        }
      }
    },
    after: {
      appState: {
        currentPageId: nextCurrentPageId
      },
      document: {
        pages: {
          [pageId]: void 0
        },
        pageStates: {
          [pageId]: void 0
        }
      }
    }
  };
}

// src/state/commands/deleteShapes/deleteShapes.ts
var removeAssetsFromDocument = (assets, idsToRemove) => {
  const afterAssets = __spreadValues({}, assets);
  idsToRemove.forEach((id) => afterAssets[id] = void 0);
  return afterAssets;
};
function deleteShapes(app, ids, pageId = app.currentPageId) {
  const {
    pageState,
    selectedIds,
    document: { assets: beforeAssets }
  } = app;
  const { before, after, assetsToRemove } = removeShapesFromPage(app.state, ids, pageId);
  const afterAssets = removeAssetsFromDocument(beforeAssets, assetsToRemove);
  return {
    id: "delete",
    before: {
      document: {
        assets: beforeAssets,
        pages: {
          [pageId]: before
        },
        pageStates: {
          [pageId]: { selectedIds: [...app.selectedIds] }
        }
      }
    },
    after: {
      document: {
        assets: afterAssets,
        pages: {
          [pageId]: after
        },
        pageStates: {
          [pageId]: {
            selectedIds: selectedIds.filter((id) => !ids.includes(id)),
            hoveredId: pageState.hoveredId && ids.includes(pageState.hoveredId) ? void 0 : pageState.hoveredId
          }
        }
      }
    }
  };
}

// src/state/commands/distributeShapes/distributeShapes.ts
import { Utils as Utils30 } from "@tldraw/core";
import Vec20 from "@tldraw/vec";
function distributeShapes(app, ids, type) {
  const { currentPageId } = app;
  const initialShapes = ids.map((id) => app.getShape(id));
  const deltaMap = Object.fromEntries(getDistributions(initialShapes, type).map((d) => [d.id, d]));
  const { before, after } = TLDR.mutateShapes(
    app.state,
    ids.filter((id) => deltaMap[id] !== void 0),
    (shape) => {
      var _a;
      return { point: (_a = deltaMap[shape.id]) == null ? void 0 : _a.next };
    },
    currentPageId
  );
  initialShapes.forEach((shape) => {
    if (shape.type === "group" /* Group */) {
      const delta = Vec20.sub(after[shape.id].point, before[shape.id].point);
      shape.children.forEach((id) => {
        const child = app.getShape(id);
        before[child.id] = { point: child.point };
        after[child.id] = { point: Vec20.add(child.point, delta) };
      });
      delete before[shape.id];
      delete after[shape.id];
    }
  });
  return {
    id: "distribute",
    before: {
      document: {
        pages: {
          [currentPageId]: { shapes: before }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [currentPageId]: { shapes: after }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    }
  };
}
function getDistributions(initialShapes, type) {
  const entries = initialShapes.map((shape) => {
    const utils = TLDR.getShapeUtil(shape);
    return {
      id: shape.id,
      point: [...shape.point],
      bounds: utils.getBounds(shape),
      center: utils.getCenter(shape)
    };
  });
  const len = entries.length;
  const commonBounds = Utils30.getCommonBounds(entries.map(({ bounds }) => bounds));
  const results = [];
  switch (type) {
    case "horizontal" /* Horizontal */: {
      const span = entries.reduce((a, c) => a + c.bounds.width, 0);
      if (span > commonBounds.width) {
        const left = entries.sort((a, b) => a.bounds.minX - b.bounds.minX)[0];
        const right = entries.sort((a, b) => b.bounds.maxX - a.bounds.maxX)[0];
        const entriesToMove = entries.filter((a) => a !== left && a !== right).sort((a, b) => a.center[0] - b.center[0]);
        const step = (right.center[0] - left.center[0]) / (len - 1);
        const x = left.center[0] + step;
        entriesToMove.forEach(({ id, point, bounds }, i) => {
          results.push({
            id,
            prev: point,
            next: [x + step * i - bounds.width / 2, bounds.minY]
          });
        });
      } else {
        const entriesToMove = entries.sort((a, b) => a.center[0] - b.center[0]);
        let x = commonBounds.minX;
        const step = (commonBounds.width - span) / (len - 1);
        entriesToMove.forEach(({ id, point, bounds }) => {
          results.push({ id, prev: point, next: [x, bounds.minY] });
          x += bounds.width + step;
        });
      }
      break;
    }
    case "vertical" /* Vertical */: {
      const span = entries.reduce((a, c) => a + c.bounds.height, 0);
      if (span > commonBounds.height) {
        const top = entries.sort((a, b) => a.bounds.minY - b.bounds.minY)[0];
        const bottom = entries.sort((a, b) => b.bounds.maxY - a.bounds.maxY)[0];
        const entriesToMove = entries.filter((a) => a !== top && a !== bottom).sort((a, b) => a.center[1] - b.center[1]);
        const step = (bottom.center[1] - top.center[1]) / (len - 1);
        const y = top.center[1] + step;
        entriesToMove.forEach(({ id, point, bounds }, i) => {
          results.push({
            id,
            prev: point,
            next: [bounds.minX, y + step * i - bounds.height / 2]
          });
        });
      } else {
        const entriesToMove = entries.sort((a, b) => a.center[1] - b.center[1]);
        let y = commonBounds.minY;
        const step = (commonBounds.height - span) / (len - 1);
        entriesToMove.forEach(({ id, point, bounds }) => {
          results.push({ id, prev: point, next: [bounds.minX, y] });
          y += bounds.height + step;
        });
      }
      break;
    }
  }
  return results;
}

// src/state/commands/duplicatePage/duplicatePage.ts
import { Utils as Utils31 } from "@tldraw/core";
function duplicatePage(app, pageId) {
  const {
    currentPageId,
    pageState: { camera }
  } = app;
  const page = app.document.pages[pageId];
  const newId = Utils31.uniqueId();
  const oldToNewIds = Object.fromEntries([
    [page.id, newId],
    ...Object.keys(page.shapes).map((id) => [id, Utils31.uniqueId()]),
    ...Object.keys(page.bindings).map((id) => [id, Utils31.uniqueId()])
  ]);
  const shapes = Object.fromEntries(
    Object.entries(page.shapes).map(([id, shape]) => [
      oldToNewIds[id],
      __spreadProps(__spreadValues({}, Utils31.deepClone(shape)), {
        id: oldToNewIds[id],
        parentId: oldToNewIds[shape.parentId]
      })
    ])
  );
  const bindings = Object.fromEntries(
    Object.entries(page.bindings).map(([id, binding]) => [
      oldToNewIds[id],
      __spreadProps(__spreadValues({}, Utils31.deepClone(binding)), {
        id: oldToNewIds[binding.id],
        fromId: oldToNewIds[binding.fromId],
        toId: oldToNewIds[binding.toId]
      })
    ])
  );
  Object.values(page.bindings).forEach((binding) => {
    const fromId = oldToNewIds[binding.fromId];
    const fromHandles = shapes[fromId].handles;
    if (fromHandles) {
      Object.values(fromHandles).forEach((handle) => {
        if (handle.bindingId === binding.id) {
          handle.bindingId = oldToNewIds[binding.id];
        }
      });
    }
    const toId = oldToNewIds[binding.toId];
    const toHandles = shapes[toId].handles;
    if (toHandles) {
      Object.values(toHandles).forEach((handle) => {
        if (handle.bindingId === binding.id) {
          handle.bindingId = oldToNewIds[binding.id];
        }
      });
    }
  });
  const nextPage = __spreadProps(__spreadValues({}, page), {
    id: oldToNewIds[page.id],
    name: page.name + " Copy",
    shapes,
    bindings
  });
  return {
    id: "duplicate_page",
    before: {
      appState: {
        currentPageId
      },
      document: {
        pages: {
          [newId]: void 0
        },
        pageStates: {
          [newId]: void 0
        }
      }
    },
    after: {
      appState: {
        currentPageId: newId
      },
      document: {
        pages: {
          [newId]: nextPage
        },
        pageStates: {
          [newId]: __spreadProps(__spreadValues({}, page), {
            id: newId,
            selectedIds: [],
            camera: __spreadValues({}, camera),
            editingId: void 0,
            bindingId: void 0,
            hoveredId: void 0,
            pointedId: void 0
          })
        }
      }
    }
  };
}

// src/state/commands/duplicateShapes/duplicateShapes.ts
import { Utils as Utils32 } from "@tldraw/core";
import { Vec as Vec21 } from "@tldraw/vec";
function duplicateShapes(app, ids, point) {
  const { selectedIds, currentPageId, page, shapes } = app;
  const before = {
    shapes: {},
    bindings: {}
  };
  const after = {
    shapes: {},
    bindings: {}
  };
  const duplicateMap = {};
  const shapesToDuplicate = ids.map((id) => app.getShape(id)).filter((shape) => !ids.includes(shape.parentId));
  shapesToDuplicate.forEach((shape) => {
    const duplicatedId = Utils32.uniqueId();
    before.shapes[duplicatedId] = void 0;
    after.shapes[duplicatedId] = __spreadProps(__spreadValues({}, Utils32.deepClone(shape)), {
      id: duplicatedId,
      childIndex: TLDR.getChildIndexAbove(app.state, shape.id, currentPageId)
    });
    if (shape.children) {
      after.shapes[duplicatedId].children = [];
    }
    if (shape.parentId !== currentPageId) {
      const parent = app.getShape(shape.parentId);
      before.shapes[parent.id] = __spreadProps(__spreadValues({}, before.shapes[parent.id]), {
        children: parent.children
      });
      after.shapes[parent.id] = __spreadProps(__spreadValues({}, after.shapes[parent.id]), {
        children: [...(after.shapes[parent.id] || parent).children, duplicatedId]
      });
    }
    duplicateMap[shape.id] = duplicatedId;
  });
  shapesToDuplicate.forEach((shape) => {
    if (shape.children) {
      shape.children.forEach((childId) => {
        var _a, _b;
        const child = app.getShape(childId);
        const duplicatedId = Utils32.uniqueId();
        const duplicatedParentId = duplicateMap[shape.id];
        before.shapes[duplicatedId] = void 0;
        after.shapes[duplicatedId] = __spreadProps(__spreadValues({}, Utils32.deepClone(child)), {
          id: duplicatedId,
          parentId: duplicatedParentId,
          childIndex: TLDR.getChildIndexAbove(app.state, child.id, currentPageId)
        });
        duplicateMap[childId] = duplicatedId;
        (_b = (_a = after.shapes[duplicateMap[shape.id]]) == null ? void 0 : _a.children) == null ? void 0 : _b.push(duplicatedId);
      });
    }
  });
  const dupedShapeIds = new Set(Object.keys(duplicateMap));
  Object.values(page.bindings).filter((binding) => dupedShapeIds.has(binding.fromId) || dupedShapeIds.has(binding.toId)).forEach((binding) => {
    if (dupedShapeIds.has(binding.fromId)) {
      if (dupedShapeIds.has(binding.toId)) {
        const duplicatedBindingId = Utils32.uniqueId();
        const duplicatedBinding = __spreadProps(__spreadValues({}, Utils32.deepClone(binding)), {
          id: duplicatedBindingId,
          fromId: duplicateMap[binding.fromId],
          toId: duplicateMap[binding.toId]
        });
        before.bindings[duplicatedBindingId] = void 0;
        after.bindings[duplicatedBindingId] = duplicatedBinding;
        const boundShape = after.shapes[duplicatedBinding.fromId];
        Object.values(boundShape.handles).forEach((handle) => {
          if (handle.bindingId === binding.id) {
            handle.bindingId = duplicatedBindingId;
          }
        });
      } else {
        const boundShape = after.shapes[duplicateMap[binding.fromId]];
        Object.values(boundShape.handles).forEach((handle) => {
          if (handle.bindingId === binding.id) {
            handle.bindingId = void 0;
          }
        });
      }
    }
  });
  const shapesToMove = Object.values(after.shapes);
  if (point) {
    const commonBounds = Utils32.getCommonBounds(shapesToMove.map((shape) => TLDR.getBounds(shape)));
    const center = Utils32.getBoundsCenter(commonBounds);
    shapesToMove.forEach((shape) => {
      if (!shape.point)
        return;
      shape.point = Vec21.sub(point, Vec21.sub(center, shape.point));
    });
  } else {
    const offset = [16, 16];
    shapesToMove.forEach((shape) => {
      if (!shape.point)
        return;
      shape.point = Vec21.add(shape.point, offset);
    });
  }
  shapesToMove.forEach((shape) => {
    if (shape.isLocked) {
      shape.isLocked = false;
    }
  });
  return {
    id: "duplicate",
    before: {
      document: {
        pages: {
          [currentPageId]: before
        },
        pageStates: {
          [currentPageId]: { selectedIds }
        }
      }
    },
    after: {
      document: {
        pages: {
          [currentPageId]: after
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: Array.from(dupedShapeIds.values()).map((id) => duplicateMap[id])
          }
        }
      }
    }
  };
}

// src/state/commands/flipShapes/flipShapes.ts
import { TLBoundsCorner, Utils as Utils33 } from "@tldraw/core";
function flipShapes(app, ids, type) {
  const {
    selectedIds,
    currentPageId,
    page: { shapes }
  } = app;
  const boundsForShapes = ids.map((id) => TLDR.getBounds(shapes[id]));
  const isSinglySelectedGroup = ids.length === 1 && shapes[ids[0]].type === "group";
  const commonBounds = Utils33.getCommonBounds(boundsForShapes);
  const { before, after } = TLDR.mutateShapes(
    app.state,
    ids,
    (shape) => {
      const shapeBounds = TLDR.getBounds(shape);
      const isChildOfGroup = shape.parentId !== currentPageId;
      switch (type) {
        case "horizontal" /* Horizontal */: {
          if (isChildOfGroup && !isSinglySelectedGroup) {
            const groupBounds = TLDR.getBounds(shapes[shape.parentId]);
            const newGroupBounds = Utils33.getRelativeTransformedBoundingBox(
              commonBounds,
              commonBounds,
              groupBounds,
              true,
              false
            );
            const dx = newGroupBounds.minX - groupBounds.minX;
            return TLDR.getShapeUtil(shape).transform(
              shape,
              __spreadProps(__spreadValues({}, shapeBounds), { minX: shapeBounds.minX + dx, maxX: shapeBounds.maxX + dx }),
              {
                type: TLBoundsCorner.TopLeft,
                scaleX: 1,
                scaleY: 1,
                initialShape: shape,
                transformOrigin: [0.5, 0.5]
              }
            );
          }
          const newShapeBounds = Utils33.getRelativeTransformedBoundingBox(
            commonBounds,
            commonBounds,
            shapeBounds,
            true,
            false
          );
          return TLDR.getShapeUtil(shape).transform(shape, newShapeBounds, {
            type: TLBoundsCorner.TopLeft,
            scaleX: -1,
            scaleY: 1,
            initialShape: shape,
            transformOrigin: [0.5, 0.5]
          });
        }
        case "vertical" /* Vertical */: {
          if (isChildOfGroup && !isSinglySelectedGroup) {
            const groupBounds = TLDR.getBounds(shapes[shape.parentId]);
            const newGroupBounds = Utils33.getRelativeTransformedBoundingBox(
              commonBounds,
              commonBounds,
              groupBounds,
              false,
              true
            );
            const dy = newGroupBounds.minY - groupBounds.minY;
            return TLDR.getShapeUtil(shape).transform(
              shape,
              __spreadProps(__spreadValues({}, shapeBounds), { minY: shapeBounds.minY + dy, maxY: shapeBounds.maxY + dy }),
              {
                type: TLBoundsCorner.TopLeft,
                scaleX: 1,
                scaleY: 1,
                initialShape: shape,
                transformOrigin: [0.5, 0.5]
              }
            );
          }
          const newShapeBounds = Utils33.getRelativeTransformedBoundingBox(
            commonBounds,
            commonBounds,
            shapeBounds,
            false,
            true
          );
          return TLDR.getShapeUtil(shape).transform(shape, newShapeBounds, {
            type: TLBoundsCorner.TopLeft,
            scaleX: 1,
            scaleY: -1,
            initialShape: shape,
            transformOrigin: [0.5, 0.5]
          });
        }
      }
    },
    currentPageId,
    true
  );
  return {
    id: "flip",
    before: {
      document: {
        pages: {
          [currentPageId]: { shapes: before }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [currentPageId]: { shapes: after }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    }
  };
}

// src/state/commands/groupShapes/groupShapes.ts
import { Utils as Utils34 } from "@tldraw/core";
function groupShapes(app, ids, groupId, pageId) {
  var _a, _b;
  if (ids.length < 2)
    return;
  const beforeShapes = {};
  const afterShapes = {};
  const beforeBindings = {};
  const afterBindings = {};
  const idsToGroup = [...ids];
  const shapesToGroup = [];
  const deletedGroupIds = [];
  const otherEffectedGroups = [];
  for (const id of ids) {
    const shape = app.getShape(id);
    if (shape.isLocked)
      continue;
    if (shape.children === void 0) {
      shapesToGroup.push(shape);
    } else {
      const childIds = shape.children.filter((id2) => !app.getShape(id2).isLocked);
      otherEffectedGroups.push(shape);
      idsToGroup.push(...childIds);
      shapesToGroup.push(...childIds.map((id2) => app.getShape(id2)).filter(Boolean));
    }
  }
  if (shapesToGroup.every((shape) => shape.parentId === shapesToGroup[0].parentId)) {
    if (shapesToGroup[0].parentId !== pageId) {
      const commonParent = app.getShape(shapesToGroup[0].parentId);
      if (((_a = commonParent.children) == null ? void 0 : _a.length) === idsToGroup.length) {
        return;
      }
    }
  }
  const flattenedShapes = TLDR.flattenPage(app.state, pageId);
  const shapeIndexMap = Object.fromEntries(
    shapesToGroup.map((shape) => [shape.id, flattenedShapes.indexOf(shape)])
  );
  const sortedShapes = shapesToGroup.sort((a, b) => shapeIndexMap[a.id] - shapeIndexMap[b.id]);
  const groupParentId = pageId;
  const groupChildIndex = (sortedShapes.filter((shape) => shape.parentId === pageId)[0] || sortedShapes[0]).childIndex;
  const groupBounds = Utils34.getCommonBounds(shapesToGroup.map((shape) => TLDR.getBounds(shape)));
  beforeShapes[groupId] = void 0;
  afterShapes[groupId] = TLDR.getShapeUtil("group" /* Group */).create({
    id: groupId,
    childIndex: groupChildIndex,
    parentId: groupParentId,
    point: [groupBounds.minX, groupBounds.minY],
    size: [groupBounds.width, groupBounds.height],
    children: sortedShapes.map((shape) => shape.id)
  });
  sortedShapes.forEach((shape, index) => {
    if (shape.parentId !== pageId) {
      const parentShape = app.getShape(shape.parentId);
      otherEffectedGroups.push(parentShape);
    }
    beforeShapes[shape.id] = __spreadProps(__spreadValues({}, beforeShapes[shape.id]), {
      parentId: shape.parentId,
      childIndex: shape.childIndex
    });
    afterShapes[shape.id] = __spreadProps(__spreadValues({}, afterShapes[shape.id]), {
      parentId: groupId,
      childIndex: index + 1
    });
  });
  while (otherEffectedGroups.length > 0) {
    const shape = otherEffectedGroups.pop();
    if (!shape)
      break;
    const nextChildren = (((_b = beforeShapes[shape.id]) == null ? void 0 : _b.children) || shape.children).filter(
      (childId) => childId && !(idsToGroup.includes(childId) || deletedGroupIds.includes(childId))
    );
    if (nextChildren.length === 0) {
      beforeShapes[shape.id] = shape;
      afterShapes[shape.id] = void 0;
      if (shape.parentId !== pageId) {
        deletedGroupIds.push(shape.id);
        otherEffectedGroups.push(app.getShape(shape.parentId));
      }
    } else {
      beforeShapes[shape.id] = __spreadProps(__spreadValues({}, beforeShapes[shape.id]), {
        children: shape.children
      });
      afterShapes[shape.id] = __spreadProps(__spreadValues({}, afterShapes[shape.id]), {
        children: nextChildren
      });
    }
  }
  const { bindings } = app;
  const deletedGroupIdsSet = new Set(deletedGroupIds);
  bindings.forEach((binding) => {
    for (const id of [binding.toId, binding.fromId]) {
      if (deletedGroupIdsSet.has(id)) {
        beforeBindings[binding.id] = binding;
        afterBindings[binding.id] = void 0;
        const shape = app.getShape(id);
        if (shape.handles) {
          Object.values(shape.handles).filter((handle) => handle.bindingId === binding.id).forEach((handle) => {
            var _a2, _b2;
            beforeShapes[id] = __spreadProps(__spreadValues({}, beforeShapes[id]), {
              handles: __spreadProps(__spreadValues({}, (_a2 = beforeShapes[id]) == null ? void 0 : _a2.handles), {
                [handle.id]: { bindingId: binding.id }
              })
            });
            if (!deletedGroupIds.includes(id)) {
              afterShapes[id] = __spreadProps(__spreadValues({}, afterShapes[id]), {
                handles: __spreadProps(__spreadValues({}, (_b2 = afterShapes[id]) == null ? void 0 : _b2.handles), {
                  [handle.id]: { bindingId: void 0 }
                })
              });
            }
          });
        }
      }
    }
  });
  return {
    id: "group",
    before: {
      document: {
        pages: {
          [pageId]: {
            shapes: beforeShapes,
            bindings: beforeBindings
          }
        },
        pageStates: {
          [pageId]: {
            selectedIds: ids
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [pageId]: {
            shapes: afterShapes,
            bindings: beforeBindings
          }
        },
        pageStates: {
          [pageId]: {
            selectedIds: [groupId]
          }
        }
      }
    }
  };
}

// src/state/commands/moveShapesToPage/moveShapesToPage.ts
import { Utils as Utils35 } from "@tldraw/core";
import { Vec as Vec22 } from "@tldraw/vec";
function moveShapesToPage(app, ids, viewportBounds, fromPageId, toPageId) {
  const { page } = app;
  const fromPage = {
    before: {
      shapes: {},
      bindings: {}
    },
    after: {
      shapes: {},
      bindings: {}
    }
  };
  const toPage = {
    before: {
      shapes: {},
      bindings: {}
    },
    after: {
      shapes: {},
      bindings: {}
    }
  };
  const movingShapeIds = /* @__PURE__ */ new Set();
  const shapesToMove = /* @__PURE__ */ new Set();
  ids.map((id) => app.getShape(id, fromPageId)).filter((shape) => !shape.isLocked).forEach((shape) => {
    movingShapeIds.add(shape.id);
    shapesToMove.add(shape);
    if (shape.children !== void 0) {
      shape.children.forEach((childId) => {
        movingShapeIds.add(childId);
        shapesToMove.add(app.getShape(childId, fromPageId));
      });
    }
  });
  const startingChildIndex = TLDR.getTopChildIndex(app.state, toPageId);
  const movingShapes = Array.from(shapesToMove.values());
  movingShapes.forEach((shape, i) => {
    fromPage.before.shapes[shape.id] = shape;
    fromPage.after.shapes[shape.id] = void 0;
    toPage.before.shapes[shape.id] = void 0;
    toPage.after.shapes[shape.id] = shape;
    if (!movingShapeIds.has(shape.parentId)) {
      toPage.after.shapes[shape.id] = __spreadProps(__spreadValues({}, shape), {
        parentId: toPageId,
        childIndex: startingChildIndex + i
      });
      if (shape.parentId !== fromPageId) {
        const parent = app.getShape(shape.parentId, fromPageId);
        fromPage.before.shapes[parent.id] = {
          children: parent.children
        };
        fromPage.after.shapes[parent.id] = {
          children: parent.children.filter((childId) => childId !== shape.id)
        };
      }
    }
  });
  Object.values(page.bindings).filter((binding) => movingShapeIds.has(binding.fromId) || movingShapeIds.has(binding.toId)).forEach((binding) => {
    fromPage.before.bindings[binding.id] = binding;
    fromPage.after.bindings[binding.id] = void 0;
    const fromBoundShape = app.getShape(binding.fromId, fromPageId);
    const shouldCopy = movingShapeIds.has(binding.fromId) && movingShapeIds.has(binding.toId);
    if (shouldCopy) {
      toPage.before.bindings[binding.id] = void 0;
      toPage.after.bindings[binding.id] = binding;
    } else {
      if (movingShapeIds.has(binding.fromId)) {
        const fromShape = app.getShape(binding.fromId, fromPageId);
        const handle = Object.values(fromBoundShape.handles).find(
          (handle2) => handle2.bindingId === binding.id
        );
        const handleId = handle.id;
        const toPageShape = toPage.after.shapes[fromShape.id];
        toPageShape.handles = __spreadProps(__spreadValues({}, toPageShape.handles), {
          [handleId]: __spreadProps(__spreadValues({}, toPageShape.handles[handleId]), {
            bindingId: void 0
          })
        });
      } else {
        const fromShape = app.getShape(binding.fromId, fromPageId);
        const handle = Object.values(fromBoundShape.handles).find(
          (handle2) => handle2.bindingId === binding.id
        );
        fromPage.before.shapes[fromShape.id] = {
          handles: { [handle.id]: { bindingId: binding.id } }
        };
        fromPage.after.shapes[fromShape.id] = {
          handles: { [handle.id]: { bindingId: void 0 } }
        };
      }
    }
  });
  const toPageState = app.state.document.pageStates[toPageId];
  const bounds = Utils35.getCommonBounds(movingShapes.map((shape) => TLDR.getBounds(shape)));
  const zoom = TLDR.getCameraZoom(
    viewportBounds.width < viewportBounds.height ? (viewportBounds.width - 128) / bounds.width : (viewportBounds.height - 128) / bounds.height
  );
  const mx = (viewportBounds.width - bounds.width * zoom) / 2 / zoom;
  const my = (viewportBounds.height - bounds.height * zoom) / 2 / zoom;
  const point = Vec22.toFixed(Vec22.add([-bounds.minX, -bounds.minY], [mx, my]));
  return {
    id: "move_to_page",
    before: {
      appState: {
        currentPageId: fromPageId
      },
      document: {
        pages: {
          [fromPageId]: fromPage.before,
          [toPageId]: toPage.before
        },
        pageStates: {
          [fromPageId]: { selectedIds: ids },
          [toPageId]: {
            selectedIds: toPageState.selectedIds,
            camera: toPageState.camera
          }
        }
      }
    },
    after: {
      appState: {
        currentPageId: toPageId
      },
      document: {
        pages: {
          [fromPageId]: fromPage.after,
          [toPageId]: toPage.after
        },
        pageStates: {
          [fromPageId]: { selectedIds: [] },
          [toPageId]: {
            selectedIds: ids,
            camera: {
              zoom,
              point
            }
          }
        }
      }
    }
  };
}

// src/state/commands/movePage/movePage.ts
function movePage(app, pageId, index) {
  const { pages } = app.document;
  const movingPage = pages[pageId];
  const beforePages = Object.values(pages).sort((a, b) => {
    var _a, _b;
    return ((_a = a.childIndex) != null ? _a : 0) - ((_b = b.childIndex) != null ? _b : 0);
  });
  const fromIndex = beforePages.indexOf(movingPage);
  const afterPages = [...beforePages];
  afterPages.splice(fromIndex, 1);
  afterPages.splice(index > fromIndex ? index - 1 : index, 0, movingPage);
  return {
    id: "move_page",
    before: {
      document: {
        pages: Object.fromEntries(
          beforePages.map((p) => [p.id, { childIndex: p.childIndex }])
        )
      }
    },
    after: {
      document: {
        pages: Object.fromEntries(
          afterPages.map((p, childIndex) => [p.id, { childIndex }])
        )
      }
    }
  };
}

// src/state/commands/reorderShapes/reorderShapes.ts
function reorderShapes(app, ids, type) {
  const { currentPageId, page } = app;
  const parentIds = new Set(ids.map((id) => app.getShape(id).parentId));
  let result = { before: {}, after: {} };
  let startIndex;
  let startChildIndex;
  let step;
  Array.from(parentIds.values()).forEach((parentId) => {
    let sortedChildren = [];
    if (parentId === page.id) {
      sortedChildren = Object.values(page.shapes).sort((a, b) => a.childIndex - b.childIndex);
    } else {
      const parent = app.getShape(parentId);
      if (!parent.children)
        throw Error("No children in parent!");
      sortedChildren = parent.children.map((childId) => app.getShape(childId)).sort((a, b) => a.childIndex - b.childIndex);
    }
    const sortedChildIds = sortedChildren.map((shape) => shape.id);
    const sortedIndicesToMove = ids.filter((id) => sortedChildIds.includes(id)).map((id) => sortedChildIds.indexOf(id)).sort((a, b) => a - b);
    if (sortedIndicesToMove.length === sortedChildIds.length)
      return;
    switch (type) {
      case "toBack" /* ToBack */: {
        for (let i = 0; i < sortedChildIds.length; i++) {
          if (sortedIndicesToMove.includes(i))
            continue;
          startIndex = i;
          break;
        }
        startChildIndex = sortedChildren[startIndex].childIndex;
        step = startChildIndex / (sortedIndicesToMove.length + 1);
        result = TLDR.mutateShapes(
          app.state,
          sortedIndicesToMove.map((i) => sortedChildren[i].id).reverse(),
          (_shape, i) => ({
            childIndex: startChildIndex - (i + 1) * step
          }),
          currentPageId
        );
        break;
      }
      case "toFront" /* ToFront */: {
        for (let i = sortedChildIds.length - 1; i >= 0; i--) {
          if (sortedIndicesToMove.includes(i))
            continue;
          startIndex = i;
          break;
        }
        startChildIndex = sortedChildren[startIndex].childIndex;
        step = 1;
        result = TLDR.mutateShapes(
          app.state,
          sortedIndicesToMove.map((i) => sortedChildren[i].id),
          (_shape, i) => ({
            childIndex: startChildIndex + (i + 1)
          }),
          currentPageId
        );
        break;
      }
      case "backward" /* Backward */: {
        const indexMap = {};
        for (let i = sortedChildIds.length - 1; i >= 0; i--) {
          if (sortedIndicesToMove.includes(i)) {
            for (let j = i; j >= 0; j--) {
              if (!sortedIndicesToMove.includes(j)) {
                const endChildIndex = sortedChildren[j].childIndex;
                let startChildIndex2;
                let step2;
                if (j === 0) {
                  startChildIndex2 = endChildIndex / 2;
                  step2 = endChildIndex / 2 / (i - j + 1);
                } else {
                  startChildIndex2 = sortedChildren[j - 1].childIndex;
                  step2 = (endChildIndex - startChildIndex2) / (i - j + 1);
                  startChildIndex2 += step2;
                }
                for (let k = 0; k < i - j; k++) {
                  indexMap[sortedChildren[j + k + 1].id] = startChildIndex2 + step2 * k;
                }
                break;
              }
            }
          }
        }
        if (Object.values(indexMap).length > 0) {
          result = TLDR.mutateShapes(
            app.state,
            sortedIndicesToMove.map((i) => sortedChildren[i].id),
            (shape) => ({
              childIndex: indexMap[shape.id]
            }),
            currentPageId
          );
        }
        break;
      }
      case "forward" /* Forward */: {
        const indexMap = {};
        for (let i = 0; i < sortedChildIds.length; i++) {
          if (sortedIndicesToMove.includes(i)) {
            for (let j = i; j < sortedChildIds.length; j++) {
              if (!sortedIndicesToMove.includes(j)) {
                startChildIndex = sortedChildren[j].childIndex;
                const step2 = j === sortedChildIds.length - 1 ? 1 : (sortedChildren[j + 1].childIndex - startChildIndex) / (j - i + 1);
                for (let k = 0; k < j - i; k++) {
                  indexMap[sortedChildren[i + k].id] = startChildIndex + step2 * (k + 1);
                }
                break;
              }
            }
          }
        }
        if (Object.values(indexMap).length > 0) {
          result = TLDR.mutateShapes(
            app.state,
            sortedIndicesToMove.map((i) => sortedChildren[i].id),
            (shape) => ({
              childIndex: indexMap[shape.id]
            }),
            currentPageId
          );
        }
        break;
      }
    }
  });
  return {
    id: "move",
    before: {
      document: {
        pages: {
          [currentPageId]: { shapes: result.before }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [currentPageId]: { shapes: result.after }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    }
  };
}

// src/state/commands/renamePage/renamePage.ts
function renamePage(app, pageId, name) {
  const { page } = app;
  return {
    id: "rename_page",
    before: {
      document: {
        pages: {
          [pageId]: { name: page.name }
        }
      }
    },
    after: {
      document: {
        pages: {
          [pageId]: { name }
        }
      }
    }
  };
}

// src/state/commands/resetBounds/resetBounds.ts
function resetBounds(app, ids, pageId) {
  const { currentPageId } = app;
  const { before, after } = TLDR.mutateShapes(
    app.state,
    ids,
    (shape) => {
      var _a, _b;
      return (_b = (_a = app.getShapeUtil(shape)).onDoubleClickBoundsHandle) == null ? void 0 : _b.call(_a, shape);
    },
    pageId
  );
  return {
    id: "reset_bounds",
    before: {
      document: {
        pages: {
          [currentPageId]: { shapes: before }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [currentPageId]: { shapes: after }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    }
  };
}

// src/state/commands/rotateShapes/rotateShapes.ts
import { Utils as Utils36 } from "@tldraw/core";
var PI23 = Math.PI * 2;
function rotateShapes(app, ids, delta = -PI23 / 4) {
  const { currentPageId } = app;
  const before = {};
  const after = {};
  const shapesToRotate = ids.flatMap((id) => {
    const shape = app.getShape(id);
    return shape.children ? shape.children.map((childId) => app.getShape(childId)) : shape;
  }).filter((shape) => !shape.isLocked);
  const origin = Utils36.getBoundsCenter(
    Utils36.getCommonBounds(shapesToRotate.map((shape) => TLDR.getBounds(shape)))
  );
  shapesToRotate.forEach((shape) => {
    const change = TLDR.getRotatedShapeMutation(shape, TLDR.getCenter(shape), origin, delta);
    if (!change)
      return;
    before[shape.id] = TLDR.getBeforeShape(shape, change);
    after[shape.id] = change;
  });
  return {
    id: "rotate",
    before: {
      document: {
        pages: {
          [currentPageId]: { shapes: before }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [currentPageId]: { shapes: after }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    }
  };
}

// src/state/commands/stretchShapes/stretchShapes.ts
import { TLBoundsCorner as TLBoundsCorner2, Utils as Utils37 } from "@tldraw/core";
function stretchShapes(app, ids, type) {
  const { currentPageId, selectedIds } = app;
  const initialShapes = ids.map((id) => app.getShape(id));
  const boundsForShapes = initialShapes.map((shape) => TLDR.getBounds(shape));
  const commonBounds = Utils37.getCommonBounds(boundsForShapes);
  const idsToMutate = ids.flatMap((id) => {
    const shape = app.getShape(id);
    return shape.children ? shape.children : shape.id;
  }).filter((id) => !app.getShape(id).isLocked);
  const { before, after } = TLDR.mutateShapes(
    app.state,
    idsToMutate,
    (shape) => {
      const bounds = TLDR.getBounds(shape);
      switch (type) {
        case "horizontal" /* Horizontal */: {
          const newBounds = __spreadProps(__spreadValues({}, bounds), {
            minX: commonBounds.minX,
            maxX: commonBounds.maxX,
            width: commonBounds.width
          });
          return TLDR.getShapeUtil(shape).transformSingle(shape, newBounds, {
            type: TLBoundsCorner2.TopLeft,
            scaleX: newBounds.width / bounds.width,
            scaleY: 1,
            initialShape: shape,
            transformOrigin: [0.5, 0.5]
          });
        }
        case "vertical" /* Vertical */: {
          const newBounds = __spreadProps(__spreadValues({}, bounds), {
            minY: commonBounds.minY,
            maxY: commonBounds.maxY,
            height: commonBounds.height
          });
          return TLDR.getShapeUtil(shape).transformSingle(shape, newBounds, {
            type: TLBoundsCorner2.TopLeft,
            scaleX: 1,
            scaleY: newBounds.height / bounds.height,
            initialShape: shape,
            transformOrigin: [0.5, 0.5]
          });
        }
      }
    },
    currentPageId
  );
  initialShapes.forEach((shape) => {
    if (shape.type === "group" /* Group */) {
      delete before[shape.id];
      delete after[shape.id];
    }
  });
  return {
    id: "stretch",
    before: {
      document: {
        pages: {
          [currentPageId]: { shapes: before }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [currentPageId]: { shapes: after }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    }
  };
}

// src/state/commands/styleShapes/styleShapes.ts
import { Vec as Vec23 } from "@tldraw/vec";
function styleShapes(app, ids, changes) {
  const { currentPageId, selectedIds } = app;
  const shapeIdsToMutate = ids.flatMap((id) => TLDR.getDocumentBranch(app.state, id, currentPageId)).filter((id) => !app.getShape(id).isLocked);
  const beforeShapes = {};
  const afterShapes = {};
  shapeIdsToMutate.map((id) => app.getShape(id)).filter((shape) => !shape.isLocked).forEach((shape) => {
    beforeShapes[shape.id] = {
      style: __spreadValues({}, Object.fromEntries(
        Object.keys(changes).map((key) => [key, shape.style[key]])
      ))
    };
    afterShapes[shape.id] = {
      style: changes
    };
    if (shape.type === "text" /* Text */) {
      beforeShapes[shape.id].point = shape.point;
      afterShapes[shape.id].point = Vec23.toFixed(
        Vec23.add(
          shape.point,
          Vec23.sub(
            app.getShapeUtil(shape).getCenter(shape),
            app.getShapeUtil(shape).getCenter(__spreadProps(__spreadValues({}, shape), {
              style: __spreadValues(__spreadValues({}, shape.style), changes)
            }))
          )
        )
      );
    }
  });
  return {
    id: "style",
    before: {
      document: {
        pages: {
          [currentPageId]: {
            shapes: beforeShapes
          }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds
          }
        }
      },
      appState: {
        currentStyle: __spreadValues({}, app.appState.currentStyle)
      }
    },
    after: {
      document: {
        pages: {
          [currentPageId]: {
            shapes: afterShapes
          }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      },
      appState: {
        currentStyle: changes
      }
    }
  };
}

// src/state/commands/toggleShapesDecoration/toggleShapesDecoration.ts
function toggleShapesDecoration(app, ids, decorationId) {
  const { currentPageId, selectedIds } = app;
  const beforeShapes = Object.fromEntries(
    ids.map((id) => {
      var _a;
      return [
        id,
        {
          decorations: {
            [decorationId]: (_a = app.getShape(id).decorations) == null ? void 0 : _a[decorationId]
          }
        }
      ];
    })
  );
  const afterShapes = Object.fromEntries(
    ids.filter((id) => !app.getShape(id).isLocked).map((id) => {
      var _a;
      return [
        id,
        {
          decorations: {
            [decorationId]: ((_a = app.getShape(id).decorations) == null ? void 0 : _a[decorationId]) ? void 0 : "arrow" /* Arrow */
          }
        }
      ];
    })
  );
  return {
    id: "toggle_decorations",
    before: {
      document: {
        pages: {
          [currentPageId]: { shapes: beforeShapes }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [currentPageId]: { shapes: afterShapes }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    }
  };
}

// src/state/commands/toggleShapesProp/toggleShapesProp.ts
function toggleShapeProp(app, ids, prop) {
  const { currentPageId } = app;
  const initialShapes = ids.map((id) => app.getShape(id)).filter((shape) => prop === "isLocked" ? true : !shape.isLocked);
  const isAllToggled = initialShapes.every((shape) => shape[prop]);
  const before = {};
  const after = {};
  initialShapes.forEach((shape) => {
    before[shape.id] = { [prop]: shape[prop] };
    after[shape.id] = { [prop]: !isAllToggled };
  });
  return {
    id: "toggle",
    before: {
      document: {
        pages: {
          [currentPageId]: {
            shapes: before
          }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [currentPageId]: {
            shapes: after
          }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    }
  };
}

// src/state/commands/translateShapes/translateShapes.ts
import { Vec as Vec24 } from "@tldraw/vec";
function translateShapes(app, ids, delta) {
  const { currentPageId, selectedIds } = app;
  app.rotationInfo.selectedIds = [...selectedIds];
  const before = {
    shapes: {},
    bindings: {}
  };
  const after = {
    shapes: {},
    bindings: {}
  };
  const idsToMutate = ids.flatMap((id) => {
    const shape = app.getShape(id);
    return shape.children ? shape.children : shape.id;
  }).filter((id) => !app.getShape(id).isLocked);
  const change = TLDR.mutateShapes(
    app.state,
    idsToMutate,
    (shape) => ({
      point: Vec24.toFixed(Vec24.add(shape.point, delta))
    }),
    currentPageId
  );
  before.shapes = change.before;
  after.shapes = change.after;
  const bindingsToDelete = TLDR.getBindings(app.state, currentPageId).filter(
    (binding) => ids.includes(binding.fromId) && !ids.includes(binding.toId)
  );
  bindingsToDelete.forEach((binding) => {
    before.bindings[binding.id] = binding;
    after.bindings[binding.id] = void 0;
    for (const id of [binding.toId, binding.fromId]) {
      const shape = app.getShape(id);
      if (!shape.handles)
        continue;
      Object.values(shape.handles).filter((handle) => handle.bindingId === binding.id).forEach((handle) => {
        var _a, _b;
        before.shapes[id] = __spreadProps(__spreadValues({}, before.shapes[id]), {
          handles: __spreadProps(__spreadValues({}, (_a = before.shapes[id]) == null ? void 0 : _a.handles), {
            [handle.id]: { bindingId: binding.id }
          })
        });
        after.shapes[id] = __spreadProps(__spreadValues({}, after.shapes[id]), {
          handles: __spreadProps(__spreadValues({}, (_b = after.shapes[id]) == null ? void 0 : _b.handles), { [handle.id]: { bindingId: void 0 } })
        });
      });
    }
  });
  return {
    id: "translate",
    before: {
      document: {
        pages: {
          [currentPageId]: before
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [currentPageId]: after
        },
        pageStates: {
          [currentPageId]: {
            selectedIds: ids
          }
        }
      }
    }
  };
}

// src/state/commands/ungroupShapes/ungroupShapes.ts
function ungroupShapes(app, selectedIds, groupShapes2, pageId) {
  const { bindings } = app;
  const beforeShapes = {};
  const afterShapes = {};
  const beforeBindings = {};
  const afterBindings = {};
  const beforeSelectedIds = selectedIds;
  const afterSelectedIds = selectedIds.filter((id) => !groupShapes2.find((shape) => shape.id === id));
  groupShapes2.filter((shape) => !shape.isLocked).forEach((groupShape) => {
    const shapesToReparent = [];
    const deletedGroupIds = [];
    beforeShapes[groupShape.id] = groupShape;
    afterShapes[groupShape.id] = void 0;
    groupShape.children.forEach((id) => {
      afterSelectedIds.push(id);
      const shape = app.getShape(id, pageId);
      shapesToReparent.push(shape);
    });
    const startingChildIndex = groupShape.childIndex;
    const endingChildIndex = TLDR.getChildIndexAbove(app.state, groupShape.id, pageId);
    const step = (endingChildIndex - startingChildIndex) / shapesToReparent.length;
    const sortedShapes = shapesToReparent.sort((a, b) => a.childIndex - b.childIndex);
    sortedShapes.forEach((shape, index) => {
      beforeShapes[shape.id] = {
        parentId: shape.parentId,
        childIndex: shape.childIndex
      };
      afterShapes[shape.id] = {
        parentId: pageId,
        childIndex: startingChildIndex + step * index
      };
    });
    bindings.filter((binding) => binding.toId === groupShape.id || binding.fromId === groupShape.id).forEach((binding) => {
      for (const id of [binding.toId, binding.fromId]) {
        if (afterShapes[id] === void 0) {
          beforeBindings[binding.id] = binding;
          afterBindings[binding.id] = void 0;
          const shape = app.getShape(id, pageId);
          if (shape.handles) {
            Object.values(shape.handles).filter((handle) => handle.bindingId === binding.id).forEach((handle) => {
              var _a, _b;
              beforeShapes[id] = __spreadProps(__spreadValues({}, beforeShapes[id]), {
                handles: __spreadProps(__spreadValues({}, (_a = beforeShapes[id]) == null ? void 0 : _a.handles), {
                  [handle.id]: { bindingId: binding.id }
                })
              });
              if (!deletedGroupIds.includes(id)) {
                afterShapes[id] = __spreadProps(__spreadValues({}, afterShapes[id]), {
                  handles: __spreadProps(__spreadValues({}, (_b = afterShapes[id]) == null ? void 0 : _b.handles), {
                    [handle.id]: { bindingId: void 0 }
                  })
                });
              }
            });
          }
        }
      }
    });
  });
  return {
    id: "ungroup",
    before: {
      document: {
        pages: {
          [pageId]: {
            shapes: beforeShapes,
            bindings: beforeBindings
          }
        },
        pageStates: {
          [pageId]: {
            selectedIds: beforeSelectedIds
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [pageId]: {
            shapes: afterShapes,
            bindings: beforeBindings
          }
        },
        pageStates: {
          [pageId]: {
            selectedIds: afterSelectedIds
          }
        }
      }
    }
  };
}

// src/state/commands/updateShapes/updateShapes.ts
function updateShapes(app, updates, pageId) {
  const ids = updates.map((update) => update.id);
  const change = TLDR.mutateShapes(
    app.state,
    ids.filter((id) => !app.getShape(id, pageId).isLocked),
    (_shape, i) => updates[i],
    pageId
  );
  return {
    id: "update",
    before: {
      document: {
        pages: {
          [pageId]: {
            shapes: change.before
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [pageId]: {
            shapes: change.after
          }
        }
      }
    }
  };
}

// src/state/commands/setShapesProps/setShapesProps.ts
function setShapesProps(app, ids, partial) {
  const { currentPageId, selectedIds } = app;
  const initialShapes = ids.map((id) => app.getShape(id)).filter((shape) => partial["isLocked"] ? true : !shape.isLocked);
  const before = {};
  const after = {};
  const keys = Object.keys(partial);
  initialShapes.forEach((shape) => {
    before[shape.id] = Object.fromEntries(keys.map((key) => [key, shape[key]]));
    after[shape.id] = partial;
  });
  return {
    id: "set_props",
    before: {
      document: {
        pages: {
          [currentPageId]: {
            shapes: before
          }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds
          }
        }
      }
    },
    after: {
      document: {
        pages: {
          [currentPageId]: {
            shapes: after
          }
        },
        pageStates: {
          [currentPageId]: {
            selectedIds
          }
        }
      }
    }
  };
}

// src/state/commands/insertContent/insertContent.ts
import { Utils as Utils38 } from "@tldraw/core";
import { Vec as Vec25 } from "@tldraw/vec";
function insertContent(app, content, opts = {}) {
  const { currentPageId } = app;
  const { point, select, overwrite } = opts;
  const page = app.document.pages[currentPageId];
  const before = {
    shapes: {},
    bindings: {}
  };
  const afterAssets = {};
  const after = {
    shapes: {},
    bindings: {}
  };
  if (overwrite) {
    for (const shape of content.shapes) {
      before.shapes[shape.id] = page.shapes[shape.id];
      after.shapes[shape.id] = shape;
    }
    if (content.bindings) {
      for (const binding of content.bindings) {
        before.bindings[binding.id] = page.bindings[binding.id];
        after.bindings[binding.id] = binding;
      }
    }
    if (content.assets) {
      for (const asset of content.assets) {
        afterAssets[asset.id] = asset;
      }
    }
  } else {
    const oldToNewIds = {};
    let nextIndex = TLDR.getTopChildIndex(app.state, currentPageId);
    const shapesToInsert = content.shapes.sort((a, b) => a.childIndex - b.childIndex).map((shape) => {
      const newShapeId = Utils38.uniqueId();
      oldToNewIds[shape.id] = newShapeId;
      return __spreadProps(__spreadValues({}, Utils38.deepClone(shape)), {
        id: newShapeId
      });
    });
    const visited = /* @__PURE__ */ new Set();
    while (shapesToInsert.length > 0) {
      const shape = shapesToInsert.shift();
      if (!shape)
        break;
      visited.add(shape.id);
      if (shape.parentId === "currentPageId") {
        shape.parentId = currentPageId;
        shape.childIndex = nextIndex++;
      } else {
        shape.parentId = oldToNewIds[shape.parentId];
        const parent = after.shapes[shape.parentId];
        if (!parent) {
          if (visited.has(shape.id)) {
            shape.parentId = "currentPageId";
          }
          shapesToInsert.push(shape);
          continue;
        }
        parent.children.push(shape.id);
      }
      if (shape.children) {
        shape.children = [];
      }
      before.shapes[shape.id] = void 0;
      after.shapes[shape.id] = shape;
    }
    Object.values(after.shapes).forEach((shape) => {
      if (shape.children && shape.children.length === 0) {
        delete before.shapes[shape.id];
        delete after.shapes[shape.id];
      }
    });
    if (content.bindings) {
      content.bindings.forEach((binding) => {
        const newBindingId = Utils38.uniqueId();
        oldToNewIds[binding.id] = newBindingId;
        const toId = oldToNewIds[binding.toId];
        const fromId = oldToNewIds[binding.fromId];
        if (!toId || !fromId) {
          if (fromId) {
            const handles = after.shapes[fromId].handles;
            if (handles) {
              Object.values(handles).forEach((handle) => {
                if (handle.bindingId === binding.id) {
                  handle.bindingId = void 0;
                }
              });
            }
          }
          if (toId) {
            const handles = after.shapes[toId].handles;
            if (handles) {
              Object.values(handles).forEach((handle) => {
                if (handle.bindingId === binding.id) {
                  handle.bindingId = void 0;
                }
              });
            }
          }
          return;
        }
        const fromHandles = after.shapes[fromId].handles;
        if (fromHandles) {
          Object.values(fromHandles).forEach((handle) => {
            if (handle.bindingId === binding.id) {
              handle.bindingId = newBindingId;
            }
          });
        }
        const toHandles = after.shapes[toId].handles;
        if (toHandles) {
          Object.values(after.shapes[toId].handles).forEach((handle) => {
            if (handle.bindingId === binding.id) {
              handle.bindingId = newBindingId;
            }
          });
        }
        const newBinding = __spreadProps(__spreadValues({}, Utils38.deepClone(binding)), {
          id: newBindingId,
          toId,
          fromId
        });
        before.bindings[newBinding.id] = void 0;
        after.bindings[newBinding.id] = newBinding;
      });
    }
    const shapesToMove = Object.values(after.shapes);
    if (shapesToMove.length > 0) {
      if (point) {
        const commonBounds = Utils38.getCommonBounds(
          shapesToMove.map((shape) => TLDR.getBounds(shape))
        );
        const center = Utils38.getBoundsCenter(commonBounds);
        shapesToMove.forEach((shape) => {
          if (!shape.point)
            return;
          shape.point = Vec25.sub(point, Vec25.sub(center, shape.point));
        });
      } else {
        const commonBounds = Utils38.getCommonBounds(shapesToMove.map(TLDR.getBounds));
        if (!(Utils38.boundsContain(app.viewport, commonBounds) || Utils38.boundsCollide(app.viewport, commonBounds))) {
          const center = Vec25.toFixed(app.getPagePoint(app.centerPoint));
          const centeredBounds = Utils38.centerBounds(commonBounds, center);
          const delta = Vec25.sub(
            Utils38.getBoundsCenter(centeredBounds),
            Utils38.getBoundsCenter(commonBounds)
          );
          shapesToMove.forEach((shape) => {
            shape.point = Vec25.toFixed(Vec25.add(shape.point, delta));
          });
        }
      }
    }
    if (content.assets) {
      for (const asset of content.assets) {
        afterAssets[asset.id] = asset;
      }
    }
  }
  const elm = document.createElement("textarea");
  Object.values(after.shapes).forEach((shape) => {
    if ("text" in shape) {
      elm.innerHTML = shape.text;
      shape.text = elm.value;
    }
    if ("label" in shape) {
      elm.innerHTML = shape.label;
      shape.label = elm.value;
    }
  });
  elm.remove();
  return {
    id: "insert",
    before: {
      document: {
        pages: {
          [currentPageId]: before
        },
        pageStates: {
          [currentPageId]: { selectedIds: [...app.selectedIds] }
        }
      }
    },
    after: {
      document: {
        pages: {
          [currentPageId]: after
        },
        assets: afterAssets,
        pageStates: {
          [currentPageId]: {
            selectedIds: select ? Object.keys(after.shapes) : [...app.selectedIds]
          }
        }
      }
    }
  };
}

// src/state/data/index.ts
var data_exports = {};
__export(data_exports, {
  fileToBase64: () => fileToBase64,
  fileToText: () => fileToText,
  getImageSizeFromSrc: () => getImageSizeFromSrc,
  getVideoSizeFromSrc: () => getVideoSizeFromSrc,
  loadFileHandle: () => loadFileHandle,
  migrate: () => migrate,
  openAssetsFromFileSystem: () => openAssetsFromFileSystem,
  openFromFileSystem: () => openFromFileSystem,
  saveFileHandle: () => saveFileHandle,
  saveToFileSystem: () => saveToFileSystem
});

// src/state/data/migrate.ts
function migrate(state, newVersion) {
  const { document: document2, settings } = state;
  const { version = 0 } = document2;
  if (!("assets" in document2)) {
    document2.assets = {};
  }
  const assetIdsInUse = /* @__PURE__ */ new Set();
  Object.values(document2.pages).forEach(
    (page) => Object.values(page.shapes).forEach((shape) => {
      const { parentId, children, assetId } = shape;
      if (assetId) {
        assetIdsInUse.add(assetId);
      }
      if (parentId !== page.id && !page.shapes[parentId]) {
        console.warn("Encountered a shape with a missing parent!");
        shape.parentId = page.id;
      }
      if (shape.type === "group" /* Group */ && children) {
        children.forEach((childId) => {
          if (!page.shapes[childId]) {
            console.warn("Encountered a parent with a missing child!", shape.id, childId);
            children == null ? void 0 : children.splice(children.indexOf(childId), 1);
          }
        });
      }
    })
  );
  Object.keys(document2.assets).forEach((assetId) => {
    if (!assetIdsInUse.has(assetId)) {
      delete document2.assets[assetId];
    }
  });
  if (version !== newVersion) {
    if (version < 14) {
      Object.values(document2.pages).forEach((page) => {
        Object.values(page.shapes).filter((shape) => shape.type === "text" /* Text */).forEach((shape) => shape.style.font === "script" /* Script */);
      });
    }
    if (version <= 13) {
      Object.values(document2.pages).forEach((page) => {
        Object.values(page.bindings).forEach((binding) => {
          Object.assign(binding, binding.meta);
        });
        Object.values(page.shapes).forEach((shape) => {
          Object.entries(shape.style).forEach(([id, style]) => {
            if (typeof style === "string") {
              shape.style[id] = style.toLowerCase();
            }
          });
          if (shape.type === "arrow" /* Arrow */) {
            if (shape.decorations) {
              Object.entries(shape.decorations).forEach(([id, decoration]) => {
                if (decoration === "Arrow") {
                  shape.decorations = __spreadProps(__spreadValues({}, shape.decorations), {
                    [id]: "arrow" /* Arrow */
                  });
                }
              });
            }
          }
        });
      });
    }
    if (version <= 13.1) {
      document2.name = "New Document";
    }
    if (version < 15) {
      document2.assets = {};
    }
    Object.values(document2.pages).forEach((page) => {
      Object.values(page.shapes).forEach((shape) => {
        if (version < 15.2) {
          if (shape.type === "image" /* Image */ || shape.type === "video" /* Video */) {
            shape.style.isFilled = true;
          }
        }
        if (version < 15.3) {
          if (shape.type === "rectangle" /* Rectangle */ || shape.type === "triangle" /* Triangle */ || shape.type === "ellipse" /* Ellipse */ || shape.type === "arrow" /* Arrow */) {
            shape.label = shape.text || "";
            shape.labelPoint = [0.5, 0.5];
          }
        }
      });
    });
    if (version < 15.4) {
      settings.dockPosition = "bottom";
    }
    if (version < 15.5) {
      settings.exportBackground = "transparent" /* Transparent */;
    }
  }
  Object.values(document2.pageStates).forEach((pageState) => {
    pageState.selectedIds = pageState.selectedIds.filter((id) => {
      return document2.pages[pageState.id].shapes[id] !== void 0;
    });
    pageState.bindingId = void 0;
    pageState.editingId = void 0;
    pageState.hoveredId = void 0;
    pageState.pointedId = void 0;
  });
  document2.version = newVersion;
  return state;
}

// src/state/data/filesystem.ts
import { fileOpen, fileSave, supported as supported2 } from "browser-fs-access";
import { get as getFromIdb, set as setToIdb } from "idb-keyval";
var options = { mode: "readwrite" };
var checkPermissions = (handle) => __async(void 0, null, function* () {
  return (yield handle.queryPermission(options)) === "granted" || (yield handle.requestPermission(options)) === "granted";
});
function loadFileHandle() {
  return __async(this, null, function* () {
    if (typeof Window === "undefined" || !("_location" in Window))
      return;
    const fileHandle = yield getFromIdb(`Tldraw_file_handle_${window.location.origin}`);
    if (!fileHandle)
      return null;
    return fileHandle;
  });
}
function saveFileHandle(fileHandle) {
  return __async(this, null, function* () {
    return setToIdb(`Tldraw_file_handle_${window.location.origin}`, fileHandle);
  });
}
function saveToFileSystem(document2, fileHandle, name) {
  return __async(this, null, function* () {
    const file = {
      name: document2.name || "New Document",
      fileHandle: fileHandle != null ? fileHandle : null,
      document: document2
    };
    const json = false ? JSON.stringify(file) : JSON.stringify(file, null, 2);
    const blob = new Blob([json], {
      type: "application/vnd.Tldraw+json"
    });
    if (fileHandle) {
      const hasPermissions = yield checkPermissions(fileHandle);
      if (!hasPermissions)
        return null;
    }
    const filename = !supported2 && (name == null ? void 0 : name.length) ? name : `${file.name}`;
    const newFileHandle = yield fileSave(
      blob,
      {
        fileName: `${filename}${FILE_EXTENSION}`,
        description: "Tldraw File",
        extensions: [`${FILE_EXTENSION}`]
      },
      fileHandle
    );
    yield saveFileHandle(newFileHandle);
    return newFileHandle;
  });
}
function openFromFileSystem() {
  return __async(this, null, function* () {
    var _a;
    const blob = yield fileOpen({
      description: "Tldraw File",
      extensions: [`${FILE_EXTENSION}`],
      multiple: false
    });
    if (!blob)
      return null;
    const json = yield new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.readyState === FileReader.DONE) {
          resolve(reader.result);
        }
      };
      reader.readAsText(blob, "utf8");
    });
    const file = JSON.parse(json);
    if ("tldrawFileFormatVersion" in file) {
      alert(
        "This file was created in a newer version of tldraw. Please visit beta.tldraw.com to open it."
      );
      return null;
    }
    const fileHandle = (_a = blob.handle) != null ? _a : null;
    yield saveFileHandle(fileHandle);
    return {
      fileHandle,
      document: file.document
    };
  });
}
function openAssetsFromFileSystem() {
  return __async(this, null, function* () {
    return fileOpen({
      description: "Image or Video",
      extensions: [...IMAGE_EXTENSIONS, ...VIDEO_EXTENSIONS],
      multiple: true
    });
  });
}
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.onabort = (error) => reject(error);
    }
  });
}
function fileToText(file) {
  return new Promise((resolve, reject) => {
    if (file) {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.onabort = (error) => reject(error);
    }
  });
}
function getImageSizeFromSrc(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve([img.width, img.height]);
    img.onerror = () => reject(new Error("Could not get image size"));
    img.src = src;
  });
}
function getVideoSizeFromSrc(src) {
  return new Promise((resolve, reject) => {
    const video = document.createElement("video");
    video.onloadedmetadata = () => resolve([video.videoWidth, video.videoHeight]);
    video.onerror = () => reject(new Error("Could not get video size"));
    video.src = src;
  });
}

// src/state/data/index.ts
__reExport(data_exports, browser_fs_access_star);
import * as browser_fs_access_star from "browser-fs-access";

// src/state/sessions/ArrowSession/ArrowSession.ts
import { Utils as Utils39 } from "@tldraw/core";
import { Vec as Vec26 } from "@tldraw/vec";

// src/state/sessions/BaseSession.ts
var BaseSession = class {
  constructor(app) {
    this.app = app;
  }
};

// src/state/sessions/ArrowSession/ArrowSession.ts
var ArrowSession = class extends BaseSession {
  constructor(app, shapeId, handleId, isCreate = false) {
    var _a, _b, _c;
    super(app);
    __publicField(this, "type", "arrow" /* Arrow */);
    __publicField(this, "performanceMode");
    __publicField(this, "status", "translatingHandle" /* TranslatingHandle */);
    __publicField(this, "newStartBindingId", Utils39.uniqueId());
    __publicField(this, "draggedBindingId", Utils39.uniqueId());
    __publicField(this, "didBind", false);
    __publicField(this, "initialShape");
    __publicField(this, "handleId");
    __publicField(this, "bindableShapeIds");
    __publicField(this, "initialBinding");
    __publicField(this, "startBindingShapeId");
    __publicField(this, "isCreate");
    __publicField(this, "start", () => void 0);
    __publicField(this, "update", () => {
      var _a, _b, _c;
      const { initialShape } = this;
      const {
        currentPoint,
        shiftKey,
        altKey,
        metaKey,
        currentGrid,
        settings: { showGrid }
      } = this.app;
      const shape = this.app.getShape(initialShape.id);
      if (shape.isLocked)
        return;
      const { handles } = initialShape;
      const handleId = this.handleId;
      if (!handles[handleId].canBind)
        return;
      let delta = Vec26.sub(currentPoint, Vec26.add(handles[handleId].point, initialShape.point));
      if (shiftKey) {
        const A = altKey ? Vec26.med(handles.start.point, handles.end.point) : handles[handleId === "start" ? "end" : "start"].point;
        const B = handles[handleId].point;
        const C = Vec26.add(B, delta);
        const angle = Vec26.angle(A, C);
        const adjusted = Vec26.rotWith(C, A, Utils39.snapAngleToSegments(angle, 24) - angle);
        delta = Vec26.add(delta, Vec26.sub(adjusted, C));
      }
      const nextPoint = Vec26.add(handles[handleId].point, delta);
      const handleChanges = {
        [handleId]: __spreadProps(__spreadValues({}, handles[handleId]), {
          point: showGrid ? Vec26.snap(nextPoint, currentGrid) : Vec26.toFixed(nextPoint),
          bindingId: void 0
        })
      };
      const utils = shapeUtils["arrow" /* Arrow */];
      const handleChange = (_a = utils.onHandleChange) == null ? void 0 : _a.call(utils, initialShape, handleChanges);
      if (!handleChange)
        return;
      const next = {
        shape: Utils39.deepMerge(shape, handleChange),
        bindings: {}
      };
      let draggedBinding;
      const draggingHandle = next.shape.handles[this.handleId];
      const oppositeHandle = next.shape.handles[this.handleId === "start" ? "end" : "start"];
      if (this.startBindingShapeId) {
        let nextStartBinding;
        const startTarget = this.app.page.shapes[this.startBindingShapeId];
        const startTargetUtils = TLDR.getShapeUtil(startTarget);
        const center = startTargetUtils.getCenter(startTarget);
        const startHandle = next.shape.handles.start;
        const endHandle = next.shape.handles.end;
        const rayPoint = Vec26.add(startHandle.point, next.shape.point);
        if (Vec26.isEqual(rayPoint, center))
          rayPoint[1]++;
        const rayOrigin = center;
        const isInsideShape = startTargetUtils.hitTestPoint(startTarget, currentPoint);
        const rayDirection = Vec26.uni(Vec26.sub(rayPoint, rayOrigin));
        const hasStartBinding = this.app.getBinding(this.newStartBindingId) !== void 0;
        if (!metaKey && !startTargetUtils.hitTestPoint(startTarget, Vec26.add(next.shape.point, endHandle.point))) {
          nextStartBinding = this.findBindingPoint(
            shape,
            startTarget,
            "start",
            this.newStartBindingId,
            center,
            rayOrigin,
            rayDirection,
            isInsideShape
          );
        }
        if (nextStartBinding && !hasStartBinding) {
          this.didBind = true;
          next.bindings[this.newStartBindingId] = nextStartBinding;
          next.shape = Utils39.deepMerge(next.shape, {
            handles: {
              start: {
                bindingId: nextStartBinding.id
              }
            }
          });
        } else if (!nextStartBinding && hasStartBinding) {
          this.didBind = false;
          next.bindings[this.newStartBindingId] = void 0;
          next.shape = Utils39.deepMerge(initialShape, {
            handles: {
              start: {
                bindingId: void 0
              }
            }
          });
        }
      }
      if (!metaKey) {
        const rayOrigin = Vec26.add(oppositeHandle.point, next.shape.point);
        const rayPoint = Vec26.add(draggingHandle.point, next.shape.point);
        const rayDirection = Vec26.uni(Vec26.sub(rayPoint, rayOrigin));
        const startPoint = Vec26.add(next.shape.point, next.shape.handles.start.point);
        const endPoint = Vec26.add(next.shape.point, next.shape.handles.end.point);
        const targets = this.bindableShapeIds.map((id) => this.app.page.shapes[id]).sort((a, b) => b.childIndex - a.childIndex).filter((shape2) => {
          if (shape2.isLocked)
            return false;
          const utils2 = TLDR.getShapeUtil(shape2);
          return ![startPoint, endPoint].every((point) => utils2.hitTestPoint(shape2, point));
        });
        for (const target of targets) {
          draggedBinding = this.findBindingPoint(
            shape,
            target,
            this.handleId,
            this.draggedBindingId,
            rayPoint,
            rayOrigin,
            rayDirection,
            altKey
          );
          if (draggedBinding)
            break;
        }
      }
      if (draggedBinding) {
        this.didBind = true;
        next.bindings[this.draggedBindingId] = draggedBinding;
        next.shape = Utils39.deepMerge(next.shape, {
          handles: {
            [this.handleId]: {
              bindingId: this.draggedBindingId
            }
          }
        });
      } else {
        this.didBind = this.didBind || false;
        const currentBindingId = shape.handles[this.handleId].bindingId;
        if (currentBindingId !== void 0) {
          next.bindings[currentBindingId] = void 0;
          next.shape = Utils39.deepMerge(next.shape, {
            handles: {
              [this.handleId]: {
                bindingId: void 0
              }
            }
          });
        }
      }
      const change = (_c = (_b = TLDR.getShapeUtil(next.shape)).onHandleChange) == null ? void 0 : _c.call(
        _b,
        next.shape,
        next.shape.handles
      );
      return {
        document: {
          pages: {
            [this.app.currentPageId]: {
              shapes: {
                [shape.id]: __spreadValues(__spreadValues({}, next.shape), change != null ? change : {})
              },
              bindings: next.bindings
            }
          },
          pageStates: {
            [this.app.currentPageId]: {
              bindingId: next.shape.handles[handleId].bindingId
            }
          }
        }
      };
    });
    __publicField(this, "cancel", () => {
      const { initialShape, initialBinding, newStartBindingId, draggedBindingId } = this;
      const currentShape = TLDR.onSessionComplete(this.app.page.shapes[initialShape.id]);
      const isDeleting = this.isCreate || Vec26.dist(currentShape.handles.start.point, currentShape.handles.end.point) < 4;
      const afterBindings = {};
      afterBindings[draggedBindingId] = void 0;
      if (initialBinding) {
        afterBindings[initialBinding.id] = isDeleting ? void 0 : initialBinding;
      }
      if (newStartBindingId) {
        afterBindings[newStartBindingId] = void 0;
      }
      return {
        document: {
          pages: {
            [this.app.currentPageId]: {
              shapes: {
                [initialShape.id]: isDeleting ? void 0 : initialShape
              },
              bindings: afterBindings
            }
          },
          pageStates: {
            [this.app.currentPageId]: {
              selectedIds: isDeleting ? [] : [initialShape.id],
              bindingId: void 0,
              hoveredId: void 0,
              editingId: void 0
            }
          }
        }
      };
    });
    __publicField(this, "complete", () => {
      const { initialShape, initialBinding, newStartBindingId, startBindingShapeId, handleId } = this;
      const currentShape = TLDR.onSessionComplete(this.app.page.shapes[initialShape.id]);
      const currentBindingId = currentShape.handles[handleId].bindingId;
      const length = Vec26.dist(currentShape.handles.start.point, currentShape.handles.end.point);
      if (!(currentBindingId || initialBinding) && length < 4)
        return this.cancel();
      const beforeBindings = {};
      const afterBindings = {};
      if (initialBinding) {
        beforeBindings[initialBinding.id] = this.isCreate ? void 0 : initialBinding;
        afterBindings[initialBinding.id] = void 0;
      }
      if (currentBindingId) {
        beforeBindings[currentBindingId] = void 0;
        afterBindings[currentBindingId] = this.app.page.bindings[currentBindingId];
      }
      if (startBindingShapeId) {
        beforeBindings[newStartBindingId] = void 0;
        afterBindings[newStartBindingId] = this.app.page.bindings[newStartBindingId];
      }
      return {
        id: "arrow",
        before: {
          document: {
            pages: {
              [this.app.currentPageId]: {
                shapes: {
                  [initialShape.id]: this.isCreate ? void 0 : initialShape
                },
                bindings: beforeBindings
              }
            },
            pageStates: {
              [this.app.currentPageId]: {
                selectedIds: this.isCreate ? [] : [initialShape.id],
                bindingId: void 0,
                hoveredId: void 0,
                editingId: void 0
              }
            }
          }
        },
        after: {
          document: {
            pages: {
              [this.app.currentPageId]: {
                shapes: {
                  [initialShape.id]: currentShape
                },
                bindings: afterBindings
              }
            },
            pageStates: {
              [this.app.currentPageId]: {
                selectedIds: [initialShape.id],
                bindingId: void 0,
                hoveredId: void 0,
                editingId: void 0
              }
            }
          }
        }
      };
    });
    __publicField(this, "findBindingPoint", (shape, target, handleId, bindingId, point, origin, direction, bindAnywhere) => {
      const util = TLDR.getShapeUtil(target.type);
      const bindingPoint = util.getBindingPoint(
        target,
        shape,
        point,
        origin,
        direction,
        bindAnywhere
      );
      if (!bindingPoint)
        return;
      return {
        id: bindingId,
        type: "arrow",
        fromId: shape.id,
        toId: target.id,
        handleId,
        point: Vec26.toFixed(bindingPoint.point),
        distance: bindingPoint.distance
      };
    });
    this.isCreate = isCreate;
    const { currentPageId } = app.state.appState;
    const page = app.state.document.pages[currentPageId];
    this.handleId = handleId;
    this.initialShape = deepCopy(page.shapes[shapeId]);
    this.bindableShapeIds = TLDR.getBindableShapeIds(app.state).filter(
      (id) => !(id === this.initialShape.id || id === this.initialShape.parentId)
    );
    const oppositeHandleBindingId = (_a = this.initialShape.handles[handleId === "start" ? "end" : "start"]) == null ? void 0 : _a.bindingId;
    if (oppositeHandleBindingId) {
      const oppositeToId = (_b = page.bindings[oppositeHandleBindingId]) == null ? void 0 : _b.toId;
      if (oppositeToId) {
        this.bindableShapeIds = this.bindableShapeIds.filter((id) => id !== oppositeToId);
      }
    }
    const { originPoint } = this.app;
    if (this.isCreate) {
      this.startBindingShapeId = (_c = this.bindableShapeIds.map((id) => page.shapes[id]).filter(
        (shape) => !shape.isLocked && Utils39.pointInBounds(originPoint, TLDR.getShapeUtil(shape).getBounds(shape))
      ).sort((a, b) => {
        return b.childIndex - a.childIndex;
      })[0]) == null ? void 0 : _c.id;
      if (this.startBindingShapeId) {
        this.bindableShapeIds.splice(this.bindableShapeIds.indexOf(this.startBindingShapeId), 1);
      }
    } else {
      const initialBindingId = this.initialShape.handles[this.handleId].bindingId;
      if (initialBindingId) {
        this.initialBinding = page.bindings[initialBindingId];
      } else {
        this.initialShape.handles[this.handleId].bindingId = void 0;
      }
    }
  }
};

// src/state/sessions/BrushSession/BrushSession.ts
import { Utils as Utils40 } from "@tldraw/core";
var BrushSession = class extends BaseSession {
  constructor(app) {
    super(app);
    __publicField(this, "type", "brush" /* Brush */);
    __publicField(this, "performanceMode");
    __publicField(this, "status", "brushing" /* Brushing */);
    __publicField(this, "initialSelectedIds");
    __publicField(this, "shapesToTest");
    __publicField(this, "start", () => void 0);
    __publicField(this, "update", () => {
      const {
        initialSelectedIds,
        shapesToTest,
        app: { metaKey, settings, originPoint, currentPoint }
      } = this;
      const brush = Utils40.getBoundsFromPoints([originPoint, currentPoint]);
      const selectByContain = settings.isCadSelectMode ? !metaKey && originPoint[0] < currentPoint[0] : metaKey;
      const hits = /* @__PURE__ */ new Set();
      const selectedIds = new Set(initialSelectedIds);
      shapesToTest.forEach(({ id, selectId }) => {
        const shape = this.app.getShape(id);
        if (!hits.has(selectId)) {
          const util = this.app.getShapeUtil(shape);
          if (selectByContain ? Utils40.boundsContain(brush, util.getBounds(shape)) : util.hitTestBounds(shape, brush)) {
            hits.add(selectId);
            if (!selectedIds.has(selectId)) {
              selectedIds.add(selectId);
            }
          } else if (selectedIds.has(selectId)) {
            selectedIds.delete(selectId);
          }
        }
      });
      const currentSelectedIds = this.app.selectedIds;
      const didChange = selectedIds.size !== currentSelectedIds.length || currentSelectedIds.some((id) => !selectedIds.has(id));
      const afterSelectedIds = didChange ? Array.from(selectedIds.values()) : currentSelectedIds;
      if (!didChange)
        return {
          appState: {
            selectByContain
          },
          document: {
            pageStates: {
              [this.app.currentPageId]: {
                brush
              }
            }
          }
        };
      return {
        appState: {
          selectByContain
        },
        document: {
          pageStates: {
            [this.app.currentPageId]: {
              brush,
              selectedIds: afterSelectedIds
            }
          }
        }
      };
    });
    __publicField(this, "cancel", () => {
      return {
        appState: {
          selectByContain: false
        },
        document: {
          pageStates: {
            [this.app.currentPageId]: {
              brush: null,
              selectedIds: Array.from(this.initialSelectedIds.values())
            }
          }
        }
      };
    });
    __publicField(this, "complete", () => {
      return {
        appState: {
          selectByContain: false
        },
        document: {
          pageStates: {
            [this.app.currentPageId]: {
              brush: null,
              selectedIds: [...this.app.selectedIds]
            }
          }
        }
      };
    });
    const { currentPageId } = app;
    this.initialSelectedIds = new Set(this.app.selectedIds);
    this.shapesToTest = this.app.shapes.filter(
      (shape) => !(shape.isLocked || shape.isHidden || shape.parentId !== currentPageId || this.initialSelectedIds.has(shape.id) || this.initialSelectedIds.has(shape.parentId))
    ).map((shape) => ({
      id: shape.id,
      bounds: this.app.getShapeUtil(shape).getBounds(shape),
      selectId: shape.id
    }));
    this.update();
  }
};

// src/state/sessions/DrawSession/DrawSession.ts
import { Vec as Vec27 } from "@tldraw/vec";
var DrawSession = class extends BaseSession {
  constructor(app, id) {
    var _a;
    super(app);
    __publicField(this, "type", "draw" /* Draw */);
    __publicField(this, "performanceMode");
    __publicField(this, "status", "creating" /* Creating */);
    __publicField(this, "topLeft");
    __publicField(this, "points");
    __publicField(this, "initialShape");
    __publicField(this, "lastAdjustedPoint");
    __publicField(this, "shiftedPoints", []);
    __publicField(this, "shapeId");
    __publicField(this, "isLocked");
    __publicField(this, "isExtending");
    __publicField(this, "lockedDirection");
    __publicField(this, "start", () => {
      var _a;
      const currentPoint = this.app.originPoint;
      const newAdjustedPoint = [0, 0, (_a = currentPoint[2]) != null ? _a : 0.5];
      this.points.push(newAdjustedPoint);
      const topLeft = [
        Math.min(this.topLeft[0], currentPoint[0]),
        Math.min(this.topLeft[1], currentPoint[1])
      ];
      const delta = Vec27.sub(topLeft, currentPoint);
      this.topLeft = topLeft;
      this.shiftedPoints = this.points.map((pt) => Vec27.toFixed(Vec27.sub(pt, delta)).concat(pt[2]));
      return {
        document: {
          pages: {
            [this.app.currentPageId]: {
              shapes: {
                [this.shapeId]: {
                  point: this.topLeft,
                  points: this.shiftedPoints
                }
              }
            }
          },
          pageStates: {
            [this.app.currentPageId]: {
              selectedIds: [this.shapeId]
            }
          }
        }
      };
    });
    __publicField(this, "update", () => {
      const { shapeId } = this;
      const { currentPoint, originPoint, shiftKey, zoom } = this.app;
      if (!this.lockedDirection && this.points.length > 1) {
        const delta = Vec27.sub(currentPoint, originPoint);
        if (Vec27.len(delta) > 3 / zoom) {
          this.lockedDirection = Math.abs(delta[0]) > Math.abs(delta[1]) ? "horizontal" : "vertical";
        }
      }
      if (shiftKey) {
        if (!this.isLocked && this.points.length > 2) {
          if (!this.lockedDirection) {
            const delta = Vec27.sub(currentPoint, originPoint);
            if (Vec27.len(delta) > 3 / zoom) {
              this.lockedDirection = Math.abs(delta[0]) > Math.abs(delta[1]) ? "horizontal" : "vertical";
            }
          }
          this.isLocked = true;
          const returning = [...this.lastAdjustedPoint];
          if (this.lockedDirection === "vertical") {
            returning[0] = 0;
          } else {
            returning[1] = 0;
          }
          this.points.push(returning.concat(currentPoint[2]));
        }
      } else if (this.isLocked) {
        this.isLocked = false;
      }
      if (this.isLocked) {
        if (this.lockedDirection === "vertical") {
          currentPoint[0] = originPoint[0];
        } else {
          currentPoint[1] = originPoint[1];
        }
      }
      const change = this.addPoint(currentPoint);
      if (!change)
        return;
      return {
        document: {
          pages: {
            [this.app.currentPageId]: {
              shapes: {
                [shapeId]: change
              }
            }
          },
          pageStates: {
            [this.app.currentPageId]: {
              selectedIds: [shapeId]
            }
          }
        }
      };
    });
    __publicField(this, "cancel", () => {
      const { shapeId } = this;
      const pageId = this.app.currentPageId;
      return {
        document: {
          pages: {
            [pageId]: {
              shapes: {
                [shapeId]: this.isExtending ? this.initialShape : void 0
              }
            }
          },
          pageStates: {
            [pageId]: {
              selectedIds: []
            }
          }
        }
      };
    });
    __publicField(this, "complete", () => {
      const { shapeId } = this;
      const pageId = this.app.currentPageId;
      const shape = this.app.getShape(shapeId);
      return {
        id: "create_draw",
        before: {
          document: {
            pages: {
              [pageId]: {
                shapes: {
                  [shapeId]: this.isExtending ? this.initialShape : void 0
                }
              }
            },
            pageStates: {
              [pageId]: {
                selectedIds: []
              }
            }
          }
        },
        after: {
          document: {
            pages: {
              [pageId]: {
                shapes: {
                  [shapeId]: __spreadProps(__spreadValues({}, shape), {
                    point: Vec27.toFixed(shape.point),
                    points: shape.points.map((pt) => Vec27.toFixed(pt)),
                    isComplete: true
                  })
                }
              }
            },
            pageStates: {
              [this.app.currentPageId]: {
                selectedIds: []
              }
            }
          }
        }
      };
    });
    __publicField(this, "addPoint", (currentPoint) => {
      const { originPoint } = this.app;
      const newAdjustedPoint = Vec27.toFixed(Vec27.sub(currentPoint, originPoint)).concat(currentPoint[2]);
      if (Vec27.isEqual(this.lastAdjustedPoint, newAdjustedPoint))
        return;
      this.points.push(newAdjustedPoint);
      this.lastAdjustedPoint = newAdjustedPoint;
      const prevTopLeft = [...this.topLeft];
      const topLeft = [
        Math.min(this.topLeft[0], currentPoint[0]),
        Math.min(this.topLeft[1], currentPoint[1])
      ];
      const delta = Vec27.sub(topLeft, originPoint);
      let points;
      if (prevTopLeft[0] !== topLeft[0] || prevTopLeft[1] !== topLeft[1]) {
        this.topLeft = topLeft;
        points = this.points.map((pt) => Vec27.toFixed(Vec27.sub(pt, delta)).concat(pt[2]));
      } else {
        points = [...this.shiftedPoints, Vec27.sub(newAdjustedPoint, delta).concat(newAdjustedPoint[2])];
      }
      this.shiftedPoints = points;
      return {
        point: this.topLeft,
        points
      };
    });
    const { originPoint } = this.app;
    this.shapeId = id;
    this.initialShape = this.app.getShape(id);
    this.topLeft = [...this.initialShape.point];
    const currentPoint = [0, 0, (_a = originPoint[2]) != null ? _a : 0.5];
    const delta = Vec27.sub(originPoint, this.topLeft);
    const initialPoints = this.initialShape.points.map((pt) => Vec27.sub(pt, delta).concat(pt[2]));
    this.isExtending = initialPoints.length > 0;
    const newPoints = [];
    if (this.isExtending) {
      const prevPoint = initialPoints[initialPoints.length - 1];
      if (prevPoint) {
        newPoints.push(prevPoint, prevPoint);
        const len = Math.floor(Vec27.dist(prevPoint, currentPoint) / 16);
        if (len > 1) {
          for (let i = 0; i < len; i++) {
            const t = i / (len - 1);
            newPoints.push(Vec27.lrp(prevPoint, currentPoint, t).concat(prevPoint[2]));
          }
        } else {
          newPoints.push(currentPoint, currentPoint);
        }
      }
    } else {
      newPoints.push(currentPoint);
    }
    this.points = [...initialPoints, ...newPoints];
    this.shiftedPoints = this.points.map((pt) => Vec27.add(pt, delta).concat(pt[2]));
    this.lastAdjustedPoint = this.points[this.points.length - 1];
  }
};

// src/state/sessions/EditSession/EditSession.ts
var EditSession = class extends BaseSession {
  constructor(app, id, isCreating) {
    super(app);
    __publicField(this, "type", "edit" /* Edit */);
    __publicField(this, "performanceMode");
    __publicField(this, "initialShape");
    __publicField(this, "initialSelectedIds");
    __publicField(this, "currentPageId");
    __publicField(this, "isCreating");
    __publicField(this, "start", () => void 0);
    __publicField(this, "update", () => void 0);
    __publicField(this, "cancel", () => {
      return {
        document: {
          pages: {
            [this.currentPageId]: {
              shapes: {
                [this.initialShape.id]: this.isCreating ? void 0 : this.initialShape
              }
            }
          },
          pageStates: {
            [this.currentPageId]: {
              selectedIds: this.isCreating ? [] : this.initialSelectedIds,
              editingId: void 0
            }
          }
        }
      };
    });
    __publicField(this, "complete", () => {
      const shape = this.app.getShape(this.initialShape.id);
      return {
        id: "edit",
        before: {
          document: {
            pages: {
              [this.currentPageId]: {
                shapes: {
                  [this.initialShape.id]: this.isCreating ? void 0 : this.initialShape
                }
              }
            },
            pageStates: {
              [this.currentPageId]: {
                selectedIds: this.isCreating ? [] : this.initialSelectedIds,
                editingId: void 0
              }
            }
          }
        },
        after: {
          document: {
            pages: {
              [this.currentPageId]: {
                shapes: {
                  [this.initialShape.id]: shape
                }
              }
            },
            pageStates: {
              [this.currentPageId]: {
                selectedIds: [shape.id],
                editingId: void 0
              }
            }
          }
        }
      };
    });
    this.initialShape = app.getShape(id, app.currentPageId);
    this.currentPageId = app.currentPageId;
    this.isCreating = isCreating;
    this.initialSelectedIds = [...app.selectedIds];
  }
};

// src/state/sessions/EraseSession/EraseSession.ts
import { Vec as Vec28 } from "@tldraw/vec";
var EraseSession = class extends BaseSession {
  constructor(app) {
    super(app);
    __publicField(this, "type", "draw" /* Draw */);
    __publicField(this, "performanceMode");
    __publicField(this, "status", "creating" /* Creating */);
    __publicField(this, "isLocked");
    __publicField(this, "lockedDirection");
    __publicField(this, "erasedShapes", /* @__PURE__ */ new Set());
    __publicField(this, "erasedBindings", /* @__PURE__ */ new Set());
    __publicField(this, "initialSelectedShapes");
    __publicField(this, "erasableShapes");
    __publicField(this, "prevPoint");
    __publicField(this, "prevEraseShapesSize", 0);
    __publicField(this, "interval");
    __publicField(this, "timestamp1", 0);
    __publicField(this, "timestamp2", 0);
    __publicField(this, "prevErasePoint", []);
    __publicField(this, "loop", () => {
      const now = Date.now();
      const elapsed1 = now - this.timestamp1;
      const elapsed2 = now - this.timestamp2;
      const { eraseLine } = this.app.appState;
      let next = [...eraseLine];
      let didUpdate = false;
      if (elapsed1 > 16 && this.prevErasePoint !== this.prevPoint) {
        didUpdate = true;
        next = [...eraseLine, this.prevPoint];
        this.prevErasePoint = this.prevPoint;
      }
      if (elapsed2 > 32) {
        if (next.length > 1) {
          didUpdate = true;
          next.splice(0, Math.ceil(next.length * 0.1));
          this.timestamp2 = now;
        }
      }
      if (didUpdate) {
        this.app.patchState(
          {
            appState: {
              eraseLine: next
            }
          },
          "eraseline"
        );
      }
      this.interval = requestAnimationFrame(this.loop);
    });
    __publicField(this, "start", () => void 0);
    __publicField(this, "update", () => {
      const { page, shiftKey, originPoint, currentPoint, zoom } = this.app;
      if (shiftKey) {
        const delta = Vec28.sub(currentPoint, originPoint);
        if (!this.isLocked && Vec28.len(delta) > 3 / zoom) {
          if (!this.lockedDirection) {
            const delta2 = Vec28.sub(currentPoint, originPoint);
            this.lockedDirection = Math.abs(delta2[0]) > Math.abs(delta2[1]) ? "horizontal" : "vertical";
          }
          this.isLocked = true;
        }
      } else if (this.isLocked) {
        this.isLocked = false;
      }
      if (this.isLocked) {
        if (this.lockedDirection === "vertical") {
          currentPoint[0] = originPoint[0];
        } else {
          currentPoint[1] = originPoint[1];
        }
      }
      const newPoint = Vec28.toFixed(Vec28.add(originPoint, Vec28.sub(currentPoint, originPoint)));
      const deletedShapeIds = /* @__PURE__ */ new Set([]);
      this.erasableShapes.forEach((shape) => {
        if (this.erasedShapes.has(shape))
          return;
        if (this.app.getShapeUtil(shape).hitTestLineSegment(shape, this.prevPoint, newPoint)) {
          this.erasedShapes.add(shape);
          deletedShapeIds.add(shape.id);
          if (shape.children !== void 0) {
            for (const childId of shape.children) {
              this.erasedShapes.add(this.app.getShape(childId));
              deletedShapeIds.add(childId);
            }
          }
        }
      });
      Object.values(page.bindings).forEach((binding) => {
        for (const id of [binding.toId, binding.fromId]) {
          if (deletedShapeIds.has(id)) {
            this.erasedBindings.add(binding);
          }
        }
      });
      this.erasedShapes.forEach((shape) => {
        if (!this.app.getShape(shape.id)) {
          this.erasedShapes.delete(shape);
          this.erasableShapes.delete(shape);
          deletedShapeIds.delete(shape.id);
        }
      });
      const erasedShapes = Array.from(this.erasedShapes.values());
      this.prevPoint = newPoint;
      if (erasedShapes.length === this.prevEraseShapesSize) {
        return;
      }
      this.prevEraseShapesSize = erasedShapes.length;
      return {
        document: {
          pages: {
            [page.id]: {
              shapes: Object.fromEntries(erasedShapes.map((shape) => [shape.id, { isGhost: true }]))
            }
          }
        }
      };
    });
    __publicField(this, "cancel", () => {
      const { page } = this.app;
      cancelAnimationFrame(this.interval);
      this.erasedShapes.forEach((shape) => {
        if (!this.app.getShape(shape.id)) {
          this.erasedShapes.delete(shape);
          this.erasableShapes.delete(shape);
        }
      });
      const erasedShapes = Array.from(this.erasedShapes.values());
      return {
        document: {
          pages: {
            [page.id]: {
              shapes: Object.fromEntries(erasedShapes.map((shape) => [shape.id, { isGhost: false }]))
            }
          },
          pageStates: {
            [page.id]: {
              selectedIds: this.initialSelectedShapes.map((shape) => shape.id)
            }
          }
        },
        appState: {
          eraseLine: []
        }
      };
    });
    __publicField(this, "complete", () => {
      const { page } = this.app;
      cancelAnimationFrame(this.interval);
      this.erasedShapes.forEach((shape) => {
        if (!this.app.getShape(shape.id)) {
          this.erasedShapes.delete(shape);
          this.erasableShapes.delete(shape);
        }
      });
      this.erasedBindings.forEach((binding) => {
        if (!this.app.getBinding(binding.id)) {
          this.erasedBindings.delete(binding);
        }
      });
      const erasedShapes = Array.from(this.erasedShapes.values());
      const erasedBindings = Array.from(this.erasedBindings.values());
      const erasedShapeIds = erasedShapes.map((shape) => shape.id);
      const erasedBindingIds = erasedBindings.map((binding) => binding.id);
      const before = {
        shapes: Object.fromEntries(erasedShapes.map((shape) => [shape.id, shape])),
        bindings: Object.fromEntries(erasedBindings.map((binding) => [binding.id, binding]))
      };
      const after = {
        shapes: Object.fromEntries(erasedShapes.map((shape) => [shape.id, void 0])),
        bindings: Object.fromEntries(erasedBindings.map((binding) => [binding.id, void 0]))
      };
      this.app.shapes.forEach((shape) => {
        if (shape.handles && !after.shapes[shape.id]) {
          Object.values(shape.handles).forEach((handle) => {
            var _a, _b;
            if (handle.bindingId && erasedBindingIds.includes(handle.bindingId)) {
              before.shapes[shape.id] = __spreadProps(__spreadValues({}, before.shapes[shape.id]), {
                handles: __spreadProps(__spreadValues({}, (_a = before.shapes[shape.id]) == null ? void 0 : _a.handles), {
                  [handle.id]: handle
                })
              });
              if (!erasedShapeIds.includes(shape.id)) {
                after.shapes[shape.id] = __spreadProps(__spreadValues({}, after.shapes[shape.id]), {
                  handles: __spreadProps(__spreadValues({}, (_b = after.shapes[shape.id]) == null ? void 0 : _b.handles), {
                    [handle.id]: __spreadProps(__spreadValues({}, handle), {
                      bindingId: void 0
                    })
                  })
                });
              }
            }
          });
        }
      });
      return {
        id: "erase",
        before: {
          document: {
            pages: {
              [page.id]: before
            },
            pageStates: {
              [page.id]: {
                selectedIds: this.initialSelectedShapes.filter((shape) => !!this.app.getShape(shape.id)).map((shape) => shape.id)
              }
            }
          },
          appState: {
            eraseLine: []
          }
        },
        after: {
          document: {
            pages: {
              [page.id]: after
            },
            pageStates: {
              [page.id]: {
                selectedIds: this.initialSelectedShapes.filter((shape) => !!this.app.getShape(shape.id)).filter((shape) => !erasedShapeIds.includes(shape.id)).map((shape) => shape.id)
              }
            }
          },
          appState: {
            eraseLine: []
          }
        }
      };
    });
    this.prevPoint = [...app.originPoint];
    this.initialSelectedShapes = this.app.selectedIds.map((id) => this.app.getShape(id));
    this.erasableShapes = new Set(this.app.shapes.filter((shape) => !shape.isLocked));
    this.interval = this.loop();
  }
};

// src/state/sessions/GridSession/GridSession.ts
import { Utils as Utils41 } from "@tldraw/core";
import { Vec as Vec29 } from "@tldraw/vec";
var GridSession = class extends BaseSession {
  constructor(app, id) {
    var _a;
    super(app);
    __publicField(this, "type", "grid" /* Grid */);
    __publicField(this, "performanceMode");
    __publicField(this, "status", "translating" /* Translating */);
    __publicField(this, "shape");
    __publicField(this, "bounds");
    __publicField(this, "initialSelectedIds");
    __publicField(this, "initialSiblings");
    __publicField(this, "grid", {});
    __publicField(this, "columns", 1);
    __publicField(this, "rows", 1);
    __publicField(this, "isCopying", false);
    __publicField(this, "start", () => void 0);
    __publicField(this, "update", () => {
      const { currentPageId, altKey, shiftKey, currentPoint } = this.app;
      const nextShapes = {};
      const nextPageState = {};
      const center = Utils41.getBoundsCenter(this.bounds);
      const offset = Vec29.sub(currentPoint, center);
      if (shiftKey) {
        if (Math.abs(offset[0]) < Math.abs(offset[1])) {
          offset[0] = 0;
        } else {
          offset[1] = 0;
        }
      }
      const gapX = this.bounds.width + 32;
      const gapY = this.bounds.height + 32;
      const columns = Math.ceil(offset[0] / gapX);
      const rows = Math.ceil(offset[1] / gapY);
      const minX = Math.min(columns, 0);
      const minY = Math.min(rows, 0);
      const maxX = Math.max(columns, 1);
      const maxY = Math.max(rows, 1);
      const inGrid = /* @__PURE__ */ new Set();
      const isCopying = altKey;
      if (isCopying !== this.isCopying) {
        Object.values(this.grid).filter((id) => id !== this.shape.id).forEach((id) => nextShapes[id] = void 0);
        this.grid = { "0_0": this.shape.id };
        this.isCopying = isCopying;
      }
      for (let x = minX; x < maxX; x++) {
        for (let y = minY; y < maxY; y++) {
          const position = `${x}_${y}`;
          inGrid.add(position);
          if (this.grid[position])
            continue;
          if (x === 0 && y === 0)
            continue;
          const clone = this.getClone(Vec29.add(this.shape.point, [x * gapX, y * gapY]), isCopying);
          nextShapes[clone.id] = clone;
          this.grid[position] = clone.id;
        }
      }
      Object.entries(this.grid).forEach(([position, id]) => {
        if (!inGrid.has(position)) {
          nextShapes[id] = void 0;
          delete this.grid[position];
        }
      });
      if (Object.values(nextShapes).length === 0)
        return;
      if (this.initialSiblings) {
        nextShapes[this.shape.parentId] = {
          children: [...this.initialSiblings, ...Object.values(this.grid)]
        };
      }
      return {
        document: {
          pages: {
            [currentPageId]: {
              shapes: nextShapes
            }
          },
          pageStates: {
            [currentPageId]: nextPageState
          }
        }
      };
    });
    __publicField(this, "cancel", () => {
      const { currentPageId } = this.app;
      const nextShapes = {};
      Object.values(this.grid).forEach((id) => {
        nextShapes[id] = void 0;
      });
      nextShapes[this.shape.id] = __spreadProps(__spreadValues({}, nextShapes[this.shape.id]), { point: this.shape.point });
      if (this.initialSiblings) {
        nextShapes[this.shape.parentId] = {
          children: [...this.initialSiblings, this.shape.id]
        };
      }
      return {
        document: {
          pages: {
            [currentPageId]: {
              shapes: nextShapes
            }
          },
          pageStates: {
            [currentPageId]: {
              selectedIds: [this.shape.id]
            }
          }
        }
      };
    });
    __publicField(this, "complete", () => {
      const { currentPageId } = this.app;
      const beforeShapes = {};
      const afterShapes = {};
      const afterSelectedIds = [];
      Object.values(this.grid).forEach((id) => {
        beforeShapes[id] = void 0;
        afterShapes[id] = this.app.getShape(id);
        afterSelectedIds.push(id);
      });
      beforeShapes[this.shape.id] = this.shape;
      if (this.initialSiblings) {
        beforeShapes[this.shape.parentId] = {
          children: [...this.initialSiblings, this.shape.id]
        };
        afterShapes[this.shape.parentId] = {
          children: [...this.initialSiblings, ...Object.values(this.grid)]
        };
      }
      if (afterSelectedIds.length === 1)
        return;
      return {
        id: "grid",
        before: {
          document: {
            pages: {
              [currentPageId]: {
                shapes: beforeShapes
              }
            },
            pageStates: {
              [currentPageId]: {
                selectedIds: [],
                hoveredId: void 0
              }
            }
          }
        },
        after: {
          document: {
            pages: {
              [currentPageId]: {
                shapes: afterShapes
              }
            },
            pageStates: {
              [currentPageId]: {
                selectedIds: afterSelectedIds,
                hoveredId: void 0
              }
            }
          }
        }
      };
    });
    __publicField(this, "getClone", (point, copy) => {
      const clone = __spreadProps(__spreadValues({}, this.shape), {
        id: Utils41.uniqueId(),
        point
      });
      if (!copy) {
        if (clone.type === "sticky" /* Sticky */) {
          clone.text = "";
        }
      }
      return clone;
    });
    this.shape = this.app.getShape(id);
    this.grid["0_0"] = this.shape.id;
    this.bounds = this.app.getShapeBounds(id);
    this.initialSelectedIds = [...this.app.selectedIds];
    if (this.shape.parentId !== this.app.currentPageId) {
      this.initialSiblings = (_a = this.app.getShape(this.shape.parentId).children) == null ? void 0 : _a.filter((id2) => id2 !== this.shape.id);
    }
  }
};

// src/state/sessions/HandleSession/HandleSession.ts
import { Vec as Vec30 } from "@tldraw/vec";
var HandleSession = class extends BaseSession {
  constructor(app, shapeId, handleId, commandId = "move_handle") {
    super(app);
    __publicField(this, "type", "handle" /* Handle */);
    __publicField(this, "performanceMode");
    __publicField(this, "status", "translatingHandle" /* TranslatingHandle */);
    __publicField(this, "commandId");
    __publicField(this, "topLeft");
    __publicField(this, "shiftKey", false);
    __publicField(this, "initialShape");
    __publicField(this, "handleId");
    __publicField(this, "start", () => void 0);
    __publicField(this, "update", () => {
      var _a, _b;
      const {
        initialShape,
        app: { currentPageId, currentPoint }
      } = this;
      const shape = this.app.getShape(initialShape.id);
      if (shape.isLocked)
        return void 0;
      const handles = shape.handles;
      const handleId = this.handleId;
      const delta = Vec30.sub(currentPoint, handles[handleId].point);
      const handleChanges = {
        [handleId]: __spreadProps(__spreadValues({}, handles[handleId]), {
          point: Vec30.sub(Vec30.add(handles[handleId].point, delta), shape.point)
        })
      };
      const change = (_b = (_a = TLDR.getShapeUtil(shape)).onHandleChange) == null ? void 0 : _b.call(_a, shape, handleChanges);
      if (!change)
        return;
      return {
        document: {
          pages: {
            [currentPageId]: {
              shapes: {
                [shape.id]: change
              }
            }
          }
        }
      };
    });
    __publicField(this, "cancel", () => {
      const {
        initialShape,
        app: { currentPageId }
      } = this;
      return {
        document: {
          pages: {
            [currentPageId]: {
              shapes: {
                [initialShape.id]: initialShape
              }
            }
          }
        }
      };
    });
    __publicField(this, "complete", () => {
      const {
        initialShape,
        app: { currentPageId }
      } = this;
      return {
        id: this.commandId,
        before: {
          document: {
            pages: {
              [currentPageId]: {
                shapes: {
                  [initialShape.id]: initialShape
                }
              }
            }
          }
        },
        after: {
          document: {
            pages: {
              [currentPageId]: {
                shapes: {
                  [initialShape.id]: TLDR.onSessionComplete(this.app.getShape(this.initialShape.id))
                }
              }
            }
          }
        }
      };
    });
    const { originPoint } = app;
    this.topLeft = [...originPoint];
    this.handleId = handleId;
    this.initialShape = this.app.getShape(shapeId);
    this.commandId = commandId;
  }
};

// src/state/sessions/RotateSession/RotateSession.ts
import { Utils as Utils42 } from "@tldraw/core";
import { Vec as Vec31 } from "@tldraw/vec";
var RotateSession = class extends BaseSession {
  constructor(app) {
    super(app);
    __publicField(this, "type", "rotate" /* Rotate */);
    __publicField(this, "status", "transforming" /* Transforming */);
    __publicField(this, "performanceMode");
    __publicField(this, "delta", [0, 0]);
    __publicField(this, "commonBoundsCenter");
    __publicField(this, "initialAngle");
    __publicField(this, "initialShapes");
    __publicField(this, "changes", {});
    __publicField(this, "start", () => void 0);
    __publicField(this, "update", () => {
      const {
        commonBoundsCenter,
        initialShapes,
        app: { currentPageId, currentPoint, shiftKey }
      } = this;
      const shapes = {};
      let directionDelta = Vec31.angle(commonBoundsCenter, currentPoint) - this.initialAngle;
      if (shiftKey) {
        directionDelta = Utils42.snapAngleToSegments(directionDelta, 24);
      }
      initialShapes.forEach(({ center, shape }) => {
        const { rotation = 0 } = shape;
        let shapeDelta = 0;
        if (shiftKey) {
          const snappedRotation = Utils42.snapAngleToSegments(rotation, 24);
          shapeDelta = snappedRotation - rotation;
        }
        const change = TLDR.getRotatedShapeMutation(
          shape,
          center,
          commonBoundsCenter,
          shiftKey ? directionDelta + shapeDelta : directionDelta
        );
        if (change) {
          shapes[shape.id] = change;
        }
      });
      this.changes = shapes;
      return {
        document: {
          pages: {
            [currentPageId]: {
              shapes
            }
          }
        }
      };
    });
    __publicField(this, "cancel", () => {
      const {
        initialShapes,
        app: { currentPageId }
      } = this;
      const shapes = {};
      initialShapes.forEach(({ shape }) => shapes[shape.id] = shape);
      return {
        document: {
          pages: {
            [currentPageId]: {
              shapes
            }
          }
        }
      };
    });
    __publicField(this, "complete", () => {
      const {
        initialShapes,
        app: { currentPageId }
      } = this;
      const beforeShapes = {};
      const afterShapes = this.changes;
      initialShapes.forEach(({ shape: { id, point, rotation, handles } }) => {
        beforeShapes[id] = { point, rotation, handles };
      });
      return {
        id: "rotate",
        before: {
          document: {
            pages: {
              [currentPageId]: {
                shapes: beforeShapes
              }
            }
          }
        },
        after: {
          document: {
            pages: {
              [currentPageId]: {
                shapes: afterShapes
              }
            }
          }
        }
      };
    });
    const {
      app: { currentPageId, pageState, originPoint }
    } = this;
    const initialShapes = TLDR.getSelectedBranchSnapshot(app.state, currentPageId).filter(
      (shape) => !shape.isLocked
    );
    if (initialShapes.length === 0) {
      throw Error("No selected shapes!");
    }
    if (app.rotationInfo.selectedIds === pageState.selectedIds) {
      if (app.rotationInfo.center === void 0) {
        throw Error("We should have a center for rotation!");
      }
      this.commonBoundsCenter = app.rotationInfo.center;
    } else {
      this.commonBoundsCenter = Utils42.getBoundsCenter(
        Utils42.getCommonBounds(initialShapes.map(TLDR.getBounds))
      );
      app.rotationInfo.selectedIds = pageState.selectedIds;
      app.rotationInfo.center = this.commonBoundsCenter;
    }
    this.initialShapes = initialShapes.filter((shape) => shape.children === void 0).map((shape) => {
      return {
        shape,
        center: this.app.getShapeUtil(shape).getCenter(shape)
      };
    });
    this.initialAngle = Vec31.angle(this.commonBoundsCenter, originPoint);
  }
};

// src/state/sessions/TransformSession/TransformSession.ts
import { TLBoundsCorner as TLBoundsCorner3, Utils as Utils43 } from "@tldraw/core";
import { Vec as Vec32 } from "@tldraw/vec";
var TransformSession = class extends BaseSession {
  constructor(app, transformType = TLBoundsCorner3.BottomRight, isCreate = false) {
    super(app);
    this.transformType = transformType;
    this.isCreate = isCreate;
    __publicField(this, "type", "transform" /* Transform */);
    __publicField(this, "performanceMode");
    __publicField(this, "status", "transforming" /* Transforming */);
    __publicField(this, "scaleX", 1);
    __publicField(this, "scaleY", 1);
    __publicField(this, "initialShapes");
    __publicField(this, "initialShapeIds");
    __publicField(this, "initialSelectedIds");
    __publicField(this, "shapeBounds");
    __publicField(this, "hasUnlockedShapes");
    __publicField(this, "isAllAspectRatioLocked");
    __publicField(this, "initialCommonBounds");
    __publicField(this, "snapInfo", { state: "empty" });
    __publicField(this, "prevPoint", [0, 0]);
    __publicField(this, "speed", 1);
    __publicField(this, "start", () => {
      this.snapInfo = {
        state: "ready",
        bounds: this.app.shapes.filter((shape) => !this.initialShapeIds.includes(shape.id)).map((shape) => Utils43.getBoundsWithCenter(TLDR.getRotatedBounds(shape)))
      };
      return void 0;
    });
    __publicField(this, "update", () => {
      const {
        transformType,
        shapeBounds,
        initialCommonBounds,
        isAllAspectRatioLocked,
        app: {
          currentPageId,
          pageState: { camera },
          viewport,
          currentPoint,
          previousPoint,
          originPoint,
          shiftKey,
          altKey,
          metaKey,
          currentGrid,
          settings: { isSnapping, showGrid }
        }
      } = this;
      const shapes = {};
      const delta = altKey ? Vec32.mul(Vec32.sub(currentPoint, originPoint), 2) : Vec32.sub(currentPoint, originPoint);
      let newBounds = Utils43.getTransformedBoundingBox(
        initialCommonBounds,
        transformType,
        delta,
        0,
        shiftKey || isAllAspectRatioLocked
      );
      if (altKey) {
        newBounds = __spreadValues(__spreadValues({}, newBounds), Utils43.centerBounds(newBounds, Utils43.getBoundsCenter(initialCommonBounds)));
      }
      if (showGrid) {
        newBounds = __spreadValues(__spreadValues({}, newBounds), Utils43.snapBoundsToGrid(newBounds, currentGrid));
      }
      const speed = Vec32.dist(currentPoint, previousPoint);
      const speedChange = speed - this.speed;
      this.speed = this.speed + speedChange * (speedChange > 1 ? 0.5 : 0.15);
      let snapLines = [];
      if ((isSnapping && !metaKey || !isSnapping && metaKey) && this.speed * camera.zoom < SLOW_SPEED && this.snapInfo.state === "ready") {
        const snapResult = Utils43.getSnapPoints(
          Utils43.getBoundsWithCenter(newBounds),
          this.snapInfo.bounds.filter(
            (bounds) => Utils43.boundsContain(viewport, bounds) || Utils43.boundsCollide(viewport, bounds)
          ),
          SNAP_DISTANCE / camera.zoom
        );
        if (snapResult) {
          snapLines = snapResult.snapLines;
          newBounds = Utils43.getTransformedBoundingBox(
            initialCommonBounds,
            transformType,
            Vec32.sub(delta, snapResult.offset),
            0,
            shiftKey || isAllAspectRatioLocked
          );
        }
      }
      this.scaleX = newBounds.scaleX;
      this.scaleY = newBounds.scaleY;
      shapeBounds.forEach(({ initialShape, initialShapeBounds, transformOrigin }) => {
        let newShapeBounds = Utils43.getRelativeTransformedBoundingBox(
          newBounds,
          initialCommonBounds,
          initialShapeBounds,
          this.scaleX < 0,
          this.scaleY < 0
        );
        if (showGrid) {
          newShapeBounds = Utils43.snapBoundsToGrid(newShapeBounds, currentGrid);
        }
        const afterShape = TLDR.transform(this.app.getShape(initialShape.id), newShapeBounds, {
          type: this.transformType,
          initialShape,
          scaleX: this.scaleX,
          scaleY: this.scaleY,
          transformOrigin
        });
        shapes[initialShape.id] = afterShape;
      });
      return {
        appState: {
          snapLines
        },
        document: {
          pages: {
            [currentPageId]: {
              shapes
            }
          }
        }
      };
    });
    __publicField(this, "cancel", () => {
      const {
        shapeBounds,
        app: { currentPageId }
      } = this;
      const shapes = {};
      if (this.isCreate) {
        shapeBounds.forEach((shape) => shapes[shape.initialShape.id] = void 0);
      } else {
        shapeBounds.forEach((shape) => shapes[shape.initialShape.id] = shape.initialShape);
      }
      return {
        appState: {
          snapLines: []
        },
        document: {
          pages: {
            [currentPageId]: {
              shapes
            }
          },
          pageStates: {
            [currentPageId]: {
              selectedIds: this.isCreate ? [] : shapeBounds.map((shape) => shape.initialShape.id)
            }
          }
        }
      };
    });
    __publicField(this, "complete", () => {
      const {
        isCreate,
        shapeBounds,
        hasUnlockedShapes,
        app: { currentPageId }
      } = this;
      if (!hasUnlockedShapes)
        return;
      if (this.isCreate && Vec32.dist(this.app.originPoint, this.app.currentPoint) < 2) {
        return this.cancel();
      }
      const beforeShapes = {};
      const afterShapes = {};
      let beforeSelectedIds;
      let afterSelectedIds;
      if (isCreate) {
        beforeSelectedIds = [];
        afterSelectedIds = [];
        shapeBounds.forEach(({ initialShape }) => {
          beforeShapes[initialShape.id] = void 0;
          afterShapes[initialShape.id] = this.app.getShape(initialShape.id);
        });
      } else {
        beforeSelectedIds = this.initialSelectedIds;
        afterSelectedIds = this.initialSelectedIds;
        shapeBounds.forEach(({ initialShape }) => {
          beforeShapes[initialShape.id] = initialShape;
          afterShapes[initialShape.id] = this.app.getShape(initialShape.id);
        });
      }
      return {
        id: "transform",
        before: {
          appState: {
            snapLines: []
          },
          document: {
            pages: {
              [currentPageId]: {
                shapes: beforeShapes
              }
            },
            pageStates: {
              [currentPageId]: {
                selectedIds: beforeSelectedIds,
                hoveredId: void 0,
                editingId: void 0
              }
            }
          }
        },
        after: {
          appState: {
            snapLines: []
          },
          document: {
            pages: {
              [currentPageId]: {
                shapes: afterShapes
              }
            },
            pageStates: {
              [currentPageId]: {
                selectedIds: afterSelectedIds,
                hoveredId: void 0,
                editingId: void 0
              }
            }
          }
        }
      };
    });
    this.initialSelectedIds = [...this.app.selectedIds];
    this.app.rotationInfo.selectedIds = [...this.initialSelectedIds];
    this.initialShapes = TLDR.getSelectedBranchSnapshot(
      this.app.state,
      this.app.currentPageId
    ).filter((shape) => !shape.isLocked);
    this.initialShapeIds = this.initialShapes.map((shape) => shape.id);
    this.hasUnlockedShapes = this.initialShapes.length > 0;
    this.isAllAspectRatioLocked = this.initialShapes.every(
      (shape) => shape.isAspectRatioLocked || TLDR.getShapeUtil(shape).isAspectRatioLocked
    );
    const shapesBounds = Object.fromEntries(
      this.initialShapes.map((shape) => [shape.id, TLDR.getBounds(shape)])
    );
    const boundsArr = Object.values(shapesBounds);
    this.initialCommonBounds = Utils43.getCommonBounds(boundsArr);
    const initialInnerBounds = Utils43.getBoundsFromPoints(boundsArr.map(Utils43.getBoundsCenter));
    this.shapeBounds = this.initialShapes.map((shape) => {
      const initialShapeBounds = shapesBounds[shape.id];
      const ic = Utils43.getBoundsCenter(initialShapeBounds);
      const ix = (ic[0] - initialInnerBounds.minX) / initialInnerBounds.width;
      const iy = (ic[1] - initialInnerBounds.minY) / initialInnerBounds.height;
      return {
        initialShape: shape,
        initialShapeBounds,
        transformOrigin: [ix, iy]
      };
    });
  }
};

// src/state/sessions/TransformSingleSession/TransformSingleSession.ts
import {
  Utils as Utils44
} from "@tldraw/core";
import { Vec as Vec33 } from "@tldraw/vec";
var TransformSingleSession = class extends BaseSession {
  constructor(app, id, transformType, isCreate = false) {
    super(app);
    __publicField(this, "type", "transformSingle" /* TransformSingle */);
    __publicField(this, "status", "transforming" /* Transforming */);
    __publicField(this, "performanceMode");
    __publicField(this, "transformType");
    __publicField(this, "scaleX", 1);
    __publicField(this, "scaleY", 1);
    __publicField(this, "isCreate");
    __publicField(this, "initialShape");
    __publicField(this, "initialShapeBounds");
    __publicField(this, "initialCommonBounds");
    __publicField(this, "snapInfo", { state: "empty" });
    __publicField(this, "prevPoint", [0, 0]);
    __publicField(this, "speed", 1);
    __publicField(this, "start", () => {
      this.snapInfo = {
        state: "ready",
        bounds: this.app.shapes.filter((shape) => shape.id !== this.initialShape.id).map((shape) => Utils44.getBoundsWithCenter(TLDR.getRotatedBounds(shape)))
      };
      return void 0;
    });
    __publicField(this, "update", () => {
      const {
        transformType,
        initialShape,
        initialShapeBounds,
        app: {
          settings: { isSnapping, showGrid },
          currentPageId,
          pageState: { camera },
          viewport,
          currentPoint,
          previousPoint,
          originPoint,
          currentGrid,
          shiftKey,
          altKey,
          metaKey
        }
      } = this;
      if (initialShape.isLocked)
        return void 0;
      const shapes = {};
      const delta = altKey ? Vec33.mul(Vec33.sub(currentPoint, originPoint), 2) : Vec33.sub(currentPoint, originPoint);
      const shape = this.app.getShape(initialShape.id);
      const utils = TLDR.getShapeUtil(shape);
      let newBounds = Utils44.getTransformedBoundingBox(
        initialShapeBounds,
        transformType,
        delta,
        shape.rotation,
        shiftKey || shape.isAspectRatioLocked || utils.isAspectRatioLocked
      );
      if (altKey) {
        newBounds = __spreadValues(__spreadValues({}, newBounds), Utils44.centerBounds(newBounds, Utils44.getBoundsCenter(initialShapeBounds)));
      }
      if (showGrid) {
        newBounds = __spreadValues(__spreadValues({}, newBounds), Utils44.snapBoundsToGrid(newBounds, currentGrid));
      }
      const speed = Vec33.dist(currentPoint, previousPoint);
      const speedChange = speed - this.speed;
      this.speed = this.speed + speedChange * (speedChange > 1 ? 0.5 : 0.15);
      let snapLines = [];
      if ((isSnapping && !metaKey || !isSnapping && metaKey) && !initialShape.rotation && this.speed * camera.zoom < SLOW_SPEED && this.snapInfo.state === "ready") {
        const snapResult = Utils44.getSnapPoints(
          Utils44.getBoundsWithCenter(newBounds),
          this.snapInfo.bounds.filter(
            (bounds) => Utils44.boundsContain(viewport, bounds) || Utils44.boundsCollide(viewport, bounds)
          ),
          SNAP_DISTANCE / camera.zoom
        );
        if (snapResult) {
          snapLines = snapResult.snapLines;
          newBounds = Utils44.getTransformedBoundingBox(
            initialShapeBounds,
            transformType,
            Vec33.sub(delta, snapResult.offset),
            shape.rotation,
            shiftKey || shape.isAspectRatioLocked || utils.isAspectRatioLocked
          );
        }
      }
      const afterShape = TLDR.getShapeUtil(shape).transformSingle(shape, newBounds, {
        initialShape,
        type: this.transformType,
        scaleX: newBounds.scaleX,
        scaleY: newBounds.scaleY,
        transformOrigin: [0.5, 0.5]
      });
      if (afterShape) {
        shapes[shape.id] = afterShape;
      }
      if (showGrid && afterShape && afterShape.point) {
        afterShape.point = Vec33.snap(afterShape.point, currentGrid);
      }
      return {
        appState: {
          snapLines
        },
        document: {
          pages: {
            [currentPageId]: {
              shapes
            }
          }
        }
      };
    });
    __publicField(this, "cancel", () => {
      const {
        initialShape,
        app: { currentPageId }
      } = this;
      const shapes = {};
      if (this.isCreate) {
        shapes[initialShape.id] = void 0;
      } else {
        shapes[initialShape.id] = initialShape;
      }
      return {
        appState: {
          snapLines: []
        },
        document: {
          pages: {
            [currentPageId]: {
              shapes
            }
          },
          pageStates: {
            [currentPageId]: {
              selectedIds: this.isCreate ? [] : [initialShape.id]
            }
          }
        }
      };
    });
    __publicField(this, "complete", () => {
      const {
        initialShape,
        app: { currentPageId }
      } = this;
      if (initialShape.isLocked)
        return;
      if (this.isCreate && Vec33.dist(this.app.originPoint, this.app.currentPoint) < 2) {
        return this.cancel();
      }
      const beforeShapes = {};
      const afterShapes = {};
      beforeShapes[initialShape.id] = this.isCreate ? void 0 : initialShape;
      afterShapes[initialShape.id] = TLDR.onSessionComplete(this.app.getShape(initialShape.id));
      return {
        id: "transform_single",
        before: {
          appState: {
            snapLines: []
          },
          document: {
            pages: {
              [currentPageId]: {
                shapes: beforeShapes
              }
            },
            pageStates: {
              [currentPageId]: {
                selectedIds: this.isCreate ? [] : [initialShape.id],
                editingId: void 0,
                hoveredId: void 0
              }
            }
          }
        },
        after: {
          appState: {
            snapLines: []
          },
          document: {
            pages: {
              [currentPageId]: {
                shapes: afterShapes
              }
            },
            pageStates: {
              [currentPageId]: {
                selectedIds: [initialShape.id],
                editingId: void 0,
                hoveredId: void 0
              }
            }
          }
        }
      };
    });
    this.isCreate = isCreate;
    this.transformType = transformType;
    const shape = this.app.getShape(id);
    this.initialShape = shape;
    this.initialShapeBounds = TLDR.getBounds(shape);
    this.initialCommonBounds = TLDR.getRotatedBounds(shape);
    this.app.rotationInfo.selectedIds = [shape.id];
  }
};

// src/state/sessions/TranslateSession/TranslateSession.ts
import { Utils as Utils45 } from "@tldraw/core";
import { Vec as Vec34 } from "@tldraw/vec";
var TranslateSession = class extends BaseSession {
  constructor(app, isCreate = false, link = false) {
    super(app);
    __publicField(this, "performanceMode");
    __publicField(this, "type", "translate" /* Translate */);
    __publicField(this, "status", "translating" /* Translating */);
    __publicField(this, "delta", [0, 0]);
    __publicField(this, "prev", [0, 0]);
    __publicField(this, "prevPoint", [0, 0]);
    __publicField(this, "speed", 1);
    __publicField(this, "cloneInfo", {
      state: "empty"
    });
    __publicField(this, "snapInfo", {
      state: "empty"
    });
    __publicField(this, "snapLines", []);
    __publicField(this, "isCloning", false);
    __publicField(this, "isCreate");
    __publicField(this, "link");
    __publicField(this, "initialIds");
    __publicField(this, "hasUnlockedShapes");
    __publicField(this, "initialSelectedIds");
    __publicField(this, "initialCommonBounds");
    __publicField(this, "initialShapes");
    __publicField(this, "initialParentChildren");
    __publicField(this, "bindingsToDelete");
    __publicField(this, "start", () => {
      const {
        bindingsToDelete,
        initialIds,
        app: { currentPageId, page }
      } = this;
      const allBounds = [];
      const otherBounds = [];
      Object.values(page.shapes).forEach((shape) => {
        const bounds = Utils45.getBoundsWithCenter(TLDR.getRotatedBounds(shape));
        allBounds.push(bounds);
        if (!initialIds.has(shape.id)) {
          otherBounds.push(bounds);
        }
      });
      this.snapInfo = {
        state: "ready",
        bounds: allBounds,
        others: otherBounds
      };
      if (bindingsToDelete.length === 0)
        return;
      const nextBindings = {};
      const nextShapes = {};
      bindingsToDelete.forEach((binding) => {
        nextBindings[binding.id] = void 0;
        const fromShape = this.app.getShape(binding.fromId);
        nextShapes[binding.fromId] = {
          handles: __spreadProps(__spreadValues({}, fromShape.handles), {
            [binding.handleId]: __spreadProps(__spreadValues({}, fromShape.handles[binding.handleId]), {
              bindingId: void 0
            })
          })
        };
      });
      return {
        document: {
          pages: {
            [currentPageId]: {
              bindings: nextBindings,
              shapes: nextShapes
            }
          }
        }
      };
    });
    __publicField(this, "update", () => {
      const {
        initialParentChildren,
        initialShapes,
        initialCommonBounds,
        bindingsToDelete,
        app: {
          pageState: { camera },
          settings: { isSnapping, showGrid },
          currentPageId,
          viewport,
          selectedIds,
          currentPoint,
          previousPoint,
          originPoint,
          altKey,
          shiftKey,
          metaKey,
          currentGrid
        }
      } = this;
      const nextBindings = {};
      const nextShapes = {};
      const nextPageState = {};
      let delta = Vec34.sub(currentPoint, originPoint);
      let didChangeCloning = false;
      if (!this.isCreate) {
        if (altKey && !this.isCloning) {
          this.isCloning = true;
          didChangeCloning = true;
        } else if (!altKey && this.isCloning) {
          this.isCloning = false;
          didChangeCloning = true;
        }
      }
      if (shiftKey) {
        if (Math.abs(delta[0]) < Math.abs(delta[1])) {
          delta[0] = 0;
        } else {
          delta[1] = 0;
        }
      }
      const speed = Vec34.dist(currentPoint, previousPoint);
      const change = speed - this.speed;
      this.speed = this.speed + change * (change > 1 ? 0.5 : 0.15);
      this.snapLines = [];
      if ((isSnapping && !metaKey || !isSnapping && metaKey) && this.speed * camera.zoom < SLOW_SPEED && this.snapInfo.state === "ready") {
        const snapResult = Utils45.getSnapPoints(
          Utils45.getBoundsWithCenter(
            showGrid ? Utils45.snapBoundsToGrid(Utils45.translateBounds(initialCommonBounds, delta), currentGrid) : Utils45.translateBounds(initialCommonBounds, delta)
          ),
          (this.isCloning ? this.snapInfo.bounds : this.snapInfo.others).filter((bounds) => {
            return Utils45.boundsContain(viewport, bounds) || Utils45.boundsCollide(viewport, bounds);
          }),
          SNAP_DISTANCE / camera.zoom
        );
        if (snapResult) {
          this.snapLines = snapResult.snapLines;
          delta = Vec34.sub(delta, snapResult.offset);
        }
      }
      this.prev = delta;
      if (this.isCloning) {
        if (didChangeCloning) {
          if (this.cloneInfo.state === "empty") {
            this.createCloneInfo();
          }
          if (this.cloneInfo.state === "empty") {
            throw Error;
          }
          const { clones, clonedBindings } = this.cloneInfo;
          this.isCloning = true;
          bindingsToDelete.forEach((binding) => nextBindings[binding.id] = binding);
          initialShapes.forEach((shape) => nextShapes[shape.id] = { point: shape.point });
          clones.forEach((clone) => {
            var _a;
            nextShapes[clone.id] = __spreadValues({}, clone);
            if (clone.parentId !== currentPageId && !selectedIds.includes(clone.parentId)) {
              const children = ((_a = nextShapes[clone.parentId]) == null ? void 0 : _a.children) || initialParentChildren[clone.parentId];
              if (!children.includes(clone.id)) {
                nextShapes[clone.parentId] = __spreadProps(__spreadValues({}, nextShapes[clone.parentId]), {
                  children: [...children, clone.id]
                });
              }
            }
          });
          for (const binding of clonedBindings) {
            nextBindings[binding.id] = binding;
          }
          nextPageState.selectedIds = clones.map((clone) => clone.id);
          clones.forEach((clone) => {
            nextShapes[clone.id] = __spreadProps(__spreadValues({}, clone), {
              point: showGrid ? Vec34.snap(Vec34.toFixed(Vec34.add(clone.point, delta)), currentGrid) : Vec34.toFixed(Vec34.add(clone.point, delta))
            });
          });
        } else {
          if (this.cloneInfo.state === "empty")
            throw Error;
          const { clones } = this.cloneInfo;
          clones.forEach((clone) => {
            nextShapes[clone.id] = {
              point: showGrid ? Vec34.snap(Vec34.toFixed(Vec34.add(clone.point, delta)), currentGrid) : Vec34.toFixed(Vec34.add(clone.point, delta))
            };
          });
        }
      } else {
        if (didChangeCloning) {
          if (this.cloneInfo.state === "empty")
            throw Error;
          const { clones, clonedBindings } = this.cloneInfo;
          this.isCloning = false;
          bindingsToDelete.forEach((binding) => nextBindings[binding.id] = void 0);
          clones.forEach((clone) => {
            if (clone.parentId !== currentPageId) {
              nextShapes[clone.parentId] = __spreadProps(__spreadValues({}, nextShapes[clone.parentId]), {
                children: initialParentChildren[clone.parentId]
              });
            }
          });
          clones.forEach((clone) => nextShapes[clone.id] = void 0);
          initialShapes.forEach((shape) => {
            nextShapes[shape.id] = {
              point: showGrid ? Vec34.snap(Vec34.toFixed(Vec34.add(shape.point, delta)), currentGrid) : Vec34.toFixed(Vec34.add(shape.point, delta))
            };
          });
          for (const binding of clonedBindings) {
            nextBindings[binding.id] = void 0;
          }
          nextPageState.selectedIds = initialShapes.map((shape) => shape.id);
        } else {
          initialShapes.forEach((shape) => {
            nextShapes[shape.id] = {
              point: showGrid ? Vec34.snap(Vec34.toFixed(Vec34.add(shape.point, delta)), currentGrid) : Vec34.toFixed(Vec34.add(shape.point, delta))
            };
          });
        }
      }
      return {
        appState: {
          snapLines: this.snapLines
        },
        document: {
          pages: {
            [currentPageId]: {
              shapes: nextShapes,
              bindings: nextBindings
            }
          },
          pageStates: {
            [currentPageId]: nextPageState
          }
        }
      };
    });
    __publicField(this, "cancel", () => {
      const {
        initialShapes,
        initialSelectedIds,
        bindingsToDelete,
        app: { currentPageId }
      } = this;
      const nextBindings = {};
      const nextShapes = {};
      const nextPageState = {
        editingId: void 0,
        hoveredId: void 0
      };
      if (this.isCreate) {
        initialShapes.forEach(({ id }) => nextShapes[id] = void 0);
        nextPageState.selectedIds = [];
      } else {
        initialShapes.forEach(
          ({ id, point, handles }) => nextShapes[id] = handles ? __spreadProps(__spreadValues({}, nextShapes[id]), { point, handles }) : __spreadProps(__spreadValues({}, nextShapes[id]), { point })
        );
        nextPageState.selectedIds = initialSelectedIds;
        bindingsToDelete.forEach((binding) => {
          nextBindings[binding.id] = binding;
        });
      }
      if (this.cloneInfo.state === "ready") {
        const { clones, clonedBindings } = this.cloneInfo;
        clones.forEach((clone) => nextShapes[clone.id] = void 0);
        clonedBindings.forEach((binding) => nextBindings[binding.id] = void 0);
      }
      return {
        appState: {
          snapLines: []
        },
        document: {
          pages: {
            [currentPageId]: {
              shapes: nextShapes,
              bindings: nextBindings
            }
          },
          pageStates: {
            [currentPageId]: nextPageState
          }
        }
      };
    });
    __publicField(this, "complete", () => {
      const {
        initialShapes,
        initialParentChildren,
        bindingsToDelete,
        app: { currentPageId }
      } = this;
      const beforeBindings = {};
      const beforeShapes = {};
      const afterBindings = {};
      const afterShapes = {};
      if (this.isCloning) {
        if (this.cloneInfo.state === "empty") {
          this.createCloneInfo();
        }
        if (this.cloneInfo.state !== "ready")
          throw Error;
        const { clones, clonedBindings } = this.cloneInfo;
        clones.forEach((clone) => {
          beforeShapes[clone.id] = void 0;
          afterShapes[clone.id] = this.app.getShape(clone.id);
          if (clone.parentId !== currentPageId) {
            beforeShapes[clone.parentId] = __spreadProps(__spreadValues({}, beforeShapes[clone.parentId]), {
              children: initialParentChildren[clone.parentId]
            });
            afterShapes[clone.parentId] = __spreadProps(__spreadValues({}, afterShapes[clone.parentId]), {
              children: this.app.getShape(clone.parentId).children
            });
          }
        });
        clonedBindings.forEach((binding) => {
          beforeBindings[binding.id] = void 0;
          afterBindings[binding.id] = this.app.getBinding(binding.id);
        });
      } else {
        initialShapes.forEach((shape) => {
          beforeShapes[shape.id] = this.isCreate ? void 0 : __spreadProps(__spreadValues({}, beforeShapes[shape.id]), {
            point: shape.point
          });
          afterShapes[shape.id] = __spreadValues(__spreadValues({}, afterShapes[shape.id]), this.isCreate ? this.app.getShape(shape.id) : { point: this.app.getShape(shape.id).point });
        });
      }
      bindingsToDelete.forEach((binding) => {
        var _a, _b, _c, _d, _e;
        beforeBindings[binding.id] = binding;
        beforeShapes[binding.fromId] = __spreadProps(__spreadValues({}, beforeShapes[binding.fromId]), {
          id: binding.fromId,
          handles: __spreadProps(__spreadValues({}, (_a = beforeShapes[binding.fromId]) == null ? void 0 : _a.handles), {
            [binding.handleId]: __spreadProps(__spreadValues({}, (_c = (_b = beforeShapes[binding.fromId]) == null ? void 0 : _b.handles) == null ? void 0 : _c[binding.handleId]), {
              bindingId: binding.id
            })
          })
        });
        afterShapes[binding.fromId] = __spreadProps(__spreadValues({}, afterShapes[binding.fromId]), {
          id: binding.fromId,
          handles: __spreadProps(__spreadValues({}, afterShapes[binding.fromId].handles), {
            [binding.handleId]: __spreadProps(__spreadValues({}, (_e = (_d = afterShapes[binding.fromId]) == null ? void 0 : _d.handles) == null ? void 0 : _e[binding.handleId]), {
              bindingId: void 0
            })
          })
        });
      });
      bindingsToDelete.forEach((binding) => afterBindings[binding.id] = void 0);
      return {
        id: "translate",
        before: {
          appState: {
            snapLines: []
          },
          document: {
            pages: {
              [currentPageId]: {
                shapes: beforeShapes,
                bindings: beforeBindings
              }
            },
            pageStates: {
              [currentPageId]: {
                selectedIds: this.isCreate ? [] : [...this.initialSelectedIds]
              }
            }
          }
        },
        after: {
          appState: {
            snapLines: []
          },
          document: {
            pages: {
              [currentPageId]: {
                shapes: afterShapes,
                bindings: afterBindings
              }
            },
            pageStates: {
              [currentPageId]: {
                selectedIds: [...this.app.selectedIds]
              }
            }
          }
        }
      };
    });
    __publicField(this, "createCloneInfo", () => {
      const {
        initialShapes,
        initialParentChildren,
        app: { selectedIds, currentPageId, page }
      } = this;
      const cloneMap = {};
      const clonedBindingsMap = {};
      const clonedBindings = [];
      const clones = [];
      initialShapes.forEach((shape) => {
        const newId = Utils45.uniqueId();
        initialParentChildren[newId] = initialParentChildren[shape.id];
        cloneMap[shape.id] = newId;
        const clone = __spreadProps(__spreadValues({}, Utils45.deepClone(shape)), {
          id: newId,
          parentId: shape.parentId,
          childIndex: TLDR.getChildIndexAbove(this.app.state, shape.id, currentPageId)
        });
        if (clone.type === "video" /* Video */) {
          const element = document.getElementById(shape.id + "_video");
          if (element)
            clone.currentTime = (element.currentTime + 16) % element.duration;
        }
        clones.push(clone);
      });
      clones.forEach((clone) => {
        if (clone.children !== void 0) {
          clone.children = clone.children.map((childId) => cloneMap[childId]);
        }
      });
      clones.forEach((clone) => {
        if (selectedIds.includes(clone.parentId)) {
          clone.parentId = cloneMap[clone.parentId];
        }
      });
      const clonedShapeIds = new Set(Object.keys(cloneMap));
      Object.values(page.bindings).filter((binding) => clonedShapeIds.has(binding.fromId) || clonedShapeIds.has(binding.toId)).forEach((binding) => {
        if (clonedShapeIds.has(binding.fromId)) {
          if (clonedShapeIds.has(binding.toId)) {
            const cloneId = Utils45.uniqueId();
            const cloneBinding = __spreadProps(__spreadValues({}, Utils45.deepClone(binding)), {
              id: cloneId,
              fromId: cloneMap[binding.fromId] || binding.fromId,
              toId: cloneMap[binding.toId] || binding.toId
            });
            clonedBindingsMap[binding.id] = cloneId;
            clonedBindings.push(cloneBinding);
          }
        }
      });
      clones.forEach((clone) => {
        if (clone.handles) {
          if (clone.handles) {
            for (const id in clone.handles) {
              const handle = clone.handles[id];
              handle.bindingId = handle.bindingId ? clonedBindingsMap[handle.bindingId] : void 0;
            }
          }
        }
      });
      clones.forEach((clone) => {
        if (page.shapes[clone.id]) {
          throw Error("uh oh, we didn't clone correctly");
        }
      });
      this.cloneInfo = {
        state: "ready",
        clones,
        cloneMap,
        clonedBindings
      };
    });
    this.isCreate = isCreate;
    this.link = link;
    const { currentPageId, selectedIds, page } = this.app;
    this.initialSelectedIds = [...selectedIds];
    const selectedShapes = (link ? TLDR.getLinkedShapeIds(this.app.state, currentPageId, link, false) : selectedIds).map((id) => this.app.getShape(id)).filter((shape) => !shape.isLocked);
    const selectedShapeIds = new Set(selectedShapes.map((shape) => shape.id));
    this.hasUnlockedShapes = selectedShapes.length > 0;
    this.initialShapes = Array.from(
      new Set(
        selectedShapes.filter((shape) => !selectedShapeIds.has(shape.parentId)).flatMap((shape) => {
          return shape.children ? [shape, ...shape.children.map((childId) => this.app.getShape(childId))] : [shape];
        })
      ).values()
    );
    this.initialIds = new Set(this.initialShapes.map((shape) => shape.id));
    this.bindingsToDelete = [];
    Object.values(page.bindings).filter((binding) => this.initialIds.has(binding.fromId) || this.initialIds.has(binding.toId)).forEach((binding) => {
      if (this.initialIds.has(binding.fromId)) {
        if (!this.initialIds.has(binding.toId)) {
          this.bindingsToDelete.push(binding);
        }
      }
    });
    this.initialParentChildren = {};
    this.initialShapes.map((s) => s.parentId).filter((id) => id !== page.id).forEach((id) => {
      this.initialParentChildren[id] = this.app.getShape(id).children;
    });
    this.initialCommonBounds = Utils45.getCommonBounds(this.initialShapes.map(TLDR.getRotatedBounds));
    this.app.rotationInfo.selectedIds = [...this.app.selectedIds];
  }
};

// src/state/sessions/index.ts
var sessions = {
  ["arrow" /* Arrow */]: ArrowSession,
  ["brush" /* Brush */]: BrushSession,
  ["draw" /* Draw */]: DrawSession,
  ["erase" /* Erase */]: EraseSession,
  ["handle" /* Handle */]: HandleSession,
  ["rotate" /* Rotate */]: RotateSession,
  ["transform" /* Transform */]: TransformSession,
  ["transformSingle" /* TransformSingle */]: TransformSingleSession,
  ["translate" /* Translate */]: TranslateSession,
  ["grid" /* Grid */]: GridSession,
  ["edit" /* Edit */]: EditSession
};
var getSession = (type) => {
  return sessions[type];
};

// src/state/tools/ArrowTool/ArrowTool.ts
import { Utils as Utils47 } from "@tldraw/core";
import Vec35 from "@tldraw/vec";

// src/state/tools/BaseTool.ts
import {
  Utils as Utils46
} from "@tldraw/core";
var BaseTool = class extends TDEventHandler {
  constructor(app) {
    super();
    this.app = app;
    __publicField(this, "type", "select");
    __publicField(this, "previous");
    __publicField(this, "status", "idle" /* Idle */);
    __publicField(this, "setStatus", (status) => {
      this.status = status;
      this.app.setStatus(this.status);
    });
    __publicField(this, "onEnter", () => {
      this.setStatus("idle" /* Idle */);
    });
    __publicField(this, "onExit", () => {
      this.setStatus("idle" /* Idle */);
    });
    __publicField(this, "onCancel", () => {
      if (this.status === "idle" /* Idle */) {
        this.app.selectTool("select");
      } else {
        this.setStatus("idle" /* Idle */);
      }
      this.app.cancelSession();
    });
    __publicField(this, "getNextChildIndex", () => {
      const {
        shapes,
        appState: { currentPageId }
      } = this.app;
      return shapes.length === 0 ? 1 : shapes.filter((shape) => shape.parentId === currentPageId).sort((a, b) => b.childIndex - a.childIndex)[0].childIndex + 1;
    });
    __publicField(this, "onPinchStart", () => {
      this.app.cancelSession();
      this.setStatus("pinching" /* Pinching */);
    });
    __publicField(this, "onPinchEnd", () => {
      if (Utils46.isMobileSafari()) {
        this.app.undoSelect();
      }
      this.setStatus("idle" /* Idle */);
    });
    __publicField(this, "onPinch", (info, e) => {
      var _a;
      if (this.status !== "pinching")
        return;
      if (isNaN(info.delta[0]) || isNaN(info.delta[1]))
        return;
      this.app.pinchZoom(info.point, info.delta, info.delta[2]);
      (_a = this.onPointerMove) == null ? void 0 : _a.call(this, info, e);
    });
    __publicField(this, "onKeyDown", (key) => {
      if (key === "Escape") {
        this.onCancel();
        return;
      }
      if (key === "Meta" || key === "Control" || key === "Alt") {
        this.app.updateSession();
        return;
      }
    });
    __publicField(this, "onKeyUp", (key) => {
      if (key === "Meta" || key === "Control" || key === "Alt") {
        this.app.updateSession();
        return;
      }
    });
    __publicField(this, "onPointerMove", () => {
      if (this.status === "creating" /* Creating */) {
        this.app.updateSession();
      }
    });
    __publicField(this, "onPointerUp", () => {
      if (this.status === "creating" /* Creating */) {
        this.app.completeSession();
        const { isToolLocked } = this.app.appState;
        if (!isToolLocked) {
          this.app.selectTool("select");
        }
      }
      this.setStatus("idle" /* Idle */);
    });
  }
};

// src/state/tools/ArrowTool/ArrowTool.ts
var ArrowTool = class extends BaseTool {
  constructor() {
    super(...arguments);
    __publicField(this, "type", "arrow" /* Arrow */);
    __publicField(this, "onPointerDown", () => {
      if (this.status !== "idle" /* Idle */)
        return;
      const {
        currentPoint,
        currentGrid,
        settings: { showGrid },
        appState: { currentPageId, currentStyle }
      } = this.app;
      const childIndex = this.getNextChildIndex();
      const id = Utils47.uniqueId();
      const newShape = Arrow3.create({
        id,
        parentId: currentPageId,
        childIndex,
        point: showGrid ? Vec35.snap(currentPoint, currentGrid) : currentPoint,
        style: __spreadValues({}, currentStyle)
      });
      this.app.patchCreate([newShape]);
      this.app.startSession("arrow" /* Arrow */, newShape.id, "end", true);
      this.setStatus("creating" /* Creating */);
    });
  }
};

// src/state/tools/DrawTool/DrawTool.ts
import { Utils as Utils48 } from "@tldraw/core";
var DrawTool = class extends BaseTool {
  constructor() {
    super(...arguments);
    __publicField(this, "type", "draw" /* Draw */);
    __publicField(this, "lastShapeId");
    __publicField(this, "onEnter", () => {
      this.lastShapeId = void 0;
    });
    __publicField(this, "onCancel", () => {
      switch (this.status) {
        case "idle" /* Idle */: {
          this.app.selectTool("select");
          break;
        }
        default: {
          this.setStatus("idle" /* Idle */);
          break;
        }
      }
      this.app.cancelSession();
    });
    __publicField(this, "onPointerDown", (info) => {
      if (this.status !== "idle" /* Idle */)
        return;
      if (this.app.readOnly)
        return;
      const {
        currentPoint,
        appState: { currentPageId, currentStyle }
      } = this.app;
      const previous = this.lastShapeId && this.app.getShape(this.lastShapeId);
      if (info.shiftKey && previous) {
        this.app.startSession("draw" /* Draw */, previous.id);
        this.setStatus("extending" /* Extending */);
      } else {
        const childIndex = this.getNextChildIndex();
        const id = Utils48.uniqueId();
        const newShape = Draw.create({
          id,
          parentId: currentPageId,
          childIndex,
          point: currentPoint,
          style: __spreadValues({}, currentStyle)
        });
        this.lastShapeId = id;
        this.app.patchCreate([newShape]);
        this.app.startSession("draw" /* Draw */, id);
        this.setStatus("creating" /* Creating */);
      }
    });
    __publicField(this, "onPointerMove", () => {
      if (this.app.readOnly)
        return;
      switch (this.status) {
        case "extending" /* Extending */:
        case "creating" /* Creating */: {
          this.app.updateSession();
        }
      }
    });
    __publicField(this, "onPointerUp", () => {
      this.app.completeSession();
      this.setStatus("idle" /* Idle */);
    });
  }
};

// src/state/tools/EllipseTool/EllipseTool.ts
import { TLBoundsCorner as TLBoundsCorner5, Utils as Utils49 } from "@tldraw/core";
import Vec36 from "@tldraw/vec";
var EllipseTool = class extends BaseTool {
  constructor() {
    super(...arguments);
    __publicField(this, "type", "ellipse" /* Ellipse */);
    __publicField(this, "onPointerDown", () => {
      if (this.app.readOnly)
        return;
      if (this.status !== "idle" /* Idle */)
        return;
      const {
        currentPoint,
        currentGrid,
        settings: { showGrid },
        appState: { currentPageId, currentStyle }
      } = this.app;
      const childIndex = this.getNextChildIndex();
      const id = Utils49.uniqueId();
      const newShape = Ellipse.create({
        id,
        parentId: currentPageId,
        childIndex,
        point: showGrid ? Vec36.snap(currentPoint, currentGrid) : currentPoint,
        style: __spreadValues({}, currentStyle)
      });
      this.app.patchCreate([newShape]);
      this.app.startSession(
        "transformSingle" /* TransformSingle */,
        newShape.id,
        TLBoundsCorner5.BottomRight,
        true
      );
      this.setStatus("creating" /* Creating */);
    });
  }
};

// src/state/tools/EraseTool/EraseTool.ts
import Vec37 from "@tldraw/vec";
var EraseTool = class extends BaseTool {
  constructor() {
    super(...arguments);
    __publicField(this, "type", "erase");
    __publicField(this, "status", "idle" /* Idle */);
    __publicField(this, "onPointerDown", () => {
      if (this.app.readOnly)
        return;
      if (this.status !== "idle" /* Idle */)
        return;
      this.setStatus("pointing" /* Pointing */);
    });
    __publicField(this, "onPointerMove", (info) => {
      if (this.app.readOnly)
        return;
      switch (this.status) {
        case "pointing" /* Pointing */: {
          if (Vec37.dist(info.origin, info.point) > DEAD_ZONE) {
            this.app.startSession("erase" /* Erase */);
            this.app.updateSession();
            this.setStatus("erasing" /* Erasing */);
          }
          break;
        }
        case "erasing" /* Erasing */: {
          this.app.updateSession();
        }
      }
    });
    __publicField(this, "onPointerUp", () => {
      if (this.app.readOnly)
        return;
      switch (this.status) {
        case "pointing" /* Pointing */: {
          const shapeIdsAtPoint = this.app.shapes.filter((shape) => !shape.isLocked).filter(
            (shape) => this.app.getShapeUtil(shape).hitTestPoint(shape, this.app.currentPoint)
          ).flatMap((shape) => shape.children ? [shape.id, ...shape.children] : shape.id);
          this.app.delete(shapeIdsAtPoint);
          break;
        }
        case "erasing" /* Erasing */: {
          this.app.completeSession();
        }
      }
      this.setStatus("idle" /* Idle */);
    });
    __publicField(this, "onCancel", () => {
      if (this.status === "idle" /* Idle */) {
        if (this.previous) {
          this.app.selectTool(this.previous);
        } else {
          this.app.selectTool("select");
        }
      } else {
        this.setStatus("idle" /* Idle */);
      }
      this.app.cancelSession();
    });
  }
};

// src/state/tools/LineTool/LineTool.ts
import { Utils as Utils50 } from "@tldraw/core";
import Vec38 from "@tldraw/vec";
var LineTool = class extends BaseTool {
  constructor() {
    super(...arguments);
    __publicField(this, "type", "line" /* Line */);
    __publicField(this, "onPointerDown", () => {
      if (this.app.readOnly)
        return;
      if (this.status !== "idle" /* Idle */)
        return;
      const {
        currentPoint,
        currentGrid,
        settings: { showGrid },
        appState: { currentPageId, currentStyle }
      } = this.app;
      const childIndex = this.getNextChildIndex();
      const id = Utils50.uniqueId();
      const newShape = Arrow3.create({
        id,
        parentId: currentPageId,
        childIndex,
        point: showGrid ? Vec38.snap(currentPoint, currentGrid) : currentPoint,
        decorations: {
          start: void 0,
          end: void 0
        },
        style: __spreadValues({}, currentStyle)
      });
      this.app.patchCreate([newShape]);
      this.app.startSession("arrow" /* Arrow */, newShape.id, "end", true);
      this.setStatus("creating" /* Creating */);
    });
  }
};

// src/state/tools/RectangleTool/RectangleTool.ts
import { TLBoundsCorner as TLBoundsCorner6, Utils as Utils51 } from "@tldraw/core";
import Vec39 from "@tldraw/vec";
var RectangleTool = class extends BaseTool {
  constructor() {
    super(...arguments);
    __publicField(this, "type", "rectangle" /* Rectangle */);
    __publicField(this, "onPointerDown", () => {
      if (this.app.readOnly)
        return;
      if (this.status !== "idle" /* Idle */)
        return;
      const {
        currentPoint,
        currentGrid,
        settings: { showGrid },
        appState: { currentPageId, currentStyle }
      } = this.app;
      const childIndex = this.getNextChildIndex();
      const id = Utils51.uniqueId();
      const newShape = Rectangle.create({
        id,
        parentId: currentPageId,
        childIndex,
        point: showGrid ? Vec39.snap(currentPoint, currentGrid) : currentPoint,
        style: __spreadValues({}, currentStyle)
      });
      this.app.patchCreate([newShape]);
      this.app.startSession(
        "transformSingle" /* TransformSingle */,
        newShape.id,
        TLBoundsCorner6.BottomRight,
        true
      );
      this.setStatus("creating" /* Creating */);
    });
  }
};

// src/state/tools/SelectTool/SelectTool.ts
import {
  Utils as Utils52
} from "@tldraw/core";
import Vec40 from "@tldraw/vec";
var SelectTool = class extends BaseTool {
  constructor() {
    super(...arguments);
    __publicField(this, "type", "select");
    __publicField(this, "pointedId");
    __publicField(this, "selectedGroupId");
    __publicField(this, "pointedHandleId");
    __publicField(this, "pointedBoundsHandle");
    __publicField(this, "pointedLinkHandleId");
    __publicField(this, "onEnter", () => {
      this.setStatus("idle" /* Idle */);
    });
    __publicField(this, "onExit", () => {
      this.setStatus("idle" /* Idle */);
    });
    __publicField(this, "clonePaint", (point) => {
      if (this.app.selectedIds.length === 0)
        return;
      const shapes = this.app.selectedIds.map((id) => this.app.getShape(id));
      const bounds = Utils52.expandBounds(Utils52.getCommonBounds(shapes.map(TLDR.getBounds)), 16);
      const center = Utils52.getBoundsCenter(bounds);
      const size = [bounds.width, bounds.height];
      const gridPoint = [
        center[0] + size[0] * Math.floor((point[0] + size[0] / 2 - center[0]) / size[0]),
        center[1] + size[1] * Math.floor((point[1] + size[1] / 2 - center[1]) / size[1])
      ];
      const centeredBounds = Utils52.centerBounds(bounds, gridPoint);
      const hit = this.app.shapes.some(
        (shape) => TLDR.getShapeUtil(shape).hitTestBounds(shape, centeredBounds)
      );
      if (!hit) {
        this.app.duplicate(this.app.selectedIds, gridPoint);
      }
    });
    __publicField(this, "getShapeClone", (id, side) => {
      const shape = this.app.getShape(id);
      const utils = TLDR.getShapeUtil(shape);
      if (utils.canClone) {
        const bounds = utils.getBounds(shape);
        const center = utils.getCenter(shape);
        let point = {
          top: [bounds.minX, bounds.minY - (bounds.height + CLONING_DISTANCE)],
          right: [bounds.maxX + CLONING_DISTANCE, bounds.minY],
          bottom: [bounds.minX, bounds.maxY + CLONING_DISTANCE],
          left: [bounds.minX - (bounds.width + CLONING_DISTANCE), bounds.minY],
          topLeft: [
            bounds.minX - (bounds.width + CLONING_DISTANCE),
            bounds.minY - (bounds.height + CLONING_DISTANCE)
          ],
          topRight: [
            bounds.maxX + CLONING_DISTANCE,
            bounds.minY - (bounds.height + CLONING_DISTANCE)
          ],
          bottomLeft: [
            bounds.minX - (bounds.width + CLONING_DISTANCE),
            bounds.maxY + CLONING_DISTANCE
          ],
          bottomRight: [bounds.maxX + CLONING_DISTANCE, bounds.maxY + CLONING_DISTANCE]
        }[side];
        if (shape.rotation !== 0) {
          const newCenter = Vec40.add(point, [bounds.width / 2, bounds.height / 2]);
          const rotatedCenter = Vec40.rotWith(newCenter, center, shape.rotation || 0);
          point = Vec40.sub(rotatedCenter, [bounds.width / 2, bounds.height / 2]);
        }
        const id2 = Utils52.uniqueId();
        const clone = __spreadProps(__spreadValues({}, shape), {
          id: id2,
          point
        });
        if (clone.type === "sticky" /* Sticky */) {
          clone.text = "";
        }
        return clone;
      }
      return;
    });
    __publicField(this, "onCancel", () => {
      if (this.app.session) {
        this.app.cancelSession();
      } else {
        this.selectNone();
      }
      this.setStatus("idle" /* Idle */);
    });
    __publicField(this, "onKeyDown", (key, info, e) => {
      switch (key) {
        case "Escape": {
          this.onCancel();
          break;
        }
        case "Tab": {
          if (this.app.readOnly)
            return;
          if (!this.app.pageState.editingId && this.status === "idle" /* Idle */ && this.app.selectedIds.length === 1) {
            const [selectedId] = this.app.selectedIds;
            const clonedShape = this.getShapeClone(selectedId, "right");
            if (clonedShape) {
              this.app.createShapes(clonedShape);
              this.setStatus("idle" /* Idle */);
              if (clonedShape.type === "sticky" /* Sticky */) {
                this.app.select(clonedShape.id);
                this.app.setEditingId(clonedShape.id);
              }
            }
          }
          break;
        }
        case "Meta":
        case "Control":
        case "Alt": {
          this.app.updateSession();
          break;
        }
        case "Enter": {
          if (this.app.readOnly)
            return;
          const { pageState } = this.app;
          if (pageState.selectedIds.length === 1 && !pageState.editingId) {
            this.app.setEditingId(pageState.selectedIds[0]);
            e.preventDefault();
          }
        }
      }
    });
    __publicField(this, "onKeyUp", (key, info) => {
      if (this.status === "clonePainting" /* ClonePainting */ && !(info.altKey && info.shiftKey)) {
        this.setStatus("idle" /* Idle */);
        return;
      }
      if (key === "Meta" || key === "Control" || key === "Alt") {
        this.app.updateSession();
        return;
      }
    });
    __publicField(this, "onPointerMove", () => {
      const { originPoint, currentPoint } = this.app;
      if (this.app.readOnly && this.app.isPointing) {
        if (this.app.session) {
          this.app.updateSession();
        } else {
          if (Vec40.dist(originPoint, currentPoint) > DEAD_ZONE) {
            this.app.startSession("brush" /* Brush */);
            this.setStatus("brushing" /* Brushing */);
          }
        }
        return;
      }
      switch (this.status) {
        case "pointingBoundsHandle" /* PointingBoundsHandle */: {
          if (!this.pointedBoundsHandle)
            throw Error("No pointed bounds handle");
          if (Vec40.dist(originPoint, currentPoint) > DEAD_ZONE) {
            if (this.pointedBoundsHandle === "rotate") {
              this.setStatus("rotating" /* Rotating */);
              this.app.startSession("rotate" /* Rotate */);
            } else if (this.pointedBoundsHandle === "center" || this.pointedBoundsHandle === "left" || this.pointedBoundsHandle === "right") {
              this.setStatus("translating" /* Translating */);
              this.app.startSession("translate" /* Translate */, false, this.pointedBoundsHandle);
            } else {
              this.setStatus("transforming" /* Transforming */);
              const idsToTransform = this.app.selectedIds.flatMap(
                (id) => TLDR.getDocumentBranch(this.app.state, id, this.app.currentPageId)
              );
              if (idsToTransform.length === 1) {
                this.app.startSession(
                  "transformSingle" /* TransformSingle */,
                  idsToTransform[0],
                  this.pointedBoundsHandle
                );
              } else {
                this.app.startSession("transform" /* Transform */, this.pointedBoundsHandle);
              }
            }
            this.app.updateSession();
          }
          break;
        }
        case "pointingCanvas" /* PointingCanvas */: {
          if (Vec40.dist(originPoint, currentPoint) > DEAD_ZONE) {
            this.app.startSession("brush" /* Brush */);
            this.setStatus("brushing" /* Brushing */);
          }
          break;
        }
        case "pointingClone" /* PointingClone */: {
          if (Vec40.dist(originPoint, currentPoint) > DEAD_ZONE) {
            this.setStatus("translatingClone" /* TranslatingClone */);
            this.app.startSession("translate" /* Translate */);
            this.app.updateSession();
          }
          break;
        }
        case "pointingBounds" /* PointingBounds */: {
          if (Vec40.dist(originPoint, currentPoint) > DEAD_ZONE) {
            this.setStatus("translating" /* Translating */);
            this.app.startSession("translate" /* Translate */);
            this.app.updateSession();
          }
          break;
        }
        case "pointingHandle" /* PointingHandle */: {
          if (!this.pointedHandleId)
            throw Error("No pointed handle");
          if (Vec40.dist(originPoint, currentPoint) > DEAD_ZONE) {
            this.setStatus("translatingHandle" /* TranslatingHandle */);
            const selectedShape = this.app.getShape(this.app.selectedIds[0]);
            if (selectedShape) {
              if (this.pointedHandleId === "bend") {
                this.app.startSession("handle" /* Handle */, selectedShape.id, this.pointedHandleId);
                this.app.updateSession();
              } else {
                this.app.startSession(
                  "arrow" /* Arrow */,
                  selectedShape.id,
                  this.pointedHandleId,
                  false
                );
                this.app.updateSession();
              }
            }
          }
          break;
        }
        case "clonePainting" /* ClonePainting */: {
          this.clonePaint(currentPoint);
          break;
        }
        default: {
          if (this.app.session) {
            this.app.updateSession();
            break;
          }
        }
      }
    });
    __publicField(this, "onPointerDown", (info, e) => {
      if (info.target === "canvas" && this.status === "idle" /* Idle */) {
        const { currentPoint } = this.app;
        if (info.spaceKey && e.buttons === 1)
          return;
        if (this.status === "idle" /* Idle */ && info.altKey && info.shiftKey) {
          this.setStatus("clonePainting" /* ClonePainting */);
          this.clonePaint(currentPoint);
          return;
        }
        if (!info.shiftKey) {
          this.app.onShapeBlur();
          if (info.altKey && this.app.selectedIds.length > 0) {
            this.app.duplicate(this.app.selectedIds, currentPoint);
            return;
          }
          this.selectNone();
        }
        this.setStatus("pointingCanvas" /* PointingCanvas */);
      }
    });
    __publicField(this, "onPointerUp", (info) => {
      var _a;
      if (this.status === "translatingClone" /* TranslatingClone */ || this.status === "pointingClone" /* PointingClone */) {
        if (this.pointedId) {
          this.app.completeSession();
          this.app.setEditingId(this.pointedId);
        }
        this.setStatus("idle" /* Idle */);
        this.pointedId = void 0;
        return;
      }
      if (this.status === "pointingBounds" /* PointingBounds */) {
        if (info.target === "bounds") {
          this.selectNone();
        } else if (this.app.isSelected(info.target)) {
          if (info.shiftKey) {
            if (this.pointedId !== info.target) {
              this.deselect(info.target);
            }
          } else {
            if (this.pointedId !== info.target && this.app.selectedIds.length > 1) {
              this.select(info.target);
            }
          }
        } else if (this.pointedId === info.target) {
          if (this.app.getShape(info.target).isLocked)
            return;
          if (info.shiftKey) {
            this.pushSelect(info.target);
          } else {
            this.select(info.target);
          }
        }
      }
      this.setStatus("idle" /* Idle */);
      this.pointedBoundsHandle = void 0;
      this.pointedHandleId = void 0;
      this.pointedId = void 0;
      if (((_a = this.app.session) == null ? void 0 : _a.type) === "edit" /* Edit */) {
        return;
      }
      this.app.completeSession();
    });
    __publicField(this, "onDoubleClickCanvas", () => {
      if (this.app.readOnly)
        return;
    });
    __publicField(this, "onPointShape", (info, e) => {
      if (info.spaceKey && e.buttons === 1)
        return;
      if (this.app.getShape(info.target).isLocked)
        return;
      const { editingId, hoveredId } = this.app.pageState;
      if (editingId && info.target !== editingId) {
        this.app.onShapeBlur();
      }
      if ((this.status === "idle" /* Idle */ || this.status === "pointingBounds" /* PointingBounds */) && info.metaKey && info.shiftKey && hoveredId) {
        this.pointedId = hoveredId;
        if (this.app.isSelected(hoveredId)) {
          this.deselect(hoveredId);
        } else {
          this.pushSelect(hoveredId);
          this.setStatus("pointingBounds" /* PointingBounds */);
        }
        return;
      }
      if (this.status === "pointingBounds" /* PointingBounds */) {
        const { parentId } = this.app.getShape(info.target);
        this.pointedId = parentId === this.app.currentPageId ? info.target : parentId;
        return;
      }
      if (this.status === "idle" /* Idle */) {
        this.setStatus("pointingBounds" /* PointingBounds */);
        if (info.metaKey) {
          if (!info.shiftKey) {
            this.selectNone();
          }
          this.app.startSession("brush" /* Brush */);
          this.setStatus("brushing" /* Brushing */);
          return;
        }
        let shapeIdToSelect;
        const { parentId } = this.app.getShape(info.target);
        if (parentId === this.app.currentPageId) {
          shapeIdToSelect = info.target;
          this.selectedGroupId = void 0;
        } else {
          if (parentId === this.selectedGroupId) {
            shapeIdToSelect = info.target;
          } else {
            shapeIdToSelect = parentId;
            this.selectedGroupId = void 0;
          }
        }
        if (!this.app.isSelected(shapeIdToSelect)) {
          this.pointedId = shapeIdToSelect;
          if (info.shiftKey) {
            this.pushSelect(shapeIdToSelect);
          } else {
            this.select(shapeIdToSelect);
          }
        }
      }
    });
    __publicField(this, "onDoubleClickShape", (info) => {
      if (this.app.readOnly)
        return;
      const shape = this.app.getShape(info.target);
      if (shape.isLocked) {
        this.app.select(info.target);
        return;
      }
      if (TLDR.getShapeUtil(shape.type).canEdit && (shape.parentId === this.app.currentPageId || shape.parentId === this.selectedGroupId)) {
        this.app.setEditingId(info.target);
      }
      if (shape.parentId !== this.app.currentPageId) {
        this.selectedGroupId = shape.parentId;
      }
      this.app.select(info.target);
    });
    __publicField(this, "onRightPointShape", (info) => {
      if (!this.app.isSelected(info.target)) {
        this.app.select(info.target);
      }
    });
    __publicField(this, "onHoverShape", (info) => {
      this.app.setHoveredId(info.target);
    });
    __publicField(this, "onUnhoverShape", (info) => {
      const { currentPageId: oldCurrentPageId } = this.app;
      requestAnimationFrame(() => {
        if (oldCurrentPageId === this.app.currentPageId && this.app.pageState.hoveredId === info.target) {
          this.app.setHoveredId(void 0);
        }
      });
    });
    __publicField(this, "onPointBounds", (info) => {
      if (info.metaKey) {
        if (!info.shiftKey) {
          this.selectNone();
        }
        this.app.startSession("brush" /* Brush */);
        this.setStatus("brushing" /* Brushing */);
        return;
      }
      this.setStatus("pointingBounds" /* PointingBounds */);
    });
    __publicField(this, "onRightPointBounds", (info, e) => {
      e.stopPropagation();
    });
    __publicField(this, "onReleaseBounds", () => {
      if (this.status === "translating" /* Translating */ || this.status === "brushing" /* Brushing */) {
        this.app.completeSession();
      }
      this.setStatus("idle" /* Idle */);
    });
    __publicField(this, "onPointBoundsHandle", (info) => {
      this.pointedBoundsHandle = info.target;
      this.setStatus("pointingBoundsHandle" /* PointingBoundsHandle */);
    });
    __publicField(this, "onDoubleClickBoundsHandle", (info) => {
      switch (info.target) {
        case "center":
        case "left":
        case "right": {
          this.app.select(
            ...TLDR.getLinkedShapeIds(
              this.app.state,
              this.app.currentPageId,
              info.target,
              info.shiftKey
            )
          );
          break;
        }
        default: {
          if (this.app.selectedIds.length === 1) {
            this.app.resetBounds(this.app.selectedIds);
            const shape = this.app.getShape(this.app.selectedIds[0]);
            if ("label" in shape) {
              this.app.setEditingId(shape.id);
            }
          }
        }
      }
    });
    __publicField(this, "onReleaseBoundsHandle", () => {
      this.setStatus("idle" /* Idle */);
    });
    __publicField(this, "onPointHandle", (info) => {
      this.pointedHandleId = info.target;
      this.setStatus("pointingHandle" /* PointingHandle */);
    });
    __publicField(this, "onDoubleClickHandle", (info) => {
      if (info.target === "bend") {
        const { selectedIds } = this.app;
        if (selectedIds.length !== 1)
          return;
        const shape = this.app.getShape(selectedIds[0]);
        if (TLDR.getShapeUtil(shape.type).canEdit && (shape.parentId === this.app.currentPageId || shape.parentId === this.selectedGroupId)) {
          this.app.setEditingId(shape.id);
        }
        return;
      }
      this.app.toggleDecoration(info.target);
    });
    __publicField(this, "onReleaseHandle", () => {
      this.setStatus("idle" /* Idle */);
    });
    __publicField(this, "onShapeClone", (info) => {
      const selectedShapeId = this.app.selectedIds[0];
      const clonedShape = this.getShapeClone(selectedShapeId, info.target);
      if (info.target === "left" || info.target === "right" || info.target === "top" || info.target === "bottom") {
        if (clonedShape) {
          this.app.createShapes(clonedShape);
          this.pointedId = clonedShape.id;
          this.setStatus("pointingClone" /* PointingClone */);
        }
      } else {
        this.setStatus("gridCloning" /* GridCloning */);
        this.app.startSession("grid" /* Grid */, selectedShapeId);
      }
    });
  }
  deselect(id) {
    this.app.select(...this.app.selectedIds.filter((oid) => oid !== id));
  }
  select(id) {
    this.app.select(id);
  }
  pushSelect(id) {
    const shape = this.app.getShape(id);
    this.app.select(...this.app.selectedIds.filter((oid) => oid !== shape.parentId), id);
  }
  selectNone() {
    this.app.selectNone();
  }
};

// src/state/tools/StickyTool/StickyTool.ts
import { Utils as Utils53 } from "@tldraw/core";
import Vec41 from "@tldraw/vec";
var StickyTool = class extends BaseTool {
  constructor() {
    super(...arguments);
    __publicField(this, "type", "sticky" /* Sticky */);
    __publicField(this, "shapeId");
    __publicField(this, "onPointerDown", () => {
      if (this.app.readOnly)
        return;
      if (this.status === "creating" /* Creating */) {
        this.setStatus("idle" /* Idle */);
        if (!this.app.appState.isToolLocked) {
          this.app.selectTool("select");
        }
        return;
      }
      if (this.status === "idle" /* Idle */) {
        const {
          currentPoint,
          currentGrid,
          settings: { showGrid },
          appState: { currentPageId, currentStyle }
        } = this.app;
        const childIndex = this.getNextChildIndex();
        const id = Utils53.uniqueId();
        this.shapeId = id;
        const newShape = Sticky.create({
          id,
          parentId: currentPageId,
          childIndex,
          point: showGrid ? Vec41.snap(currentPoint, currentGrid) : currentPoint,
          style: __spreadValues({}, currentStyle)
        });
        const bounds = Sticky.getBounds(newShape);
        newShape.point = Vec41.sub(newShape.point, [bounds.width / 2, bounds.height / 2]);
        this.app.patchCreate([newShape]);
        this.app.startSession("translate" /* Translate */);
        this.setStatus("creating" /* Creating */);
      }
    });
    __publicField(this, "onPointerUp", () => {
      if (this.app.readOnly)
        return;
      if (this.status === "creating" /* Creating */) {
        this.setStatus("idle" /* Idle */);
        this.app.completeSession();
        this.app.selectTool("select");
        this.app.setEditingId(this.shapeId);
      }
    });
  }
};

// src/state/tools/TextTool/TextTool.ts
import Vec42 from "@tldraw/vec";
var TextTool = class extends BaseTool {
  constructor() {
    super(...arguments);
    __publicField(this, "type", "text" /* Text */);
    __publicField(this, "stopEditingShape", () => {
      this.setStatus("idle" /* Idle */);
      if (!this.app.appState.isToolLocked) {
        this.app.selectTool("select");
      }
    });
    __publicField(this, "onKeyUp", () => {
    });
    __publicField(this, "onKeyDown", () => {
    });
    __publicField(this, "onPointerDown", () => {
      if (this.status === "creating" /* Creating */) {
        this.stopEditingShape();
        return;
      }
      if (this.status === "idle" /* Idle */) {
        const {
          currentPoint,
          currentGrid,
          settings: { showGrid }
        } = this.app;
        this.app.createTextShapeAtPoint(
          showGrid ? Vec42.snap(currentPoint, currentGrid) : currentPoint,
          void 0,
          true
        );
        this.setStatus("creating" /* Creating */);
        return;
      }
    });
    __publicField(this, "onPointerUp", () => {
    });
    __publicField(this, "onPointShape", (info) => {
      if (this.app.readOnly)
        return;
      const shape = this.app.getShape(info.target);
      if (shape.type === "text" /* Text */) {
        this.setStatus("idle" /* Idle */);
        this.app.setEditingId(shape.id);
      }
    });
    __publicField(this, "onShapeBlur", () => {
      if (this.app.readOnly)
        return;
      this.stopEditingShape();
    });
  }
};

// src/state/tools/TriangleTool/TriangleTool.ts
import { TLBoundsCorner as TLBoundsCorner8, Utils as Utils54 } from "@tldraw/core";
import Vec43 from "@tldraw/vec";
var TriangleTool = class extends BaseTool {
  constructor() {
    super(...arguments);
    __publicField(this, "type", "triangle" /* Triangle */);
    __publicField(this, "onPointerDown", () => {
      if (this.app.readOnly)
        return;
      if (this.status !== "idle" /* Idle */)
        return;
      const {
        currentPoint,
        currentGrid,
        settings: { showGrid },
        appState: { currentPageId, currentStyle }
      } = this.app;
      const childIndex = this.getNextChildIndex();
      const id = Utils54.uniqueId();
      const newShape = Triangle.create({
        id,
        parentId: currentPageId,
        childIndex,
        point: showGrid ? Vec43.snap(currentPoint, currentGrid) : currentPoint,
        style: __spreadValues({}, currentStyle)
      });
      this.app.patchCreate([newShape]);
      this.app.startSession(
        "transformSingle" /* TransformSingle */,
        newShape.id,
        TLBoundsCorner8.BottomRight,
        true
      );
      this.setStatus("creating" /* Creating */);
    });
  }
};

// src/state/TldrawApp.ts
var uuid = Utils55.uniqueId();
var _TldrawApp = class extends StateManager {
  constructor(id, callbacks = {}) {
    super(_TldrawApp.defaultState, id, _TldrawApp.version, (prev, next, prevVersion) => {
      return migrate(
        __spreadProps(__spreadValues({}, next), {
          document: __spreadProps(__spreadValues(__spreadValues({}, next.document), prev.document), { version: prevVersion })
        }),
        _TldrawApp.version
      );
    });
    __publicField(this, "callbacks", {});
    __publicField(this, "tools", {
      select: new SelectTool(this),
      erase: new EraseTool(this),
      ["text" /* Text */]: new TextTool(this),
      ["draw" /* Draw */]: new DrawTool(this),
      ["ellipse" /* Ellipse */]: new EllipseTool(this),
      ["rectangle" /* Rectangle */]: new RectangleTool(this),
      ["triangle" /* Triangle */]: new TriangleTool(this),
      ["line" /* Line */]: new LineTool(this),
      ["arrow" /* Arrow */]: new ArrowTool(this),
      ["sticky" /* Sticky */]: new StickyTool(this)
    });
    __publicField(this, "currentTool", this.tools.select);
    __publicField(this, "session");
    __publicField(this, "readOnly", false);
    __publicField(this, "isDirty", false);
    __publicField(this, "isCreating", false);
    __publicField(this, "originPoint", [0, 0]);
    __publicField(this, "currentPoint", [0, 0]);
    __publicField(this, "previousPoint", [0, 0]);
    __publicField(this, "shiftKey", false);
    __publicField(this, "altKey", false);
    __publicField(this, "metaKey", false);
    __publicField(this, "ctrlKey", false);
    __publicField(this, "spaceKey", false);
    __publicField(this, "isPointing", false);
    __publicField(this, "isForcePanning", false);
    __publicField(this, "isErasingWithPen", false);
    __publicField(this, "isPastePrevented", false);
    __publicField(this, "editingStartTime", -1);
    __publicField(this, "fileSystemHandle", null);
    __publicField(this, "viewport", Utils55.getBoundsFromPoints([
      [0, 0],
      [100, 100]
    ]));
    __publicField(this, "rendererBounds", Utils55.getBoundsFromPoints([
      [0, 0],
      [100, 100]
    ]));
    __publicField(this, "selectHistory", {
      stack: [[]],
      pointer: 0
    });
    __publicField(this, "clipboard");
    __publicField(this, "rotationInfo", {
      selectedIds: [],
      center: [0, 0]
    });
    __publicField(this, "migrate", (state) => {
      return migrate(state, _TldrawApp.version);
    });
    __publicField(this, "onReady", () => {
      var _a, _b;
      this.loadDocument(this.document);
      loadFileHandle().then((fileHandle) => {
        this.fileSystemHandle = fileHandle;
      });
      try {
        this.patchState(__spreadProps(__spreadValues({}, migrate(this.state, _TldrawApp.version)), {
          appState: {
            status: "idle" /* Idle */
          }
        }));
      } catch (e) {
        console.error("The data appears to be corrupted. Resetting!", e);
        localStorage.setItem(this.document.id + "_corrupted", JSON.stringify(this.document));
        this.patchState(__spreadProps(__spreadValues({}, _TldrawApp.defaultState), {
          appState: __spreadProps(__spreadValues({}, _TldrawApp.defaultState.appState), {
            status: "idle" /* Idle */
          })
        }));
      }
      (_b = (_a = this.callbacks).onMount) == null ? void 0 : _b.call(_a, this);
    });
    __publicField(this, "cleanup", (state, prev) => {
      var _a;
      const next = __spreadValues({}, state);
      if (next.document !== prev.document) {
        Object.entries(next.document.pages).forEach(([pageId, page]) => {
          if (page === void 0) {
            delete next.document.pages[pageId];
            delete next.document.pageStates[pageId];
            return;
          }
          const prevPage = prev.document.pages[pageId];
          const changedShapes = {};
          if (!prevPage || page.shapes !== prevPage.shapes || page.bindings !== prevPage.bindings) {
            page.shapes = __spreadValues({}, page.shapes);
            page.bindings = __spreadValues({}, page.bindings);
            const groupsToUpdate = /* @__PURE__ */ new Set();
            Object.entries(page.shapes).forEach(([id, shape]) => {
              var _a2;
              let parentId;
              if (!shape) {
                parentId = (_a2 = prevPage == null ? void 0 : prevPage.shapes[id]) == null ? void 0 : _a2.parentId;
                delete page.shapes[id];
              } else {
                parentId = shape.parentId;
              }
              if (page.id === next.appState.currentPageId) {
                if ((prevPage == null ? void 0 : prevPage.shapes[id]) !== shape) {
                  changedShapes[id] = shape;
                }
              }
              if (parentId && parentId !== pageId) {
                const group = page.shapes[parentId];
                if (group !== void 0) {
                  groupsToUpdate.add(page.shapes[parentId]);
                }
              }
            });
            Object.keys(page.bindings).forEach((id) => {
              if (!page.bindings[id]) {
                delete page.bindings[id];
              }
            });
            next.document.pages[pageId] = page;
            const bindingsToUpdate = TLDR.getRelatedBindings(next, Object.keys(changedShapes), pageId);
            const visitedShapes = /* @__PURE__ */ new Set();
            bindingsToUpdate.forEach((binding) => {
              if (!page.bindings[binding.id]) {
                return;
              }
              const toShape = page.shapes[binding.toId];
              const fromShape = page.shapes[binding.fromId];
              if (!(toShape && fromShape)) {
                delete next.document.pages[pageId].bindings[binding.id];
                return;
              }
              if (visitedShapes.has(fromShape)) {
                return;
              }
              const fromDelta = TLDR.updateArrowBindings(page, fromShape);
              visitedShapes.add(fromShape);
              if (fromDelta) {
                const nextShape = __spreadValues(__spreadValues({}, fromShape), fromDelta);
                page.shapes[fromShape.id] = nextShape;
              }
            });
            groupsToUpdate.forEach((group) => {
              if (!group)
                throw Error("no group!");
              const children = group.children.filter((id) => page.shapes[id] !== void 0);
              const commonBounds = Utils55.getCommonBounds(
                children.map((id) => page.shapes[id]).filter(Boolean).map((shape) => TLDR.getRotatedBounds(shape))
              );
              page.shapes[group.id] = __spreadProps(__spreadValues({}, group), {
                point: [commonBounds.minX, commonBounds.minY],
                size: [commonBounds.width, commonBounds.height],
                children
              });
            });
          }
          const nextPageState = __spreadValues({}, next.document.pageStates[pageId]);
          if (!nextPageState.brush) {
            delete nextPageState.brush;
          }
          if (nextPageState.hoveredId && !page.shapes[nextPageState.hoveredId]) {
            delete nextPageState.hoveredId;
          }
          if (nextPageState.bindingId && !page.bindings[nextPageState.bindingId]) {
            TLDR.warn(`Could not find the binding of ${pageId}`);
            delete nextPageState.bindingId;
          }
          if (nextPageState.editingId && !page.shapes[nextPageState.editingId]) {
            TLDR.warn("Could not find the editing shape!");
            delete nextPageState.editingId;
          }
          next.document.pageStates[pageId] = nextPageState;
        });
      }
      Object.keys((_a = next.document.assets) != null ? _a : {}).forEach((id) => {
        var _a2, _b;
        if (!((_a2 = next.document.assets) == null ? void 0 : _a2[id])) {
          (_b = next.document.assets) == null ? true : delete _b[id];
        }
      });
      const currentPageId = next.appState.currentPageId;
      const currentPageState = next.document.pageStates[currentPageId];
      if (next.room && next.room !== prev.room) {
        const room = __spreadProps(__spreadValues({}, next.room), { users: __spreadValues({}, next.room.users) });
        if (prev.room) {
          Object.values(prev.room.users).filter(Boolean).forEach((user) => {
            if (room.users[user.id] === void 0) {
              delete room.users[user.id];
            }
          });
        }
        next.room = room;
      }
      if (next.room) {
        next.room.users[next.room.userId] = __spreadProps(__spreadValues({}, next.room.users[next.room.userId]), {
          point: this.currentPoint,
          selectedIds: currentPageState.selectedIds
        });
      }
      if (this.readOnly) {
        next.document.pages = prev.document.pages;
      }
      return next;
    });
    __publicField(this, "broadcastPatch", (patch, addToHistory) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      const changedShapes = {};
      const changedBindings = {};
      const changedAssets = {};
      const shapes = (_c = (_b = (_a = patch == null ? void 0 : patch.document) == null ? void 0 : _a.pages) == null ? void 0 : _b[this.currentPageId]) == null ? void 0 : _c.shapes;
      const bindings = (_f = (_e = (_d = patch == null ? void 0 : patch.document) == null ? void 0 : _d.pages) == null ? void 0 : _e[this.currentPageId]) == null ? void 0 : _f.bindings;
      const assets = (_g = patch == null ? void 0 : patch.document) == null ? void 0 : _g.assets;
      if (shapes) {
        Object.keys(shapes).forEach((id) => {
          changedShapes[id] = this.getShape(id, this.currentPageId);
        });
      }
      if (bindings) {
        Object.keys(bindings).forEach((id) => {
          changedBindings[id] = this.getBinding(id, this.currentPageId);
        });
      }
      if (assets) {
        Object.keys(assets).forEach((id) => {
          changedAssets[id] = this.document.assets[id];
        });
      }
      (_i = (_h = this.callbacks).onChangePage) == null ? void 0 : _i.call(_h, this, changedShapes, changedBindings, changedAssets, addToHistory);
    });
    __publicField(this, "onPatch", (state, patch, id) => {
      var _a, _b, _c, _d, _e, _f;
      if (this.callbacks.onChangePage && ((_b = (_a = patch == null ? void 0 : patch.document) == null ? void 0 : _a.pages) == null ? void 0 : _b[this.currentPageId]) || ((_c = patch == null ? void 0 : patch.document) == null ? void 0 : _c.assets)) {
        if (((_d = patch == null ? void 0 : patch.document) == null ? void 0 : _d.assets) || this.session && this.session.type !== "brush" /* Brush */ && this.session.type !== "erase" /* Erase */ && this.session.type !== "draw" /* Draw */) {
          this.broadcastPatch(patch, false);
        }
      }
      (_f = (_e = this.callbacks).onPatch) == null ? void 0 : _f.call(_e, this, patch, id);
    });
    __publicField(this, "onCommand", (state, command, id) => {
      var _a, _b;
      this.clearSelectHistory();
      this.isDirty = true;
      (_b = (_a = this.callbacks).onCommand) == null ? void 0 : _b.call(_a, this, command, id);
    });
    __publicField(this, "onReplace", () => {
      this.clearSelectHistory();
      this.isDirty = false;
    });
    __publicField(this, "onUndo", () => {
      var _a, _b;
      this.rotationInfo.selectedIds = [...this.selectedIds];
      (_b = (_a = this.callbacks).onUndo) == null ? void 0 : _b.call(_a, this);
    });
    __publicField(this, "onRedo", () => {
      var _a, _b;
      this.rotationInfo.selectedIds = [...this.selectedIds];
      (_b = (_a = this.callbacks).onRedo) == null ? void 0 : _b.call(_a, this);
    });
    __publicField(this, "onPersist", (state, patch) => {
      var _a, _b;
      (_b = (_a = this.callbacks).onPersist) == null ? void 0 : _b.call(_a, this);
      this.broadcastPatch(patch, true);
    });
    __publicField(this, "prevSelectedIds", this.selectedIds);
    __publicField(this, "onStateDidChange", (_state, id) => {
      var _a, _b, _c, _d;
      (_b = (_a = this.callbacks).onChange) == null ? void 0 : _b.call(_a, this, id);
      if (this.room && this.selectedIds !== this.prevSelectedIds) {
        (_d = (_c = this.callbacks).onChangePresence) == null ? void 0 : _d.call(_c, this, __spreadProps(__spreadValues({}, this.room.users[this.room.userId]), {
          selectedIds: this.selectedIds,
          session: !!this.session
        }));
        this.prevSelectedIds = this.selectedIds;
      }
    });
    __publicField(this, "preventPaste", () => {
      if (this.isPastePrevented)
        return;
      const prevent = (event) => event.stopImmediatePropagation();
      const enable = () => {
        setTimeout(() => {
          document.removeEventListener("paste", prevent, { capture: true });
          this.isPastePrevented = false;
        }, 50);
      };
      document.addEventListener("paste", prevent, { capture: true });
      window.addEventListener("pointerup", enable, { once: true });
      this.isPastePrevented = true;
    });
    __publicField(this, "justSent", false);
    __publicField(this, "getReservedContent", (coreReservedIds, pageId = this.currentPageId) => {
      const { bindings } = this.document.pages[pageId];
      const reservedShapes = {};
      const reservedBindings = {};
      const bindingsArr = Object.values(bindings);
      const boundTos = new Map(bindingsArr.map((binding) => [binding.toId, binding]));
      const boundFroms = new Map(bindingsArr.map((binding) => [binding.fromId, binding]));
      const bindingMaps = [boundTos, boundFroms];
      const reservedShapeIds = [];
      if (this.session)
        coreReservedIds.forEach((id) => reservedShapeIds.push(id));
      if (this.pageState.editingId)
        reservedShapeIds.push(this.pageState.editingId);
      const strongReservedShapeIds = new Set(reservedShapeIds);
      const visited = /* @__PURE__ */ new Set();
      while (reservedShapeIds.length > 0) {
        const id = reservedShapeIds.pop();
        if (!id)
          break;
        if (visited.has(id))
          continue;
        visited.add(id);
        const shape = this.getShape(id);
        reservedShapes[id] = shape;
        if (shape.parentId !== pageId)
          reservedShapeIds.push(shape.parentId);
        if (shape.children)
          reservedShapeIds.push(...shape.children);
        bindingMaps.map((map) => map.get(shape.id)).filter(Boolean).forEach((binding) => {
          reservedBindings[binding.id] = binding;
          reservedShapeIds.push(binding.toId, binding.fromId);
        });
      }
      return { reservedShapes, reservedBindings, strongReservedShapeIds };
    });
    __publicField(this, "replacePageContent", (shapes, bindings, assets, pageId = this.currentPageId) => {
      if (this.justSent) {
        this.justSent = false;
        return this;
      }
      const page = this.document.pages[this.currentPageId];
      Object.values(shapes).forEach((shape) => {
        if (shape.parentId !== pageId && !(page.shapes[shape.parentId] || shapes[shape.parentId])) {
          console.warn("Added a shape without a parent on the page");
          shape.parentId = pageId;
        }
      });
      this.useStore.setState((current) => {
        const { hoveredId, editingId, bindingId, selectedIds } = current.document.pageStates[pageId];
        const coreReservedIds = [...selectedIds];
        const editingShape = editingId && current.document.pages[this.currentPageId].shapes[editingId];
        if (editingShape)
          coreReservedIds.push(editingShape.id);
        const { reservedShapes, reservedBindings, strongReservedShapeIds } = this.getReservedContent(
          coreReservedIds,
          this.currentPageId
        );
        Object.values(reservedShapes).filter((reservedShape) => !("text" in reservedShape)).forEach((reservedShape) => {
          const incomingShape = shapes[reservedShape.id];
          if (!incomingShape)
            return;
          if (!(reservedShape.type === "arrow" /* Arrow */ || strongReservedShapeIds.has(reservedShape.id))) {
            shapes[reservedShape.id] = incomingShape;
            return;
          }
          if ("decorations" in incomingShape && "decorations" in reservedShape) {
            shapes[reservedShape.id] = __spreadProps(__spreadValues({}, reservedShape), { decorations: incomingShape.decorations });
          }
          reservedShape.style = incomingShape.style;
        });
        const nextShapes = __spreadValues(__spreadValues({}, shapes), reservedShapes);
        if (editingShape) {
          nextShapes[editingShape.id] = editingShape;
        }
        const nextBindings = __spreadValues(__spreadValues({}, bindings), reservedBindings);
        const nextAssets = __spreadValues({}, assets);
        const next = __spreadProps(__spreadValues({}, current), {
          document: __spreadProps(__spreadValues({}, current.document), {
            pages: {
              [pageId]: __spreadProps(__spreadValues({}, current.document.pages[pageId]), {
                shapes: nextShapes,
                bindings: nextBindings
              })
            },
            assets: nextAssets,
            pageStates: __spreadProps(__spreadValues({}, current.document.pageStates), {
              [pageId]: __spreadProps(__spreadValues({}, current.document.pageStates[pageId]), {
                selectedIds: selectedIds.filter((id) => nextShapes[id] !== void 0),
                hoveredId: hoveredId ? nextShapes[hoveredId] === void 0 ? void 0 : hoveredId : void 0,
                editingId,
                bindingId: bindingId ? nextBindings[bindingId] === void 0 ? void 0 : bindingId : void 0
              })
            })
          })
        });
        const page2 = next.document.pages[pageId];
        const bindingsToUpdate = TLDR.getRelatedBindings(next, Object.keys(nextShapes), pageId);
        const visitedShapes = /* @__PURE__ */ new Set();
        bindingsToUpdate.forEach((binding) => {
          if (!page2.bindings[binding.id]) {
            return;
          }
          const fromShape = page2.shapes[binding.fromId];
          if (visitedShapes.has(fromShape)) {
            return;
          }
          const fromDelta = TLDR.updateArrowBindings(page2, fromShape);
          visitedShapes.add(fromShape);
          if (fromDelta) {
            const nextShape = __spreadValues(__spreadValues({}, fromShape), fromDelta);
            page2.shapes[fromShape.id] = nextShape;
          }
        });
        Object.values(nextShapes).forEach((shape) => {
          if (shape.type !== "group" /* Group */)
            return;
          const children = shape.children.filter((id) => page2.shapes[id] !== void 0);
          const commonBounds = Utils55.getCommonBounds(
            children.map((id) => page2.shapes[id]).filter(Boolean).map((shape2) => TLDR.getRotatedBounds(shape2))
          );
          page2.shapes[shape.id] = __spreadProps(__spreadValues({}, shape), {
            point: [commonBounds.minX, commonBounds.minY],
            size: [commonBounds.width, commonBounds.height],
            children
          });
        });
        this.state.document = next.document;
        return next;
      }, true);
      return this;
    });
    __publicField(this, "updateBounds", (bounds) => {
      this.rendererBounds = bounds;
      const { point, zoom } = this.camera;
      this.updateViewport(point, zoom);
      if (!this.readOnly && this.session) {
        this.session.update();
      }
    });
    __publicField(this, "updateViewport", (point, zoom) => {
      const { width, height } = this.rendererBounds;
      const [minX, minY] = Vec44.sub(Vec44.div([0, 0], zoom), point);
      const [maxX, maxY] = Vec44.sub(Vec44.div([width, height], zoom), point);
      this.viewport = {
        minX,
        minY,
        maxX,
        maxY,
        width: maxX - minX,
        height: maxY - minY
      };
    });
    __publicField(this, "setEditingId", (id, isCreating = false) => {
      if (this.readOnly)
        return;
      if (id) {
        this.startSession("edit" /* Edit */, id, isCreating);
      } else {
        if (!this.pageState.editingId)
          return;
        this.completeSession();
      }
      this.editingStartTime = performance.now();
      this.patchState(
        {
          document: {
            pageStates: {
              [this.currentPageId]: {
                editingId: id
              }
            }
          }
        },
        `set_editing_id`
      );
    });
    __publicField(this, "setHoveredId", (id) => {
      this.patchState(
        {
          document: {
            pageStates: {
              [this.currentPageId]: {
                hoveredId: id
              }
            }
          }
        },
        `set_hovered_id`
      );
    });
    __publicField(this, "setSetting", (name, value) => {
      if (this.session)
        return this;
      const patch = {
        settings: {
          [name]: typeof value === "function" ? value(this.settings[name]) : value
        }
      };
      this.patchState(patch, `settings:${name}`);
      this.persist(patch);
      return this;
    });
    __publicField(this, "toggleFocusMode", () => {
      if (this.session)
        return this;
      const patch = {
        settings: {
          isFocusMode: !this.settings.isFocusMode
        }
      };
      this.patchState(patch, `settings:toggled_focus_mode`);
      this.persist(patch);
      return this;
    });
    __publicField(this, "togglePenMode", () => {
      if (this.session)
        return this;
      const patch = {
        settings: {
          isPenMode: !this.settings.isPenMode
        }
      };
      this.patchState(patch, `settings:toggled_pen_mode`);
      this.persist(patch);
      return this;
    });
    __publicField(this, "toggleDarkMode", () => {
      if (this.session)
        return this;
      const patch = { settings: { isDarkMode: !this.settings.isDarkMode } };
      this.patchState(patch, `settings:toggled_dark_mode`);
      this.persist(patch);
      return this;
    });
    __publicField(this, "toggleZoomSnap", () => {
      if (this.session)
        return this;
      const patch = { settings: { isZoomSnap: !this.settings.isZoomSnap } };
      this.patchState(patch, `settings:toggled_zoom_snap`);
      this.persist(patch);
      return this;
    });
    __publicField(this, "toggleDebugMode", () => {
      if (this.session)
        return this;
      const patch = { settings: { isDebugMode: !this.settings.isDebugMode } };
      this.patchState(patch, `settings:toggled_debug`);
      this.persist(patch);
      return this;
    });
    __publicField(this, "setMenuOpen", (isOpen) => {
      const patch = { appState: { isMenuOpen: isOpen } };
      this.patchState(patch, "ui:toggled_menu_opened");
      this.persist(patch);
      return this;
    });
    __publicField(this, "setIsLoading", (isLoading) => {
      const patch = { appState: { isLoading } };
      this.patchState(patch, "ui:toggled_is_loading");
      this.persist(patch);
      return this;
    });
    __publicField(this, "setDisableAssets", (disableAssets) => {
      this.patchState({ appState: { disableAssets } }, "ui:toggled_disable_images");
      return this;
    });
    __publicField(this, "toggleGrid", () => {
      if (this.session)
        return this;
      const patch = { settings: { showGrid: !this.settings.showGrid } };
      this.patchState(patch, "settings:toggled_grid");
      this.persist(patch);
      return this;
    });
    __publicField(this, "selectTool", (type) => {
      if (this.readOnly || this.session)
        return this;
      this.isPointing = false;
      const tool = this.tools[type];
      if (tool === this.currentTool) {
        this.patchState({
          appState: {
            isToolLocked: false
          }
        });
        return this;
      }
      this.currentTool.onExit();
      tool.previous = this.currentTool.type;
      this.currentTool = tool;
      this.currentTool.onEnter();
      return this.patchState(
        {
          appState: {
            activeTool: type,
            isToolLocked: false
          }
        },
        `selected_tool:${type}`
      );
    });
    __publicField(this, "toggleToolLock", () => {
      if (this.session)
        return this;
      return this.patchState(
        {
          appState: {
            isToolLocked: !this.appState.isToolLocked
          }
        },
        `toggled_tool_lock`
      );
    });
    __publicField(this, "resetDocument", () => {
      if (this.session)
        return this;
      this.session = void 0;
      this.currentTool = this.tools.select;
      const doc = _TldrawApp.defaultDocument;
      doc.pages["page"].name = "Page 1";
      this.resetHistory().clearSelectHistory().loadDocument(_TldrawApp.defaultDocument).persist({});
      return this;
    });
    __publicField(this, "updateUsers", (users, isOwnUpdate = false) => {
      this.patchState(
        {
          room: {
            users: Object.fromEntries(users.map((user) => [user.id, user]))
          }
        },
        isOwnUpdate ? "room:self:update" : "room:user:update"
      );
    });
    __publicField(this, "removeUser", (userId) => {
      this.patchState({
        room: {
          users: {
            [userId]: void 0
          }
        }
      });
    });
    __publicField(this, "mergeDocument", (document2) => {
      if (this.document.id !== document2.id) {
        this.replaceState(__spreadProps(__spreadValues({}, migrate(
          __spreadProps(__spreadValues({}, this.state), {
            document: document2
          }),
          _TldrawApp.version
        )), {
          appState: __spreadProps(__spreadValues({}, this.appState), {
            currentPageId: Object.keys(document2.pages)[0]
          })
        }));
        return this;
      }
      const currentPageStates = __spreadValues({}, this.document.pageStates);
      const nextAppState = __spreadProps(__spreadValues({}, this.appState), {
        currentPageId: document2.pages[this.currentPageId] ? this.currentPageId : Object.keys(document2.pages)[0],
        pages: Object.values(document2.pages).map((page, i) => ({
          id: page.id,
          name: page.name,
          childIndex: page.childIndex || i
        }))
      });
      this.resetHistory();
      Object.keys(this.document.pages).forEach((pageId) => {
        if (!document2.pages[pageId]) {
          if (pageId === this.appState.currentPageId) {
            this.cancelSession();
            this.selectNone();
          }
          currentPageStates[pageId] = void 0;
        }
      });
      if (this.session) {
        this.selectedIds.filter((id) => !document2.pages[this.currentPageId].shapes[id]).forEach((id) => document2.pages[this.currentPageId].shapes[id] = this.page.shapes[id]);
      }
      Object.entries(currentPageStates).forEach(([pageId, pageState]) => {
        pageState.selectedIds = pageState.selectedIds.filter(
          (id) => !!document2.pages[pageId].shapes[id]
        );
      });
      const { editingId } = this.pageState;
      if (editingId) {
        document2.pages[this.currentPageId].shapes[editingId] = this.page.shapes[editingId];
        currentPageStates[this.currentPageId].selectedIds = [editingId];
      }
      return this.replaceState(
        __spreadProps(__spreadValues({}, migrate(
          __spreadProps(__spreadValues({}, this.state), { document: __spreadProps(__spreadValues({}, document2), { pageStates: currentPageStates }) }),
          _TldrawApp.version
        )), {
          appState: nextAppState
        }),
        "merge"
      );
    });
    __publicField(this, "updateDocument", (document2, reason = "updated_document") => {
      const prevState = this.state;
      const nextState = __spreadProps(__spreadValues({}, prevState), {
        document: __spreadProps(__spreadValues({}, prevState.document), {
          assets: document2.assets
        })
      });
      if (!document2.pages[this.currentPageId]) {
        nextState.appState = __spreadProps(__spreadValues({}, prevState.appState), {
          currentPageId: Object.keys(document2.pages)[0]
        });
      }
      let i = 1;
      for (const nextPage of Object.values(document2.pages)) {
        if (nextPage !== prevState.document.pages[nextPage.id]) {
          nextState.document.pages[nextPage.id] = nextPage;
          if (!nextPage.name) {
            nextState.document.pages[nextPage.id].name = `Page ${i + 1}`;
            i++;
          }
        }
      }
      for (const nextPageState of Object.values(document2.pageStates)) {
        if (nextPageState !== prevState.document.pageStates[nextPageState.id]) {
          nextState.document.pageStates[nextPageState.id] = nextPageState;
          const nextPage = document2.pages[nextPageState.id];
          const keysToCheck = ["bindingId", "editingId", "hoveredId", "pointedId"];
          for (const key of keysToCheck) {
            if (!nextPage.shapes[key]) {
              nextPageState[key] = void 0;
            }
          }
          nextPageState.selectedIds = nextPageState.selectedIds.filter(
            (id) => !!document2.pages[nextPage.id].shapes[id]
          );
        }
      }
      return this.replaceState(
        migrate(nextState, nextState.document.version || 0),
        `${reason}:${document2.id}`
      );
    });
    __publicField(this, "loadRoom", (roomId) => {
      this.patchState({
        room: {
          id: roomId,
          userId: uuid,
          users: {
            [uuid]: {
              id: uuid,
              color: USER_COLORS[Math.floor(Math.random() * USER_COLORS.length)],
              point: [100, 100],
              selectedIds: [],
              activeShapes: []
            }
          }
        }
      });
      return this;
    });
    __publicField(this, "loadDocument", (document2) => {
      this.setIsLoading(true);
      this.selectNone();
      this.resetHistory();
      this.clearSelectHistory();
      this.session = void 0;
      const state = __spreadProps(__spreadValues({}, _TldrawApp.defaultState), {
        settings: __spreadValues({}, this.state.settings),
        document: document2,
        appState: __spreadProps(__spreadValues(__spreadValues({}, _TldrawApp.defaultState.appState), this.state.appState), {
          currentPageId: Object.keys(document2.pages)[0],
          disableAssets: this.disableAssets
        })
      });
      this.replaceState(migrate(state, _TldrawApp.version), "loaded_document");
      const { point, zoom } = this.camera;
      this.updateViewport(point, zoom);
      this.setIsLoading(false);
      return this;
    });
    __publicField(this, "loadPageFromURL", (page, pageState) => {
      const pageId = page.id;
      const nextDocument = __spreadProps(__spreadValues({}, this.state.document), {
        pageStates: __spreadProps(__spreadValues({}, this.state.document.pageStates), {
          [pageId]: pageState
        }),
        pages: __spreadProps(__spreadValues({}, this.document.pages), {
          [pageId]: page
        })
      });
      this.loadDocument(nextDocument);
      this.persist({});
    });
    __publicField(this, "newProject", () => {
      if (!this.isLocal)
        return;
      this.fileSystemHandle = null;
      this.resetDocument();
    });
    __publicField(this, "saveProject", () => __async(this, null, function* () {
      if (this.readOnly)
        return;
      const fileHandle = yield saveToFileSystem(
        migrate(this.state, _TldrawApp.version).document,
        this.fileSystemHandle
      );
      this.fileSystemHandle = fileHandle;
      this.persist({});
      this.isDirty = false;
      return this;
    }));
    __publicField(this, "saveProjectAs", (filename) => __async(this, null, function* () {
      try {
        const fileHandle = yield saveToFileSystem(this.document, null, filename);
        this.fileSystemHandle = fileHandle;
        this.persist({});
        this.isDirty = false;
      } catch (e) {
        console.error(e.message);
      }
      return this;
    }));
    __publicField(this, "openProject", () => __async(this, null, function* () {
      if (!this.isLocal)
        return;
      try {
        const result = yield openFromFileSystem();
        if (!result) {
          throw Error();
        }
        const { fileHandle, document: document2 } = result;
        this.loadDocument(document2);
        this.fileSystemHandle = fileHandle;
        this.zoomToFit();
        this.persist({});
      } catch (e) {
        console.error(e);
      } finally {
        this.persist({});
      }
    }));
    __publicField(this, "openAsset", () => __async(this, null, function* () {
      if (!this.disableAssets)
        try {
          const file = yield openAssetsFromFileSystem();
          if (Array.isArray(file)) {
            this.addMediaFromFiles(file, this.centerPoint);
          } else {
            if (!file)
              return;
            this.addMediaFromFiles([file]);
          }
        } catch (e) {
          console.error(e);
        } finally {
          this.persist({});
        }
    }));
    __publicField(this, "signOut", () => {
    });
    __publicField(this, "getAppState", () => {
      return this.appState;
    });
    __publicField(this, "getPage", (pageId = this.currentPageId) => {
      return TLDR.getPage(this.state, pageId || this.currentPageId);
    });
    __publicField(this, "getShapes", (pageId = this.currentPageId) => {
      return TLDR.getShapes(this.state, pageId || this.currentPageId);
    });
    __publicField(this, "getBindings", (pageId = this.currentPageId) => {
      return TLDR.getBindings(this.state, pageId || this.currentPageId);
    });
    __publicField(this, "getShape", (id, pageId = this.currentPageId) => {
      return TLDR.getShape(this.state, id, pageId);
    });
    __publicField(this, "getShapeBounds", (id, pageId = this.currentPageId) => {
      return TLDR.getBounds(this.getShape(id, pageId));
    });
    __publicField(this, "getBinding", (id, pageId = this.currentPageId) => {
      return TLDR.getBinding(this.state, id, pageId);
    });
    __publicField(this, "getPageState", (pageId = this.currentPageId) => {
      return TLDR.getPageState(this.state, pageId || this.currentPageId);
    });
    __publicField(this, "getPagePoint", (point, pageId = this.currentPageId) => {
      const { camera } = this.getPageState(pageId);
      return Vec44.sub(Vec44.div(point, camera.zoom), camera.point);
    });
    __publicField(this, "createPage", (id, name) => {
      if (this.readOnly)
        return this;
      const { width, height } = this.rendererBounds;
      return this.setState(createPage(this, [-width / 2, -height / 2], id, name));
    });
    __publicField(this, "changePage", (pageId) => {
      return this.setState(changePage(this, pageId));
    });
    __publicField(this, "movePage", (pageId, index) => {
      if (this.readOnly)
        return this;
      return this.setState(movePage(this, pageId, index));
    });
    __publicField(this, "renamePage", (pageId, name) => {
      if (this.readOnly)
        return this;
      return this.setState(renamePage(this, pageId, name));
    });
    __publicField(this, "duplicatePage", (pageId) => {
      if (this.readOnly)
        return this;
      return this.setState(duplicatePage(this, pageId));
    });
    __publicField(this, "deletePage", (pageId) => {
      if (this.readOnly)
        return this;
      if (Object.values(this.document.pages).length <= 1)
        return this;
      return this.setState(deletePage(this, pageId ? pageId : this.currentPageId));
    });
    __publicField(this, "cut", (ids = this.selectedIds, e) => {
      e == null ? void 0 : e.preventDefault();
      this.copy(ids, e);
      if (!this.readOnly) {
        this.delete(ids);
      }
      return this;
    });
    __publicField(this, "copy", (ids = this.selectedIds, e) => {
      var _a;
      e == null ? void 0 : e.preventDefault();
      this.clipboard = this.getContent(ids);
      const jsonString = JSON.stringify(__spreadValues({
        type: "tldr/clipboard",
        shapes: [],
        assets: [],
        bindings: []
      }, this.clipboard));
      const tldrawString = `<tldraw>${jsonString}</tldraw>`;
      setClipboard(tldrawString);
      if (e) {
        (_a = e.clipboardData) == null ? void 0 : _a.setData("text/html", tldrawString);
      }
      if (navigator.clipboard && window.ClipboardItem) {
        navigator.clipboard.write([
          new ClipboardItem({
            "text/html": new Blob([tldrawString], { type: "text/html" })
          })
        ]);
      }
      return this;
    });
    __publicField(this, "paste", (point, e) => __async(this, null, function* () {
      var _a, _b;
      if (this.readOnly)
        return;
      const filesToPaste = [];
      const shapesToCreate = [];
      let clipboardData;
      const getSvgFromText = (text) => __async(this, null, function* () {
        const div = document.createElement("div");
        div.innerHTML = text;
        const svg = div.firstChild;
        svg.style.setProperty("background-color", "transparent");
        const imageBlob = yield TLDR.getImageForSvg(svg, "svg" /* SVG */, {
          scale: 1,
          quality: 1
        });
        if (imageBlob) {
          const file = new File([imageBlob], "image.svg");
          filesToPaste.push(file);
        } else {
          getShapeFromText(text);
        }
      });
      const getShapeFromText = (text) => {
        const pagePoint = this.getPagePoint(point != null ? point : this.centerPoint, this.currentPageId);
        const isMultiline = text.includes("\n");
        shapesToCreate.push(
          TLDR.getShapeUtil("text" /* Text */).getShape({
            id: Utils55.uniqueId(),
            type: "text" /* Text */,
            parentId: this.appState.currentPageId,
            text: TLDR.normalizeText(text.trim()),
            point: pagePoint,
            style: __spreadProps(__spreadValues({}, this.appState.currentStyle), {
              textAlign: isMultiline ? "start" /* Start */ : this.appState.currentStyle.textAlign
            })
          })
        );
      };
      const getShapeFromHtml = (html) => {
        var _a2;
        try {
          const maybeJson = (_a2 = html.match(/<tldraw>(.*)<\/tldraw>/)) == null ? void 0 : _a2[1];
          if (!maybeJson)
            return;
          const json = JSON.parse(maybeJson);
          if (json.type === "tldr/clipboard") {
            clipboardData = json;
            return;
          } else {
            throw Error("Not tldraw data!");
          }
        } catch (e2) {
          getShapeFromText(html);
        }
      };
      if (e !== void 0) {
        const items = Array.from((_b = (_a = e.clipboardData) == null ? void 0 : _a.items) != null ? _b : []);
        yield Promise.all(
          items.map((item) => __async(this, null, function* () {
            var _a2;
            const { type, kind } = item;
            switch (kind) {
              case "string": {
                const str = yield new Promise((resolve) => item.getAsString(resolve));
                switch (type) {
                  case "text/html": {
                    if ((_a2 = str.match(/<tldraw>(.*)<\/tldraw>/)) == null ? void 0 : _a2[1]) {
                      getShapeFromHtml(str);
                      return;
                    }
                    break;
                  }
                  case "text/plain": {
                    if (str.startsWith("<svg")) {
                      yield getSvgFromText(str);
                    } else {
                      getShapeFromText(str);
                    }
                    break;
                  }
                }
                break;
              }
              case "file": {
                const file = item.getAsFile();
                if (file)
                  filesToPaste.push(file);
                break;
              }
            }
          }))
        );
      }
      if (clipboardData) {
        this.insertContent(clipboardData, { point, select: true });
        return this;
      }
      if (filesToPaste.length) {
        this.addMediaFromFiles(filesToPaste, point);
        return this;
      }
      if (shapesToCreate.length) {
        const pagePoint = this.getPagePoint(point != null ? point : this.centerPoint, this.currentPageId);
        const currentPoint = Vec44.add(pagePoint, [0, 0]);
        shapesToCreate.forEach((shape, i) => {
          const bounds = TLDR.getBounds(shape);
          if (i === 0) {
            currentPoint[0] -= bounds.width / 2;
            currentPoint[1] -= bounds.height / 2;
          }
          shape.point = [...currentPoint];
          currentPoint[0] += bounds.width;
        });
        this.createShapes(...shapesToCreate);
        return this;
      }
      if (this.clipboard) {
        this.insertContent(this.clipboard);
      } else {
        getClipboard().then((text) => {
          if (text)
            getShapeFromHtml(text);
        });
      }
      return this;
    }));
    __publicField(this, "getSvg", (..._0) => __async(this, [..._0], function* (ids = this.selectedIds.length ? this.selectedIds : Object.keys(this.page.shapes), opts = {}) {
      if (ids.length === 0)
        return;
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
      const style = document.createElementNS("http://www.w3.org/2000/svg", "style");
      if (typeof window !== "undefined") {
        window.focus();
      }
      if (opts.includeFonts) {
        try {
          const { fonts } = yield fetch(_TldrawApp.assetSrc, { mode: "no-cors" }).then((d) => d.json());
          style.textContent = `
          @font-face {
            font-family: 'Caveat Brush';
            src: url(data:application/x-font-woff;charset=utf-8;base64,${fonts.caveat}) format('woff');
            font-weight: 500;
            font-style: normal;
          }
          @font-face {
            font-family: 'Source Code Pro';
            src: url(data:application/x-font-woff;charset=utf-8;base64,${fonts.source_code_pro}) format('woff');
            font-weight: 500;
            font-style: normal;
          }
          @font-face {
            font-family: 'Source Sans Pro';
            src: url(data:application/x-font-woff;charset=utf-8;base64,${fonts.source_sans_pro}) format('woff');
            font-weight: 500;
            font-style: normal;
          }
          @font-face {
            font-family: 'Crimson Pro';
            src: url(data:application/x-font-woff;charset=utf-8;base64,${fonts.crimson_pro}) format('woff');
            font-weight: 500;
            font-style: normal;
          }
          `;
        } catch (e) {
          TLDR.warn("Could not find tldraw-assets.json file.");
        }
      } else {
        style.textContent = `@import url('https://fonts.googleapis.com/css2?family=Caveat+Brush&family=Source+Code+Pro&family=Source+Sans+Pro&family=Crimson+Pro&display=block');`;
      }
      defs.append(style);
      svg.append(defs);
      const shapes = ids.map((id) => this.getShape(id, this.currentPageId)).sort((a, b) => a.childIndex - b.childIndex);
      const commonBounds = Utils55.getCommonBounds(shapes.map(TLDR.getRotatedBounds));
      const getSvgElementForShape = (shape) => {
        const util = TLDR.getShapeUtil(shape);
        const bounds = util.getBounds(shape);
        const elm = util.getSvgElement(shape, this.settings.isDarkMode);
        if (!elm)
          return;
        if (shape.type === "image" /* Image */) {
          elm.setAttribute("xlink:href", this.document.assets[shape.assetId].src);
        } else if (shape.type === "video" /* Video */) {
          elm.setAttribute("xlink:href", this.serializeVideo(shape.id));
        }
        elm.setAttribute(
          "transform",
          `translate(${(SVG_EXPORT_PADDING + shape.point[0] - commonBounds.minX).toFixed(2)}, ${(SVG_EXPORT_PADDING + shape.point[1] - commonBounds.minY).toFixed(2)}) rotate(${((shape.rotation || 0) * 180 / Math.PI).toFixed(2)}, ${(bounds.width / 2).toFixed(2)}, ${(bounds.height / 2).toFixed(2)})`
        );
        return elm;
      };
      shapes.forEach((shape) => {
        var _a;
        if ((_a = shape.children) == null ? void 0 : _a.length) {
          const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
          shape.children.forEach((childId) => {
            const shape2 = this.getShape(childId, this.currentPageId);
            const elm2 = getSvgElementForShape(shape2);
            if (elm2) {
              g.append(elm2);
            }
          });
          svg.append(g);
          return;
        }
        const elm = getSvgElementForShape(shape);
        if (elm) {
          svg.append(elm);
        }
      });
      svg.setAttribute(
        "viewBox",
        [
          0,
          0,
          commonBounds.width + SVG_EXPORT_PADDING * 2,
          commonBounds.height + SVG_EXPORT_PADDING * 2
        ].join(" ")
      );
      svg.setAttribute("width", (commonBounds.width + SVG_EXPORT_PADDING * 2).toString());
      svg.setAttribute("height", (commonBounds.height + SVG_EXPORT_PADDING * 2).toString());
      const exportBackground = this.settings.exportBackground;
      const darkBackground = "#212529";
      const lightBackground = "rgb(248, 249, 250)";
      switch (exportBackground) {
        case "auto" /* Auto */: {
          svg.style.setProperty(
            "background-color",
            this.settings.isDarkMode ? darkBackground : lightBackground
          );
          break;
        }
        case "dark" /* Dark */: {
          svg.style.setProperty("background-color", darkBackground);
          break;
        }
        case "light" /* Light */: {
          svg.style.setProperty("background-color", lightBackground);
          break;
        }
        case "transparent" /* Transparent */:
        default: {
          svg.style.setProperty("background-color", "transparent");
          break;
        }
      }
      svg.querySelectorAll(".tl-fill-hitarea, .tl-stroke-hitarea, .tl-binding-indicator").forEach((elm) => elm.remove());
      return svg;
    }));
    __publicField(this, "copySvg", (..._0) => __async(this, [..._0], function* (ids = this.selectedIds.length ? this.selectedIds : Object.keys(this.page.shapes)) {
      if (ids.length === 0)
        return;
      const svg = yield this.getSvg(ids);
      if (!svg)
        return;
      const svgString = TLDR.getSvgString(svg, 1);
      this.clipboard = this.getContent(ids);
      const tldrawString = JSON.stringify(__spreadValues({
        type: "tldr/clipboard",
        shapes: [],
        assets: [],
        bindings: []
      }, this.clipboard));
      if (navigator.clipboard && window.ClipboardItem) {
        navigator.clipboard.write([
          new ClipboardItem({
            "text/html": new Blob([tldrawString], { type: "text/html" }),
            "text/plain": new Blob([svgString], { type: "text/plain" })
          })
        ]);
      }
      return svgString;
    }));
    __publicField(this, "getContent", (ids) => {
      const page = this.getPage(this.currentPageId);
      if (ids && ids.length === 0)
        return;
      if (!ids)
        ids = this.selectedIds;
      if (ids.length === 0)
        ids = Object.keys(page.shapes);
      if (ids.length === 0)
        return;
      const shapes = ids.map((id) => page.shapes[id]).flatMap((shape) => {
        var _a;
        return [shape, ...((_a = shape.children) != null ? _a : []).map((childId) => page.shapes[childId])];
      }).map(deepCopy);
      const idsSet = new Set(shapes.map((s) => s.id));
      shapes.forEach((shape) => {
        if (shape.parentId === this.currentPageId) {
          shape.parentId = "currentPageId";
        }
      });
      const bindings = Object.values(page.bindings).filter((binding) => {
        if (idsSet.has(binding.fromId) || idsSet.has(binding.toId)) {
          return true;
        }
        if (idsSet.has(binding.fromId)) {
          const shape = shapes.find((s) => s.id === binding.fromId);
          const handles = shape.handles;
          if (handles) {
            Object.values(handles).forEach((handle) => {
              if (handle.bindingId === binding.id) {
                handle.bindingId = void 0;
              }
            });
          }
        }
        if (idsSet.has(binding.toId)) {
          const shape = shapes.find((s) => s.id === binding.toId);
          const handles = shape.handles;
          if (handles) {
            Object.values(handles).forEach((handle) => {
              if (handle.bindingId === binding.id) {
                handle.bindingId = void 0;
              }
            });
          }
        }
        return false;
      }).map(deepCopy);
      const assets = [
        ...new Set(
          shapes.map((shape) => {
            if (!shape.assetId)
              return;
            return this.document.assets[shape.assetId];
          }).filter(Boolean).map(deepCopy)
        )
      ];
      return { shapes, bindings, assets };
    });
    __publicField(this, "copyJson", (ids = this.selectedIds) => {
      const content = this.getContent(ids);
      if (content) {
        TLDR.copyStringToClipboard(JSON.stringify(content));
      }
      return this;
    });
    __publicField(this, "exportJson", (ids = this.selectedIds) => {
      const content = this.getContent(ids);
      if (content) {
        const blob = new Blob([JSON.stringify(content)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `export.json`;
        link.click();
      }
      return this;
    });
    __publicField(this, "insertContent", (content, opts = {}) => {
      return this.setState(insertContent(this, content, opts), "insert_content");
    });
    __publicField(this, "getImage", (..._0) => __async(this, [..._0], function* (format = "png" /* PNG */, opts = {}) {
      const { ids = this.selectedIds.length ? this.selectedIds : Object.keys(this.page.shapes) } = opts;
      const svg = yield this.getSvg(ids, {
        includeFonts: format !== "svg" /* SVG */
      });
      if (!svg)
        return;
      if (format === "svg" /* SVG */) {
        const svgString = TLDR.getSvgString(svg, 1);
        const blob = new Blob([svgString], { type: "image/svg+xml" });
        return blob;
      }
      const imageBlob = yield TLDR.getImageForSvg(svg, format, opts);
      if (!imageBlob)
        return;
      return imageBlob;
    }));
    __publicField(this, "copyImage", (..._0) => __async(this, [..._0], function* (format = "png" /* PNG */, opts = {}) {
      if (format === "svg" /* SVG */) {
        this.copySvg(opts.ids);
        return;
      }
      if (!(navigator.clipboard && window.ClipboardItem)) {
        console.warn("Sorry, your browser does not support copying images.");
        return;
      }
      const blob = yield this.getImage(format, opts);
      if (!blob)
        return;
      navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob
        })
      ]);
    }));
    __publicField(this, "exportImage", (..._0) => __async(this, [..._0], function* (format = "png" /* PNG */, opts = {}) {
      var _a;
      const { pageId = this.currentPageId } = opts;
      const blob = yield this.getImage(format, opts);
      if (!blob)
        return;
      const name = (_a = this.document.pages[pageId].name) != null ? _a : "export";
      if (this.callbacks.onExport) {
        this.callbacks.onExport(this, {
          name,
          type: format,
          blob
        });
      } else {
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${name}.${format}`;
        link.click();
      }
    }));
    __publicField(this, "setCamera", (point, zoom, reason) => {
      this.updateViewport(point, zoom);
      this.patchState(
        {
          document: {
            pageStates: {
              [this.currentPageId]: { camera: { point, zoom } }
            }
          }
        },
        reason
      );
      return this;
    });
    __publicField(this, "resetCamera", () => {
      return this.setCamera(this.centerPoint, 1, `reset_camera`);
    });
    __publicField(this, "pan", (delta) => {
      const { camera } = this.pageState;
      return this.setCamera(Vec44.toFixed(Vec44.sub(camera.point, delta)), camera.zoom, `panned`);
    });
    __publicField(this, "pinchZoom", (point, delta, zoom) => {
      const { camera } = this.pageState;
      const nextPoint = Vec44.sub(camera.point, Vec44.div(delta, camera.zoom));
      const nextZoom = zoom;
      const p0 = Vec44.sub(Vec44.div(point, camera.zoom), nextPoint);
      const p1 = Vec44.sub(Vec44.div(point, nextZoom), nextPoint);
      return this.setCamera(
        Vec44.toFixed(Vec44.add(nextPoint, Vec44.sub(p1, p0))),
        nextZoom,
        `pinch_zoomed`
      );
    });
    __publicField(this, "zoomTo", (next, center = this.centerPoint) => {
      const { zoom, point } = this.camera;
      const p0 = Vec44.sub(Vec44.div(center, zoom), point);
      const p1 = Vec44.sub(Vec44.div(center, next), point);
      return this.setCamera(Vec44.toFixed(Vec44.add(point, Vec44.sub(p1, p0))), next, `zoomed_camera`);
    });
    __publicField(this, "zoomIn", () => {
      const i = Math.round(this.camera.zoom * 100 / 25);
      const nextZoom = TLDR.getCameraZoom((i + 1) * 0.25);
      return this.zoomTo(nextZoom);
    });
    __publicField(this, "zoomOut", () => {
      const i = Math.round(this.camera.zoom * 100 / 25);
      const nextZoom = TLDR.getCameraZoom((i - 1) * 0.25);
      return this.zoomTo(nextZoom);
    });
    __publicField(this, "zoomToFit", () => {
      const {
        shapes,
        pageState: { camera }
      } = this;
      if (shapes.length === 0)
        return this;
      const { rendererBounds } = this;
      const commonBounds = Utils55.getCommonBounds(shapes.map(TLDR.getBounds));
      let zoom = TLDR.getCameraZoom(
        Math.min(
          (rendererBounds.width - FIT_TO_SCREEN_PADDING) / commonBounds.width,
          (rendererBounds.height - FIT_TO_SCREEN_PADDING) / commonBounds.height
        )
      );
      zoom = camera.zoom === zoom || camera.zoom < 1 ? Math.min(1, zoom) : zoom;
      const mx = (rendererBounds.width - commonBounds.width * zoom) / 2 / zoom;
      const my = (rendererBounds.height - commonBounds.height * zoom) / 2 / zoom;
      return this.setCamera(
        Vec44.toFixed(Vec44.sub([mx, my], [commonBounds.minX, commonBounds.minY])),
        zoom,
        `zoomed_to_fit`
      );
    });
    __publicField(this, "zoomToSelection", () => {
      if (this.selectedIds.length === 0)
        return this;
      const { rendererBounds } = this;
      const selectedBounds = TLDR.getSelectedBounds(this.state);
      let zoom = TLDR.getCameraZoom(
        Math.min(
          (rendererBounds.width - FIT_TO_SCREEN_PADDING) / selectedBounds.width,
          (rendererBounds.height - FIT_TO_SCREEN_PADDING) / selectedBounds.height
        )
      );
      zoom = this.camera.zoom === zoom || this.camera.zoom < 1 ? Math.min(1, zoom) : zoom;
      const mx = (rendererBounds.width - selectedBounds.width * zoom) / 2 / zoom;
      const my = (rendererBounds.height - selectedBounds.height * zoom) / 2 / zoom;
      return this.setCamera(
        Vec44.toFixed(Vec44.sub([mx, my], [selectedBounds.minX, selectedBounds.minY])),
        zoom,
        `zoomed_to_selection`
      );
    });
    __publicField(this, "zoomToContent", () => {
      const shapes = this.shapes;
      const pageState = this.pageState;
      if (shapes.length === 0)
        return this;
      const { rendererBounds } = this;
      const { zoom } = pageState.camera;
      const commonBounds = Utils55.getCommonBounds(shapes.map(TLDR.getBounds));
      const mx = (rendererBounds.width - commonBounds.width * zoom) / 2 / zoom;
      const my = (rendererBounds.height - commonBounds.height * zoom) / 2 / zoom;
      return this.setCamera(
        Vec44.toFixed(Vec44.sub([mx, my], [commonBounds.minX, commonBounds.minY])),
        this.camera.zoom,
        `zoomed_to_content`
      );
    });
    __publicField(this, "resetZoom", () => {
      return this.zoomTo(1);
    });
    __publicField(this, "zoomBy", Utils55.throttle((delta, center) => {
      const { zoom } = this.camera;
      const nextZoom = TLDR.getCameraZoom(zoom - delta * zoom);
      return this.zoomTo(nextZoom, center);
    }, 16));
    __publicField(this, "clearSelectHistory", () => {
      this.selectHistory.pointer = 0;
      this.selectHistory.stack = [this.selectedIds];
      return this;
    });
    __publicField(this, "addToSelectHistory", (ids) => {
      if (this.selectHistory.pointer < this.selectHistory.stack.length) {
        this.selectHistory.stack = this.selectHistory.stack.slice(0, this.selectHistory.pointer + 1);
      }
      this.selectHistory.pointer++;
      this.selectHistory.stack.push(ids);
      return this;
    });
    __publicField(this, "setSelectedIds", (ids, push = false) => {
      const nextIds = push ? [...this.pageState.selectedIds, ...ids] : [...ids];
      return this.patchState(
        {
          appState: {
            activeTool: "select"
          },
          document: {
            pageStates: {
              [this.currentPageId]: {
                selectedIds: nextIds
              }
            }
          }
        },
        `selected`
      );
    });
    __publicField(this, "undoSelect", () => {
      if (this.selectHistory.pointer > 0) {
        this.selectHistory.pointer--;
        this.setSelectedIds(this.selectHistory.stack[this.selectHistory.pointer]);
      }
      return this;
    });
    __publicField(this, "redoSelect", () => {
      if (this.selectHistory.pointer < this.selectHistory.stack.length - 1) {
        this.selectHistory.pointer++;
        this.setSelectedIds(this.selectHistory.stack[this.selectHistory.pointer]);
      }
      return this;
    });
    __publicField(this, "select", (...ids) => {
      ids.forEach((id) => {
        if (!this.page.shapes[id]) {
          throw Error(`That shape does not exist on page ${this.currentPageId}`);
        }
      });
      this.setSelectedIds(ids);
      this.addToSelectHistory(ids);
      return this;
    });
    __publicField(this, "selectAll", (pageId = this.currentPageId) => {
      if (this.session)
        return this;
      this.setSelectedIds(
        Object.values(this.document.pages[pageId].shapes).filter((shape) => shape.parentId === pageId).map((shape) => shape.id)
      );
      this.addToSelectHistory(this.selectedIds);
      this.selectTool("select");
      return this;
    });
    __publicField(this, "selectNone", () => {
      this.setSelectedIds([]);
      this.addToSelectHistory(this.selectedIds);
      return this;
    });
    __publicField(this, "startSession", (type, ...args) => {
      var _a, _b;
      if (this.readOnly && type !== "brush" /* Brush */)
        return this;
      if (this.session) {
        TLDR.warn(`Already in a session! (${this.session.constructor.name})`);
        this.cancelSession();
      }
      const Session = getSession(type);
      this.session = new Session(this, ...args);
      const result = this.session.start();
      if (result) {
        this.patchState(result, `session:start_${this.session.constructor.name}`);
      }
      (_b = (_a = this.callbacks).onSessionStart) == null ? void 0 : _b.call(_a, this, this.session.constructor.name);
      return this;
    });
    __publicField(this, "updateSession", () => {
      const { session } = this;
      if (!session)
        return this;
      const patch = session.update();
      if (!patch)
        return this;
      return this.patchState(patch, `session:${session == null ? void 0 : session.constructor.name}`);
    });
    __publicField(this, "cancelSession", () => {
      var _a, _b;
      const { session } = this;
      if (!session)
        return this;
      this.session = void 0;
      const result = session.cancel();
      if (result) {
        this.patchState(result, `session:cancel:${session.constructor.name}`);
      }
      this.setEditingId();
      (_b = (_a = this.callbacks).onSessionEnd) == null ? void 0 : _b.call(_a, this, session.constructor.name);
      return this;
    });
    __publicField(this, "completeSession", () => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      const { session } = this;
      if (!session)
        return this;
      this.session = void 0;
      const result = session.complete();
      if (result === void 0) {
        this.isCreating = false;
        this.patchState(
          {
            appState: {
              status: "idle" /* Idle */
            },
            document: {
              pageStates: {
                [this.currentPageId]: {
                  editingId: void 0,
                  bindingId: void 0,
                  hoveredId: void 0
                }
              }
            }
          },
          `session:complete:${session.constructor.name}`
        );
      } else if ("after" in result) {
        if (this.isCreating) {
          result.before = {
            appState: __spreadProps(__spreadValues({}, result.before.appState), {
              status: "idle" /* Idle */
            }),
            document: {
              pages: {
                [this.currentPageId]: {
                  shapes: Object.fromEntries(this.selectedIds.map((id) => [id, void 0]))
                }
              },
              pageStates: {
                [this.currentPageId]: {
                  selectedIds: [],
                  editingId: null,
                  bindingId: null,
                  hoveredId: null
                }
              }
            }
          };
          if (this.appState.isToolLocked) {
            const pageState = ((_c = (_b = (_a = result.after) == null ? void 0 : _a.document) == null ? void 0 : _b.pageStates) == null ? void 0 : _c[this.currentPageId]) || {};
            pageState.selectedIds = [];
          }
          this.isCreating = false;
        }
        result.after.appState = __spreadProps(__spreadValues({}, result.after.appState), {
          status: "idle" /* Idle */
        });
        result.after.document = __spreadProps(__spreadValues({}, result.after.document), {
          pageStates: __spreadProps(__spreadValues({}, (_d = result.after.document) == null ? void 0 : _d.pageStates), {
            [this.currentPageId]: __spreadProps(__spreadValues({}, (((_e = result.after.document) == null ? void 0 : _e.pageStates) || {})[this.currentPageId]), {
              editingId: null
            })
          })
        });
        this.setState(result, `session:complete:${session.constructor.name}`);
      } else {
        this.patchState(
          __spreadProps(__spreadValues({}, result), {
            appState: __spreadProps(__spreadValues({}, result.appState), {
              status: "idle" /* Idle */
            }),
            document: __spreadProps(__spreadValues({}, result.document), {
              pageStates: {
                [this.currentPageId]: __spreadProps(__spreadValues({}, (_g = (_f = result.document) == null ? void 0 : _f.pageStates) == null ? void 0 : _g[this.currentPageId]), {
                  editingId: null
                })
              }
            })
          }),
          `session:complete:${session.constructor.name}`
        );
      }
      (_i = (_h = this.callbacks).onSessionEnd) == null ? void 0 : _i.call(_h, this, session.constructor.name);
      return this;
    });
    __publicField(this, "createShapes", (...shapes) => {
      if (shapes.length === 0)
        return this;
      return this.create(
        shapes.map((shape) => {
          return TLDR.getShapeUtil(shape.type).create(__spreadValues({
            parentId: this.currentPageId
          }, shape));
        })
      );
    });
    __publicField(this, "updateShapes", (...shapes) => {
      const pageShapes = this.document.pages[this.currentPageId].shapes;
      const shapesToUpdate = shapes.filter((shape) => pageShapes[shape.id]);
      if (shapesToUpdate.length === 0)
        return this;
      return this.setState(
        updateShapes(this, shapesToUpdate, this.currentPageId),
        "updated_shapes"
      );
    });
    __publicField(this, "create", (shapes = [], bindings = []) => {
      if (shapes.length === 0)
        return this;
      return this.setState(createShapes(this, shapes, bindings));
    });
    __publicField(this, "patchCreate", (shapes = [], bindings = []) => {
      if (shapes.length === 0)
        return this;
      return this.patchState(createShapes(this, shapes, bindings).after);
    });
    __publicField(this, "delete", (ids = this.selectedIds) => {
      var _a, _b;
      if (ids.length === 0)
        return this;
      if (this.session)
        return this;
      const drawCommand = deleteShapes(this, ids);
      if (this.callbacks.onAssetDelete && ((_a = drawCommand.before.document) == null ? void 0 : _a.assets) && ((_b = drawCommand.after.document) == null ? void 0 : _b.assets)) {
        const beforeAssetIds = Object.keys(drawCommand.before.document.assets).filter(
          (k) => !!drawCommand.before.document.assets[k]
        );
        const afterAssetIds = Object.keys(drawCommand.after.document.assets).filter(
          (k) => !!drawCommand.after.document.assets[k]
        );
        const intersection = beforeAssetIds.filter((x) => !afterAssetIds.includes(x));
        intersection.forEach((id) => this.callbacks.onAssetDelete(this, id));
      }
      return this.setState(drawCommand);
    });
    __publicField(this, "deleteAll", () => {
      this.selectAll();
      this.delete();
      return this;
    });
    __publicField(this, "style", (style, ids = this.selectedIds) => {
      return this.setState(styleShapes(this, ids, style));
    });
    __publicField(this, "align", (type, ids = this.selectedIds) => {
      if (ids.length < 2)
        return this;
      return this.setState(alignShapes(this, ids, type));
    });
    __publicField(this, "distribute", (direction, ids = this.selectedIds) => {
      if (ids.length < 3)
        return this;
      return this.setState(distributeShapes(this, ids, direction));
    });
    __publicField(this, "stretch", (direction, ids = this.selectedIds) => {
      if (ids.length < 2)
        return this;
      return this.setState(stretchShapes(this, ids, direction));
    });
    __publicField(this, "flipHorizontal", (ids = this.selectedIds) => {
      if (ids.length === 0)
        return this;
      return this.setState(flipShapes(this, ids, "horizontal" /* Horizontal */));
    });
    __publicField(this, "flipVertical", (ids = this.selectedIds) => {
      if (ids.length === 0)
        return this;
      return this.setState(flipShapes(this, ids, "vertical" /* Vertical */));
    });
    __publicField(this, "moveToPage", (toPageId, fromPageId = this.currentPageId, ids = this.selectedIds) => {
      if (ids.length === 0)
        return this;
      const { rendererBounds } = this;
      this.setState(moveShapesToPage(this, ids, rendererBounds, fromPageId, toPageId));
      return this;
    });
    __publicField(this, "moveToBack", (ids = this.selectedIds) => {
      if (ids.length === 0)
        return this;
      return this.setState(reorderShapes(this, ids, "toBack" /* ToBack */));
    });
    __publicField(this, "moveBackward", (ids = this.selectedIds) => {
      if (ids.length === 0)
        return this;
      return this.setState(reorderShapes(this, ids, "backward" /* Backward */));
    });
    __publicField(this, "moveForward", (ids = this.selectedIds) => {
      if (ids.length === 0)
        return this;
      return this.setState(reorderShapes(this, ids, "forward" /* Forward */));
    });
    __publicField(this, "moveToFront", (ids = this.selectedIds) => {
      if (ids.length === 0)
        return this;
      return this.setState(reorderShapes(this, ids, "toFront" /* ToFront */));
    });
    __publicField(this, "nudge", (delta, isMajor = false, ids = this.selectedIds) => {
      if (ids.length === 0)
        return this;
      const size = isMajor ? this.settings.showGrid ? this.currentGrid * 4 : 10 : this.settings.showGrid ? this.currentGrid : 1;
      return this.setState(translateShapes(this, ids, Vec44.mul(delta, size)));
    });
    __publicField(this, "duplicate", (ids = this.selectedIds, point) => {
      if (this.readOnly)
        return this;
      if (ids.length === 0)
        return this;
      return this.setState(duplicateShapes(this, ids, point));
    });
    __publicField(this, "resetBounds", (ids = this.selectedIds) => {
      const command = resetBounds(this, ids, this.currentPageId);
      return this.setState(resetBounds(this, ids, this.currentPageId), command.id);
    });
    __publicField(this, "toggleHidden", (ids = this.selectedIds) => {
      if (ids.length === 0)
        return this;
      return this.setState(toggleShapeProp(this, ids, "isHidden"));
    });
    __publicField(this, "toggleLocked", (ids = this.selectedIds) => {
      if (ids.length === 0)
        return this;
      return this.setState(toggleShapeProp(this, ids, "isLocked"));
    });
    __publicField(this, "toggleAspectRatioLocked", (ids = this.selectedIds) => {
      if (ids.length === 0)
        return this;
      return this.setState(toggleShapeProp(this, ids, "isAspectRatioLocked"));
    });
    __publicField(this, "toggleDecoration", (handleId, ids = this.selectedIds) => {
      if (ids.length === 0 || !(handleId === "start" || handleId === "end"))
        return this;
      return this.setState(toggleShapesDecoration(this, ids, handleId));
    });
    __publicField(this, "setShapeProps", (props, ids = this.selectedIds) => {
      return this.setState(setShapesProps(this, ids, props));
    });
    __publicField(this, "rotate", (delta = Math.PI * -0.5, ids = this.selectedIds) => {
      if (ids.length === 0)
        return this;
      const change = rotateShapes(this, ids, delta);
      if (!change)
        return this;
      return this.setState(change);
    });
    __publicField(this, "group", (ids = this.selectedIds, groupId = Utils55.uniqueId(), pageId = this.currentPageId) => {
      if (this.readOnly)
        return this;
      if (ids.length === 1 && this.getShape(ids[0], pageId).type === "group" /* Group */) {
        return this.ungroup(ids, pageId);
      }
      if (ids.length < 2)
        return this;
      const command = groupShapes(this, ids, groupId, pageId);
      if (!command)
        return this;
      return this.setState(command);
    });
    __publicField(this, "ungroup", (ids = this.selectedIds, pageId = this.currentPageId) => {
      if (this.readOnly)
        return this;
      const groups = ids.map((id) => this.getShape(id, pageId)).filter((shape) => shape.type === "group" /* Group */);
      if (groups.length === 0)
        return this;
      const command = ungroupShapes(this, ids, groups, pageId);
      if (!command) {
        return this;
      }
      return this.setState(command);
    });
    __publicField(this, "cancel", () => {
      var _a, _b;
      (_b = (_a = this.currentTool).onCancel) == null ? void 0 : _b.call(_a);
      return this;
    });
    __publicField(this, "addMediaFromFiles", (_0, ..._1) => __async(this, [_0, ..._1], function* (files, point = this.centerPoint) {
      this.setIsLoading(true);
      const shapesToCreate = [];
      const pagePoint = this.getPagePoint(point);
      for (const file of files) {
        const id = Utils55.uniqueId();
        const extension = file.name.match(/\.[0-9a-z]+$/i);
        if (!extension)
          throw Error("No extension");
        const isImage = IMAGE_EXTENSIONS.includes(extension[0].toLowerCase());
        const isVideo = VIDEO_EXTENSIONS.includes(extension[0].toLowerCase());
        if (!(isImage || isVideo))
          throw Error("Wrong extension");
        const shapeType = isImage ? "image" /* Image */ : "video" /* Video */;
        const assetType = isImage ? "image" /* Image */ : "video" /* Video */;
        let src;
        try {
          if (this.callbacks.onAssetCreate) {
            const result = yield this.callbacks.onAssetCreate(this, file, id);
            if (!result)
              throw Error("Asset creation callback returned false");
            src = result;
          } else {
            src = yield fileToBase64(file);
          }
          if (typeof src === "string") {
            let size = [0, 0];
            if (isImage) {
              if (extension[0] == ".svg") {
                let viewBox;
                const svgString = yield fileToText(file);
                const viewBoxAttribute = this.getViewboxFromSVG(svgString);
                if (viewBoxAttribute) {
                  viewBox = viewBoxAttribute.split(" ");
                  size[0] = parseFloat(viewBox[2]);
                  size[1] = parseFloat(viewBox[3]);
                }
              }
              if (Vec44.isEqual(size, [0, 0])) {
                size = yield getImageSizeFromSrc(src);
              }
            } else {
              size = yield getVideoSizeFromSrc(src);
            }
            const match = Object.values(this.document.assets).find(
              (asset) => asset.type === assetType && asset.src === src
            );
            let assetId;
            if (!match) {
              assetId = id;
              const asset = {
                id: assetId,
                type: assetType,
                name: file.name,
                src,
                size
              };
              this.patchState({
                document: {
                  assets: {
                    [assetId]: asset
                  }
                }
              });
            } else {
              assetId = match.id;
            }
            shapesToCreate.push(this.getImageOrVideoShapeAtPoint(id, shapeType, point, size, assetId));
          }
        } catch (error) {
          console.warn(error);
        }
      }
      if (shapesToCreate.length) {
        const currentPoint = Vec44.add(pagePoint, [0, 0]);
        shapesToCreate.forEach((shape, i) => {
          const bounds = TLDR.getBounds(shape);
          if (i === 0) {
            currentPoint[0] -= bounds.width / 2;
            currentPoint[1] -= bounds.height / 2;
          }
          shape.point = [...currentPoint];
          currentPoint[0] += bounds.width;
        });
        const commonBounds = Utils55.getCommonBounds(shapesToCreate.map(TLDR.getBounds));
        this.createShapes(...shapesToCreate);
        if (!Utils55.boundsContain(this.viewport, commonBounds)) {
          this.zoomToSelection();
          if (this.zoom > 1) {
            this.resetZoom();
          }
        }
      }
      this.setIsLoading(false);
      return this;
    }));
    __publicField(this, "getViewboxFromSVG", (svgStr) => {
      const viewBoxRegex = /.*?viewBox=["'](-?[\d.]+[, ]+-?[\d.]+[, ][\d.]+[, ][\d.]+)["']/;
      if (typeof svgStr === "string") {
        const matches = svgStr.match(viewBoxRegex);
        return matches && matches.length >= 2 ? matches[1] : null;
      }
      this.setIsLoading(false);
      return null;
    });
    __publicField(this, "onKeyDown", (key, info, e) => {
      var _a, _b;
      switch (e.key) {
        case "/": {
          if (this.status === "idle" && !this.pageState.editingId) {
            const { shiftKey, metaKey, altKey, ctrlKey, spaceKey } = this;
            this.onPointerDown(
              {
                target: "canvas",
                pointerId: 0,
                origin: info.point,
                point: info.point,
                delta: [0, 0],
                pressure: 0.5,
                shiftKey,
                ctrlKey,
                metaKey,
                altKey,
                spaceKey
              },
              {
                shiftKey,
                altKey,
                ctrlKey,
                pointerId: 0,
                clientX: info.point[0],
                clientY: info.point[1]
              }
            );
          }
          break;
        }
        case "Escape": {
          this.cancel();
          break;
        }
        case "Meta": {
          this.metaKey = true;
          break;
        }
        case "Alt": {
          this.altKey = true;
          break;
        }
        case "Control": {
          this.ctrlKey = true;
          break;
        }
        case " ": {
          this.isForcePanning = true;
          this.spaceKey = true;
          break;
        }
      }
      (_b = (_a = this.currentTool).onKeyDown) == null ? void 0 : _b.call(_a, key, info, e);
      return this;
    });
    __publicField(this, "onKeyUp", (key, info, e) => {
      var _a, _b;
      if (!info)
        return;
      switch (e.key) {
        case "/": {
          const { currentPoint, shiftKey, metaKey, altKey, ctrlKey, spaceKey } = this;
          this.onPointerUp(
            {
              target: "canvas",
              pointerId: 0,
              origin: currentPoint,
              point: currentPoint,
              delta: [0, 0],
              pressure: 0.5,
              shiftKey,
              ctrlKey,
              metaKey,
              altKey,
              spaceKey
            },
            {
              shiftKey,
              altKey,
              ctrlKey,
              pointerId: 0,
              clientX: currentPoint[0],
              clientY: currentPoint[1]
            }
          );
          break;
        }
        case "Meta": {
          this.metaKey = false;
          break;
        }
        case "Alt": {
          this.altKey = false;
          break;
        }
        case "Control": {
          this.ctrlKey = false;
          break;
        }
        case " ": {
          this.isForcePanning = false;
          this.spaceKey = false;
          break;
        }
      }
      (_b = (_a = this.currentTool).onKeyUp) == null ? void 0 : _b.call(_a, key, info, e);
    });
    __publicField(this, "refreshBoundingBoxes", () => {
      const force = this.shapes.map((shape) => {
        return [
          shape.id,
          __spreadValues({
            point: [...shape.point]
          }, "label" in shape && { label: "" })
        ];
      });
      const restore = this.shapes.map((shape) => {
        return [
          shape.id,
          __spreadValues({
            point: [...shape.point]
          }, "label" in shape && { label: shape.label })
        ];
      });
      clearPrevSize();
      this.patchState({
        document: {
          pages: {
            [this.currentPageId]: {
              shapes: Object.fromEntries(force)
            }
          }
        }
      });
      this.patchState({
        document: {
          pages: {
            [this.currentPageId]: {
              shapes: Object.fromEntries(restore)
            }
          }
        }
      });
    });
    __publicField(this, "onDragOver", (e) => {
      e.preventDefault();
    });
    __publicField(this, "onDrop", (e) => __async(this, null, function* () {
      var _a;
      e.preventDefault();
      if (this.disableAssets)
        return this;
      if ((_a = e.dataTransfer.files) == null ? void 0 : _a.length) {
        this.addMediaFromFiles(Object.values(e.dataTransfer.files), [e.clientX, e.clientY]);
      }
      return this;
    }));
    __publicField(this, "onPinchStart", (info, e) => {
      var _a, _b;
      (_b = (_a = this.currentTool).onPinchStart) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onPinchEnd", (info, e) => {
      var _a, _b;
      return (_b = (_a = this.currentTool).onPinchEnd) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onPinch", (info, e) => {
      var _a, _b;
      return (_b = (_a = this.currentTool).onPinch) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onPan", (info, e) => {
      if (this.appState.status === "pinching")
        return;
      const delta = Vec44.div(info.delta, this.camera.zoom);
      const prev = this.camera.point;
      const next = Vec44.sub(prev, delta);
      if (Vec44.isEqual(next, prev))
        return;
      this.pan(delta);
      if (!this.isForcePanning)
        this.onPointerMove(info, e);
      if (isLinux && this.isForcePanning)
        this.preventPaste();
    });
    __publicField(this, "onZoom", (info, e) => {
      if (this.state.appState.status !== "idle" /* Idle */)
        return;
      const delta = info.delta[2] / 50;
      this.zoomBy(delta, info.point);
      this.onPointerMove(info, e);
    });
    __publicField(this, "updateInputs", (info) => {
      this.currentPoint = this.getPagePoint(info.point).concat(info.pressure);
      this.shiftKey = info.shiftKey;
      this.altKey = info.altKey;
      this.ctrlKey = info.ctrlKey;
      this.metaKey = info.metaKey;
    });
    __publicField(this, "onPointerMove", (info, e) => {
      var _a, _b, _c, _d, _e;
      this.previousPoint = this.currentPoint;
      this.updateInputs(info, e);
      if (this.isForcePanning && this.isPointing) {
        (_a = this.onPan) == null ? void 0 : _a.call(this, __spreadProps(__spreadValues({}, info), { delta: Vec44.neg(info.delta) }), e);
        return;
      }
      (_c = (_b = this.currentTool).onPointerMove) == null ? void 0 : _c.call(_b, info, e);
      if (this.state.room) {
        const { users, userId } = this.state.room;
        (_e = (_d = this.callbacks).onChangePresence) == null ? void 0 : _e.call(_d, this, __spreadProps(__spreadValues({}, users[userId]), {
          point: this.getPagePoint(info.point),
          session: !!this.session
        }));
      }
    });
    __publicField(this, "onPointerDown", (info, e) => {
      var _a, _b;
      if (e.buttons === 4) {
        this.isForcePanning = true;
      } else if (this.isPointing) {
        return;
      }
      this.isPointing = true;
      this.originPoint = this.getPagePoint(info.point).concat(info.pressure);
      this.updateInputs(info, e);
      if (this.isForcePanning)
        return;
      if (this.currentTool.type === "draw" /* Draw */ && e.pointerType === "pen" && e.button === 5) {
        this.selectTool("erase");
        this.isErasingWithPen = true;
      }
      (_b = (_a = this.currentTool).onPointerDown) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onPointerUp", (info, e) => {
      var _a, _b;
      this.isPointing = false;
      if (!this.shiftKey)
        this.isForcePanning = false;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onPointerUp) == null ? void 0 : _b.call(_a, info, e);
      if (this.isErasingWithPen && e.pointerType === "pen" && e.button === 5) {
        this.selectTool("draw" /* Draw */);
        this.isErasingWithPen = false;
      }
    });
    __publicField(this, "onPointCanvas", (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onPointCanvas) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onDoubleClickCanvas", (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onDoubleClickCanvas) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onRightPointCanvas", (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onRightPointCanvas) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onDragCanvas", (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onDragCanvas) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onReleaseCanvas", (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onReleaseCanvas) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onPointShape", (info, e) => {
      var _a, _b;
      this.originPoint = this.getPagePoint(info.point).concat(info.pressure);
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onPointShape) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onReleaseShape", (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onReleaseShape) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onDoubleClickShape", (info, e) => {
      var _a, _b;
      this.originPoint = this.getPagePoint(info.point).concat(info.pressure);
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onDoubleClickShape) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onRightPointShape", (info, e) => {
      var _a, _b;
      this.originPoint = this.getPagePoint(info.point).concat(info.pressure);
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onRightPointShape) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onDragShape", (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onDragShape) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onHoverShape", (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onHoverShape) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onUnhoverShape", (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onUnhoverShape) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onPointBounds", (info, e) => {
      var _a, _b;
      this.originPoint = this.getPagePoint(info.point).concat(info.pressure);
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onPointBounds) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onDoubleClickBounds", (info, e) => {
      var _a, _b;
      this.originPoint = this.getPagePoint(info.point).concat(info.pressure);
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onDoubleClickBounds) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onRightPointBounds", (info, e) => {
      var _a, _b;
      this.originPoint = this.getPagePoint(info.point).concat(info.pressure);
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onRightPointBounds) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onDragBounds", (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onDragBounds) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onHoverBounds", (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onHoverBounds) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onUnhoverBounds", (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onUnhoverBounds) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onReleaseBounds", (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onReleaseBounds) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onPointBoundsHandle", (info, e) => {
      var _a, _b;
      this.originPoint = this.getPagePoint(info.point).concat(info.pressure);
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onPointBoundsHandle) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onDoubleClickBoundsHandle", (info, e) => {
      var _a, _b;
      this.originPoint = this.getPagePoint(info.point).concat(info.pressure);
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onDoubleClickBoundsHandle) == null ? void 0 : _b.call(_a, info, e);
      if (this.selectedIds.length !== 1)
        return;
      const shape = this.getShape(this.selectedIds[0]);
      if (shape.type === "image" /* Image */ || shape.type === "video" /* Video */) {
        const asset = this.document.assets[shape.assetId];
        const util = TLDR.getShapeUtil(shape);
        const centerA = util.getCenter(shape);
        const centerB = util.getCenter(__spreadProps(__spreadValues({}, shape), { size: asset.size }));
        const delta = Vec44.sub(centerB, centerA);
        this.updateShapes({
          id: shape.id,
          point: Vec44.sub(shape.point, delta),
          size: asset.size
        });
      }
    });
    __publicField(this, "onRightPointBoundsHandle", (info, e) => {
      var _a, _b;
      this.originPoint = this.getPagePoint(info.point).concat(info.pressure);
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onRightPointBoundsHandle) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onDragBoundsHandle", (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onDragBoundsHandle) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onHoverBoundsHandle", (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onHoverBoundsHandle) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onUnhoverBoundsHandle", (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onUnhoverBoundsHandle) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onReleaseBoundsHandle", (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onReleaseBoundsHandle) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onPointHandle", (info, e) => {
      var _a, _b;
      this.originPoint = this.getPagePoint(info.point).concat(info.pressure);
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onPointHandle) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onDoubleClickHandle", (info, e) => {
      var _a, _b;
      this.originPoint = this.getPagePoint(info.point).concat(info.pressure);
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onDoubleClickHandle) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onRightPointHandle", (info, e) => {
      var _a, _b;
      this.originPoint = this.getPagePoint(info.point).concat(info.pressure);
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onRightPointHandle) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onDragHandle", (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onDragHandle) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onHoverHandle", (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onHoverHandle) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onUnhoverHandle", (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onUnhoverHandle) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onReleaseHandle", (info, e) => {
      var _a, _b;
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onReleaseHandle) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onShapeChange", (shape) => {
      const pageShapes = this.document.pages[this.currentPageId].shapes;
      const shapeToUpdate = __spreadValues(__spreadValues({}, pageShapes[shape.id]), shape);
      const patch = updateShapes(this, [shapeToUpdate], this.currentPageId).after;
      return this.patchState(patch, "patched_shapes");
    });
    __publicField(this, "onShapeBlur", () => {
      var _a, _b;
      if (performance.now() - this.editingStartTime < 50)
        return;
      const { editingId } = this.pageState;
      const { isToolLocked } = this.getAppState();
      if (editingId) {
        const shape = this.getShape(editingId);
        this.setEditingId();
        if (shape.type === "text" /* Text */) {
          if (shape.text.trim().length <= 0) {
            this.patchState(deleteShapes(this, [editingId]).after, "delete_empty_text");
          } else if (!isToolLocked) {
            this.select(editingId);
          }
        }
      }
      (_b = (_a = this.currentTool).onShapeBlur) == null ? void 0 : _b.call(_a);
    });
    __publicField(this, "onShapeClone", (info, e) => {
      var _a, _b;
      this.originPoint = this.getPagePoint(info.point).concat(info.pressure);
      this.updateInputs(info, e);
      (_b = (_a = this.currentTool).onShapeClone) == null ? void 0 : _b.call(_a, info, e);
    });
    __publicField(this, "onRenderCountChange", (ids) => {
      const appState = this.getAppState();
      if (appState.isEmptyCanvas && ids.length > 0) {
        this.patchState(
          {
            appState: {
              isEmptyCanvas: false
            }
          },
          "empty_canvas:false"
        );
      } else if (!appState.isEmptyCanvas && ids.length <= 0) {
        this.patchState(
          {
            appState: {
              isEmptyCanvas: true
            }
          },
          "empty_canvas:true"
        );
      }
    });
    __publicField(this, "onError", () => {
    });
    __publicField(this, "getShapeUtil", TLDR.getShapeUtil);
    this.callbacks = callbacks;
  }
  setStatus(status) {
    return this.patchState(
      {
        appState: { status }
      },
      `set_status:${status}`
    );
  }
  get isMenuOpen() {
    return this.appState.isMenuOpen;
  }
  get isLoading() {
    return this.appState.isLoading;
  }
  get disableAssets() {
    return this.appState.disableAssets;
  }
  get history() {
    return this.stack.slice(0, this.pointer + 1);
  }
  set history(commands) {
    this.replaceHistory(commands);
  }
  get document() {
    return this.state.document;
  }
  get settings() {
    return this.state.settings;
  }
  get appState() {
    return this.state.appState;
  }
  get currentPageId() {
    return this.state.appState.currentPageId;
  }
  get page() {
    return this.state.document.pages[this.currentPageId];
  }
  get shapes() {
    return Object.values(this.page.shapes);
  }
  get bindings() {
    return Object.values(this.page.bindings);
  }
  get assets() {
    return Object.values(this.document.assets);
  }
  get pageState() {
    return this.state.document.pageStates[this.currentPageId];
  }
  get camera() {
    return this.pageState.camera;
  }
  get zoom() {
    return this.pageState.camera.zoom;
  }
  get selectedIds() {
    return this.pageState.selectedIds;
  }
  createTextShapeAtPoint(point, id, patch) {
    const {
      shapes,
      appState: { currentPageId, currentStyle }
    } = this;
    const childIndex = shapes.length === 0 ? 1 : shapes.filter((shape) => shape.parentId === currentPageId).sort((a, b) => b.childIndex - a.childIndex)[0].childIndex + 1;
    const Text2 = shapeUtils["text" /* Text */];
    const newShape = Text2.create({
      id: id || Utils55.uniqueId(),
      parentId: currentPageId,
      childIndex,
      point,
      style: __spreadValues({}, currentStyle)
    });
    const bounds = Text2.getBounds(newShape);
    newShape.point = Vec44.sub(newShape.point, [bounds.width / 2, bounds.height / 2]);
    if (patch) {
      this.patchCreate([TLDR.getShapeUtil(newShape.type).create(newShape)]);
    } else {
      this.createShapes(newShape);
    }
    this.setEditingId(newShape.id, true);
    return this;
  }
  getImageOrVideoShapeAtPoint(id, type, point, size, assetId) {
    const {
      shapes,
      appState: { currentPageId, currentStyle }
    } = this;
    const childIndex = shapes.length === 0 ? 1 : shapes.filter((shape) => shape.parentId === currentPageId).sort((a, b) => b.childIndex - a.childIndex)[0].childIndex + 1;
    const Shape = shapeUtils[type];
    if (size[0] > this.viewport.width) {
      const r = size[1] / size[0];
      size[0] = this.viewport.width - FIT_TO_SCREEN_PADDING / this.camera.zoom * 2;
      size[1] = size[0] * r;
      if (size[1] < 32 || size[1] < 32) {
        size[1] = 32;
        size[0] = size[1] / r;
      }
    } else if (size[1] > this.viewport.height) {
      const r = size[0] / size[1];
      size[1] = this.viewport.height - FIT_TO_SCREEN_PADDING / this.camera.zoom * 2;
      size[0] = size[1] * r;
      if (size[1] < 32 || size[1] < 32) {
        size[0] = 32;
        size[1] = size[0] / r;
      }
    }
    const newShape = Shape.create({
      id,
      parentId: currentPageId,
      childIndex,
      point,
      size,
      style: __spreadValues({}, currentStyle),
      assetId
    });
    return newShape;
  }
  isSelected(id) {
    return this.selectedIds.includes(id);
  }
  serializeVideo(id) {
    const video = document.getElementById(id + "_video");
    if (video) {
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext("2d").drawImage(video, 0, 0);
      return canvas.toDataURL("image/png");
    } else
      throw new Error("Video with id " + id + " not found");
  }
  serializeImage(id) {
    const image = document.getElementById(id + "_image");
    if (image) {
      const canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      canvas.getContext("2d").drawImage(image, 0, 0);
      return canvas.toDataURL("image/png");
    } else
      throw new Error("Image with id " + id + " not found");
  }
  patchAssets(assets) {
    this.document.assets = __spreadValues(__spreadValues({}, this.document.assets), assets);
  }
  get room() {
    return this.state.room;
  }
  get isLocal() {
    return this.state.room === void 0 || this.state.room.id === "local";
  }
  get status() {
    return this.appState.status;
  }
  get currentUser() {
    if (!this.state.room)
      return;
    return this.state.room.users[this.state.room.userId];
  }
  get centerPoint() {
    const { width, height } = this.rendererBounds;
    return Vec44.toFixed([width / 2, height / 2]);
  }
  get currentGrid() {
    const { zoom } = this.camera;
    if (zoom < 0.15) {
      return GRID_SIZE * 16;
    } else if (zoom < 1) {
      return GRID_SIZE * 4;
    } else {
      return GRID_SIZE * 1;
    }
  }
};
var TldrawApp = _TldrawApp;
__publicField(TldrawApp, "version", 15.5);
__publicField(TldrawApp, "defaultDocument", {
  id: "doc",
  name: "New Document",
  version: _TldrawApp.version,
  pages: {
    page: {
      id: "page",
      name: "Page 1",
      childIndex: 1,
      shapes: {},
      bindings: {}
    }
  },
  pageStates: {
    page: {
      id: "page",
      selectedIds: [],
      camera: {
        point: [0, 0],
        zoom: 1
      }
    }
  },
  assets: {}
});
__publicField(TldrawApp, "defaultState", {
  settings: {
    isCadSelectMode: false,
    isPenMode: false,
    isDarkMode: false,
    isZoomSnap: false,
    isFocusMode: false,
    isSnapping: false,
    isDebugMode: false,
    isReadonlyMode: false,
    keepStyleMenuOpen: false,
    nudgeDistanceLarge: 16,
    nudgeDistanceSmall: 1,
    showRotateHandles: true,
    showBindingHandles: true,
    showCloneHandles: false,
    showGrid: false,
    language: "en",
    dockPosition: "bottom",
    exportBackground: "transparent" /* Transparent */
  },
  appState: {
    status: "idle" /* Idle */,
    activeTool: "select",
    hoveredId: void 0,
    currentPageId: "page",
    currentStyle: defaultStyle,
    isToolLocked: false,
    isMenuOpen: false,
    isEmptyCanvas: false,
    eraseLine: [],
    snapLines: [],
    isLoading: false,
    disableAssets: false
  },
  document: _TldrawApp.defaultDocument
});
__publicField(TldrawApp, "assetSrc", "tldraw-assets.json");

// src/state/tools/index.ts
var tools = {
  select: SelectTool,
  erase: EraseTool,
  ["text" /* Text */]: TextTool,
  ["draw" /* Draw */]: DrawTool,
  ["ellipse" /* Ellipse */]: EllipseTool,
  ["rectangle" /* Rectangle */]: RectangleTool,
  ["triangle" /* Triangle */]: TriangleTool,
  ["line" /* Line */]: LineTool,
  ["arrow" /* Arrow */]: ArrowTool,
  ["sticky" /* Sticky */]: StickyTool
};

// src/Tldraw.tsx
import { Fragment as Fragment18, jsx as jsx73, jsxs as jsxs49 } from "react/jsx-runtime";
var ErrorBoundary = _Errorboundary;
var isSystemDarkMode = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)").matches : false;
function Tldraw({
  id,
  document: document2,
  currentPageId,
  autofocus = true,
  showMenu = true,
  showMultiplayerMenu = true,
  showPages = true,
  showTools = true,
  showZoom = true,
  showStyles = true,
  showUI = true,
  readOnly = false,
  disableAssets = false,
  darkMode = isSystemDarkMode,
  components,
  onMount,
  onChange,
  onChangePresence,
  onNewProject,
  onSaveProject,
  onSaveProjectAs,
  onOpenProject,
  onOpenMedia,
  onUndo,
  onRedo,
  onPersist,
  onPatch,
  onCommand,
  onChangePage,
  onAssetCreate,
  onAssetDelete,
  onAssetUpload,
  onSessionStart,
  onSessionEnd,
  onExport,
  hideCursors
}) {
  const [sId, setSId] = React47.useState(id);
  const [app, setApp] = React47.useState(() => {
    const app2 = new TldrawApp(id, {
      onMount,
      onChange,
      onChangePresence,
      onNewProject,
      onSaveProject,
      onSaveProjectAs,
      onOpenProject,
      onOpenMedia,
      onUndo,
      onRedo,
      onPersist,
      onPatch,
      onCommand,
      onChangePage,
      onAssetDelete,
      onAssetCreate,
      onAssetUpload,
      onSessionStart,
      onSessionEnd
    });
    return app2;
  });
  const [onCancel, setOnCancel] = React47.useState(null);
  const [onYes, setOnYes] = React47.useState(null);
  const [onNo, setOnNo] = React47.useState(null);
  const [dialogState, setDialogState] = React47.useState(null);
  const openDialog = React47.useCallback(
    (dialogState2, onYes2, onNo2, onCancel2) => {
      setDialogState(() => dialogState2);
      setOnCancel(() => onCancel2);
      setOnYes(() => onYes2);
      setOnNo(() => onNo2);
    },
    []
  );
  React47.useLayoutEffect(() => {
    if (id === sId)
      return;
    const newApp = new TldrawApp(id, {
      onMount,
      onChange,
      onChangePresence,
      onNewProject,
      onSaveProject,
      onSaveProjectAs,
      onOpenProject,
      onOpenMedia,
      onUndo,
      onRedo,
      onPersist,
      onPatch,
      onCommand,
      onChangePage,
      onAssetDelete,
      onAssetCreate,
      onAssetUpload,
      onExport,
      onSessionStart,
      onSessionEnd
    });
    setSId(id);
    setApp(newApp);
  }, [sId, id]);
  React47.useEffect(() => {
    if (!document2)
      return;
    if (document2.id === app.document.id) {
      app.updateDocument(document2);
    } else {
      app.loadDocument(document2);
    }
  }, [document2, app]);
  React47.useEffect(() => {
    app.setDisableAssets(disableAssets);
  }, [app, disableAssets]);
  React47.useEffect(() => {
    if (!currentPageId)
      return;
    app.changePage(currentPageId);
  }, [currentPageId, app]);
  React47.useEffect(() => {
    app.readOnly = readOnly;
    if (!readOnly) {
      app.selectNone();
      app.cancelSession();
      app.setEditingId();
    }
  }, [app, readOnly]);
  React47.useEffect(() => {
    if (darkMode !== app.settings.isDarkMode) {
      app.toggleDarkMode();
    }
  }, [app, darkMode]);
  React47.useEffect(() => {
    app.callbacks = {
      onMount,
      onChange,
      onChangePresence,
      onNewProject,
      onSaveProject,
      onSaveProjectAs,
      onOpenProject,
      onOpenMedia,
      onUndo,
      onRedo,
      onPersist,
      onPatch,
      onCommand,
      onChangePage,
      onAssetDelete,
      onAssetCreate,
      onAssetUpload,
      onExport,
      onSessionStart,
      onSessionEnd
    };
  }, [
    onMount,
    onChange,
    onChangePresence,
    onNewProject,
    onSaveProject,
    onSaveProjectAs,
    onOpenProject,
    onOpenMedia,
    onUndo,
    onRedo,
    onPersist,
    onPatch,
    onCommand,
    onChangePage,
    onAssetDelete,
    onAssetCreate,
    onAssetUpload,
    onExport,
    onSessionStart,
    onSessionEnd
  ]);
  React47.useLayoutEffect(() => {
    var _a;
    if (typeof window === "undefined")
      return;
    if (!((_a = window.document) == null ? void 0 : _a.fonts))
      return;
    function refreshBoundingBoxes() {
      app.refreshBoundingBoxes();
    }
    window.document.fonts.addEventListener("loadingdone", refreshBoundingBoxes);
    return () => {
      window.document.fonts.removeEventListener("loadingdone", refreshBoundingBoxes);
    };
  }, [app]);
  return /* @__PURE__ */ jsx73(TldrawContext.Provider, {
    value: app,
    children: /* @__PURE__ */ jsx73(AlertDialogContext.Provider, {
      value: { onYes, onCancel, onNo, dialogState, setDialogState, openDialog },
      children: /* @__PURE__ */ jsx73(InnerTldraw, {
        id: sId,
        autofocus,
        showPages,
        showMenu,
        showMultiplayerMenu,
        showStyles,
        showZoom,
        showTools,
        showUI,
        readOnly,
        components,
        hideCursors
      }, sId || "Tldraw")
    })
  });
}
var InnerTldraw = React47.memo(function InnerTldraw2({
  id,
  autofocus,
  showPages,
  showMenu,
  showMultiplayerMenu,
  showZoom,
  showStyles,
  showTools,
  readOnly,
  showUI,
  components,
  hideCursors
}) {
  var _a, _b;
  const app = useTldrawApp();
  const [dialogContainer, setDialogContainer] = React47.useState(null);
  const rWrapper = React47.useRef(null);
  const state = app.useStore();
  const { document: document2, settings, appState, room } = state;
  const isSelecting = state.appState.activeTool === "select";
  const page = document2.pages[appState.currentPageId];
  const pageState = document2.pageStates[page.id];
  const assets = document2.assets;
  const { selectedIds } = pageState;
  const isHideBoundsShape = selectedIds.length === 1 && page.shapes[selectedIds[0]] && TLDR.getShapeUtil(page.shapes[selectedIds[0]].type).hideBounds;
  const isHideResizeHandlesShape = selectedIds.length === 1 && page.shapes[selectedIds[0]] && TLDR.getShapeUtil(page.shapes[selectedIds[0]].type).hideResizeHandles;
  const meta = React47.useMemo(() => {
    return { isDarkMode: settings.isDarkMode };
  }, [settings.isDarkMode]);
  const showDashedBrush = settings.isCadSelectMode ? !appState.selectByContain : appState.selectByContain;
  const theme = React47.useMemo(() => {
    const { selectByContain } = appState;
    const { isDarkMode, isCadSelectMode } = settings;
    if (isDarkMode) {
      const brushBase2 = isCadSelectMode ? selectByContain ? "69, 155, 255" : "105, 209, 73" : "180, 180, 180";
      return {
        brushFill: `rgba(${brushBase2}, ${isCadSelectMode ? 0.08 : 0.05})`,
        brushStroke: `rgba(${brushBase2}, ${isCadSelectMode ? 0.5 : 0.25})`,
        brushDashStroke: `rgba(${brushBase2}, .6)`,
        selected: "rgba(38, 150, 255, 1.000)",
        selectFill: "rgba(38, 150, 255, 0.05)",
        background: "#212529",
        foreground: "#49555f"
      };
    }
    const brushBase = isCadSelectMode ? selectByContain ? "0, 89, 242" : "51, 163, 23" : "0,0,0";
    return {
      brushFill: `rgba(${brushBase}, ${isCadSelectMode ? 0.08 : 0.05})`,
      brushStroke: `rgba(${brushBase}, ${isCadSelectMode ? 0.4 : 0.25})`,
      brushDashStroke: `rgba(${brushBase}, .6)`
    };
  }, [settings.isDarkMode, settings.isCadSelectMode, appState.selectByContain]);
  const isInSession = app.session !== void 0;
  const hideBounds = isInSession && ((_a = app.session) == null ? void 0 : _a.constructor.name) !== "BrushSession" || !isSelecting || isHideBoundsShape || !!pageState.editingId;
  const hideHandles = isInSession || !isSelecting;
  const hideIndicators = isInSession && state.appState.status !== "brushing" /* Brushing */ || !isSelecting;
  const hideCloneHandles = isInSession || !isSelecting || pageState.camera.zoom < 0.2;
  const translation = useTranslation(settings.language);
  React47.useLayoutEffect(() => {
    const elm = rWrapper.current;
    if (!elm)
      return;
    if (settings.isDarkMode) {
      elm.classList.add(dark);
    } else {
      elm.classList.remove(dark);
    }
  }, [settings.isDarkMode]);
  useCursor(rWrapper);
  return /* @__PURE__ */ jsx73(ContainerContext.Provider, {
    value: rWrapper,
    children: /* @__PURE__ */ jsxs49(IntlProvider, {
      locale: translation.locale,
      messages: translation.messages,
      children: [
        /* @__PURE__ */ jsx73(AlertDialog, {
          container: dialogContainer
        }),
        /* @__PURE__ */ jsxs49(StyledLayout, {
          ref: rWrapper,
          tabIndex: -0,
          children: [
            /* @__PURE__ */ jsx73(Loading, {}),
            /* @__PURE__ */ jsx73(OneOff, {
              focusableRef: rWrapper,
              autofocus
            }),
            /* @__PURE__ */ jsx73(ContextMenu, {
              children: /* @__PURE__ */ jsx73(ErrorBoundary, {
                FallbackComponent: ErrorFallback,
                children: /* @__PURE__ */ jsx73(Renderer, {
                  id,
                  containerRef: rWrapper,
                  shapeUtils,
                  page,
                  pageState,
                  assets,
                  snapLines: appState.snapLines,
                  eraseLine: appState.eraseLine,
                  grid: GRID_SIZE,
                  users: room == null ? void 0 : room.users,
                  userId: room == null ? void 0 : room.userId,
                  theme,
                  meta,
                  components,
                  hideCursors,
                  hideBounds,
                  hideHandles,
                  hideResizeHandles: isHideResizeHandlesShape,
                  hideIndicators,
                  hideBindingHandles: !settings.showBindingHandles,
                  hideCloneHandles,
                  hideRotateHandles: !settings.showRotateHandles,
                  hideGrid: !settings.showGrid,
                  showDashedBrush,
                  performanceMode: (_b = app.session) == null ? void 0 : _b.performanceMode,
                  onPinchStart: app.onPinchStart,
                  onPinchEnd: app.onPinchEnd,
                  onPinch: app.onPinch,
                  onPan: app.onPan,
                  onZoom: app.onZoom,
                  onPointerDown: app.onPointerDown,
                  onPointerMove: app.onPointerMove,
                  onPointerUp: app.onPointerUp,
                  onPointCanvas: app.onPointCanvas,
                  onDoubleClickCanvas: app.onDoubleClickCanvas,
                  onRightPointCanvas: app.onRightPointCanvas,
                  onDragCanvas: app.onDragCanvas,
                  onReleaseCanvas: app.onReleaseCanvas,
                  onPointShape: app.onPointShape,
                  onDoubleClickShape: app.onDoubleClickShape,
                  onRightPointShape: app.onRightPointShape,
                  onDragShape: app.onDragShape,
                  onHoverShape: app.onHoverShape,
                  onUnhoverShape: app.onUnhoverShape,
                  onReleaseShape: app.onReleaseShape,
                  onPointBounds: app.onPointBounds,
                  onDoubleClickBounds: app.onDoubleClickBounds,
                  onRightPointBounds: app.onRightPointBounds,
                  onDragBounds: app.onDragBounds,
                  onHoverBounds: app.onHoverBounds,
                  onUnhoverBounds: app.onUnhoverBounds,
                  onReleaseBounds: app.onReleaseBounds,
                  onPointBoundsHandle: app.onPointBoundsHandle,
                  onDoubleClickBoundsHandle: app.onDoubleClickBoundsHandle,
                  onRightPointBoundsHandle: app.onRightPointBoundsHandle,
                  onDragBoundsHandle: app.onDragBoundsHandle,
                  onHoverBoundsHandle: app.onHoverBoundsHandle,
                  onUnhoverBoundsHandle: app.onUnhoverBoundsHandle,
                  onReleaseBoundsHandle: app.onReleaseBoundsHandle,
                  onPointHandle: app.onPointHandle,
                  onDoubleClickHandle: app.onDoubleClickHandle,
                  onRightPointHandle: app.onRightPointHandle,
                  onDragHandle: app.onDragHandle,
                  onHoverHandle: app.onHoverHandle,
                  onUnhoverHandle: app.onUnhoverHandle,
                  onReleaseHandle: app.onReleaseHandle,
                  onError: app.onError,
                  onRenderCountChange: app.onRenderCountChange,
                  onShapeChange: app.onShapeChange,
                  onShapeBlur: app.onShapeBlur,
                  onShapeClone: app.onShapeClone,
                  onBoundsChange: app.updateBounds,
                  onKeyDown: app.onKeyDown,
                  onKeyUp: app.onKeyUp,
                  onDragOver: app.onDragOver,
                  onDrop: app.onDrop
                })
              })
            }),
            showUI && /* @__PURE__ */ jsx73(StyledUI, {
              ref: setDialogContainer,
              children: settings.isFocusMode ? /* @__PURE__ */ jsx73(FocusButton, {
                onSelect: app.toggleFocusMode
              }) : /* @__PURE__ */ jsxs49(Fragment18, {
                children: [
                  /* @__PURE__ */ jsx73(TopPanel, {
                    readOnly,
                    showPages,
                    showMenu,
                    showMultiplayerMenu,
                    showStyles,
                    showZoom
                  }),
                  /* @__PURE__ */ jsx73(StyledSpacer2, {}),
                  showTools && !readOnly && /* @__PURE__ */ jsx73(ToolsPanel, {})
                ]
              })
            })
          ]
        })
      ]
    })
  });
});
var OneOff = React47.memo(function OneOff2({
  focusableRef,
  autofocus
}) {
  useKeyboardShortcuts(focusableRef);
  React47.useEffect(() => {
    var _a;
    if (autofocus) {
      (_a = focusableRef.current) == null ? void 0 : _a.focus();
    }
  }, [autofocus]);
  return null;
});
var StyledLayout = styled("div", {
  position: "absolute",
  height: "100%",
  width: "100%",
  minHeight: 0,
  minWidth: 0,
  maxHeight: "100%",
  maxWidth: "100%",
  overflow: "hidden",
  boxSizing: "border-box",
  outline: "none",
  userSelect: "none",
  WebkitUserSelect: "none",
  "& .tl-container": {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    zIndex: 1
  },
  "& input, textarea, button, select, label, button": {
    webkitTouchCallout: "none",
    webkitUserSelect: "none",
    "-webkit-tap-highlight-color": "transparent",
    "tap-highlight-color": "transparent"
  }
});
var StyledUI = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  height: "100%",
  width: "100%",
  padding: "8px 8px 0 8px",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  pointerEvents: "none",
  zIndex: 2,
  "& > *": {
    pointerEvents: "all"
  }
});
var StyledSpacer2 = styled("div", {
  flexGrow: 2
});
export {
  AlignStyle,
  AlignType,
  Arrow3 as Arrow,
  ColorStyle,
  DashStyle,
  Decoration,
  DistributeType,
  Draw,
  Ellipse,
  FlipType,
  FontSize,
  FontStyle,
  Group,
  Image2 as Image,
  MoveType,
  Rectangle,
  SessionType,
  SizeStyle,
  Sticky,
  StretchType,
  TDAssetType,
  TDEventHandler,
  TDExportBackground,
  TDExportType,
  TDShapeType,
  TDStatus,
  TDUserStatus,
  TLDR,
  Text,
  Tldraw,
  TldrawApp,
  Triangle,
  Video,
  getShapeUtil,
  shapeUtils,
  useFileSystem
};
//# sourceMappingURL=index.mjs.map

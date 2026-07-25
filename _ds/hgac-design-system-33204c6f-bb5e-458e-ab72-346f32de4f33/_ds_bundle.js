/* @ds-bundle: {"format":4,"namespace":"HGACDesignSystem_33204c","components":[{"name":"Badge","sourcePath":"components/core/Badge/Badge.jsx"},{"name":"Tag","sourcePath":"components/core/Badge/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card/Card.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs/Tabs.jsx"},{"name":"Dialog","sourcePath":"components/overlay/Dialog/Dialog.jsx"}],"sourceHashes":{"components/core/Badge/Badge.jsx":"42ca62b4590c","components/core/Button/Button.jsx":"6ffbdc0d9874","components/core/Card/Card.jsx":"bf666a53d73c","components/feedback/Toast/Toast.jsx":"c6e91dae125a","components/feedback/Tooltip/Tooltip.jsx":"f0b57bdf42aa","components/forms/Checkbox/Checkbox.jsx":"3d6b6e930f1a","components/forms/Input/Input.jsx":"7b04e218b4f8","components/forms/Radio/Radio.jsx":"6bc6e4313900","components/forms/Select/Select.jsx":"7570ea5814f4","components/forms/Switch/Switch.jsx":"bd5715cd427d","components/navigation/Tabs/Tabs.jsx":"be6d2bb9206b","components/overlay/Dialog/Dialog.jsx":"273af6f5427f","ui_kits/transportation-modeling/Dashboard.jsx":"37f2f888ec62","ui_kits/transportation-modeling/RunDetail.jsx":"fdc2f46cb4d5","ui_kits/transportation-modeling/Sidebar.jsx":"bc108815cf71"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HGACDesignSystem_33204c = window.HGACDesignSystem_33204c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge/Badge.jsx
try { (() => {
const tones = {
  neutral: {
    background: 'var(--neutral-100)',
    color: 'var(--text-secondary)'
  },
  primary: {
    background: 'var(--color-primary-subtle)',
    color: 'var(--color-primary)'
  },
  success: {
    background: '#e4f5ee',
    color: 'var(--status-success)'
  },
  warning: {
    background: '#fbf0e2',
    color: 'var(--status-warning)'
  },
  danger: {
    background: 'var(--color-accent-subtle)',
    color: 'var(--color-accent)'
  }
};
function Badge({
  children,
  tone = 'neutral'
}) {
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '2px 10px',
      borderRadius: 'var(--radius-full)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      ...t
    }
  }, children);
}
function Tag({
  children,
  onRemove
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 10px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--surface-sunken)',
      border: '1px solid var(--border-default)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-primary)'
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Remove",
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: 'var(--text-tertiary)',
      fontSize: 14,
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Badge, Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button/Button.jsx
try { (() => {
const sizes = {
  sm: {
    padding: '6px 14px',
    fontSize: 'var(--text-sm)',
    gap: 6
  },
  md: {
    padding: '10px 20px',
    fontSize: 'var(--text-base)',
    gap: 8
  },
  lg: {
    padding: '14px 28px',
    fontSize: 'var(--text-md)',
    gap: 10
  }
};
const variants = {
  primary: {
    background: 'var(--color-primary)',
    color: 'var(--text-inverse)',
    border: '1px solid transparent'
  },
  accent: {
    background: 'var(--color-accent)',
    color: 'var(--text-inverse)',
    border: '1px solid transparent'
  },
  secondary: {
    background: 'var(--surface-card)',
    color: 'var(--color-primary)',
    border: '1px solid var(--border-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--color-primary)',
    border: '1px solid transparent'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  icon = null,
  onClick,
  type = 'button'
}) {
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      padding: s.padding,
      fontSize: s.fontSize,
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)',
      ...v
    },
    onMouseEnter: e => {
      if (disabled) return;
      e.currentTarget.style.background = variant === 'secondary' || variant === 'ghost' ? 'var(--color-primary-subtle)' : variant === 'accent' ? 'var(--color-accent-hover)' : 'var(--color-primary-hover)';
    },
    onMouseLeave: e => {
      if (disabled) return;
      e.currentTarget.style.background = v.background;
    },
    onMouseDown: e => {
      if (disabled) return;
      e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      if (disabled) return;
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card/Card.jsx
try { (() => {
function Card({
  children,
  padded = true,
  elevated = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-default)',
      boxShadow: elevated ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      padding: padded ? 'var(--space-6)' : 0,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card/Card.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast/Toast.jsx
try { (() => {
const tones = {
  info: {
    background: 'var(--blue-700)',
    accent: 'var(--blue-300)'
  },
  success: {
    background: '#12523a',
    accent: '#5fd8a6'
  },
  danger: {
    background: 'var(--red-800)',
    accent: 'var(--red-300)'
  }
};
function Toast({
  message,
  tone = 'info',
  onDismiss
}) {
  const t = tones[tone] || tones.info;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 16px',
      borderRadius: 'var(--radius-md)',
      background: t.background,
      color: 'var(--neutral-0)',
      boxShadow: 'var(--shadow-lg)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      minWidth: 260,
      borderLeft: `3px solid ${t.accent}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, message), onDismiss && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--neutral-0)',
      opacity: 0.7,
      cursor: 'pointer',
      fontSize: 16,
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip/Tooltip.jsx
try { (() => {
const {
  useState
} = React;
function Tooltip({
  children,
  label,
  side = 'top'
}) {
  const [show, setShow] = useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: 8
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: 8
    }
  }[side] || {};
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      ...pos,
      background: 'var(--neutral-900)',
      color: 'var(--neutral-0)',
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      fontSize: 'var(--text-xs)',
      fontFamily: 'var(--font-body)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-md)',
      zIndex: 10,
      pointerEvents: 'none'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange,
  disabled = false
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-body)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 20,
      height: 20,
      borderRadius: 6,
      border: `2px solid ${checked ? 'var(--color-primary)' : 'var(--border-strong)'}`,
      background: checked ? 'var(--color-primary)' : 'var(--surface-card)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--duration-fast) var(--ease-standard)',
      flexShrink: 0
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "10",
    viewBox: "0 0 12 10",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 5L4.5 8.5L11 1.5",
    stroke: "white",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  error,
  disabled = false
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.value),
    style: {
      padding: '10px 14px',
      fontSize: 'var(--text-base)',
      fontFamily: 'var(--font-body)',
      borderRadius: 'var(--radius-md)',
      border: `1px solid ${error ? 'var(--color-accent)' : 'var(--border-strong)'}`,
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      color: 'var(--text-primary)',
      outline: 'none',
      transition: 'box-shadow var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)'
    },
    onFocus: e => {
      e.target.style.borderColor = 'var(--border-focus)';
      e.target.style.boxShadow = 'var(--shadow-focus)';
    },
    onBlur: e => {
      e.target.style.borderColor = error ? 'var(--color-accent)' : 'var(--border-strong)';
      e.target.style.boxShadow = 'none';
    }
  }), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--color-accent)'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio/Radio.jsx
try { (() => {
function Radio({
  label,
  checked,
  onChange,
  disabled = false
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-body)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(),
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      border: `2px solid ${checked ? 'var(--color-primary)' : 'var(--border-strong)'}`,
      background: 'var(--surface-card)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--color-primary)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select/Select.jsx
try { (() => {
function Select({
  label,
  value,
  onChange,
  options = [],
  disabled = false
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("select", {
    value: value,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.value),
    style: {
      padding: '10px 14px',
      fontSize: 'var(--text-base)',
      fontFamily: 'var(--font-body)',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-strong)',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      color: 'var(--text-primary)',
      outline: 'none'
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  onChange,
  disabled = false
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-body)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 40,
      height: 24,
      borderRadius: 'var(--radius-full)',
      background: checked ? 'var(--color-primary)' : 'var(--neutral-300)',
      position: 'relative',
      transition: 'background var(--duration-base) var(--ease-standard)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 19 : 3,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: 'var(--neutral-0)',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--duration-base) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs/Tabs.jsx
try { (() => {
const {
  useState
} = React;
function Tabs({
  tabs = [],
  defaultActive = 0
}) {
  const [active, setActive] = useState(defaultActive);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      borderBottom: '1px solid var(--border-default)'
    }
  }, tabs.map((t, i) => /*#__PURE__*/React.createElement("button", {
    key: t.label,
    onClick: () => setActive(i),
    style: {
      padding: '10px 2px',
      marginBottom: -1,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--weight-medium)',
      color: active === i ? 'var(--color-primary)' : 'var(--text-secondary)',
      borderBottom: `2px solid ${active === i ? 'var(--color-primary)' : 'transparent'}`,
      transition: 'color var(--duration-fast) var(--ease-standard)'
    }
  }, t.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 'var(--space-5)'
    }
  }, tabs[active] && tabs[active].content));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Dialog/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  onClose,
  footer
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(19,26,32,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      width: 420,
      maxWidth: '90vw',
      padding: 'var(--space-8)',
      fontFamily: 'var(--font-body)'
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 var(--space-4)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--text-lg)',
      color: 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-normal)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-6)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Dialog/Dialog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/transportation-modeling/Dashboard.jsx
try { (() => {
const runs = [{
  id: 'RUN-2035-BASE-014',
  scenario: '2035 Baseline',
  status: 'Active',
  vmt: '214.4M',
  voc: 0.87
}, {
  id: 'RUN-2035-TRN-009',
  scenario: '2035 Transit Expansion',
  status: 'Active',
  vmt: '198.1M',
  voc: 0.79
}, {
  id: 'RUN-2045-BASE-002',
  scenario: '2045 Baseline',
  status: 'Draft',
  vmt: '241.6M',
  voc: 0.94
}, {
  id: 'RUN-2025-CAL-031',
  scenario: '2025 Calibration',
  status: 'Failed',
  vmt: '—',
  voc: null
}];
const toneFor = {
  Active: 'success',
  Draft: 'neutral',
  Failed: 'danger'
};
function Dashboard({
  Card,
  Badge,
  Button,
  Tabs,
  tab,
  setTab
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: 32,
      overflow: 'auto',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 28,
      color: 'var(--text-primary)'
    }
  }, "Regional Travel Demand Model"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--text-secondary)',
      marginTop: 4
    }
  }, "13-county Houston-Galveston region \xB7 updated Jul 22, 2026")), /*#__PURE__*/React.createElement(Button, {
    variant: "accent"
  }, "+ New Model Run")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 16,
      marginBottom: 28
    }
  }, [['Active runs', '2'], ['Total VMT (2035)', '214.4M'], ['Avg V/C ratio', '0.87'], ['Scenarios', '6']].map(([label, val]) => /*#__PURE__*/React.createElement(Card, {
    key: label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 30,
      color: 'var(--text-primary)',
      marginTop: 6
    }
  }, val)))), /*#__PURE__*/React.createElement(Tabs, {
    tabs: [{
      label: 'Model Runs',
      content: /*#__PURE__*/React.createElement(Card, {
        padded: false
      }, /*#__PURE__*/React.createElement("table", {
        style: {
          width: '100%',
          borderCollapse: 'collapse',
          fontFamily: 'var(--font-body)'
        }
      }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
        style: {
          borderBottom: '1px solid var(--border-default)'
        }
      }, ['Run ID', 'Scenario', 'Status', 'VMT', 'V/C'].map(h => /*#__PURE__*/React.createElement("th", {
        key: h,
        style: {
          textAlign: 'left',
          padding: '12px 20px',
          fontSize: 12,
          color: 'var(--text-tertiary)',
          textTransform: 'uppercase',
          letterSpacing: 'var(--tracking-wide)'
        }
      }, h)))), /*#__PURE__*/React.createElement("tbody", null, runs.map(r => /*#__PURE__*/React.createElement("tr", {
        key: r.id,
        style: {
          borderBottom: '1px solid var(--border-default)'
        }
      }, /*#__PURE__*/React.createElement("td", {
        style: {
          padding: '14px 20px',
          fontFamily: 'var(--font-mono)',
          fontSize: 13,
          color: 'var(--text-primary)'
        }
      }, r.id), /*#__PURE__*/React.createElement("td", {
        style: {
          padding: '14px 20px',
          fontSize: 14,
          color: 'var(--text-primary)'
        }
      }, r.scenario), /*#__PURE__*/React.createElement("td", {
        style: {
          padding: '14px 20px'
        }
      }, /*#__PURE__*/React.createElement(Badge, {
        tone: toneFor[r.status]
      }, r.status)), /*#__PURE__*/React.createElement("td", {
        style: {
          padding: '14px 20px',
          fontFamily: 'var(--font-mono)',
          fontSize: 13,
          color: 'var(--text-secondary)'
        }
      }, r.vmt), /*#__PURE__*/React.createElement("td", {
        style: {
          padding: '14px 20px',
          fontFamily: 'var(--font-mono)',
          fontSize: 13,
          color: 'var(--text-secondary)'
        }
      }, r.voc ?? '—'))))))
    }, {
      label: 'Scenarios',
      content: /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: 'var(--font-body)',
          color: 'var(--text-secondary)'
        }
      }, "Scenario comparison view \u2014 placeholder for scenario diff charts."))
    }, {
      label: 'Reports',
      content: /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: 'var(--font-body)',
          color: 'var(--text-secondary)'
        }
      }, "Generated PDF/CSV export history."))
    }]
  }));
}
window.Dashboard = Dashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/transportation-modeling/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/transportation-modeling/RunDetail.jsx
try { (() => {
function RunDetail({
  Card,
  Badge,
  Button,
  Dialog,
  onBack
}) {
  const [confirmOpen, setConfirmOpen] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: 32,
      overflow: 'auto',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--color-primary)',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      cursor: 'pointer',
      padding: 0,
      marginBottom: 16
    }
  }, "\u2190 Back to dashboard"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 22,
      fontWeight: 700,
      color: 'var(--text-primary)'
    }
  }, "RUN-2035-BASE-014"), /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "Active")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--text-secondary)',
      marginTop: 6
    }
  }, "2035 Baseline \xB7 Harris, Fort Bend, Montgomery + 10 counties")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Export report"), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    onClick: () => setConfirmOpen(true)
  }, "Delete run"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, "Total VMT"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 28,
      marginTop: 6
    }
  }, "214,382,110")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, "Avg V/C Ratio"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 28,
      marginTop: 6
    }
  }, "0.87")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, "Trips Assigned"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 28,
      marginTop: 6
    }
  }, "11.2M"))), /*#__PURE__*/React.createElement(Dialog, {
    open: confirmOpen,
    title: "Delete this model run?",
    onClose: () => setConfirmOpen(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setConfirmOpen(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      onClick: () => setConfirmOpen(false)
    }, "Delete"))
  }, "This removes RUN-2035-BASE-014 and its outputs permanently. This can't be undone."));
}
window.RunDetail = RunDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/transportation-modeling/RunDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/transportation-modeling/Sidebar.jsx
try { (() => {
function Sidebar({
  active,
  onNavigate
}) {
  const items = [{
    key: 'dashboard',
    label: 'Dashboard'
  }, {
    key: 'runs',
    label: 'Model Runs'
  }, {
    key: 'scenarios',
    label: 'Scenarios'
  }, {
    key: 'reports',
    label: 'Reports'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 220,
      background: 'var(--neutral-900)',
      color: 'var(--neutral-0)',
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 20px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/hgac-logo.png",
    style: {
      width: 32,
      height: 32
    },
    alt: "H-GAC"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 15,
      letterSpacing: '-0.01em'
    }
  }, "HGAC TM")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      padding: '8px 12px'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.key,
    onClick: () => onNavigate(it.key),
    style: {
      textAlign: 'left',
      padding: '10px 12px',
      borderRadius: 'var(--radius-md)',
      border: 'none',
      cursor: 'pointer',
      background: active === it.key ? 'var(--blue-700)' : 'transparent',
      color: active === it.key ? '#fff' : 'var(--neutral-300)',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 500
    }
  }, it.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      padding: 16,
      fontSize: 11,
      color: 'var(--neutral-500)',
      fontFamily: 'var(--font-body)'
    }
  }, "Regional Travel Demand Model v6"));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/transportation-modeling/Sidebar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Dialog = __ds_scope.Dialog;

})();

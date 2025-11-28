// file: components/toast/ToastProvider.tsx
"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";

type ToastType = "success" | "error" | "info";
type Toast = {
  id: string;
  type: ToastType;
  title?: string;
  message: string;
  duration?: number;
};

type ToastContextType = {
  success: (message: string, title?: string, duration?: number) => void;
  error: (message: string, title?: string, duration?: number) => void;
  info: (message: string, title?: string, duration?: number) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = (): ToastContextType => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((t) => t.filter((x) => x.id !== id));
  }, []);

  const pushToast = useCallback(
    (type: ToastType, message: string, title?: string, duration = 3500) => {
      const id = Date.now().toString();
      const toast: Toast = { id, type, title, message, duration };
      setToasts((t) => [toast, ...t]);

      // auto remove
      setTimeout(() => removeToast(id), duration);
    },
    [removeToast]
  );

  const value: ToastContextType = {
    success: (message, title, duration) =>
      pushToast("success", message, title, duration),
    error: (message, title, duration) =>
      pushToast("error", message, title, duration),
    info: (message, title, duration) =>
      pushToast("info", message, title, duration),
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      {/* Toast container (top-right) */}
      <div
        aria-live="polite"
        className="pointer-events-none fixed top-6 right-6 z-50 flex flex-col gap-4"
      >
        {toasts.map((t) => (
          <ToastItem key={t.id} toast={t} onClose={() => removeToast(t.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

/* ---------- ToastItem component ---------- */
const ToastItem: React.FC<{ toast: Toast; onClose: () => void }> = ({
  toast,
  onClose,
}) => {
  const [exiting, setExiting] = useState(false);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const startTime = Date.now();
    const totalDuration = toast.duration || 3500;

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, totalDuration - elapsed);
      setProgress((remaining / totalDuration) * 100);
    }, 50);

    return () => clearInterval(progressInterval);
  }, [toast.duration]);

  const handleClose = () => {
    setExiting(true);
    setTimeout(onClose, 300);
  };

  const baseClasses =
    "pointer-events-auto w-80 max-w-xs rounded-xl shadow-lg border p-4 flex items-start gap-3 backdrop-blur-sm";

  const typeStyles = {
    success:
      "bg-gradient-to-r from-green-50 to-emerald-50 border-green-200/80 shadow-green-100/30",
    error:
      "bg-gradient-to-r from-red-50 to-rose-50 border-red-200/80 shadow-red-100/30",
    info: "bg-gradient-to-r from-blue-50 to-sky-50 border-blue-200/80 shadow-blue-100/30",
  };

  const iconColors = {
    success: "text-emerald-600",
    error: "text-rose-600",
    info: "text-sky-600",
  };

  const progressColors = {
    success: "bg-emerald-500",
    error: "bg-rose-500",
    info: "bg-sky-500",
  };

  const getIcon = () => {
    const iconClass = `w-5 h-5 ${iconColors[toast.type]}`;

    switch (toast.type) {
      case "success":
        return (
          <div
            className={`p-2 rounded-full ${
              iconColors[toast.type]
            } bg-emerald-100/80`}
          >
            <svg
              className={iconClass}
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M5 13l4 4L19 7"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        );
      case "error":
        return (
          <div
            className={`p-2 rounded-full ${
              iconColors[toast.type]
            } bg-rose-100/80`}
          >
            <svg
              className={iconClass}
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        );
      case "info":
        return (
          <div
            className={`p-2 rounded-full ${
              iconColors[toast.type]
            } bg-sky-100/80`}
          >
            <svg
              className={iconClass}
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M12 8h.01M11.5 12h1v4h-1z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        );
    }
  };

  return (
    <div
      role="status"
      className={`
        ${baseClasses}
        ${typeStyles[toast.type]}
        transform transition-all duration-300 ease-out
        ${
          exiting
            ? "opacity-0 -translate-x-full scale-95"
            : "opacity-100 translate-x-0 scale-100"
        }
        hover:shadow-xl hover:scale-[1.02] transition-all duration-200
      `}
    >
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 rounded-t-xl bg-gray-200/50 overflow-hidden">
        <div
          className={`h-full ${
            progressColors[toast.type]
          } transition-all duration-50 ease-linear`}
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex-shrink-0 mt-0.5">{getIcon()}</div>

      <div className="flex-1 min-w-0 space-y-1">
        {toast.title && (
          <div className="font-semibold text-sm text-gray-900 tracking-tight">
            {toast.title}
          </div>
        )}
        <div className="text-sm text-gray-700 break-words leading-relaxed">
          {toast.message}
        </div>
      </div>

      <button
        onClick={handleClose}
        className="flex-shrink-0 inline-flex h-7 w-7 items-center justify-center rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100/50 focus:outline-none focus:ring-2 focus:ring-gray-200/50 transition-all duration-200"
        aria-label="close"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M6 6l12 12M6 18L18 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

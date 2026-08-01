"use client";

import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

export type ToastState = {
  type: "success" | "error";
  title: string;
  description?: string;
} | null;

export default function Toast({ toast, onDismiss }: { toast: ToastState; onDismiss: () => void }) {
  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          role={toast.type === "error" ? "alert" : "status"}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.25 }}
          className={clsx(
            "mt-4 rounded-md border px-5 py-4 text-sm flex items-start justify-between gap-4",
            toast.type === "success"
              ? "border-accent/40 bg-accent/10 text-foreground"
              : "border-primary/50 bg-primary/10 text-foreground"
          )}
        >
          <div>
            <p className="font-medium">{toast.title}</p>
            {toast.description && <p className="text-muted-foreground mt-1">{toast.description}</p>}
          </div>
          <button
            onClick={onDismiss}
            aria-label="Bezárás"
            className="text-muted-foreground hover:text-foreground cursor-pointer shrink-0"
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

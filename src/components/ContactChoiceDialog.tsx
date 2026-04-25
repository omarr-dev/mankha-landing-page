"use client";

import { useEffect } from "react";
import { useI18n } from "@/i18n/context";
import { buildMailto, buildWhatsAppUrl } from "@/lib/links";

interface ContactChoiceDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  topic: string;
}

export function ContactChoiceDialog({
  open,
  onClose,
  title,
  topic,
}: ContactChoiceDialogProps) {
  const { t, locale } = useI18n();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  const isAr = locale === "ar";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-choice-title"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      <div className="relative w-full max-w-sm rounded-2xl bg-near-black border border-border-dark p-6 shadow-2xl">
        <p
          id="contact-choice-title"
          className={
            isAr
              ? "font-arabic text-ivory text-[20px] mb-1"
              : "font-serif text-ivory text-[20px] mb-1"
          }
        >
          {title}
        </p>
        <p className="font-sans text-warm-silver text-[14px] mb-5">
          {t("contactChoiceTitle")}
        </p>
        <div className="grid grid-cols-2 gap-3">
          <a
            href={buildMailto(topic)}
            onClick={onClose}
            className="flex flex-col items-center gap-1.5 rounded-xl border border-border-dark bg-dark-surface py-4 text-warm-silver hover:text-ivory hover:bg-[#3d3d3a] transition-colors"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            <span className="font-sans text-[14px]">
              {t("contactChoiceEmail")}
            </span>
          </a>
          <a
            href={buildWhatsAppUrl(topic)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex flex-col items-center gap-1.5 rounded-xl border border-border-dark bg-dark-surface py-4 text-warm-silver hover:text-ivory hover:bg-[#3d3d3a] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.59 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l.36.572-1 3.648 3.737-.98zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z" />
            </svg>
            <span className="font-sans text-[14px]">
              {t("contactChoiceWhatsApp")}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

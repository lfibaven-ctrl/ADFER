export type AnalyticsEvent = "hero_cta_click" | "packages_view" | "basic_package_click" | "intermediate_package_click" | "advanced_package_click" | "custom_package_click" | "case_study_view" | "contact_form_start" | "contact_form_submit" | "whatsapp_click" | "instagram_click" | "facebook_click" | "faq_open";
export function track(event: AnalyticsEvent, data: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("adfer:analytics", { detail: { event, ...data } }));
  const w = window as typeof window & { dataLayer?: Record<string, unknown>[]; fbq?: (...args: unknown[]) => void };
  w.dataLayer?.push({ event, ...data });
  w.fbq?.("trackCustom", event, data);
}

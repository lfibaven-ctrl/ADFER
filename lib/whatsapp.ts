export const whatsappUrl = (phone: string, message: string) => `https://wa.me/52${phone.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

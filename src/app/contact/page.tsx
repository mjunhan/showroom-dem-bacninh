import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { STORE_INFO } from "@/lib/data";
import { MapPin, Phone, MessageSquare, Clock, ArrowRight } from "lucide-react";

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <main className="pt-24 md:pt-32 pb-24 px-4 md:px-6 bg-secondary min-h-screen">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                        {/* Contact Info */}
                        <div className="bg-white rounded-lg p-8 md:p-12 border border-primary/5 shadow-sm space-y-12">
                            <div>
                                <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-lg text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                                    Liên hệ với chúng tôi
                                </span>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-playfair leading-tight text-slate-900">
                                    Showroom Chăn Ga <br />
                                    <span className="text-primary italic">Bedding Bắc Ninh</span>
                                </h1>
                                <p className="text-slate-500 text-lg leading-relaxed max-w-lg font-medium">
                                    Chúng tôi luôn sẵn lòng lắng nghe và hỗ trợ bạn. Hãy ghé thăm showroom hoặc liên hệ qua các kênh trực tuyến để nhận tư vấn tốt nhất.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-start space-x-6 group">
                                    <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center shrink-0 text-white shadow-lg shadow-primary/10 group-hover:scale-105 transition-transform">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-2 text-slate-900">Địa chỉ Showroom</h3>
                                        <p className="text-slate-600 leading-relaxed font-medium">{STORE_INFO.address}</p>
                                        <a href="https://maps.google.com" target="_blank" className="text-primary font-bold mt-2 inline-flex items-center space-x-2 hover:text-accent transition-colors text-sm uppercase tracking-wider">
                                            <span>Chỉ đường trên Google Maps</span>
                                            <ArrowRight size={14} />
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6 group">
                                    <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center shrink-0 text-accent group-hover:scale-105 transition-transform border border-accent/20">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-2 text-slate-900">Số điện thoại / Hotline</h3>
                                        <a href={`tel:${STORE_INFO.phone}`} className="text-2xl md:text-3xl font-bold text-primary hover:text-accent transition-colors tracking-tight">
                                            {STORE_INFO.phone}
                                        </a>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-slate-50 pt-8">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-secondary/50 rounded-lg flex items-center justify-center shrink-0 text-primary border border-primary/5">
                                            <MessageSquare size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-[10px] text-slate-400 uppercase tracking-widest mb-0.5">Chat Zalo</h3>
                                            <a href={STORE_INFO.zalo} target="_blank" className="text-primary font-bold hover:text-accent transition-colors text-sm">Nhấn để nhắn tin</a>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-secondary/50 rounded-lg flex items-center justify-center shrink-0 text-primary border border-primary/5">
                                            <Clock size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-[10px] text-slate-400 uppercase tracking-widest mb-0.5">Giờ mở cửa</h3>
                                            <p className="text-primary font-bold text-sm">{STORE_INFO.openingHours}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Embed */}
                        <div className="relative rounded-lg overflow-hidden bg-white border border-primary/5 shadow-sm p-4 h-[500px] lg:h-auto">
                            <div className="relative w-full h-full rounded-lg overflow-hidden border border-slate-100">
                                <iframe
                                    src={STORE_INFO.location}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Maps Location"
                                    className="grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                                ></iframe>
                                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-6 py-4 rounded-lg shadow-xl border border-white/50">
                                    <p className="font-bold text-primary text-sm uppercase tracking-widest mb-1">Showroom Bắc Ninh</p>
                                    <p className="text-xs text-slate-500 font-bold italic">Mở cửa ngay hôm nay</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

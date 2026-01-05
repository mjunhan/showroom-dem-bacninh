import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { STORE_INFO } from "@/lib/data";
import { MapPin, Phone, MessageSquare, Clock, ArrowRight } from "lucide-react";

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <main className="pt-32 pb-24 px-6 bg-white min-h-screen">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        {/* Contact Info */}
                        <div className="space-y-12">
                            <div>
                                <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-bold uppercase tracking-widest mb-6">
                                    Liên hệ với chúng tôi
                                </span>
                                <h1 className="text-4xl md:text-6xl font-bold mb-8 font-playfair leading-tight">
                                    Showroom Chăn Ga Gối Đệm <br />
                                    <span className="text-blue-600">Bắc Ninh</span>
                                </h1>
                                <p className="text-slate-500 text-lg leading-relaxed max-w-lg">
                                    Chúng tôi luôn sẵn lòng lắng nghe và hỗ trợ bạn. Hãy ghé thăm showroom hoặc liên hệ qua các kênh trực tuyến để nhận tư vấn tốt nhất.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-start space-x-6 group">
                                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shrink-0 text-white shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                                        <MapPin size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Địa chỉ Showroom</h3>
                                        <p className="text-slate-600 leading-relaxed text-lg">{STORE_INFO.address}</p>
                                        <a href="https://maps.google.com" target="_blank" className="text-blue-600 font-bold mt-2 inline-flex items-center space-x-2 hover:underline">
                                            <span>Chỉ đường trên Google Maps</span>
                                            <ArrowRight size={16} />
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6 group">
                                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0 text-blue-600 group-hover:scale-110 transition-transform border border-blue-100">
                                        <Phone size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Số điện thoại / Hotline</h3>
                                        <a href={`tel:${STORE_INFO.phone}`} className="text-3xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
                                            {STORE_INFO.phone}
                                        </a>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 text-slate-400">
                                            <MessageSquare size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-sm text-slate-400 uppercase tracking-widest">Chat Zalo</h3>
                                            <a href={STORE_INFO.zalo} target="_blank" className="text-slate-900 font-bold hover:text-blue-600 transition-colors">Nhấn để nhắn tin</a>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 text-slate-400">
                                            <Clock size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-sm text-slate-400 uppercase tracking-widest">Giờ mở cửa</h3>
                                            <p className="text-slate-900 font-bold">{STORE_INFO.openingHours}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Embed */}
                        <div className="relative h-[650px] rounded-[3rem] overflow-hidden bg-slate-100 border-8 border-slate-50 shadow-2xl">
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
                            <div className="absolute top-8 left-8 bg-white/80 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-white/50">
                                <p className="font-bold text-slate-900">Showroom Bắc Ninh</p>
                                <p className="text-sm text-slate-500">Mở cửa ngay hôm nay</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

import Link from "next/link";
import { STORE_INFO } from "@/lib/data";
import { MapPin, Phone, MessageSquare, Clock } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-blue-950 text-blue-50/60 py-24 px-8 border-t border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
                {/* Brand */}
                <div className="col-span-1 md:col-span-2">
                    <h2 className="text-2xl font-black font-sans tracking-tight text-white mb-8">
                        Showroom <span className="text-primary">Bedding</span>
                    </h2>
                    <p className="max-w-md mb-10 leading-relaxed font-medium">
                        Nơi khơi nguồn cảm hứng cho không gian sống thượng lưu. Chúng tôi cung cấp giải pháp giấc ngủ hoàn hảo với những sản phẩm chăn ga gối đệm tinh hoa nhất.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-white font-black uppercase tracking-widest text-xs mb-8">Liên kết</h3>
                    <ul className="space-y-5">
                        <li><Link href="/products" className="hover:text-primary transition-colors font-bold text-sm tracking-wide">Sản phẩm</Link></li>
                        <li><Link href="/blog" className="hover:text-primary transition-colors font-bold text-sm tracking-wide">Tin tức</Link></li>
                        <li><Link href="/contact" className="hover:text-primary transition-colors font-bold text-sm tracking-wide">Liên hệ</Link></li>
                        <li><Link href="/policy" className="hover:text-primary transition-colors font-bold text-sm tracking-wide">Chính sách bảo hành</Link></li>
                    </ul>
                </div>

                {/* Contact info */}
                <div>
                    <h3 className="text-white font-black uppercase tracking-widest text-xs mb-8">Thông tin</h3>
                    <ul className="space-y-5">
                        <li className="flex items-start space-x-4">
                            <MapPin className="text-primary shrink-0" size={18} />
                            <span className="text-sm font-bold leading-snug">{STORE_INFO.address}</span>
                        </li>
                        <li className="flex items-center space-x-4">
                            <Phone className="text-primary shrink-0" size={18} />
                            <a href={`tel:${STORE_INFO.phone}`} className="hover:text-white transition-colors text-sm font-bold">{STORE_INFO.phone}</a>
                        </li>
                        <li className="flex items-center space-x-4">
                            <MessageSquare className="text-primary shrink-0" size={18} />
                            <a href={STORE_INFO.zalo} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-sm font-bold">Chat Zalo</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-white/5 text-center text-[11px] font-black uppercase tracking-[0.3em] text-white/20">
                <p>&copy; {new Date().getFullYear()} {STORE_INFO.name}. Sophisticated Sleep Experience.</p>
            </div>
        </footer>
    );
}

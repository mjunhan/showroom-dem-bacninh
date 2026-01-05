import Link from "next/link";
import { STORE_INFO } from "@/lib/data";
import { MapPin, Phone, MessageSquare, Clock } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-400 py-16 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand */}
                <div className="col-span-1 md:col-span-2">
                    <h2 className="text-2xl font-black font-sans tracking-tight text-white mb-6">
                        Showroom <span className="text-primary">Bedding</span>
                    </h2>
                    <p className="max-w-md mb-8 leading-relaxed text-slate-500 font-medium">
                        Chuyên cung cấp các sản phẩm chăn ga gối đệm chính hãng tại Bắc Ninh.
                        Cam kết chất lượng, giá tốt tại kho, bảo hành dài hạn.
                    </p>
                    <div className="flex space-x-4">
                        {/* Social placeholders could go here */}
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-white font-bold mb-6">Liên kết</h3>
                    <ul className="space-y-4">
                        <li><Link href="/products" className="hover:text-primary transition-colors">Sản phẩm</Link></li>
                        <li><Link href="/blog" className="hover:text-primary transition-colors">Tin tức</Link></li>
                        <li><Link href="/contact" className="hover:text-primary transition-colors">Liên hệ</Link></li>
                        <li><Link href="/policy" className="hover:text-primary transition-colors">Chính sách bảo hành</Link></li>
                    </ul>
                </div>

                {/* Contact info */}
                <div>
                    <h3 className="text-white font-bold mb-6">Thông tin liên hệ</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start space-x-3">
                            <MapPin className="text-primary shrink-0" size={20} />
                            <span>{STORE_INFO.address}</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Phone className="text-primary shrink-0" size={20} />
                            <a href={`tel:${STORE_INFO.phone}`} className="hover:text-white transition-colors">{STORE_INFO.phone}</a>
                        </li>
                        <li className="flex items-center space-x-3">
                            <MessageSquare className="text-primary shrink-0" size={20} />
                            <a href={STORE_INFO.zalo} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Chat Zalo</a>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Clock className="text-primary shrink-0" size={20} />
                            <span>{STORE_INFO.openingHours}</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} {STORE_INFO.name}. All rights reserved.</p>
            </div>
        </footer>
    );
}

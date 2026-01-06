import Link from "next/link";
import { MapPin, Phone, MessageSquare } from "lucide-react";

interface FooterProps {
    siteName?: string;
    hotline?: string;
    address?: string;
    zaloUrl?: string;
}

export function Footer({
    siteName = "Showroom Bedding",
    hotline = "0123456789",
    address = "123 Đường ABC, Quận XYZ, TP HCM",
    zaloUrl = "https://zalo.me"
}: FooterProps) {
    return (
        <footer className="bg-primary text-slate-400 py-24 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
                {/* Brand */}
                <div className="col-span-1 md:col-span-2">
                    <h2 className="text-2xl font-bold font-sans tracking-tight text-white mb-6">
                        {siteName}
                    </h2>
                    <p className="max-w-md mb-8 leading-relaxed text-slate-400">
                        Nơi khơi nguồn cảm hứng cho không gian sống thượng lưu. Chúng tôi cung cấp giải pháp giấc ngủ hoàn hảo với những sản phẩm chăn ga gối đệm tinh hoa nhất.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Liên kết</h3>
                    <ul className="space-y-4">
                        <li><Link href="/products" className="hover:text-accent transition-colors duration-300 text-sm font-medium cursor-pointer">Sản phẩm</Link></li>
                        <li><Link href="/blog" className="hover:text-accent transition-colors duration-300 text-sm font-medium cursor-pointer">Tin tức</Link></li>
                        <li><Link href="/contact" className="hover:text-accent transition-colors duration-300 text-sm font-medium cursor-pointer">Liên hệ</Link></li>
                        <li><Link href="/policy" className="hover:text-accent transition-colors duration-300 text-sm font-medium cursor-pointer">Chính sách bảo hành</Link></li>
                    </ul>
                </div>

                {/* Contact info */}
                <div>
                    <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Thông tin</h3>
                    <ul className="space-y-5">
                        <li className="flex items-start space-x-4">
                            <MapPin className="text-accent shrink-0" size={18} />
                            <span className="text-sm font-bold leading-snug">{address}</span>
                        </li>
                        <li className="flex items-center space-x-4">
                            <Phone className="text-accent shrink-0" size={18} />
                            <a href={`tel:${hotline}`} className="hover:text-secondary transition-colors duration-300 text-sm font-bold cursor-pointer">{hotline}</a>
                        </li>
                        <li className="flex items-center space-x-4">
                            <MessageSquare className="text-accent shrink-0" size={18} />
                            <a href={zaloUrl} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors duration-300 text-sm font-bold cursor-pointer">Chat Zalo</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-sm text-slate-500">
                <p>&copy; {new Date().getFullYear()} {siteName}. Sophisticated Sleep Experience.</p>
            </div>
        </footer>
    );
}

import { ShieldCheck, Truck, BadgePercent } from "lucide-react";

export function USP() {
    const features = [
        {
            icon: <ShieldCheck className="text-primary" size={32} />,
            title: "Hàng chính hãng",
            desc: "Cam kết 100% sản phẩm chính hãng từ các thương hiệu lớn.",
        },
        {
            icon: <BadgePercent className="text-primary" size={32} />,
            title: "Giá tốt tại kho",
            desc: "Ưu đãi hấp dẫn nhất thị trường, không qua trung gian.",
        },
        {
            icon: <Truck className="text-primary" size={32} />,
            title: "Miễn phí ship Bắc Ninh",
            desc: "Giao hàng tận nơi miễn phí trong nội thành TP. Bắc Ninh.",
        },
    ];

    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                {features.map((f, i) => (
                    <div key={i} className="flex flex-col items-center text-center p-8 rounded-3xl hover:bg-slate-50 transition-colors">
                        <div className="mb-6 p-4 bg-primary/10 rounded-2xl">
                            {f.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

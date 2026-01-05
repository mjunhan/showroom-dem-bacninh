export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: "Đệm" | "Chăn Ga" | "Gối" | "Phụ Kiện";
  status: "Còn hàng" | "Liên hệ";
  brand: string;
  description: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Đệm Lò Xo King Koil",
    slug: "dem-lo-xo-king-koil",
    price: 12500000,
    originalPrice: 15000000,
    image: "https://placehold.co/600x400/2563EB/FFFFFF/png?text=Dem+Lo+Xo",
    category: "Đệm",
    status: "Còn hàng",
    brand: "King Koil",
    description: "Đệm lò xo túi độc lập cao cấp, nâng đỡ cột sống tối ưu.",
  },
  {
    id: "2",
    name: "Bộ Chăn Ga Cotton",
    slug: "bo-chan-ga-cotton",
    price: 3200000,
    image: "https://placehold.co/600x400/06B6D4/FFFFFF/png?text=Chan+Ga+Cotton",
    category: "Chăn Ga",
    status: "Còn hàng",
    brand: "Hanvico",
    description: "Chất liệu cotton lụa mềm mại, thoáng mát, không phai màu.",
  },
  {
    id: "3",
    name: "Gối Lông Vũ 5 Sao",
    slug: "goi-long-vu-5-sao",
    price: 450000,
    image: "https://placehold.co/600x400/64748B/FFFFFF/png?text=Goi+Long+Vu",
    category: "Gối",
    status: "Còn hàng",
    brand: "Everon",
    description: "Ruột gối lông vũ nhân tạo, êm ái, chống xẹp lún.",
  },
  {
    id: "4",
    name: "Đệm Bông Ép Everon",
    slug: "dem-bong-ep-everon",
    price: 2800000,
    image: "https://placehold.co/600x400/2563EB/FFFFFF/png?text=Dem+Bong+Ep",
    category: "Đệm",
    status: "Liên hệ",
    brand: "Everon",
    description: "Đệm bông ép kháng khuẩn, độ cứng vừa phải, tốt cho người đau lưng.",
  },
  {
    id: "5",
    name: "Bộ Ga Gối Tencel",
    slug: "bo-ga-goi-tencel",
    price: 4500000,
    image: "https://placehold.co/600x400/06B6D4/FFFFFF/png?text=Ga+Goi+Tencel",
    category: "Chăn Ga",
    status: "Còn hàng",
    brand: "Dunlopillo",
    description: "Vải Tencel sinh học, mát lạnh ngay khi chạm vào.",
  },
  {
    id: "6",
    name: "Topper Làm Mềm Đệm",
    slug: "topper-lam-mem-dem",
    price: 1200000,
    image: "https://placehold.co/600x400/64748B/FFFFFF/png?text=Topper+Dem",
    category: "Phụ Kiện",
    status: "Còn hàng",
    brand: "Showroom",
    description: "Biến đệm cứng thành đệm khách sạn 5 sao trong tích tắc.",
  },
  {
    id: "7",
    name: "Chăn Mùa Hè",
    slug: "chan-mua-he",
    price: 850000,
    image: "https://placehold.co/600x400/06B6D4/FFFFFF/png?text=Chan+Mua+He",
    category: "Chăn Ga",
    status: "Còn hàng",
    brand: "Hanvico",
    description: "Chăn trần bông mỏng, thích hợp cho phòng điều hòa.",
  },
  {
    id: "8",
    name: "Gối Tựa Sofa",
    slug: "goi-tua-sofa",
    price: 150000,
    image: "https://placehold.co/600x400/64748B/FFFFFF/png?text=Goi+Tua",
    category: "Gối",
    status: "Còn hàng",
    brand: "Everpro",
    description: "Gối tựa nhiều màu sắc, tạo điểm nhấn cho không gian.",
  }
];

export const POSTS = [
  {
    id: "1",
    title: "Cách chọn đệm lò xo tốt cho cột sống",
    slug: "cach-chon-dem-lo-xo",
    date: "05/01/2026",
    image: "https://placehold.co/800x500/2563EB/FFFFFF/png?text=Blog+1",
    excerpt: "Đệm lò xo là sự lựa chọn hàng đầu cho giấc ngủ êm ái. Tuy nhiên, không phải loại nào cũng tốt cho lưng của bạn...",
  },
  {
    id: "2",
    title: "Bí quyết bảo quản chăn ga gối luôn như mới",
    slug: "bi-quyet-bao-quan-chan-ga",
    date: "01/01/2026",
    image: "https://placehold.co/800x500/06B6D4/FFFFFF/png?text=Blog+2",
    excerpt: "Việc vệ sinh và bảo quản chăn ga gối đúng cách không chỉ giúp sản phẩm bền hơn mà còn bảo vệ sức khỏe gia đình...",
  },
];

export const PRODUCTS = products;

export const STORE_INFO = {
  name: "Showroom Bedding Bắc Ninh",
  phone: "0987.654.321",
  address: "123 Đường Lý Thái Tổ, TP. Bắc Ninh",
  zalo: "https://zalo.me/0987654321",
  openingHours: "8:00 - 21:00 (Tất cả các ngày)",
  location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.671373977382!2d106.0617565759714!3d21.16548548325983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31350ef9ce04533b%3A0xe5c13e54b6ce5a4c!2zTMO9IFRow6FpIFThu5UsIFRQLiBC4bqvYyBOaW5oLCBC4bqvYyBOaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1704439000000!5m2!1svi!2s",
};

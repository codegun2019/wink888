export const th = {
  common: {
    download: "สมัครสมาชิก",
    install: "ติดตั้ง",
    open: "ติดตั้งทันที",
    uninstall: "ถอนการติดตั้ง",
    verified: "verified",
    reviews: "รีวิว",
    yes: "ใช่",
    no: "ไม่",
  },
  downloadBanner: {
    title: "APP Download",
    subtitle: "ดาวน์โหลดแอปตอนนี้",
  },
  appInfo: {
    name: "Wink888 Gaming",
    developer: "ThaiGaming Corporation",
    rating: "4.2",
    reviewCount: "926K รีวิว",
    ageRating: "3+",
    ageRatingLabel: "ประเภท 3+",
    downloads: "1M+",
    downloadsLabel: "ดาวน์โหลด",
  },
  deviceCompatibility: {
    phone: "โทรศัพท์",
    tablet: "แท็บเล็ต",
    chromebook: "Chromebook",
  },
  aboutApp: {
    title: "เกี่ยวกับแอปนี้",
    description: "เข้าถึงการแจ้งเตือน การโทร แอป รูปภาพ และข้อความในโทรศัพท์ได้หมดในพีซีของคุณ",
    functionality: "การทำงาน",
    tools: "เครื่องมือ",
  },
  gallery: {
    title: "รูปภาพ",
    captions: [
        "ฝาก-ถอน รวดเร็ว ปลอดภัย 100%",
        "เล่นแล้วได้เงินจริง ถอนเงินง่ายภายในไม่กี่นาที",
        "รองรับทุกธนาคาร และวอลเล็ท ไม่มีขั้นต่ำ",
        "ระบบอัตโนมัติ ทำธุรกรรมได้ตลอด 24 ชั่วโมง",
        "โปรโมชั่นพิเศษ เพิ่มโบนัสทุกยอดฝาก",
        "บริการลูกค้าตลอด 24 ชม. มั่นใจทุกธุรกรรม"
    ],
},
  ratingSection: {
    title: "ให้คะแนนแอปนี้",
    subtitle: "บอกให้ผู้อื่นรู้ว่าคุณคิดอย่างไร",
    writeReview: "เขียนรีวิว",
  },
  reviewsSection: {
    title: "คะแนนและรีวิว",
    subtitle: "คะแนนและรีวิวได้รับการบันทึกแล้วและมาจากผู้ใช้แอปประเภทเดียวกับคุณ",
    helpfulCount: "คนพบว่ารีวิวนี้มีประโยชน์",
  },
  recommendedApps: {
    forYou: "แนะนำให้คุณ",
    otherApps: "แอปน่าลองอื่นๆ",
  },
  features: {
    title: "การรองรับในแอป",
  },
  navigation: {
    games: "เกม",
    apps: "สมัคร",
    search: "เริ่มเกม",
    books: "ติดต่อ",
  },
  rewardModal: {
    header: "รางวัล",
    subheader: "คุณได้รับรางวัลใหญ่",
    description: "เรากำลังรวบรวมรีวิว เชิงข้อเท็จจริง สำหรับแอปนี้",
    appName: "Wink888",
    verifiedBy: "Verified by Play Protect",
    rewardText: "หากคุณสามารถ ดาวน์โหลดแอป และให้รีวิว ตามความเป็นจริง และให้คะแนน คุณจะมีโอกาได้รับข้อเสนอจาก Google Play ฿671.",
    downloadText: "ดาวน์โหลดแอป",
    factualReview: "เชิงข้อเท็จจริง",
    truthfulReview: "ตามความเป็นจริง",
    rewardAmount: "฿Free ไม่มีค่าใช้จ่าย.",
  },
}

// Helper function to access nested properties
export function t(key: string): string {
  const keys = key.split(".")
  let value: any = th

  for (const k of keys) {
    if (value[k] === undefined) {
      console.warn(`Translation key not found: ${key}`)
      return key
    }
    value = value[k]
  }

  return value
}


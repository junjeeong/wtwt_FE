import Image from "next/image"

function CastItem({
  personInfo,
}: {
  personInfo: { name: string; role: string; profileImage: string }
}) {
  const { name, role, profileImage } = personInfo

  return (
    <div className="flex items-center">
      <div className="relative size-16 overflow-hidden rounded-full">
        <Image src={profileImage} alt="프로필 사진" fill className="object-cover" />
      </div>
      <div className="flex flex-col">
        <h3>{name}</h3>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  )
}

export default CastItem

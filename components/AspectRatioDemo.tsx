import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"

export function AspectRatioDemo() {
  return (
    <AspectRatio ratio={16 / 9} className="bg-muted">
      <Image
        // src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        src="https://images.unsplash.com/photo-1607903112900-9a194e71e930?w=2232&q=80"
        // src="https://images.unsplash.com/photo-1607903112900-9a194e71e930?w=1080&q=80"
        alt="Photo by Drew Beamer"
        fill
        className="rounded-md object-cover"
      />
    </AspectRatio>
  )
}

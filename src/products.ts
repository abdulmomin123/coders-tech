import { serverTimestamp } from 'firebase/firestore';
import { RawProduct } from './Types';

export const PRODUCTS: {
  [key: string]: RawProduct[];
} = {
  furniture: [
    {
      name: 'Poang Rocking Chair',
      price: 269,
      oldPrice: 399,
      image: 'product-1-img-cover.webp',
      description: `10 year Limited warranty. Read about the terms in the warranty brochure.

      A variety of seat cushion designs makes it easy to change the look of your POÄNG chair and your living room.
      
      Soft, durable and easy care leather which is practical for families with children.
      
      The high back provides good support for your neck.
      
      The layer-glued bent wood frame gives the armchair a comfortable resilience, making it perfect to relax in.
      
      10-year guarantee. Read about the terms in the guarantee brochure.`,
      images: [
        'product-1-img-1.webp',
        'product-1-img-2.webp',
        'product-1-img-3.webp',
        'product-1-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Brimnes Bed Frame With Storage Headboard',
      price: 399,
      oldPrice: 419,
      image: 'product-2-img-cover.webp',
      description: `Everything is kept close at hand with integrated storage in the headboard.

      Ample storage space is hidden neatly under the bed in 4 large drawers. Perfect for storing quilts, pillows and bed linen.
      
      Hide cables for lamps and chargers by feeding them through the holes on the top of the headboard.
      
      You can sit up comfortably in bed thanks to the high headboard; just prop some pillows behind your back and you will have a comfortable place to read or watch TV.
      
      This versatile bed frame will look great with your choice of textiles and bedroom furniture.
      
      Adjustable bed sides allow you to use mattresses of different thicknesses.
      
      17 layer-glued slats adjust to your body weight and increase the suppleness of the mattress.
      
      The price for this combination includes SKORVA midbeam, but it is a separate product which you pick from its own shelf at the store. If you buy the bed via the website, SKORVA midbeam is included in the delivery.
      
      Slatted bed base is included in the price but packaged separately.
      
      This product combination has parts with different limited warranty conditions, you can find more information about these in the limited warranty document on IKEA-USA.com.
      
      Mattress and bedlinens are sold separately.`,
      images: [
        'product-2-img-1.webp',
        'product-2-img-2.webp',
        'product-2-img-3.webp',
        'product-2-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Vedbo Armchair Gunnared',
      price: 299,
      oldPrice: 325,
      image: 'product-3-img-cover.webp',
      description: `The timeless design of VEDBO makes it easy to place in various room settings and coordinate with other furniture.

      VEDBO armchair is ideal when you want to relax in your own space in an open environment, yet still want the opportunity to socialize with others when you like.
      
      The high back panel gives you an embracing and private nook – even in an open-plan environment.
      
      VEDBO comes in 3 different earthy colors, adding beauty to any room.
      
      10-year limited warranty. Read about the terms in the limited warranty brochure.
      
      This chair has been tested for domestic use and use in public environment and meets the requirements for durability and stability set forth in the following standards: EN 1021-1, EN 16139 and ANSI/BIFMA x5.1.
      
      The fixed cover's ability to resist abrasion has been tested to handle 50,000 cycles. 15,000 cycles or more is suitable for furniture used every day at home. Over 30,000 cycles means a good ability to resist abrasion.
      
      The cover has a lightfastness level of 5-6 (the ability to resist color fading) on a scale of 1 to 8. According to industry standards, a lightfastness level of 4 or higher is suitable for home use.
      
      This product is flammability tested and complies with standard TB-117`,
      images: [
        'product-3-img-1.webp',
        'product-3-img-2.webp',
        'product-3-img-3.webp',
        'product-3-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Huvudspelare Gaming Chair',
      price: 69.99,
      oldPrice: 79.99,
      image: 'product-4-img-cover.webp',
      description: `You can lean back with perfect balance, as the tilt tension mechanism automatically adjusts the resistance to suit your weight and movements.

      Your back gets support and extra relief from the built-in lumbar support.
      
      The mesh material of the backrest lets air through to your back during long sitting periods.
      
      You sit comfortably since the chair is adjustable in height.
      
      The safety casters have a pressure-sensitive brake mechanism that keeps the chair in place when you stand up, and releases automatically when you sit down.
      
      This chair has been tested for domestic use and use in a public environment and meets the requirements for durability and stability set forth in the following standard.`,
      images: [
        'product-4-img-1.webp',
        'product-4-img-2.webp',
        'product-4-img-3.webp',
        'product-4-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Havsta TV Storage Combination',
      price: 1007,
      oldPrice: 1050,
      image: 'product-5-img-cover.webp',
      description: `Made of wood from sustainable sources.

      Solid pine with crafted details and a brushed surface gives a genuine, sturdy feeling, a timeless look and it will age gracefully.
      
      Glass doors keep your finest items free from dust but still visible.
      
      The shelves in tempered glass with wooden edges are durable and give the furniture a slim, light and airy look.
      
      The toekicks give HAVSTA a classic, timeless and uniform look.
      
      The surface is durable and easy to keep clean.
      
      Scandinavian design with clean simple lines makes it easy to combine the cabinet with furniture in different styles.
      
      Tempered glass is more impact resistant than ordinary glass and the surface is easy to clean.
      
      Solid wood is natural, renewable and separable material.
      
      Matches other furniture in the HAVSTA series.
      
      Sliding doors of tempered glass; remote controls will work through the glass.
      
      The sliding doors do not take up any space when opened.
      
      We recommend a TV bench to be a bit wider than the TV placed on it. This TV bench suits a TV up to 63 inches. You can choose a larger TV if it’s not heavier than the specified max load for the bench’s top.
      
      The top panel of the TV bench is intended for a TV with a maximum weight of 110 lbs.
      
      For safety reasons this TV bench is not to be hung on the wall.
      
      Handle with care! A damaged edge or scratched surface can cause the glass to suddenly crack and/or break. Avoid collisions from the side - this is where the glass is most vulnerable.
      
      This furniture must be secured to the wall with the enclosed wall anchoring device.
      
      Different wall materials require different types of fasteners. Use fasteners suitable for the walls in your home.`,
      images: [
        'product-5-img-1.webp',
        'product-5-img-2.webp',
        'product-5-img-3.webp',
        'product-5-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Lommarp Cabinet',
      price: 279,
      oldPrice: 299,
      image: 'product-6-img-cover.webp',
      description: `The design makes this piece of furniture easy to place, easy to use for various needs, and easy to match with other furnishings.

      Adjustable shelves make it easy to customize the space according to your needs.
      
      The drawer and doors close silently and softly, thanks to the integrated soft-closing function.
      
      The surface is durable and easy to keep clean.
      
      Warning! To prevent this furniture from tip over it must be secured to the wall with the included wall attachment devices.
      
      Different wall materials require different types of fasteners. Use fasteners suitable for the walls in your home.
      
      Two people are needed to assemble this furniture.`,
      images: [
        'product-6-img-1.webp',
        'product-6-img-2.webp',
        'product-6-img-3.webp',
        'product-6-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Vadholma Kitchen Island',
      price: 449,
      image: 'product-7-img-cover.webp',
      description: `Free-standing kitchen island; easy to place where you want it in the kitchen.

      Gives you extra storage, utility and work space.
      
      Countertop with a thick oak veneer, a durable natural material that can be sanded and surface treated when required.
      
      For quick installation and easy maintenance the countertop is pre-treated with hard wax oil.
      
      Layer construction adds stability and makes the countertop less sensitive to humidity, thus, less likely to bend, split or crack than solid wood.
      
      The countertop has an end-grain design that gives it a rustic charm that complements traditional kitchen styles. The expression is enhanced by design on the edges.
      
      10-year Limited Warranty. Read about the terms in the Limited Warranty brochure.
      
      May be completed with VADHOLMA rack for kitchen island.
      
      Bar stools with seat height 24¾" fit in well with this kitchen island.
      
      For increased stability, make sure to retighten the screws every 3 months.`,
      images: [
        'product-7-img-1.webp',
        'product-7-img-2.webp',
        'product-7-img-3.webp',
        'product-7-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Uppspel Gaming Desk and Chair',
      price: 788,
      image: 'product-8-img-cover.webp',
      description: `Do you usually sit or stand when playing, or something in between? You can pre-set this desk at four height positions and easily change the height with the touch of a button.

      The height of the electric underframe can be adjusted from 29 to 47", so you can always sit or stand at a comfortable height.
      
      You can position the table top in two different ways. If you have the contour shape facing forwards, you enjoy relief for forearms and wrists – and having it at the back creates a gap where you can lead all the cables down.
      
      Durable matte surface that is easy on your eyes since the light glare is low.
      
      It should be comfortable to play, especially when a match drags on. That’s why the table top is deep – so you can position screens at a comfortable distance from your eyes.
      
      You can easily turn and adjust the height of the headrest to give your neck a nice support when playing – and when you want to relax between matches.
      
      The armrests follow your movements and can be adjusted in height, which reduces strain on your arms and shoulders.
      
      The mesh material of the backrest lets air through, which is extra nice when a match drags on.
      
      The safety casters have a pressure-sensitive brake mechanism that keeps the chair in place when you stand up, and releases automatically when you sit down.
      
      The synchronized seat and back tilt follows your body movements and adjusts the chair to the correct position.
      
      The seat’s leather-like upholstery is durable and easy to wipe clean.
      
      The adjustable and lockable tilt function increases stability and control in different sitting positions.`,
      images: [
        'product-8-img-1.webp',
        'product-8-img-2.webp',
        'product-8-img-3.webp',
        'product-8-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Utespelare Desk and Chair Unit',
      price: 337.99,
      image: 'product-9-img-cover.webp',
      description: `It should be comfortable to play, especially when a match drags on. That’s why the table top is deep – so you can position screens at a comfortable distance from your eyes.

      You can position the table top in two different ways. If you have the contour shape facing forwards, you enjoy relief for forearms and wrists – and having it at the back creates a gap where you can lead all the cables down.
      
      The metal mesh at the back of the desk allows air through that cools your PC and is so sturdy that you can even clamp a pair of monitor arms to it.
      
      It’s easy to keep the desk neat and tidy by using the cable management net under the table top.
      
      On the back of the backrest there is a pocket where you can put things you want close at hand when playing.
      
      The adjustable and lockable tilt function increases stability and control in different sitting positions.
      
      The design of the high backrest gives your body, neck and head a sturdy and comfortable support.
      
      The height of the legs can be adjusted manually to six different heights from 27 to 30", so that you can always sit at a comfortable height.
      
      You easily adjust the height of the chair and the tilt of the back with one hand.
      
      The synchronized seat and back tilt follows your body movements and adjusts the chair to the correct position.
      
      The safety casters have a pressure-sensitive brake mechanism that keeps the chair in place when you stand up, and releases automatically when you sit down.
      
      The leather-like upholstery is durable and easy to wipe clean.
      
      The gaming chair's stable carbon steel frame and FSC-certified plywood last for many and long matches.
      
      Drawer stops prevent the drawer from being pulled out too far.
      
      Easy to move where it is needed thanks to casters.
      
      Slot for label on each drawer so you can easily keep things organized and find what you are looking for.
      
      This product has been developed and tested for domestic use.
      
      This desk has been tested for office use and meets the requirements for durability and stability set forth in the following standards: EN 527-2 and ANSI/BIFMA X5.5.
      
      Possible to separate for recycling or energy recovery if available in your community.`,
      images: [
        'product-9-img-1.webp',
        'product-9-img-2.webp',
        'product-9-img-3.webp',
        'product-9-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Fredde Gaming Desk',
      price: 299,
      image: 'product-10-img-cover.webp',
      description: `3-year warranty. Read about the terms in the warranty brochure.

      The workstation is extra comfortable to work at, because the contoured table top allows you to sit close and supports your wrists and forearms.
      
      Keep your coffee, beverage or snacks nearby in the cut-out cup holders on either side of the table top. The cup holders are made of plastic that is approved for use with food.
      
      Hang the small shelves inside or outside the side panels, depending on your needs.
      
      You can fit a 32" computer monitor or TV by removing the shelf above the table top.
      
      The high side panels help block sunlight and prevent distracting glare on your computer monitor.
      
      Can be used with SIGNUM cable trunking to keep all cords in place.
      
      Measure the depth and width of your stationary computer. The measurements should be less than those of the shelf.
      
      This desk has been tested for office use and meets the requirements for durability and stability set forth in the following standards: EN 527-2 and ANSI/BIFMA X5.5.
      
      Holds up to two 24" flat screens.`,
      images: [
        'product-10-img-1.webp',
        'product-10-img-2.webp',
        'product-10-img-3.webp',
        'product-10-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Utespelare Gaming Desk',
      price: 159,
      image: 'product-11-img-cover.webp',
      description: `3-year warranty. Read about the terms in the warranty brochure.

      The height of the legs can be adjusted manually to six different heights from 27 to 30", so that you can always sit at a comfortable height.
      
      You can position the table top in two different ways. If you have the contour shape facing forwards, you enjoy relief for forearms and wrists – and having it at the back creates a gap where you can lead all the cables down.
      
      The metal mesh at the back of the desk allows air through that cools your PC and is so sturdy that you can even clamp a pair of monitor arms to it.
      
      It should be comfortable to play, especially when a match drags on. That’s why the table top is deep – so you can position screens at a comfortable distance from your eyes.
      
      It’s easy to keep the desk neat and tidy by using the cable management net under the table top.
      
      Goes well with the matching UTESPELARE gaming chair.
      
      This desk has been tested for office use and meets the requirements for durability and stability set forth in the following standards: EN 527-2 and ANSI/BIFMA X5.5.`,
      images: [
        'product-11-img-1.webp',
        'product-11-img-2.webp',
        'product-11-img-3.webp',
        'product-11-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Malvakt / Alex Desk',
      price: 130.99,
      image: 'product-12-img-cover.webp',
      description: `The tabletop has pre-drilled holes to make it easier to attach to the underframe.

      Drawer stops prevent the drawers from being pulled out too far.
      
      Can be placed in the middle of a room because the back is finished.`,
      images: [
        'product-12-img-1.webp',
        'product-12-img-2.webp',
        'product-12-img-3.webp',
        'product-12-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Gruppspel Gaming chair',
      price: 299,
      image: 'product-13-img-cover.webp',
      description: `3-year warranty. Read about the terms in the warranty brochure.

      The chair gives your back a comfortable support that helps you sit ergonomically correct since the backrest can be adjusted in 5 different heights and has a built-in lumbar support.
      
      You can adjust the resistance of the tilt function to suit your movements and weight and also lock it in the most comfortable position.
      
      High-quality density foam will keep the chair comfortable for many years to come.
      
      You can adjust the height of the headrest and move it both forwards and backwards to enjoy support precisely where your head needs it during matches and breaks.
      
      When you need a moment to relax, you can lean your head against either side of the headrest.
      
      The height and horizontal angle of the armrests can be adjusted. They also follow your arm movements during the game by moving back and forth, which relieves strain on arms and shoulders.
      
      You sit comfortably since the chair is adjustable in height.
      
      The safety casters have a pressure-sensitive brake mechanism that keeps the chair in place when you stand up, and releases automatically when you sit down.
      
      The casters are rubber coated to run smoothly on any type of floor.
      
      This chair has been tested for office use and meets the requirements for durability and stability set forth in the following standards: EN 1335 and ANSI/BIFMA x5.1.`,
      images: [
        'product-13-img-1.webp',
        'product-13-img-2.webp',
        'product-13-img-3.webp',
        'product-13-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Matchspel Gaming chair',
      price: 189,
      image: 'product-14-img-cover.webp',
      description: `3-year warranty. Read about the terms in the warranty brochure.

      The synchronized seat and back tilt follows your body movements and adjusts the chair to the correct position.
      
      The adjustable and lockable tilt function increases stability and control in different sitting positions.
      
      The design of the high backrest gives your body, neck and head a sturdy and comfortable support.
      
      Your back gets support and extra relief from the built-in lumbar support.
      
      The mesh material of the backrest lets air through, which is extra nice when a match drags on.
      
      You can easily turn and adjust the height of the headrest to give your neck a nice support when playing – and when you want to relax between matches.
      
      The armrests follow your movements and can be adjusted in height, which reduces strain on your arms and shoulders.
      
      You sit comfortably since the chair is adjustable in height.
      
      The seat’s leather-like upholstery is durable and easy to wipe clean.
      
      High-quality density foam will keep the chair comfortable for many years to come.
      
      The gaming chair's stable carbon steel frame and FSC-certified plywood last for many and long matches.
      
      The safety casters have a pressure-sensitive brake mechanism that keeps the chair in place when you stand up, and releases automatically when you sit down.
      
      The casters are rubber coated to run smoothly on any type of floor.
      
      This chair has been tested for office use and meets the requirements for durability and stability set forth in the following standards: EN 1335 and ANSI/BIFMA x5.1.`,
      images: [
        'product-14-img-1.webp',
        'product-14-img-2.webp',
        'product-14-img-3.webp',
        'product-14-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Utespelare Gaming chair black',
      price: 129,
      image: 'product-15-img-cover.webp',
      description: `3-year warranty. Read about the terms in the warranty brochure.

      The synchronized seat and back tilt follows your body movements and adjusts the chair to the correct position.
      
      The adjustable and lockable tilt function increases stability and control in different sitting positions.
      
      The design of the high backrest gives your body, neck and head a sturdy and comfortable support.
      
      You sit comfortably since the chair is adjustable in height.
      
      You easily adjust the height of the chair and the tilt of the back with one hand.
      
      On the back of the backrest there is a pocket where you can put things you want close at hand when playing.
      
      The leather-like upholstery is durable and easy to wipe clean.
      
      The gaming chair's stable carbon steel frame and FSC-certified plywood last for many and long matches.
      
      The safety casters have a pressure-sensitive brake mechanism that keeps the chair in place when you stand up, and releases automatically when you sit down.
      
      Goes well with the matching UTESPELARE gaming desk.
      
      This chair has been tested for domestic use and use in a public environment and meets the requirements for durability and stability set forth in the following standard: EN 1335.`,
      images: [
        'product-15-img-1.webp',
        'product-15-img-2.webp',
        'product-15-img-3.webp',
        'product-15-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Idanas Upholstered bed frame',
      price: 309,
      image: 'product-16-img-cover.webp',
      description: `IDANÄS upholstered bed frame has a thick, sloping headboard that provides comfortable support for your back - perfect for lazy mornings and long evenings when reading a newspaper or a thrilling book in bed.

      Classic button detailing makes the headboard eye-catching in any bedroom.
      
      The upholstery is soft to the touch and makes bedtime even cozier.
      
      The solid wooden legs are strong and sturdy – and complement the classic design.
      
      Create a coordinated bedroom by combining this bed frame with other furniture from the IDANÄS series.
      
      Easy to put together thanks to a simplified assembly process with fewer steps and hardware.
      
      GUNNARED dark gray fabric is durable and gives the bedroom a timeless style.
      
      There’s plenty of space under the bed for storage boxes - perfect for storing extra quilts and pillows.
      
      You can easily vacuum under the bed frame to keep the space clean and dust-free.
      
      Adjustable bed sides allow you to use mattresses of different thicknesses.
      
      Center support beam and slatted bed base are included.
      
      Mattress and bedlinens are sold separately.
      
      The back of the headboard is finished with a black non-woven material.
      
      This cover’s ability to resist abrasion has been tested to handle 50,000 cycles. 15,000 cycles or more is suitable for furniture used every day at home. Over 30,000 cycles means a good ability to resist abrasion.
      
      The cover has a lightfastness level of 5-6 (the ability to resist color fading) on a scale of 1 to 8. According to industry standards, a lightfastness level of 4 or higher is suitable for home use.`,
      images: [
        'product-16-img-1.webp',
        'product-16-img-2.webp',
        'product-16-img-3.webp',
        'product-16-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Hauga Upholstered bed frame',
      price: 229,
      image: 'product-17-img-cover.webp',
      description: `Designed to coordinate perfectly with the rest of the HAUGA series, the upholstered bed frame adds a touch of softness to your bedroom, bringing comfort during the night, and adding style around the clock.

      A timeless look with soft upholstery, gentle curves and piping on the headboard and footboard.
      
      The soft, padded headboard is comfortable to lean against while reading or watching TV in bed.
      
      There’s plenty of space under the bed for storage boxes - perfect for storing extra quilts and pillows.
      
      You can easily vacuum under the bed frame to keep the space clean and dust-free.
      
      The VISSLE cover is soft to touch and made from recycled polyester.
      
      Mattress and bedlinens are sold separately.
      
      Slatted bed base and midbeam are included.
      
      The back of the headboard is finished with a black woven material.
      
      This cover’s ability to resist abrasion has been tested to handle 50,000 cycles. 15,000 cycles or more is suitable for furniture used every day at home. Over 30,000 cycles means a good ability to resist abrasion.
      
      The cover has a lightfastness level of 5 (the ability to resist color fading) on a scale of 1 to 8. According to industry standards, a lightfastness level of 4 or higher is suitable for home use.`,
      images: [
        'product-17-img-1.webp',
        'product-17-img-2.webp',
        'product-17-img-3.webp',
        'product-17-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Linanas Loveseat Vissle Beige',
      price: 249,
      oldPrice: 399,
      image: 'product-18-img-cover.webp',
      description: `This cover is made from VISSLE fabric in polyester, which is dope-dyed. It’s a durable material with a smooth weave and a nice two-tone effect.

      10 year Limited warranty. Read about the terms in the warranty brochure.
      
      The sofa is packaged in a space-efficient way, making it easy to transport and carry into your home.
      
      VISSLE fixed cover resists abrasion through 50,000 cycles. A cover that handles 15,000 cycles or more is suitable for everyday use at home. More than 30,000 cycles means a good ability to resist abrasion.
      
      The cover has a lightfastness level of 6 (the ability to resist color fading) on a scale of 1 to 8. According to industry standards, a lightfastness level of 4 or higher is suitable for home use.`,
      images: [
        'product-18-img-1.webp',
        'product-18-img-2.webp',
        'product-18-img-3.webp',
        'product-18-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Bekant Computer Desk',
      price: 299,
      image: 'product-19-img-cover.webp',
      description: `10-year Limited Warranty. Read about the terms in the Limited Warranty brochure.

      You can mount the tabletop at a height that suits you, since the legs are adjustable between 25⅝ - 33½".
      
      It’s easy to keep your desk neat and tidy with the cable management net under the tabletop.
      
      Contoured table top; provides support to the wrists and forearms when writing.
      
      This desk has been tested for office use and meets the requirements for durability and stability set forth in the following standards: EN 527-2 and ANSI/BIFMA X5.5.`,
      images: [
        'product-19-img-1.webp',
        'product-19-img-2.webp',
        'product-19-img-3.webp',
        'product-19-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Aurdal Wardrobe combination',
      price: 270,
      image: 'product-20-img-cover.webp',
      description: `The long leg creates a beautiful look and is perfect if you have a high plinth at home.

      You can always adapt or complete this open storage solution as needed. Maybe the combination we’ve suggested is perfect for you, or you can easily create your own.
      
      You can combine open and closed storage - shelves for your favorite things and drawers for the things you want to store away.
      
      Adjustable shelves and clothes rail make it easy for you to customize the space according to your needs.
      
      Adjustable feet make it possible to compensate for any irregularities in the floor.
      
      Fits with AURDAL wardrobe system.
      
      The parts in the AURDAL series can be combined in many different ways and so can easily be adapted to needs and space.
      
      This furniture must be secured to the wall.
      
      Different wall materials require different types of fixing devices. Use fixing devices suitable for the walls in your home.`,
      images: ['product-20-img-1.webp', 'product-20-img-2.webp'],
      createdAt: serverTimestamp(),
    },
  ],

  lighting: [
    {
      name: 'Grimsas Pendant lamp',
      price: 59.99,
      oldPrice: 69.99,
      image: 'product-41-img-cover.webp',
      description: `Projects decorative patterns onto the ceiling and on the wall.

      Light bulb sold separately. IKEA recommends LED bulb E12 chandelier opal white.
      
      Use a clear light bulb if you have a lamp shade or lamp with a perforated or cut-out pattern or other airy, open design and want the pattern to cast effects on the wall and ceiling.
      
      Use an opal light bulb if you have an ordinary lamp shade or lamp and want an even, diffused distribution of light.`,
      images: [
        'product-41-img-1.webp',
        'product-41-img-2.webp',
        'product-41-img-3.webp',
        'product-41-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Grinsbyn Chandelier w light bulbs',
      price: 179,
      oldPrice: 199,
      image: 'product-42-img-cover.webp',
      description: `You can have the arms straight out at the same level or twist them to create the look you want.

      Light bulb included.`,
      images: [
        'product-42-img-1.webp',
        'product-42-img-2.webp',
        'product-42-img-3.webp',
        'product-42-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Bunkeflo Pendant lamp',
      price: 29.99,
      oldPrice: 35,
      image: 'product-43-img-cover.webp',
      description: `This lamp gives a pleasant atmosphere for dining, spreading direct light across your dining or bar table.

      The lamp shade has a decorative crown in solid birch.
      
      Light bulb sold separately. IKEA recommends LED bulb E26 globe opal white.
      
      Use an opal light bulb if you have an ordinary lamp shade or lamp and want an even, diffused distribution of light.
      
      Use a clear light bulb if you have a lamp shade or lamp with a perforated or cut-out pattern or other airy, open design and want the pattern to cast effects on the wall and ceiling.
      
      Mounted with screws.
      
      Screws are not included.`,
      images: [
        'product-43-img-1.webp',
        'product-43-img-2.webp',
        'product-43-img-3.webp',
        'product-43-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Regnskur Pendant lamp',
      price: 41.99,
      oldPrice: 50.99,
      image: 'product-44-img-cover.webp',
      description: `Easy to take home since the lampshade comes in a flat-pack.

      The cord set has a disc that allows you to easily adjust the cord length so that the lamp hangs at the height you want.
      
      The lamp shade is easy to remove and machine wash.
      
      You can create a soft, cozy atmosphere in your home with a textile shade that spreads a diffused and decorative light.
      
      Light bulb sold separately. IKEA recommends LED bulb E26.
      
      Hardwired installation.
      
      To be hung on a ceiling hook.
      
      You position the lampshade to hang straight by adjusting the cord set/cord.
      
      Special waste handling may be required. Please contact your local authorities for more information.`,
      images: [
        'product-44-img-1.webp',
        'product-44-img-2.webp',
        'product-44-img-3.webp',
        'product-44-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Grundbro Wall lamp with LED bulb',
      price: 37.99,
      oldPrice: 49.99,
      image: 'product-45-img-cover.webp',
      description: `You can easily direct the light where you want it because the lamp arm and head are adjustable.

      LED light bulb included.`,
      images: [
        'product-45-img-1.webp',
        'product-45-img-2.webp',
        'product-45-img-3.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Tradfri LED bulb 400 lumen',
      price: 9.99,
      oldPrice: 14.99,
      image: 'product-46-img-cover.webp',
      description: `With a dimmable LED bulb you can adapt your lighting to different activities, like a warmer light for dinner and a brighter, colder light for working.

      You can use TRÅDFRI remote to control up to 10 LED light bulbs, LED light panels or LED light doors which will react in the same way - dim, switch off, turn on, and switch from warm to cold light in 3 steps.
      
      When you add TRÅDFRI gateway and IKEA Home smart app, you can create several groups of light sources and control them in different ways.
      
      The LED light source consumes up to 85% less energy and lasts 20 times longer than incandescent bulbs.
      
      Helps lower your electric bill because dimming the lights saves energy.
      
      Can only be used with IKEA Smart lighting products.
      
      The color temperature can be switched between 2200 Kelvin (warm glow), 2700 Kelvin (warm white) and 4000 Kelvin (cool white).
      
      You need one of the steering devices in the TRÅDFRI series (remote control, wireless dimmer or wireless motion sensor) in order to connect your light sources with the gateway and the app.
      
      LED life approx. 25,000 hours.
      
      Standby power consumption: 0.5W.
      
      The light bulb can be used in temperatures from 0°F (-20°C) to 100°F (40°C).
      
      Download IKEA Home smart app for free via Google Play or App Store, depending on which mobile device you have.
      
      Works with IKEA Home smart.
      
      This product allows wireless dimming. With IKEA Smart lighting, you can dim your lights without a hardwired installation.
      
      The bulb is not suitable to use with hardwired dimmers.
      
      TRÅDFRI remote control and gateway are sold separately.
`,
      images: ['product-46-img-1.webp', 'product-46-img-2.webp'],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Tradfri LED bulb 800 lumen',
      price: 19.99,
      image: 'product-47-img-cover.webp',
      description: `By dimming the lighting, you change the mood in the room while saving energy.

      With a remote control, you can simultaneously control up to 10 LED bulbs or LED light panels – dim, turn off, turn on, choose colors, and gradually switch from warm to cold light. Sold separately.
      
      When adding TRÅDFRI gateway (sold separately) and IKEA Home smart app, you can change between a total of 20 different colors/white tones. You can also create several groups of light sources and control them in different ways.
      
      The bulb is not suitable to use with hardwired dimmers.
      
      TRÅDFRI remote control and gateway are sold separately.
      
      With the remote control you can switch between Cool white (4000 Kelvin), Warm white (2700 Kelvin), Warm glow (2200 Kelvin), Candlelight (1780 Kelvin), Warm amber, Dark peach, Pink, Light purple, and Light blue.
      
      Can only be used with IKEA Smart lighting products.
      
      This product allows wireless dimming. With IKEA Smart lighting, you can dim your lights without a hardwired installation.
      
      Add the gateway and app to also switch between Cold sky (6000 Kelvin), Cool daylight (5000 Kelvin), Sunrise (3000 Kelvin), Peach, Dark red, Light pink, Dark pink, Dark purple, Blue, Lime and Yellow.
      
      You need one of the steering devices in the TRÅDFRI series (remote control, wireless dimmer or wireless motion sensor) in order to connect your light sources with the gateway and the app.
      
      The light from this LED bulb feels as strong as the light from a traditional 60W incandescent bulb.
      
      LED life approx. 25,000 hours.
      
      Standby power consumption: 0.3W.
      
      Use an opal light bulb if you have an ordinary lamp shade or lamp and want an even, diffused distribution of light.
      
      The light bulb can be used in temperatures from 0°F (-20°C) to 100°F (40°C).
      
      This product bears the CE mark.
      
      Download IKEA Home smart app for free via Google Play or App Store, depending on which mobile device you have.
      
      Works with IKEA Home smart.
      
      Add the TRÅDFRI gateway and IKEA Home smart app for control through Amazon Alexa, Apple HomeKit or Google Home.`,
      images: ['product-47-img-1.webp', 'product-47-img-2.webp'],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Tradfri LED bulb GU10 400 lumen',
      price: 8.99,
      image: 'product-48-img-cover.webp',
      description: `With a smart LED bulb you can adapt your lighting to different activities, for example by dimming down the light for a cozy atmosphere.

      You can use the wireless dimmer or TRÅDFRI remote control to control up to 10 LED light bulbs, LED light panels or LED light doors which will react in the same way - dim, switch off, and turn on.
      
      If you add a TRÅDFRI motion sensor kit, your LED light bulbs, LED light panels and LED light doors will turn on and off automatically.
      
      When you add TRÅDFRI gateway and IKEA Home smart app, you can create several groups of light sources and control them in different ways.
      
      The LED light source consumes up to 85% less energy and lasts 20 times longer than incandescent bulbs.
      
      Helps lower your electric bill because dimming the lights saves energy.
      
      Can only be used with IKEA Smart lighting products.
      
      You need one of the steering devices in the TRÅDFRI series (remote control, wireless dimmer or wireless motion sensor) in order to connect your light sources with the gateway and the app.
      
      LED life approx. 25,000 hours.
      
      Standby power consumption: 0.3W.
      
      The light bulb can be used in temperatures from 0°F (-20°C) to 100°F (40°C).
      
      Download IKEA Home smart app for free via Google Play or App Store, depending on which mobile device you have.
      
      Works with IKEA Home smart.
      
      This product allows wireless dimming. With IKEA Smart lighting, you can dim your lights without a hardwired installation.
      
      The bulb is not suitable to use with hardwired dimmers.
      
      TRÅDFRI remote control and gateway are sold separately.`,
      images: ['product-48-img-1.webp'],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Tradfri LED bulb 250 lumen',
      price: 7.99,
      image: 'product-49-img-cover.webp',
      description: `With a smart LED bulb you can adapt your lighting to different activities, for example by dimming down the light for a cozy atmosphere.

      By dimming the lighting, you change the mood in the room while saving energy.
      
      You can use the wireless dimmer or TRÅDFRI remote control to control up to 10 LED light bulbs or LED light panels which will react in the same way with dim, switch off, and turn on.
      
      When you add TRÅDFRI gateway and IKEA Home smart app, you can create several groups of light sources and control them in different ways.
      
      If you add a TRÅDFRI motion sensor kit, your LED light bulbs and LED light panels will turn on and off automatically.
      
      The bulb is not suitable to use with hardwired dimmers.
      
      Can only be used with IKEA Smart lighting products.
      
      Light color: warm glow (2200 Kelvin).
      
      Use a clear light bulb if you have a lamp shade or lamp with a perforated or cut-out pattern or other airy, open design and want the pattern to cast effects on the wall and ceiling.
      
      The light from this LED bulb feels as strong as the light from a traditional 25W incandescent bulb.
      
      LED life approx. 25,000 hours.
      
      Standby power consumption: 0.2W.
      
      The light bulb can be used in temperatures from 0°F (-20°C) to 100°F (40°C).
      
      Download IKEA Home smart app for free via Google Play or App Store, depending on which mobile device you have.
      
      Works with IKEA Home smart.
      
      Add the TRÅDFRI gateway and IKEA Home smart app for control through Amazon Alexa, Apple HomeKit or Google Home.
      
      With TRÅDFRI wireless dimmer you can dim your lighting without a hardwired installation.
      
      Dimmable with TRÅDFRI wireless dimmer, sold separately.`,
      images: [
        'product-49-img-1.webp',
        'product-49-img-2.webp',
        'product-49-img-3.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Blotsno LED string light with 24 lights',
      price: 24.99,
      image: 'product-50-img-cover.webp',
      description: `Creates a soft, cozy mood light in your room.

      Uses LEDs, which consume up to 85% less energy and last 20 times longer than incandescent bulbs.
      
      Built-in LED light source.
      
      Light color: warm white (2700 Kelvin).
      
      LED life approx. 25,000 hours.
      
      Only for indoor use.`,
      images: [
        'product-50-img-1.webp',
        'product-50-img-2.webp',
        'product-50-img-3.webp',
        'product-50-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Strala LED string light with 160 lights',
      price: 17.99,
      image: 'product-51-img-cover.webp',
      description: `Easy to place anywhere as it is battery operated and does not need to be connected to the main supply.

      Gives a warm, cozy glow and spreads the holiday atmosphere in your home.
      
      The LED light bulb consumes up to 85% less energy and lasts 10 times longer than incandescent bulbs.
      
      Only for indoor use.
      
      Batteries are sold separately; 3 pcs AA required.
      
      IKEA recommends LADDA rechargeable batteries.
      
      Built-in LED light source.
      
      LED life approx. 20,000 hours.
      
      Light color: warm white (2700 Kelvin).
      
      A built-in timer turns the lights on at the same time every day and keeps them on for 6 hours.
      
      This product bears the CE mark.`,
      images: ['product-51-img-1.webp', 'product-51-img-2.webp'],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Akterport LED string light with 40 lights',
      price: 8.99,
      image: 'product-52-img-cover.webp',
      description: `Gives a nice decorative light.

      Easy to place anywhere as it is battery operated and does not need to be connected to the main supply.
      
      Uses LEDs, which consume up to 85% less energy and last 20 times longer than incandescent bulbs.
      
      Only use batteries that are intended for the product. Do not mix old and new batteries, different brands or types.
      
      IKEA recommends LADDA rechargeable batteries.
      
      Built-in LED light source.
      
      LED life approx. 25,000 hours.
      
      Light color: warm white (2700 Kelvin).
      
      Batteries are sold separately; 2 pcs AA required.
      
      A built-in timer turns the lights on at the same time every day and keeps them on for 6 hours.`,
      images: [
        'product-52-img-1.webp',
        'product-52-img-2.webp',
        'product-52-img-3.webp',
        'product-52-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Akterport LED string light with 12 lights',
      price: 8.99,
      image: 'product-53-img-cover.webp',
      description: `Gives a nice decorative light.

      Easy to place anywhere as it is battery operated and does not need to be connected to the main supply.
      
      The LED light bulb consumes up to 85% less energy and lasts 10 times longer than incandescent bulbs.
      
      Only use batteries that are intended for the product. Do not mix old and new batteries, different brands or types.
      
      Only for indoor use.
      
      Built-in LED light source.
      
      LED life approx. 20,000 hours.
      
      IKEA recommends LADDA rechargeable batteries.
      
      A built-in timer turns the lights on at the same time every day and keeps them on for 6 hours.
      
      Batteries are sold separately; 2 pcs AA required.`,
      images: [
        'product-53-img-1.webp',
        'product-53-img-2.webp',
        'product-53-img-3.webp',
        'product-53-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Urshult LED cabinet light',
      price: 24.99,
      image: 'product-54-img-cover.webp',
      description: `You can dim your lighting wirelessly and easily adapt the lighting based on activity.

      Provides a focused light that is good for lighting smaller areas.
      
      The LED light source consumes up to 85% less energy and lasts 20 times longer than incandescent bulbs.
      
      To be completed with TRÅDFRI LED driver and ANSLUTA power cord, sold separately.
      
      Dimmable with TRÅDFRI remote control, sold separately.
      
      Built-in LED light source.
      
      Light color: warm white (2700 Kelvin).
      
      Color Rendering Index (CRI): >80.
      
      The light source has a lifetime of approx. 25,000 hours. This corresponds to about 20 years if the lamp is on for 3 hours per day.`,
      images: [
        'product-54-img-1.webp',
        'product-54-img-2.webp',
        'product-54-img-3.webp',
        'product-54-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Tradfri Remote control',
      price: 15.99,
      image: 'product-55-img-cover.webp',
      description: `You can use TRÅDFRI remote to control up to 10 LED light bulbs or LED light panels at a time - dim, switch on and off, choose colours and step by step change from warm to cold light.

      You can use TRÅDFRI gateway and IKEA Home smart app to create several groups of light sources and control them in different ways.
      
      Tested and approved for children.
      
      Can only be used with IKEA Smart lighting products.
      
      The remote control works with TRÅDFRI LED bulbs, FLOALT LED light panels and TRÅDFRI driver for wireless control.
      
      Approved for IP44.
      
      This product bears the CE mark.
      
      Works with IKEA Home smart.
      
      With TRÅDFRI remote control you can dim your lights without a hardwired installation.
      
      The remote control has a maximum range of 32 feet when not blocked by any walls.
      
      A magnet makes it easy to attach the remote control to the wall bracket.
      
      Battery is included, and last approx. 2 years.
      
      Tested and approved for bathroom use.`,
      images: [
        'product-55-img-1.webp',
        'product-55-img-2.webp',
        'product-55-img-3.webp',
        'product-55-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Lindshult LED cabinet light',
      price: 24.99,
      image: 'product-56-img-cover.webp',
      description: `You can dim your lighting wirelessly and easily adapt the lighting based on activity.

      Provides a focused light that is good for lighting smaller areas.
      
      The LED light source consumes up to 85% less energy and lasts 20 times longer than incandescent bulbs.
      
      To be completed with TRÅDFRI LED driver and ANSLUTA power cord, sold separately.
      
      Dimmable with TRÅDFRI remote control, sold separately.
      
      Built-in LED light source.
      
      Light color: warm white (2700 Kelvin).
      
      Color Rendering Index (CRI): >80.
      
      The light source has a lifetime of approx. 25,000 hours. This corresponds to about 20 years if the lamp is on for 3 hours per day.`,
      images: [
        'product-56-img-1.webp',
        'product-56-img-2.webp',
        'product-56-img-3.webp',
        'product-56-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Vallmora Wall lamp',
      price: 34.99,
      image: 'product-57-img-cover.webp',
      description: `Gives a diffused light which is good for spreading light into larger areas of a bathroom.

      Light bulbs sold separately. IKEA recommends LED bulb E26 (3 pcs).
      
      Use an opal light bulb if you have an ordinary lamp shade or lamp and want an even, diffused distribution of light.
      
      Tested and approved for bathroom use.
      
      Approved for damp locations.`,
      images: ['product-57-img-1.webp'],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Frihult Wall lamp',
      price: 29.99,
      image: 'product-58-img-cover.webp',
      description: `A versatile lamp that can be mounted facing upwards or downwards, on its own above the mirror or as a pair with one on each side.

      Perfect to create atmosphere in the bathroom if you use a smart lighting bulb.
      
      Tested and approved for bathroom use.
      
      A traditional style lamp made of rust-free materials.
      
      The glass shade provides balanced general lighting throughout the room.
      
      Light bulb sold separately. IKEA recommends LED bulb E12 chandelier opal white.
      
      Screws are sold separately.
      
      Hardwired installation.
      
      Use an authorized electrician for consultation and installation.
      
      May be completed with other lamps in the same series.
      
      Use an opal light bulb if you have an ordinary lamp shade or lamp and want an even, diffused distribution of light.`,
      images: [
        'product-58-img-1.webp',
        'product-58-img-2.webp',
        'product-58-img-3.webp',
        'product-58-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Storhaga LED table lamp',
      price: 39.99,
      image: 'product-59-img-cover.webp',
      description: `The lamp is protected against moisture and water so you can use it outdoors.

      Dimmable.
      
      Dimmable.
      
      The light source has a lifetime of approx. 25,000 hours. This corresponds to about 20 years if the lamp is on for 3 hours per day.
      
      Suitable for indoor and outdoor use.
      
      When the battery is fully charged, the lights will shine for approx. 12 hours.
      
      Charging time: 7 hours.
      
      When the battery is fully charged, the lights will shine for approx. 12 hours.
      
      IKEA recommends LADDA rechargeable batteries.
      
      Only charge indoors since the cord cannot be used outdoors.
      
      Marks can appear on the glass if you touch it with dirty hands. You can easily clean it with water and soap.`,
      images: [
        'product-59-img-1.webp',
        'product-59-img-2.webp',
        'product-59-img-3.webp',
        'product-59-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Solarvet LED string light with 24 lights',
      price: 17.99,
      image: 'product-60-img-cover.webp',
      description: `Gives a nice decorative light.

      Helps you save energy and reduce your environmental impact because it is powered by a solar panel that converts sunlight into electricity.
      
      Easy to use because no cords or plugs are needed.
      
      Uses LEDs, which consume up to 85% less energy and last 20 times longer than incandescent bulbs.
      
      Built-in LED light source.
      
      Recharging time is 9-12 hours in sunlight, but over 12 hours on a cloudy day.
      
      Position the solar panel for maximum exposure to sunlight.
      
      When the battery is fully charged, the lights will shine for approx. 12 hours.
      
      LED life approx. 25,000 hours.
      
      Light color; warm white (3000 Kelvin).
      
      Approved for use as outdoor lighting, IP 44.
      
      The battery should be replaced only with a rechargeable battery of the same type and capacity.
      
      This product bears the CE mark.
      
      Includes 1 rechargeable AA 1.2V battery for solar-powered products.`,
      images: [
        'product-60-img-1.webp',
        'product-60-img-2.webp',
        'product-60-img-3.webp',
      ],
      createdAt: serverTimestamp(),
    },
  ],

  rugs: [
    {
      name: 'Tiphede Rug',
      price: 9.99,
      oldPrice: 14.99,
      image: 'product-61-img-cover.webp',
      description: `Lightweight and easy to move for airing or washing.

      Suitable for use in your living room or underneath your dining table, as the flat-woven surface makes it easy to pull out chairs and clean.
      
      Cotton is a soft and easy-care natural material that you can machine wash.
      
      A perfect companion for all types of flooring, even those with underfloor heating.
      
      Use STOPP FILT anti-slip rug underlay under the entire rug for increased safety.
      
      You will need 1 STOPP FILT rug underlay with anti-slip (5'5"x7'9") for this rug. Trim if necessary.
      
      This rug fits with a 2-3 seat sofa, but can also fit other size sofas depending on how you place it.
      
      It may take time for fold marks to disappear after unpacking your rug. Iron, if needed.`,
      images: [
        'product-61-img-1.webp',
        'product-61-img-2.webp',
        'product-61-img-3.webp',
        'product-61-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Poang Rocking Chair',
      price: 269,
      oldPrice: 399,
      image: 'product-1-img-cover.webp',
      description: `10 year Limited warranty. Read about the terms in the warranty brochure.

      A variety of seat cushion designs makes it easy to change the look of your POÄNG chair and your living room.
      
      Soft, durable and easy care leather which is practical for families with children.
      
      The high back provides good support for your neck.
      
      The layer-glued bent wood frame gives the armchair a comfortable resilience, making it perfect to relax in.
      
      10-year guarantee. Read about the terms in the guarantee brochure.`,
      images: [
        'product-1-img-1.webp',
        'product-1-img-2.webp',
        'product-1-img-3.webp',
        'product-1-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Poang Rocking Chair',
      price: 269,
      oldPrice: 399,
      image: 'product-1-img-cover.webp',
      description: `10 year Limited warranty. Read about the terms in the warranty brochure.

      A variety of seat cushion designs makes it easy to change the look of your POÄNG chair and your living room.
      
      Soft, durable and easy care leather which is practical for families with children.
      
      The high back provides good support for your neck.
      
      The layer-glued bent wood frame gives the armchair a comfortable resilience, making it perfect to relax in.
      
      10-year guarantee. Read about the terms in the guarantee brochure.`,
      images: [
        'product-1-img-1.webp',
        'product-1-img-2.webp',
        'product-1-img-3.webp',
        'product-1-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Poang Rocking Chair',
      price: 269,
      oldPrice: 399,
      image: 'product-1-img-cover.webp',
      description: `10 year Limited warranty. Read about the terms in the warranty brochure.

      A variety of seat cushion designs makes it easy to change the look of your POÄNG chair and your living room.
      
      Soft, durable and easy care leather which is practical for families with children.
      
      The high back provides good support for your neck.
      
      The layer-glued bent wood frame gives the armchair a comfortable resilience, making it perfect to relax in.
      
      10-year guarantee. Read about the terms in the guarantee brochure.`,
      images: [
        'product-1-img-1.webp',
        'product-1-img-2.webp',
        'product-1-img-3.webp',
        'product-1-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Poang Rocking Chair',
      price: 269,
      oldPrice: 399,
      image: 'product-1-img-cover.webp',
      description: `10 year Limited warranty. Read about the terms in the warranty brochure.

      A variety of seat cushion designs makes it easy to change the look of your POÄNG chair and your living room.
      
      Soft, durable and easy care leather which is practical for families with children.
      
      The high back provides good support for your neck.
      
      The layer-glued bent wood frame gives the armchair a comfortable resilience, making it perfect to relax in.
      
      10-year guarantee. Read about the terms in the guarantee brochure.`,
      images: [
        'product-1-img-1.webp',
        'product-1-img-2.webp',
        'product-1-img-3.webp',
        'product-1-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Poang Rocking Chair',
      price: 269,
      oldPrice: 399,
      image: 'product-1-img-cover.webp',
      description: `10 year Limited warranty. Read about the terms in the warranty brochure.

      A variety of seat cushion designs makes it easy to change the look of your POÄNG chair and your living room.
      
      Soft, durable and easy care leather which is practical for families with children.
      
      The high back provides good support for your neck.
      
      The layer-glued bent wood frame gives the armchair a comfortable resilience, making it perfect to relax in.
      
      10-year guarantee. Read about the terms in the guarantee brochure.`,
      images: [
        'product-1-img-1.webp',
        'product-1-img-2.webp',
        'product-1-img-3.webp',
        'product-1-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Poang Rocking Chair',
      price: 269,
      oldPrice: 399,
      image: 'product-1-img-cover.webp',
      description: `10 year Limited warranty. Read about the terms in the warranty brochure.

      A variety of seat cushion designs makes it easy to change the look of your POÄNG chair and your living room.
      
      Soft, durable and easy care leather which is practical for families with children.
      
      The high back provides good support for your neck.
      
      The layer-glued bent wood frame gives the armchair a comfortable resilience, making it perfect to relax in.
      
      10-year guarantee. Read about the terms in the guarantee brochure.`,
      images: [
        'product-1-img-1.webp',
        'product-1-img-2.webp',
        'product-1-img-3.webp',
        'product-1-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Poang Rocking Chair',
      price: 269,
      oldPrice: 399,
      image: 'product-1-img-cover.webp',
      description: `10 year Limited warranty. Read about the terms in the warranty brochure.

      A variety of seat cushion designs makes it easy to change the look of your POÄNG chair and your living room.
      
      Soft, durable and easy care leather which is practical for families with children.
      
      The high back provides good support for your neck.
      
      The layer-glued bent wood frame gives the armchair a comfortable resilience, making it perfect to relax in.
      
      10-year guarantee. Read about the terms in the guarantee brochure.`,
      images: [
        'product-1-img-1.webp',
        'product-1-img-2.webp',
        'product-1-img-3.webp',
        'product-1-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Poang Rocking Chair',
      price: 269,
      oldPrice: 399,
      image: 'product-1-img-cover.webp',
      description: `10 year Limited warranty. Read about the terms in the warranty brochure.

      A variety of seat cushion designs makes it easy to change the look of your POÄNG chair and your living room.
      
      Soft, durable and easy care leather which is practical for families with children.
      
      The high back provides good support for your neck.
      
      The layer-glued bent wood frame gives the armchair a comfortable resilience, making it perfect to relax in.
      
      10-year guarantee. Read about the terms in the guarantee brochure.`,
      images: [
        'product-1-img-1.webp',
        'product-1-img-2.webp',
        'product-1-img-3.webp',
        'product-1-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Poang Rocking Chair',
      price: 269,
      oldPrice: 399,
      image: 'product-1-img-cover.webp',
      description: `10 year Limited warranty. Read about the terms in the warranty brochure.

      A variety of seat cushion designs makes it easy to change the look of your POÄNG chair and your living room.
      
      Soft, durable and easy care leather which is practical for families with children.
      
      The high back provides good support for your neck.
      
      The layer-glued bent wood frame gives the armchair a comfortable resilience, making it perfect to relax in.
      
      10-year guarantee. Read about the terms in the guarantee brochure.`,
      images: [
        'product-1-img-1.webp',
        'product-1-img-2.webp',
        'product-1-img-3.webp',
        'product-1-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Poang Rocking Chair',
      price: 269,
      oldPrice: 399,
      image: 'product-1-img-cover.webp',
      description: `10 year Limited warranty. Read about the terms in the warranty brochure.

      A variety of seat cushion designs makes it easy to change the look of your POÄNG chair and your living room.
      
      Soft, durable and easy care leather which is practical for families with children.
      
      The high back provides good support for your neck.
      
      The layer-glued bent wood frame gives the armchair a comfortable resilience, making it perfect to relax in.
      
      10-year guarantee. Read about the terms in the guarantee brochure.`,
      images: [
        'product-1-img-1.webp',
        'product-1-img-2.webp',
        'product-1-img-3.webp',
        'product-1-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Poang Rocking Chair',
      price: 269,
      oldPrice: 399,
      image: 'product-1-img-cover.webp',
      description: `10 year Limited warranty. Read about the terms in the warranty brochure.

      A variety of seat cushion designs makes it easy to change the look of your POÄNG chair and your living room.
      
      Soft, durable and easy care leather which is practical for families with children.
      
      The high back provides good support for your neck.
      
      The layer-glued bent wood frame gives the armchair a comfortable resilience, making it perfect to relax in.
      
      10-year guarantee. Read about the terms in the guarantee brochure.`,
      images: [
        'product-1-img-1.webp',
        'product-1-img-2.webp',
        'product-1-img-3.webp',
        'product-1-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Poang Rocking Chair',
      price: 269,
      oldPrice: 399,
      image: 'product-1-img-cover.webp',
      description: `10 year Limited warranty. Read about the terms in the warranty brochure.

      A variety of seat cushion designs makes it easy to change the look of your POÄNG chair and your living room.
      
      Soft, durable and easy care leather which is practical for families with children.
      
      The high back provides good support for your neck.
      
      The layer-glued bent wood frame gives the armchair a comfortable resilience, making it perfect to relax in.
      
      10-year guarantee. Read about the terms in the guarantee brochure.`,
      images: [
        'product-1-img-1.webp',
        'product-1-img-2.webp',
        'product-1-img-3.webp',
        'product-1-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Poang Rocking Chair',
      price: 269,
      oldPrice: 399,
      image: 'product-1-img-cover.webp',
      description: `10 year Limited warranty. Read about the terms in the warranty brochure.

      A variety of seat cushion designs makes it easy to change the look of your POÄNG chair and your living room.
      
      Soft, durable and easy care leather which is practical for families with children.
      
      The high back provides good support for your neck.
      
      The layer-glued bent wood frame gives the armchair a comfortable resilience, making it perfect to relax in.
      
      10-year guarantee. Read about the terms in the guarantee brochure.`,
      images: [
        'product-1-img-1.webp',
        'product-1-img-2.webp',
        'product-1-img-3.webp',
        'product-1-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Poang Rocking Chair',
      price: 269,
      oldPrice: 399,
      image: 'product-1-img-cover.webp',
      description: `10 year Limited warranty. Read about the terms in the warranty brochure.

      A variety of seat cushion designs makes it easy to change the look of your POÄNG chair and your living room.
      
      Soft, durable and easy care leather which is practical for families with children.
      
      The high back provides good support for your neck.
      
      The layer-glued bent wood frame gives the armchair a comfortable resilience, making it perfect to relax in.
      
      10-year guarantee. Read about the terms in the guarantee brochure.`,
      images: [
        'product-1-img-1.webp',
        'product-1-img-2.webp',
        'product-1-img-3.webp',
        'product-1-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Poang Rocking Chair',
      price: 269,
      oldPrice: 399,
      image: 'product-1-img-cover.webp',
      description: `10 year Limited warranty. Read about the terms in the warranty brochure.

      A variety of seat cushion designs makes it easy to change the look of your POÄNG chair and your living room.
      
      Soft, durable and easy care leather which is practical for families with children.
      
      The high back provides good support for your neck.
      
      The layer-glued bent wood frame gives the armchair a comfortable resilience, making it perfect to relax in.
      
      10-year guarantee. Read about the terms in the guarantee brochure.`,
      images: [
        'product-1-img-1.webp',
        'product-1-img-2.webp',
        'product-1-img-3.webp',
        'product-1-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Poang Rocking Chair',
      price: 269,
      oldPrice: 399,
      image: 'product-1-img-cover.webp',
      description: `10 year Limited warranty. Read about the terms in the warranty brochure.

      A variety of seat cushion designs makes it easy to change the look of your POÄNG chair and your living room.
      
      Soft, durable and easy care leather which is practical for families with children.
      
      The high back provides good support for your neck.
      
      The layer-glued bent wood frame gives the armchair a comfortable resilience, making it perfect to relax in.
      
      10-year guarantee. Read about the terms in the guarantee brochure.`,
      images: [
        'product-1-img-1.webp',
        'product-1-img-2.webp',
        'product-1-img-3.webp',
        'product-1-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Poang Rocking Chair',
      price: 269,
      oldPrice: 399,
      image: 'product-1-img-cover.webp',
      description: `10 year Limited warranty. Read about the terms in the warranty brochure.

      A variety of seat cushion designs makes it easy to change the look of your POÄNG chair and your living room.
      
      Soft, durable and easy care leather which is practical for families with children.
      
      The high back provides good support for your neck.
      
      The layer-glued bent wood frame gives the armchair a comfortable resilience, making it perfect to relax in.
      
      10-year guarantee. Read about the terms in the guarantee brochure.`,
      images: [
        'product-1-img-1.webp',
        'product-1-img-2.webp',
        'product-1-img-3.webp',
        'product-1-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Poang Rocking Chair',
      price: 269,
      oldPrice: 399,
      image: 'product-1-img-cover.webp',
      description: `10 year Limited warranty. Read about the terms in the warranty brochure.

      A variety of seat cushion designs makes it easy to change the look of your POÄNG chair and your living room.
      
      Soft, durable and easy care leather which is practical for families with children.
      
      The high back provides good support for your neck.
      
      The layer-glued bent wood frame gives the armchair a comfortable resilience, making it perfect to relax in.
      
      10-year guarantee. Read about the terms in the guarantee brochure.`,
      images: [
        'product-1-img-1.webp',
        'product-1-img-2.webp',
        'product-1-img-3.webp',
        'product-1-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Poang Rocking Chair',
      price: 269,
      oldPrice: 399,
      image: 'product-1-img-cover.webp',
      description: `10 year Limited warranty. Read about the terms in the warranty brochure.

      A variety of seat cushion designs makes it easy to change the look of your POÄNG chair and your living room.
      
      Soft, durable and easy care leather which is practical for families with children.
      
      The high back provides good support for your neck.
      
      The layer-glued bent wood frame gives the armchair a comfortable resilience, making it perfect to relax in.
      
      10-year guarantee. Read about the terms in the guarantee brochure.`,
      images: [
        'product-1-img-1.webp',
        'product-1-img-2.webp',
        'product-1-img-3.webp',
        'product-1-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
  ],

  bathroom: [
    {
      name: 'Poang Rocking Chair',
      price: 269,
      oldPrice: 399,
      image: 'product-1-img-cover.webp',
      description: `10 year Limited warranty. Read about the terms in the warranty brochure.

      A variety of seat cushion designs makes it easy to change the look of your POÄNG chair and your living room.
      
      Soft, durable and easy care leather which is practical for families with children.
      
      The high back provides good support for your neck.
      
      The layer-glued bent wood frame gives the armchair a comfortable resilience, making it perfect to relax in.
      
      10-year guarantee. Read about the terms in the guarantee brochure.`,
      images: [
        'product-1-img-1.webp',
        'product-1-img-2.webp',
        'product-1-img-3.webp',
        'product-1-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Poang Rocking Chair',
      price: 269,
      oldPrice: 399,
      image: 'product-1-img-cover.webp',
      description: `10 year Limited warranty. Read about the terms in the warranty brochure.

      A variety of seat cushion designs makes it easy to change the look of your POÄNG chair and your living room.
      
      Soft, durable and easy care leather which is practical for families with children.
      
      The high back provides good support for your neck.
      
      The layer-glued bent wood frame gives the armchair a comfortable resilience, making it perfect to relax in.
      
      10-year guarantee. Read about the terms in the guarantee brochure.`,
      images: [
        'product-1-img-1.webp',
        'product-1-img-2.webp',
        'product-1-img-3.webp',
        'product-1-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Poang Rocking Chair',
      price: 269,
      oldPrice: 399,
      image: 'product-1-img-cover.webp',
      description: `10 year Limited warranty. Read about the terms in the warranty brochure.

      A variety of seat cushion designs makes it easy to change the look of your POÄNG chair and your living room.
      
      Soft, durable and easy care leather which is practical for families with children.
      
      The high back provides good support for your neck.
      
      The layer-glued bent wood frame gives the armchair a comfortable resilience, making it perfect to relax in.
      
      10-year guarantee. Read about the terms in the guarantee brochure.`,
      images: [
        'product-1-img-1.webp',
        'product-1-img-2.webp',
        'product-1-img-3.webp',
        'product-1-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Poang Rocking Chair',
      price: 269,
      oldPrice: 399,
      image: 'product-1-img-cover.webp',
      description: `10 year Limited warranty. Read about the terms in the warranty brochure.

      A variety of seat cushion designs makes it easy to change the look of your POÄNG chair and your living room.
      
      Soft, durable and easy care leather which is practical for families with children.
      
      The high back provides good support for your neck.
      
      The layer-glued bent wood frame gives the armchair a comfortable resilience, making it perfect to relax in.
      
      10-year guarantee. Read about the terms in the guarantee brochure.`,
      images: [
        'product-1-img-1.webp',
        'product-1-img-2.webp',
        'product-1-img-3.webp',
        'product-1-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Poang Rocking Chair',
      price: 269,
      oldPrice: 399,
      image: 'product-1-img-cover.webp',
      description: `10 year Limited warranty. Read about the terms in the warranty brochure.

      A variety of seat cushion designs makes it easy to change the look of your POÄNG chair and your living room.
      
      Soft, durable and easy care leather which is practical for families with children.
      
      The high back provides good support for your neck.
      
      The layer-glued bent wood frame gives the armchair a comfortable resilience, making it perfect to relax in.
      
      10-year guarantee. Read about the terms in the guarantee brochure.`,
      images: [
        'product-1-img-1.webp',
        'product-1-img-2.webp',
        'product-1-img-3.webp',
        'product-1-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Poang Rocking Chair',
      price: 269,
      oldPrice: 399,
      image: 'product-1-img-cover.webp',
      description: `10 year Limited warranty. Read about the terms in the warranty brochure.

      A variety of seat cushion designs makes it easy to change the look of your POÄNG chair and your living room.
      
      Soft, durable and easy care leather which is practical for families with children.
      
      The high back provides good support for your neck.
      
      The layer-glued bent wood frame gives the armchair a comfortable resilience, making it perfect to relax in.
      
      10-year guarantee. Read about the terms in the guarantee brochure.`,
      images: [
        'product-1-img-1.webp',
        'product-1-img-2.webp',
        'product-1-img-3.webp',
        'product-1-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Poang Rocking Chair',
      price: 269,
      oldPrice: 399,
      image: 'product-1-img-cover.webp',
      description: `10 year Limited warranty. Read about the terms in the warranty brochure.

      A variety of seat cushion designs makes it easy to change the look of your POÄNG chair and your living room.
      
      Soft, durable and easy care leather which is practical for families with children.
      
      The high back provides good support for your neck.
      
      The layer-glued bent wood frame gives the armchair a comfortable resilience, making it perfect to relax in.
      
      10-year guarantee. Read about the terms in the guarantee brochure.`,
      images: [
        'product-1-img-1.webp',
        'product-1-img-2.webp',
        'product-1-img-3.webp',
        'product-1-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Poang Rocking Chair',
      price: 269,
      oldPrice: 399,
      image: 'product-1-img-cover.webp',
      description: `10 year Limited warranty. Read about the terms in the warranty brochure.

      A variety of seat cushion designs makes it easy to change the look of your POÄNG chair and your living room.
      
      Soft, durable and easy care leather which is practical for families with children.
      
      The high back provides good support for your neck.
      
      The layer-glued bent wood frame gives the armchair a comfortable resilience, making it perfect to relax in.
      
      10-year guarantee. Read about the terms in the guarantee brochure.`,
      images: [
        'product-1-img-1.webp',
        'product-1-img-2.webp',
        'product-1-img-3.webp',
        'product-1-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Poang Rocking Chair',
      price: 269,
      oldPrice: 399,
      image: 'product-1-img-cover.webp',
      description: `10 year Limited warranty. Read about the terms in the warranty brochure.

      A variety of seat cushion designs makes it easy to change the look of your POÄNG chair and your living room.
      
      Soft, durable and easy care leather which is practical for families with children.
      
      The high back provides good support for your neck.
      
      The layer-glued bent wood frame gives the armchair a comfortable resilience, making it perfect to relax in.
      
      10-year guarantee. Read about the terms in the guarantee brochure.`,
      images: [
        'product-1-img-1.webp',
        'product-1-img-2.webp',
        'product-1-img-3.webp',
        'product-1-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Poang Rocking Chair',
      price: 269,
      oldPrice: 399,
      image: 'product-1-img-cover.webp',
      description: `10 year Limited warranty. Read about the terms in the warranty brochure.

      A variety of seat cushion designs makes it easy to change the look of your POÄNG chair and your living room.
      
      Soft, durable and easy care leather which is practical for families with children.
      
      The high back provides good support for your neck.
      
      The layer-glued bent wood frame gives the armchair a comfortable resilience, making it perfect to relax in.
      
      10-year guarantee. Read about the terms in the guarantee brochure.`,
      images: [
        'product-1-img-1.webp',
        'product-1-img-2.webp',
        'product-1-img-3.webp',
        'product-1-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Poang Rocking Chair',
      price: 269,
      oldPrice: 399,
      image: 'product-1-img-cover.webp',
      description: `10 year Limited warranty. Read about the terms in the warranty brochure.

      A variety of seat cushion designs makes it easy to change the look of your POÄNG chair and your living room.
      
      Soft, durable and easy care leather which is practical for families with children.
      
      The high back provides good support for your neck.
      
      The layer-glued bent wood frame gives the armchair a comfortable resilience, making it perfect to relax in.
      
      10-year guarantee. Read about the terms in the guarantee brochure.`,
      images: [
        'product-1-img-1.webp',
        'product-1-img-2.webp',
        'product-1-img-3.webp',
        'product-1-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Poang Rocking Chair',
      price: 269,
      oldPrice: 399,
      image: 'product-1-img-cover.webp',
      description: `10 year Limited warranty. Read about the terms in the warranty brochure.

      A variety of seat cushion designs makes it easy to change the look of your POÄNG chair and your living room.
      
      Soft, durable and easy care leather which is practical for families with children.
      
      The high back provides good support for your neck.
      
      The layer-glued bent wood frame gives the armchair a comfortable resilience, making it perfect to relax in.
      
      10-year guarantee. Read about the terms in the guarantee brochure.`,
      images: [
        'product-1-img-1.webp',
        'product-1-img-2.webp',
        'product-1-img-3.webp',
        'product-1-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Poang Rocking Chair',
      price: 269,
      oldPrice: 399,
      image: 'product-1-img-cover.webp',
      description: `10 year Limited warranty. Read about the terms in the warranty brochure.

      A variety of seat cushion designs makes it easy to change the look of your POÄNG chair and your living room.
      
      Soft, durable and easy care leather which is practical for families with children.
      
      The high back provides good support for your neck.
      
      The layer-glued bent wood frame gives the armchair a comfortable resilience, making it perfect to relax in.
      
      10-year guarantee. Read about the terms in the guarantee brochure.`,
      images: [
        'product-1-img-1.webp',
        'product-1-img-2.webp',
        'product-1-img-3.webp',
        'product-1-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Poang Rocking Chair',
      price: 269,
      oldPrice: 399,
      image: 'product-1-img-cover.webp',
      description: `10 year Limited warranty. Read about the terms in the warranty brochure.

      A variety of seat cushion designs makes it easy to change the look of your POÄNG chair and your living room.
      
      Soft, durable and easy care leather which is practical for families with children.
      
      The high back provides good support for your neck.
      
      The layer-glued bent wood frame gives the armchair a comfortable resilience, making it perfect to relax in.
      
      10-year guarantee. Read about the terms in the guarantee brochure.`,
      images: [
        'product-1-img-1.webp',
        'product-1-img-2.webp',
        'product-1-img-3.webp',
        'product-1-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Poang Rocking Chair',
      price: 269,
      oldPrice: 399,
      image: 'product-1-img-cover.webp',
      description: `10 year Limited warranty. Read about the terms in the warranty brochure.

      A variety of seat cushion designs makes it easy to change the look of your POÄNG chair and your living room.
      
      Soft, durable and easy care leather which is practical for families with children.
      
      The high back provides good support for your neck.
      
      The layer-glued bent wood frame gives the armchair a comfortable resilience, making it perfect to relax in.
      
      10-year guarantee. Read about the terms in the guarantee brochure.`,
      images: [
        'product-1-img-1.webp',
        'product-1-img-2.webp',
        'product-1-img-3.webp',
        'product-1-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Poang Rocking Chair',
      price: 269,
      oldPrice: 399,
      image: 'product-1-img-cover.webp',
      description: `10 year Limited warranty. Read about the terms in the warranty brochure.

      A variety of seat cushion designs makes it easy to change the look of your POÄNG chair and your living room.
      
      Soft, durable and easy care leather which is practical for families with children.
      
      The high back provides good support for your neck.
      
      The layer-glued bent wood frame gives the armchair a comfortable resilience, making it perfect to relax in.
      
      10-year guarantee. Read about the terms in the guarantee brochure.`,
      images: [
        'product-1-img-1.webp',
        'product-1-img-2.webp',
        'product-1-img-3.webp',
        'product-1-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Poang Rocking Chair',
      price: 269,
      oldPrice: 399,
      image: 'product-1-img-cover.webp',
      description: `10 year Limited warranty. Read about the terms in the warranty brochure.

      A variety of seat cushion designs makes it easy to change the look of your POÄNG chair and your living room.
      
      Soft, durable and easy care leather which is practical for families with children.
      
      The high back provides good support for your neck.
      
      The layer-glued bent wood frame gives the armchair a comfortable resilience, making it perfect to relax in.
      
      10-year guarantee. Read about the terms in the guarantee brochure.`,
      images: [
        'product-1-img-1.webp',
        'product-1-img-2.webp',
        'product-1-img-3.webp',
        'product-1-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Poang Rocking Chair',
      price: 269,
      oldPrice: 399,
      image: 'product-1-img-cover.webp',
      description: `10 year Limited warranty. Read about the terms in the warranty brochure.

      A variety of seat cushion designs makes it easy to change the look of your POÄNG chair and your living room.
      
      Soft, durable and easy care leather which is practical for families with children.
      
      The high back provides good support for your neck.
      
      The layer-glued bent wood frame gives the armchair a comfortable resilience, making it perfect to relax in.
      
      10-year guarantee. Read about the terms in the guarantee brochure.`,
      images: [
        'product-1-img-1.webp',
        'product-1-img-2.webp',
        'product-1-img-3.webp',
        'product-1-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Poang Rocking Chair',
      price: 269,
      oldPrice: 399,
      image: 'product-1-img-cover.webp',
      description: `10 year Limited warranty. Read about the terms in the warranty brochure.

      A variety of seat cushion designs makes it easy to change the look of your POÄNG chair and your living room.
      
      Soft, durable and easy care leather which is practical for families with children.
      
      The high back provides good support for your neck.
      
      The layer-glued bent wood frame gives the armchair a comfortable resilience, making it perfect to relax in.
      
      10-year guarantee. Read about the terms in the guarantee brochure.`,
      images: [
        'product-1-img-1.webp',
        'product-1-img-2.webp',
        'product-1-img-3.webp',
        'product-1-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
    {
      name: 'Poang Rocking Chair',
      price: 269,
      oldPrice: 399,
      image: 'product-1-img-cover.webp',
      description: `10 year Limited warranty. Read about the terms in the warranty brochure.

      A variety of seat cushion designs makes it easy to change the look of your POÄNG chair and your living room.
      
      Soft, durable and easy care leather which is practical for families with children.
      
      The high back provides good support for your neck.
      
      The layer-glued bent wood frame gives the armchair a comfortable resilience, making it perfect to relax in.
      
      10-year guarantee. Read about the terms in the guarantee brochure.`,
      images: [
        'product-1-img-1.webp',
        'product-1-img-2.webp',
        'product-1-img-3.webp',
        'product-1-img-4.webp',
      ],
      createdAt: serverTimestamp(),
    },
  ],
};

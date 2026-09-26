import type { Amenity, AmenityCategory } from "@/types/amenity";
import { Refrigerator, Dumbbell, DoorOpen } from "lucide-react";
import {
    KitchenIcon,
    WifiIcon,
    WorkspaceIcon,
    FreeParkingIcon,
    PoolIcon,
    HotTubIcon,
    PetsAllowedIcon,
    SmokeAlarmIcon,
    HairDryerIcon,
    CleaningProductsIcon,
    ShampooIcon,
    HotWaterIcon,
    ShowerGelIcon,
    WashingMachineIcon,
    HangerIcon,
    BedLinenIcon,
    RoomDarkeningBlindsIcon,
    IronIcon,
    ClothStorageIcon,
    CotIcon,
    TvIcon,
    AirConditioningIcon,
    CeilingFanIcon,
    ExteriorSecurityCameraIcon,
    CarbonMonoxideIcon,
    FreezerIcon,
    MicrowaveIcon,
    CookingBasicsIcon,
    CrockeryCutleryIcon,
    KettleIcon,
    CoffeeIcon,
    WineGlassesIcon,
    ToasterIcon,
    BlenderIcon,
    CookerIcon,
    PatioBalconyIcon,
    OutdoorIcon,
    CleaningIcon,
    LongTermStayIcon,
    SelfCheckInIcon,
} from "@/components/icons/Amineties";

export const AMENITY_CATEGORIES: AmenityCategory[] = [
    {
        title: "Bathroom",
        items: [
            { id: "hairdryer", label: "Hairdryer", icon: HairDryerIcon, available: true },
            { id: "cleaning-products", label: "Cleaning products", icon: CleaningProductsIcon, available: true },
            { id: "shampoo", label: "Shampoo", icon: ShampooIcon, available: true },
            { id: "hot-water", label: "Hot water", icon: HotWaterIcon, available: true },
            { id: "shower-gel", label: "Shower gel", icon: ShowerGelIcon, available: true },
        ],
    },
    {
        title: "Bedroom and laundry",
        items: [
            { id: "washing-machine", label: "Washing machine", icon: WashingMachineIcon, available: true },
            { id: "hangers", label: "Hangers", icon: HangerIcon, available: true },
            { id: "bed-linen", label: "Bed linen", icon: BedLinenIcon, available: true },
            { id: "room-darkening-blinds", label: "Room-darkening blinds", icon: RoomDarkeningBlindsIcon, available: true },
            { id: "iron", label: "Iron", icon: IronIcon, available: true },
            { id: "clothes-storage", label: "Clothes storage", icon: ClothStorageIcon, available: true },
            { id: "cot-laundry", label: "Cot", icon: CotIcon, available: true },
        ],
    },
    {
        title: "Entertainment",
        items: [{ id: "tv", label: "TV", icon: TvIcon, available: true }],
    },
    {
        title: "Family",
        items: [{ id: "cot-family", label: "Cot", icon: CotIcon, available: true }],
    },
    {
        title: "Heating and cooling",
        items: [
            { id: "air-conditioning", label: "Air conditioning", icon: AirConditioningIcon, available: true },
            { id: "ceiling-fan", label: "Ceiling fan", icon: CeilingFanIcon, available: true },
        ],
    },
    {
        title: "Home safety",
        items: [
            { id: "security-cameras", label: "Exterior security cameras on property", icon: ExteriorSecurityCameraIcon, available: true },
            { id: "carbon-monoxide-alarm", label: "Carbon monoxide alarm", icon: CarbonMonoxideIcon, available: false },
            { id: "smoke-alarm", label: "Smoke alarm", icon: SmokeAlarmIcon, available: false },
        ],
    },
    {
        title: "Internet and office",
        items: [
            { id: "wifi", label: "Wifi", icon: WifiIcon, available: true },
            { id: "workspace", label: "Dedicated workspace", icon: WorkspaceIcon, available: true },
        ],
    },
    {
        title: "Kitchen and dining",
        items: [
            { id: "kitchen", label: "Kitchen", icon: KitchenIcon, available: true },
            { id: "fridge", label: "Fridge", icon: Refrigerator, available: true },
            { id: "freezer", label: "Freezer", icon: FreezerIcon, available: true },
            { id: "microwave", label: "Microwave", icon: MicrowaveIcon, available: true },
            { id: "cooking-basics", label: "Cooking basics", icon: CookingBasicsIcon, available: true },
            { id: "crockery-cutlery", label: "Crockery and cutlery", icon: CrockeryCutleryIcon, available: true },
            { id: "kettle", label: "Kettle", icon: KettleIcon, available: true },
            { id: "coffee", label: "Coffee", icon: CoffeeIcon, available: true },
            { id: "wine-glasses", label: "Wine glasses", icon: WineGlassesIcon, available: true },
            { id: "toaster", label: "Toaster", icon: ToasterIcon, available: true },
            { id: "blender", label: "Blender", icon: BlenderIcon, available: true },
            { id: "cooker", label: "Cooker", icon: CookerIcon, available: true },
        ],
    },
    {
        title: "Location features",
        items: [{ id: "private-entrance", label: "Private entrance", icon: DoorOpen, available: true }],
    },
    {
        title: "Outdoor",
        items: [
            { id: "patio-balcony", label: "Patio or balcony", icon: PatioBalconyIcon, available: true },
            { id: "outdoor-dining", label: "Outdoor dining area", icon: OutdoorIcon, available: true },
        ],
    },
    {
        title: "Parking and facilities",
        items: [
            { id: "free-parking", label: "Free parking on premises", icon: FreeParkingIcon, available: true },
            { id: "pool", label: "Pool", icon: PoolIcon, available: true },
            { id: "hot-tub", label: "Hot tub", icon: HotTubIcon, available: true },
            { id: "gym", label: "Gym", icon: Dumbbell, available: true },
        ],
    },
    {
        title: "Services",
        items: [
            { id: "pets-allowed", label: "Pets allowed", icon: PetsAllowedIcon, available: true },
            { id: "cleaning-during-stay", label: "Cleaning available during stay", icon: CleaningIcon, available: true },
            { id: "long-term-stays", label: "Long-term stays allowed", icon: LongTermStayIcon, available: true },
            { id: "self-check-in", label: "Self check-in", icon: SelfCheckInIcon, available: true },
        ],
    },
];

function findAmenity(id: string): Amenity {
    for (const category of AMENITY_CATEGORIES) {
        const item = category.items.find((a) => a.id === id);
        if (item) return item;
    }
    throw new Error(`Amenity "${id}" not found in AMENITY_CATEGORIES`);
}

// Matches the reference's preview-grid order exactly (2-col, row-major).
export const PREVIEW_AMENITIES: Amenity[] = [
    findAmenity("kitchen"),
    findAmenity("wifi"),
    findAmenity("workspace"),
    findAmenity("free-parking"),
    findAmenity("pool"),
    findAmenity("hot-tub"),
    findAmenity("pets-allowed"),
    findAmenity("security-cameras"),
    findAmenity("carbon-monoxide-alarm"),
    findAmenity("smoke-alarm"),
];
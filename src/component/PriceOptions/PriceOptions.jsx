import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [

        {
            "id": 1,
            "membershipType": "Standard Membership",
            "pricePerMonth": 39.99,
            "features": [
                "Access to cardio and weight training equipment",
                "Locker room access",
                "Shower facilities"
            ]
        },
        {
            "id": 2,
            "membershipType": "Premium Membership",
            "pricePerMonth": 59.99,
            "features": [
                "Access to cardio and weight training equipment",
                "Sauna access",
                "Swimming pool access",
                "Group fitness classes",
                "Locker room access",
                "Shower facilities",
                "Free fitness assessments"
            ]
        },
        {
            "id": 3,
            "membershipType": "VIP Membership",
            "pricePerMonth": 99.99,
            "features": [
                "Access to cardio and weight training equipment",
                "Sauna access",
                "Swimming pool access",
                "Group fitness classes",
                "Locker room access",
                "Shower facilities",
                "Free fitness assessments",
                "Personal trainer sessions",
                "Priority class scheduling",
                "Access to exclusive VIP events and workshops",
                "Complimentary towel service",
                "15% discount on fitness apparel",
                "Access to private VIP lounge"
            ]
        }
    ];

    return (
        <div>
            <h2 className='text-5xl'>Best Price on the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    priceOptions.map(
                        option => <PriceOption key={option.id} option={option}></PriceOption>
                    )
                }
            </div>
        </div>
    );
};

export default PriceOptions;
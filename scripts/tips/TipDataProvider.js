const tipCollection = [
    {
        tipTitle: "Tank Maintinence",
        tips: ["Make sure tank has water with the proper PH levels for your fish.", "Clean the tank out on a regular basis.", "Plan to replace 25 percent of the water in your aquarium once a month.", "pH is an indicator of the acidity or alkalinity of your tank water. Buy a pH test kit to check the pH level."]
    },
    {
        tipTitle: "Fish Diet",
        tips: ["Make sure to feed them daily, taking into account their diet standards.", "A good rule of thumb is to feed no more than what your fish can eat in five minutes, and remove uneaten food immediately."]
    },
    {
        tipTitle: "Fish Health",
        tips: ["Watch for changes in appearance, behavior or appetite so that you’ll immediately notice if something is wrong.", "Avoid keeping fish that are aggressive towards each other in the same tank."]
    }
]

export const useTips = () => {
    return tipCollection.slice()
}
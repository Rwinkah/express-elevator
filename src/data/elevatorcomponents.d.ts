// elevatorcomponents.d.ts

interface ElevatorCardProps {
    name: string;
    moreImg: any[]; // Adjust this line
}

declare module 'src/data/elevatorcomponents' {
    const elevData: ElevatorCardProps; // replace 'any' with the actual type of the data
    export default elevData;
}

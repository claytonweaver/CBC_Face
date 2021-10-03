export class utils{
    public static removeElementFromArray(objectToBeRemoved: any, objectArray: any[]){
        const objectIndex = objectArray.indexOf(objectToBeRemoved);
        objectArray.slice(objectIndex, objectIndex + 1);
        return objectArray;
    }
}
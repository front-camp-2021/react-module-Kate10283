export default function toCorrectString(str) {
    if (str === "A4Tech") {
        return "a4-tech";
    }
    str = str.toLowerCase().replace(" ", "_");
    return str;
}
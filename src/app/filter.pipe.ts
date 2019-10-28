import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "filter"
})
export class FilterPipe implements PipeTransform {

    transform(items: {text: string, id: number}[], searchedValue: string): {text: string, id: number}[] {
        if (!items || !searchedValue) {
            return items;
        }

        return items.filter((item) => item.text.includes(searchedValue));
    }

}

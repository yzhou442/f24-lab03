/**
 * DelegationSortedIntList -- a variant of a SortedIntList that keeps
 * count of the number of attempted element insertions (not to be confused
 * with the current size, which goes down when an element is removed)
 * and exports an accessor (totalAdded) for this count.
 *
 * @author Nora Shoemaker
 *
 */
import { SortedIntList } from "./hidden/SortedIntListLibrary";
class DelegationSortedIntList extends SortedIntList {
  // Write your implementation below with API documentatioin
  private totalAdded: number = 0;
  private list: SortedIntList;

  constructor();
  constructor(_list: SortedIntList);

  constructor(_list?: SortedIntList) {
    super();
    this.list = _list || new SortedIntList();
    this.totalAdded = 0;
  }

  add(num: number): boolean {
    this.totalAdded++;
    return this.list.add(num);
  }

  getTotalAdded(): number {
    return this.totalAdded;
  }

  addAll(list: SortedIntList): boolean {
    this.totalAdded += list.size();
    return this.list.addAll(list);
  }

  get(index: number): number {
    return this.list.get(index);
  }

  size(): number {
    return this.list.size();
  }

  // remove(num: number): boolean {
  //   return this.list.remove(num);
  // }

  // removeAll(list: SortedIntList): boolean {
  //   return this.list.removeAll(list);
  // }



}

export { DelegationSortedIntList }

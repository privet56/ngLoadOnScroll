import { Injectable } from '@angular/core';

export class EleData
{
  buns: Array<number> = [];
  constructor(public index:number, public name: string, public departement: string)
  {
    const ix:number = Math.floor(Math.random() * 5);
    this.buns = new Array<number>();
    for(let i:number = 0; i < ix;i++)
      this.buns.push(i);
  }
}

@Injectable({
  providedIn: 'root'
})
export class LotOfDataService
{
  public static readonly ELEDATA_SIZE = 9999 * 2;
  static readonly NAMES: Array<string> = ["Angela Merkel", "Olaf Scholz", "Horst Seehofer", "Heiko Maas", "Peter Altmaier", "Christine Lambrecht", "Hubertus Heil", "Annegret Kramp-Karrenbauer", "Julia Klöckner", "Franziska Giffey", "Jens Spahn", "Andreas Scheuer", "Svenja Schulze", "Anja Karliczek", "Gerd Müller", "Helge Braun"];
  static readonly DEPARTMENT: Array<string> = ["Bundesministerium für Arbeit und Soziales", "Bundesministerium für Wirtschaft und Energie", "Bundesministerium des Auswärtigen", "Bundesministerium des Innern, für Bau und Heimat", "Bundesministerium für Ernährung und Landwirtschaft"];

  data: EleData[] = new Array<EleData>();

  constructor()
  {
    for(let i=0; i < LotOfDataService.ELEDATA_SIZE; i++)
    {
      this.data.push(new EleData(i, this.rand(LotOfDataService.NAMES), this.rand(LotOfDataService.DEPARTMENT)));
    }
  }

  public fetchAll(): Promise<EleData[]>
  {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data);
      }, 999);
    });
  }
  public fetchAllImmediately(): EleData[]
  {
        return this.data;
  }

  public fetchNextChunk(skip: number, limit: number): Promise<EleData[]>
  {
    return new Promise((resolve, reject) => {
      setTimeout(() => {

        if(skip >= this.data.length) {
          reject(null);
          return;
        }
        const chunk: EleData[] = this.data.slice(0, skip + limit);
        resolve(chunk);
      }, 999);
    });
  }
  protected rand(a: Array<string>) : string {
    return a[Math.floor(Math.random()*a.length)];
  }
}

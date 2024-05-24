import {Issn} from './issn';

export interface Title {
  id: number;
  revueid: number;
  obsoletepar: number;
  titre: string;
  prefixe: string;
  sigle: any;
  datedebut: string;
  datefin: string;
  url: any;
  periodicite: string;
  identifiantpartenaire: any;
  bouquetpartenaire: any;
  editeurs: string[];
  langues: string[];
  liens: any[];
  url_revue_mirabel: string;
  issns: Issn[];
}

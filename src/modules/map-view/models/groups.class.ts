export class Group {
  id: string;
  name: string;
  description: string;
  photoUrl: string;
}

export class GroupResponse {
  groups: Group[];
}
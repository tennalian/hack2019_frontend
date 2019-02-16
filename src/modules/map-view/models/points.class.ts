export class PointModel {
	id: string;
	latitude: number;
	longitude: number;
	group: string;
	category: string;
	description: string;
	photoUrl: string;
}

export class PointsResponse {
  points: PointModel[];
}

export class IdResponse {
    public constructor(
        public id: number
    ) {}

    public static fromJson(json: any): IdResponse {
        return new IdResponse(json.id);
    }

    public toJson(): any {
        return {
            id: this.id
        };
    }

    public static fromJsonArray(jsonArray: any[]): IdResponse[] {
        return jsonArray.map(json => IdResponse.fromJson(json));
    }

    public static toJsonArray(idResponses: IdResponse[]): any[] {
        return idResponses.map(idResponse => idResponse.toJson());
    }

}
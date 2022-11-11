import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class ProjectSchema {
    @Prop()
    projectTitle: string;

    @Prop()
    projectDesc: string;

    @Prop()
    projectImage: string;

    @Prop()
    projectPlotNumber: number;

    @Prop()
    projectZone1: string;

    @Prop()
    projectZone2: string;
}

export const Projects = SchemaFactory.createForClass(ProjectSchema)
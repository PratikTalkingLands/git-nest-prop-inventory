import { Injectable, NotFoundException  } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project } from './project.model';  

@Injectable()
export class ProjectService {
    constructor(@InjectModel('projects') private projectModel: Model<Project>) {}
    async insertProject(
        projectTitle: string,
        projectDesc: string,
        projectImage: string,
        projectPlotNumber: number,
        projectZone1: string,
        projectZone2: string
    ) {
        const newProject = new this.projectModel({
            projectTitle,
            projectDesc, 
            projectImage, 
            projectPlotNumber,
            projectZone1,
            projectZone2
        });
        await newProject.save()
    }

    getProjects() {
        return this.projectModel.find()
    }
}


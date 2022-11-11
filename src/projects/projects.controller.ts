
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProjectService } from './projects.service';

@Controller('projects')
export class ProjectsController {
    constructor(private readonly projectService: ProjectService) {}

    @Post()
    addProject(
        @Body('projectTitle') projTitle: string,
        @Body('projectDesc') projDesc: string,
        @Body('projectImage') projImage: string,
        @Body('projectPlotNumber') projNumber: number,
        @Body('projectZone1') projZone1: string,
        @Body('projectZone2') projZone2: string, 
    ) {
        const generatedId = this.projectService.insertProject(
            projTitle,
            projDesc,
            projImage,
            projNumber,
            projZone1,
            projZone2
        );
        return 'Successfully added'
    }

    @Get()
    getAllProjects() {
        return this.projectService.getProjects()
    }
}

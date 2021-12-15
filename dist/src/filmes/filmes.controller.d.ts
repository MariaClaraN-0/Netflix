import { FilmesService } from './filmes.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
export declare class FilmesController {
    private readonly filmesService;
    constructor(filmesService: FilmesService);
    create(createFilmeDto: CreateFilmeDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateFilmeDto: UpdateFilmeDto): string;
    remove(id: string): string;
}

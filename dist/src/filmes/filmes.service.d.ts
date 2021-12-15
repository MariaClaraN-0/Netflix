import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
export declare class FilmesService {
    create(createFilmeDto: CreateFilmeDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateFilmeDto: UpdateFilmeDto): string;
    remove(id: number): string;
}

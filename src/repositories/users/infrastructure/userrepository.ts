import { PaginationData } from "@/modules/common";
import { User } from "@/entities";

export interface UserRepository {
    add(user: User): Promise<User>;
    all(options: PaginationData): Promise<User[]>;
    get(id: string): Promise<User | undefined>;
    update(id: string, user: Partial<User>): Promise<string | undefined>
    remove(id: string): Promise<string | undefined>
}
import Category from "../infra/typeorm/entities/Category";

export default interface IProductsByCategory {

    findById(id: number): Promise<Category | undefined>;

}
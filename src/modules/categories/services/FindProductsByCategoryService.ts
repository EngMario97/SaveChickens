import AppError from "../../../shared/errors/AppErrors";
import Category from "../infra/typeorm/entities/Category";
import ProductsByCategory from "../infra/typeorm/repositories/ProductsByCategory";

export default class FindProductsByCategoryService {
  public async execute(id: number): Promise<Category> {
    const categoryRepository = new ProductsByCategory();

    const category = await categoryRepository.findById(id);

    if (!category) {
      throw new AppError("Categoria não Existe");
    }

    return category;
  }
}

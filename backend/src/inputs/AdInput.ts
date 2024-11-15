import { Category } from "../entities/Category";
import { Ad } from "../entities/Ad";
import { Field, ID, InputType } from "type-graphql";
import { Tag } from "../entities/Tag";

@InputType()
class AdInput implements Partial<Ad> {
    @Field()
    title: string;

    @Field()
    description: string;

    @Field()
    owner: string;

    @Field()
    price: number;

    @Field()
    location: string;

    @Field()
    createdAt: Date;

    @Field(() => ID)
    category: Category;

    @Field(() => ID)
    tags: Tag[];

    @Field(() => [String], { nullable: true })
    picturesUrls?: string[];
}

export default AdInput;
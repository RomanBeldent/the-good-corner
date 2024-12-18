import { Category } from "../entities/Category";
import { Ad } from "../entities/Ad";
import { Field, ID, InputType } from "type-graphql";
import { Picture } from "../entities/Picture";
import { Tag } from "../entities/Tag";
import { PictureInput, TagInput } from "./AdInput";

@InputType()
class UpdateAdInput implements Partial<Ad> {
    @Field()
    id: number;

    @Field({ nullable: true })
    title: string;

    @Field({ nullable: true })
    description: string;

    @Field({ nullable: true })
    owner: string;

    @Field({ nullable: true })
    price: number;

    @Field({ nullable: true })
    location: string;

    @Field({ nullable: true })
    createdAt: Date;

    @Field(() => ID, { nullable: true })
    category: Category;

    @Field(() => [PictureInput], { nullable: true })
    pictures?: Picture[];
    @Field(() => [TagInput], { nullable: true })
    tags: Tag[];
}

export default UpdateAdInput;
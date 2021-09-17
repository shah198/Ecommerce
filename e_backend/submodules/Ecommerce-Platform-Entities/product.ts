import { Link } from './link';
import { EntityBase } from './EntityBase/entitybase';
import {Column, Entity, ManyToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity('products')
export class Product extends EntityBase{
   
  

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    image: string;

    @Column()
    price: number;

    // @ManyToMany((type) => Link, 
    // (link) => link.products)
    // links: Link[];
}
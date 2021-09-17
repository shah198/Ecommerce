import { EntityBase } from './EntityBase/entitybase';
import {Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Order } from "./order";
import { Product } from "./product";
import { User } from "./users";


@Entity('links')
export class Link extends EntityBase {
  // @PrimaryGeneratedColumn()
  //   id: number;
    
    @Column({unique: true})
    code: string;


       @Column({name: 'user_id'})
       user_id:number

    

     @ManyToOne(
        (type) => User,
        (Users) => Users.Id,
      )
      @JoinColumn({name: "user_id"})
      user: User;

      @Column("int",{name: 'product_id',array:true})
      product_id:number[]

      // @ManyToMany(() => Product, {cascade: true})
      // @JoinTable({
      //     name: 'link_product',
      //     joinColumn: {name: 'link_id', referencedColumnName: 'Id'},
      //     inverseJoinColumn: {name: 'product_id', referencedColumnName: 'Id'}
      // })
      // products: Product[];

    @ManyToMany(
    (type) => Product,
    (products)=>products.Id
    )
    @JoinTable({name:"product_id"})
    products: Product[];


    @OneToMany(() => Order, order => order.link, {
        createForeignKeyConstraints: false
    })

    @JoinColumn({
        referencedColumnName: 'code',
        name: 'code'
    })
    orders: Order[];
}

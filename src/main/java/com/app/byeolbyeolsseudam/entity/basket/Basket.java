package com.app.byeolbyeolsseudam.entity.basket;

import com.app.byeolbyeolsseudam.entity.member.Member;
import com.app.byeolbyeolsseudam.entity.Period;
import com.app.byeolbyeolsseudam.entity.product.Product;
import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "TBL_BASKET")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Basket extends Period {
    @Id @GeneratedValue @NotNull
    private Long basketId;
    @NotNull
    private int basketCount;
    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    private Member member;
    @ManyToOne(fetch = FetchType.LAZY)
    private Product product;

    public void changeMember(Member member){
        this.member = member;
    }

    public void changeProduct(Product product){
        this.product = product;
    }

    @Builder
    public Basket(int basketCount) {
        this.basketCount = basketCount;
    }
}
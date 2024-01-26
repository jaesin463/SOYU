package com.ssafy.soyu.item.repository;


import com.ssafy.soyu.item.domain.Item;
import com.ssafy.soyu.item.domain.ItemCategories;
import com.ssafy.soyu.item.domain.ItemStatus;
import java.util.List;
import com.ssafy.soyu.member.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ItemRepository extends JpaRepository<Item, Long> {

  @Query("select i from Item i where i.title like %:keyword%")
  List<Item> findItemByKeyWord(@Param("keyword") String keyword);

  List<Item> findItemByMember(Member member);

  List<Item> findItemByItemCategories(ItemCategories itemCategories);

  @Query("select i from Item i join fetch i.member m where i.member.id = :memberId")
  List<Item> findByMemberId(Long memberId);

  @Modifying
  @Query("UPDATE Item SET itemStatus= :status where id=:itemId")
  int updateStatus(Long itemId, ItemStatus status);
}
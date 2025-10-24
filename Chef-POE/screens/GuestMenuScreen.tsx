import React, { useMemo, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Dish, Course } from "../types/index";
import MenuItemCard from "../components/MenuItemCard";
import FilterBar from "../components/FilterBar";

export default function GuestMenuScreen({ items }: { items: Dish[] }) {
  const [filter, setFilter] = useState<Course | "All">("All");

  const filtered = useMemo(() => {
    if (filter === "All") return items;
    return items.filter((i) => i.course === filter);
  }, [items, filter]);

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ padding: 12 }}>
        <Text style={{ fontSize: 20, fontWeight: "700" }}>Kitchen Menu (Guest)</Text>
        <FilterBar selected={filter} onChange={setFilter} />
        {filtered.length === 0 ? <Text>No dishes match.</Text> : null}
        {filtered.map((d) => (
          <MenuItemCard key={d.id} dish={d} />
        ))}
      </View>
    </ScrollView>
  );
}


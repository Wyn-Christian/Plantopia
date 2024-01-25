"use client";
import { useState } from "react";

import { Collapse, Stack, Typography } from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const categories = [
  { name: "All Products", value: "All" },
  { name: "Plants", value: "Plant" },
  { name: "Pots", value: "Pot" },
  { name: "Soils", value: "Soil" },
  { name: "Tools", value: "Tool" },
];

const CategoryFilter = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const [category, setCategory] = useState("All");
  const handleCategoryClick = (cat) => {
    setCategory(cat);
  };

  return (
    <Stack
      sx={{
        gap: 3,
        alignItems: "flex-start",
        flexShrink: 0,
        width: 280,
        display: { xs: "none", md: "flex" },
      }}
    >
      <Stack sx={{ width: "100%" }}>
        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            cursor: "pointer",
          }}
          onClick={handleClick}
        >
          <Typography variant="h6" fontWeight={600}>
            Category
          </Typography>
          <ExpandMoreIcon
            sx={{
              transform: open ? "rotateX(0.5turn)" : "rotateX(1turn)",
              transition: "transform 300ms ease",
            }}
          />
        </Stack>
        <Collapse in={open} sx={{ pb: 0.5 }}>
          <Stack sx={{ gap: 1, alignItems: "flex-start", mt: 2 }}>
            {categories.map((cat) => (
              <Stack
                key={cat.value}
                direction="row"
                sx={{
                  alignItems: "center",
                  lineHeight: 1.57,
                  fontSize: "0.85rem",
                  fontWeight: cat.value == category ? 700 : 400,
                  cursor: "pointer",
                }}
                onClick={() => handleCategoryClick(cat.value)}
              >
                <ChevronRightIcon sx={{ mr: 1, fontSize: 12 }} />
                {cat.name}
              </Stack>
            ))}
          </Stack>
        </Collapse>
      </Stack>
    </Stack>
  );
};

export default CategoryFilter;

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { useEffect, useState } from "react";

const supabase = createClientComponentClient();

export const incrementView = async (slug:string) => {
    try {
      let { error } = await supabase.rpc("increment", {
        slug_text:slug ,
      });

      if (error){
          console.error("Error incrementing view count inside try block:", error)
      };
      
    } catch (error) {
      console.error(
        "An error occurred while incrementing the view count:",
        error
      );
    }
  };

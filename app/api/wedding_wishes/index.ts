import { TableNames } from "@/app/constants/table_name.constants"
import { supabase } from "@/app/libs/supabase"

export const createMessageWishes = async ({ author_name, message }: { author_name: string, message: string }) => {
  return await supabase.from(TableNames.MESSAGE_WISHES).insert({
    author_name,
    message
  }).select().single()
}

export const fetchWishMessages = async () => {
  return await supabase.from(TableNames.MESSAGE_WISHES).select().eq('show_accepted', '1')
}
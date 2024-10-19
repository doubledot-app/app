import { type FC, useEffect, useMemo } from "react"
import { List, Placeholder } from "@telegram-apps/telegram-ui"
import WebApp from "@twa-dev/sdk"

import {
  DisplayData,
  type DisplayDataRow
} from "@/components/DisplayData/DisplayData.tsx"
import { useAuthControllerTelegram } from "@/services/swagger/Core"
import { useGeolocated } from "react-geolocated"
import { useUser } from "@/hooks/useUser"

export const InitDataPage: FC = () => {
  const initDataRaw = WebApp.initData
  const initData = WebApp.initDataUnsafe

  const { coords } = useGeolocated()

  const { data, mutate: authenticate } = useAuthControllerTelegram()
  const { data: user } = useUser()

  const initDataRows = useMemo<DisplayDataRow[] | undefined>(() => {
    if (!initData || !initDataRaw) {
      return
    }
    const {
      hash,
      start_param,
      chat_instance,
      chat_type,
      auth_date,
      can_send_after,
      query_id
    } = initData
    return [
      { title: "raw", value: initDataRaw },
      {
        title: "auth_date",
        value: new Date(auth_date * 1000).toLocaleString()
      },
      { title: "auth_date (raw)", value: auth_date },
      { title: "hash", value: hash },
      { title: "can_send_after", value: can_send_after },
      { title: "query_id", value: query_id },
      { title: "start_param", value: start_param },
      { title: "chat_type", value: chat_type },
      { title: "chat_instance", value: chat_instance },
      { title: "authenticate", value: data ? JSON.stringify(data) : "" },
      ...(user
        ? [
            {
              title: "id",
              value: user.id
            },
            {
              title: "name",
              value: user.name
            }
          ]
        : []),
      ...(coords
        ? [
            {
              title: "latitude",
              value: coords.latitude
            },
            {
              title: "longitude",
              value: coords.longitude
            }
          ]
        : [])
    ]
  }, [coords, data, initData, initDataRaw, user])

  useEffect(() => {
    if (!initDataRaw) return
    authenticate({ data: { initDataRaw } })
  }, [authenticate, initDataRaw])

  if (!initDataRows) {
    return (
      <Placeholder
        header="Oops"
        description="Application was launched with missing init data"
      >
        <img
          alt="Telegram sticker"
          src="https://xelene.me/telegram.gif"
          style={{ display: "block", width: "144px", height: "144px" }}
        />
      </Placeholder>
    )
  }
  return (
    <List>
      <DisplayData header={"Init Data"} rows={initDataRows} />
    </List>
  )
}

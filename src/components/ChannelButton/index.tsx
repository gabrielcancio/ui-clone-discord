import React from 'react';

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles';

export interface IProps {
    channelName: string;
    selcted?: boolean;
}

const ChannelButton: React.FC<IProps> = ({ channelName }) => {
  return (
      <Container className={selected ? 'active' : ''}>
          <div>
            <HashtagIcon />
            <span>{channelName}</span>
          </div>

          <div>
            <InviteIcon />
            <SettingsIcon />
          </div>
      </Container>
  );
}

export default ChannelButton;